import { Code2, PenTool, Smartphone } from "lucide-react";
import { site } from "@/lib/site";
import { useReveal } from "@/hooks/use-reveal";

const icons = {
  code: Code2,
  pen: PenTool,
  device: Smartphone,
};

export function Services() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="services"
      ref={ref}
      className="reveal relative z-10 mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28"
    >
      <p className="text-xs font-medium tracking-section text-muted uppercase">03 / Services</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
        How I can help
      </h2>

      <ul className="mt-12 divide-y divide-line border-y border-line">
        {site.services.map((svc) => {
          const Icon = icons[svc.icon];
          return (
            <li
              key={svc.title}
              className="group grid gap-4 py-8 transition-colors duration-200 hover:bg-surface/60 sm:grid-cols-[5rem_3rem_1fr_1.2fr] sm:items-center sm:gap-6 sm:px-4"
            >
              <span className="font-display text-sm tracking-section text-faint">
                {svc.index}
              </span>
              <Icon className="size-8 text-primary transition-transform duration-200 group-hover:-translate-y-1" />
              <h3 className="font-display text-2xl font-semibold sm:text-3xl">{svc.title}</h3>
              <p className="text-muted">{svc.body}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
