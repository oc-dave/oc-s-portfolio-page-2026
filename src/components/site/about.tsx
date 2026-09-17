import { site } from "@/lib/site";
import { useReveal } from "@/hooks/use-reveal";

export function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className="reveal relative z-10 mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28"
    >
      <p className="text-xs font-medium tracking-section text-muted uppercase">01 / About</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
        Interfaces with a pulse.
      </h2>

      <div className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-2xl bg-surface shadow-border">
          <img
            src={site.aboutImage}
            alt="Night studio desk with a laptop and lime light"
            className="aspect-photo w-full object-cover"
            width={800}
            height={600}
            loading="lazy"
          />
        </div>

        <div>
          <p className="text-base leading-relaxed text-muted sm:text-lg">{site.about}</p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Based in {site.location}. Currently {site.availability.toLowerCase()}.
          </p>

          <h3 className="mt-10 font-display text-xl font-semibold">Skills</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {site.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-primary px-3.5 py-2 text-sm font-medium text-primary-fg transition-transform duration-150 hover:-translate-y-0.5"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
