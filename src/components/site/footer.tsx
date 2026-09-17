import { useEffect, useState } from "react";
import { site } from "@/lib/site";

function LagosClock() {
  const [time, setTime] = useState("—");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="tabular-nums text-muted">
      {time} WAT · {site.location}
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {site.name}. Built with intent.
        </p>
        <LagosClock />
        <a href="#home" className="text-sm text-muted transition-colors hover:text-primary">
          Back to top
        </a>
      </div>
    </footer>
  );
}
