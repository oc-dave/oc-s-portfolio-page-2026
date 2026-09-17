import { site } from "@/lib/site";

export function StackMarquee() {
  const items = [...site.stackMarquee, ...site.stackMarquee];
  return (
    <div className="relative z-10 max-w-full overflow-hidden border-y border-line bg-surface/60 py-4">
      <div className="overflow-hidden">
        <div className="marquee-track">
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-display text-sm font-semibold tracking-section text-faint uppercase"
            >
              {item}
              <span className="ml-10 text-primary">/</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
