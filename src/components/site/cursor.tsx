import { useEffect, useRef } from "react";

export function SiteCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const hover = window.matchMedia("(hover: hover)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || !hover || reduce) return;

    const d = dot.current;
    const r = ring.current;
    if (!d || !r) return;

    document.documentElement.classList.add("has-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf = 0;

    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      d.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      r.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const hotSel = "a, button, [role='button'], input, textarea, label, summary";
    const onOver = (e: Event) => {
      const t = e.target;
      if (t instanceof Element && t.closest(hotSel)) r.classList.add("is-hot");
    };
    const onOut = (e: Event) => {
      const t = e.target;
      if (t instanceof Element && t.closest(hotSel)) r.classList.remove("is-hot");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);
    raf = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove("has-cursor");
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot hidden md:block" aria-hidden="true" />
      <div ref={ring} className="cursor-ring hidden md:block" aria-hidden="true" />
    </>
  );
}
