import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site";

export const Route = createFileRoute("/resume")({ component: ResumePage });

function ResumePage() {
  return (
    <main className="min-h-dvh bg-fg px-4 py-12 text-primary-fg print:px-0 print:py-0">
      <article className="mx-auto max-w-3xl bg-fg print:max-w-none">
        <header className="border-b border-primary-fg/15 pb-6">
          <p className="text-xs tracking-section uppercase">{site.role}</p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight">{site.name}</h1>
          <p className="mt-3 text-sm text-primary-fg/70">
            {site.location} · {site.phone} · {site.email}
          </p>
          <p className="text-sm text-primary-fg/70">{site.emailAlt} · github.com/oc-dave</p>
        </header>

        <section className="mt-8">
          <h2 className="font-display text-lg font-semibold tracking-tight">Summary</h2>
          <p className="mt-2 text-sm leading-relaxed">{site.intro}</p>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-lg font-semibold tracking-tight">Skills</h2>
          <p className="mt-2 text-sm">{site.skills.join(" · ")}</p>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-lg font-semibold tracking-tight">Selected work</h2>
          <ul className="mt-3 space-y-4">
            {site.projects.map((p) => (
              <li key={p.id}>
                <p className="font-semibold">
                  {p.title}{" "}
                  <span className="font-normal text-primary-fg/60">— {p.stack.join(", ")}</span>
                </p>
                <p className="mt-1 text-sm leading-relaxed">{p.description}</p>
                <p className="mt-1 text-xs text-primary-fg/60">{p.href}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-lg font-semibold tracking-tight">Services</h2>
          <ul className="mt-3 space-y-2">
            {site.services.map((s) => (
              <li key={s.title} className="text-sm">
                <span className="font-semibold">{s.title}.</span> {s.body}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
