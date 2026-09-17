import { useEffect, useRef } from "react";

export function SiteBackground() {
  const spot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spot.current;
    if (!el) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--spot-x", `${e.clientX}px`);
        el.style.setProperty("--spot-y", `${e.clientY}px`);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <>
      <div className="site-grid" aria-hidden="true" />
      <div ref={spot} className="site-spot" aria-hidden="true" />
      <div className="site-noise" aria-hidden="true" />
    </>
  );
}
