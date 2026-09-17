import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { site, type Project } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useReveal } from "@/hooks/use-reveal";

function onTilt(e: React.MouseEvent<HTMLButtonElement>) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width;
  const py = (e.clientY - r.top) / r.height;
  el.style.setProperty("--tilt-y", `${(px - 0.5) * 8}deg`);
  el.style.setProperty("--tilt-x", `${(0.5 - py) * 8}deg`);
}

function resetTilt(e: React.MouseEvent<HTMLButtonElement>) {
  e.currentTarget.style.setProperty("--tilt-x", "0deg");
  e.currentTarget.style.setProperty("--tilt-y", "0deg");
}

function ProjectCard({
  project,
  featured,
  onOpen,
}: {
  project: Project;
  featured?: boolean;
  onOpen: (p: Project) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      onMouseMove={onTilt}
      onMouseLeave={resetTilt}
      className={cn(
        "work-card group relative block overflow-hidden rounded-2xl bg-surface text-left shadow-border transition-[box-shadow] duration-150 hover:shadow-border-hover",
        featured ? "md:col-span-2" : "",
      )}
    >
      <div className={featured ? "aspect-video sm:aspect-wide" : "aspect-video"}>
        <img
          src={project.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-void/50 to-transparent opacity-0 transition-opacity duration-200 sm:block sm:group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-3 p-4">
        <div>
          <p className="text-xs tracking-section text-primary uppercase">
            {project.tag} · {project.year}
          </p>
          <h3 className="mt-1 font-display text-lg font-semibold sm:text-xl">{project.title}</h3>
          <p className="text-sm text-muted">{project.summary}</p>
        </div>
        <ArrowUpRight className="mt-1 size-4 shrink-0 text-primary" />
      </div>
    </button>
  );
}

export function Work() {
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState<Project | null>(null);
  const [aho, etta, ...rest] = site.projects;

  return (
    <section
      id="work"
      ref={ref}
      className="reveal relative z-10 mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28"
    >
      <p className="text-xs font-medium tracking-section text-muted uppercase">02 / Work</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
        Selected work
      </h2>
      <p className="mt-4 max-w-2xl text-muted">
        Live products — tap a frame for the full case, stack, and the link out.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {aho ? <ProjectCard project={aho} featured onOpen={setActive} /> : null}
        {etta ? <ProjectCard project={etta} onOpen={setActive} /> : null}
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setActive} />
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent>
          {active ? (
            <>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={active.image}
                  alt=""
                  className="aspect-video w-full object-cover"
                />
              </div>
              <DialogHeader>
                <p className="text-xs tracking-section text-primary uppercase">
                  {active.tag} · {active.year}
                </p>
                <DialogTitle>{active.title}</DialogTitle>
                <DialogDescription>{active.description}</DialogDescription>
              </DialogHeader>
              <ul className="flex flex-wrap gap-2">
                {active.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <Button asChild>
                <a href={active.href} target="_blank" rel="noopener noreferrer">
                  View project
                  <ArrowUpRight />
                </a>
              </Button>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
