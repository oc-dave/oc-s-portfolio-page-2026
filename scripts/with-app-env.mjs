import { spawn } from "node:child_process";
import { readFileSync, realpathSync } from "node:fs";
import { constants as osConstants } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const APP_ENV_REL_PATH = ".grok/app-env.json";

const VITE_PREFIX = "VITE_";

export function parseAppEnv(text) {
  let parsed;

  try {
    parsed = JSON.parse(text);
  } catch {
    return {};
  }

  if (
    parsed === null ||
    typeof parsed !== "object" ||
    Array.isArray(parsed)
  ) {
    return {};
  }

  const env = {};

  for (const [key, value] of Object.entries(parsed)) {
    if (key.startsWith(VITE_PREFIX) && typeof value === "string") {
      env[key] = value;
    }
  }

  return env;
}

export function readAppEnv(root) {
  try {
    const filePath = join(root, APP_ENV_REL_PATH);
    const fileContents = readFileSync(filePath, "utf8");

    return parseAppEnv(fileContents);
  } catch {
    return {};
  }
}

export function mergeAppEnv(appEnv, processEnv) {
  return {
    ...appEnv,
    ...processEnv,
  };
}

export function exitStatusFromChild(code, signal) {
  if (signal) {
    const signalNumber = osConstants.signals[signal];

    return 128 + (
      typeof signalNumber === "number"
        ? signalNumber
        : 1
    );
  }

  return code ?? 1;
}

export function projectRoot() {
  return dirname(
    dirname(
      fileURLToPath(import.meta.url),
    ),
  );
}

export function isMainModule(moduleUrl) {
  const entry = process.argv[1];

  if (!entry) {
    return false;
  }

  try {
    return realpathSync(entry) === fileURLToPath(moduleUrl);
  } catch {
    return false;
  }
}

function main(argv) {
  const [command, ...args] = argv;

  if (!command) {
    console.error(
      "usage: node scripts/with-app-env.mjs <command> [args…]",
    );
    process.exit(2);
  }

  const env = mergeAppEnv(
    readAppEnv(projectRoot()),
    process.env,
  );

  // On Windows, use the command shell so npm-installed
  // .cmd executables such as vite.cmd can be resolved correctly.
  const isWindows = process.platform === "win32";

  const commandLine = [command, ...args]
    .map((arg) => {
      // Quote arguments containing spaces.
      if (/[\s"]/u.test(arg)) {
        return `"${arg.replaceAll('"', '\\"')}"`;
      }

      return arg;
    })
    .join(" ");

  const child = spawn(
    isWindows ? process.env.ComSpec || "cmd.exe" : command,
    isWindows ? ["/d", "/s", "/c", commandLine] : args,
    {
      stdio: "inherit",
      env,
      shell: false,
    },
  );

  for (const signal of ["SIGINT", "SIGTERM", "SIGHUP"]) {
    process.on(signal, () => {
      if (!child.killed) {
        child.kill(signal);
      }
    });
  }

  child.on("error", (error) => {
    console.error(
      `[with-app-env] failed to run ${command}:`,
      error?.message || error,
    );

    process.exit(127);
  });

  child.on("exit", (code, signal) => {
    process.exit(
      exitStatusFromChild(code, signal),
    );
  });
}

if (isMainModule(import.meta.url)) {
  main(process.argv.slice(2));
}
