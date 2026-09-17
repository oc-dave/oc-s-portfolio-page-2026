import { useEffect, useState } from "react";

import { ArrowDownRight, Download } from "lucide-react";

import { site } from "@/lib/site";

import { Button } from "@/components/ui/button";

import { SocialGlyph } from "@/components/site/icons";

import { useReveal } from "@/hooks/use-reveal";


function RoleCycle() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState<string>(site.roles[0]);
  const [phase, setPhase] = useState<"type" | "hold" | "delete">("hold");
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    if (reduce) {
      setText(site.roles[0]);
      return;
    }

    const word = site.roles[index];
    let t: number;

    if (phase === "type") {
      if (text.length < word.length) {
        t = window.setTimeout(
          () => setText(word.slice(0, text.length + 1)),
          55
        );
      } else {
        t = window.setTimeout(() => setPhase("hold"), 80);
      }
    } else if (phase === "hold") {
      t = window.setTimeout(() => setPhase("delete"), 2000);
    } else if (text.length > 0) {
      t = window.setTimeout(
        () => setText(word.slice(0, text.length - 1)),
        28
      );
    } else {
      setIndex((i) => (i + 1) % site.roles.length);
      setPhase("type");
    }

    return () => window.clearTimeout(t);
  }, [text, phase, index, reduce]);

  return (
    <span className="text-primary">
      {text}
      <span className="role-caret" aria-hidden="true" />
    </span>
  );
}


export function Hero() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="home"
      ref={ref}
      className="
        reveal
        relative
        z-10
        mx-auto
        grid
        min-h-dvh
        w-full
        max-w-6xl
        grid-cols-1
        items-center
        gap-12
        overflow-x-clip
        px-4
        pt-24
        pb-16
        sm:px-6
        lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)]
        lg:gap-10
        lg:pt-28
      "
    >

      {/* =========================
          LEFT — TEXT CONTENT
      ========================== */}

      <div className="min-w-0 max-w-full">

        {/* Availability badge */}
        <p
          className="
            mb-6
            inline-flex
            max-w-full
            items-center
            gap-2
            rounded-full
            border
            border-line
            bg-surface/80
            px-3
            py-1.5
            text-xs
            font-medium
            tracking-section
            text-muted
            uppercase
          "
        >
          <span className="live-dot size-1.5 shrink-0 rounded-full bg-primary" />

          {site.availability}
        </p>


        {/* =========================
            NAME
        ========================== */}

        <h1
          className="
            max-w-dvw
            overflow-hidden
            font-display
            text-[clamp(3rem,11vw,5rem)]
            leading-[0.92]
            font-extrabold
            tracking-display
            text-fg
            sm:text-6xl
            md:text-7xl
            lg:text-7xl
            xl:text-8xl
          "
        >
          David
          <br />

          <span className="block max-w-full break-words">
            Okechukwu
          </span>
        </h1>


        {/* =========================
            ROLE
        ========================== */}

        <h2
          className="
            mt-5
            min-h-10
            text-xl
            font-medium
            text-fg
            sm:text-2xl
          "
          aria-live="polite"
        >
          I’m a <RoleCycle />
        </h2>


        {/* =========================
            INTRO
        ========================== */}

        <p
          className="
            mt-6
            max-w-xl
            text-base
            leading-relaxed
            text-muted
            sm:text-lg
          "
        >
          {site.intro}
        </p>


        {/* =========================
            BUTTONS
        ========================== */}

        <div
          className="
            mt-8
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
          "
        >
          <Button asChild>
            <a
              href={site.cv}
              download="David_Okechukwu_CV_updated.pdf"
            >
              <Download />
              Download CV
            </a>
          </Button>

          <Button asChild variant="outline">
            <a href="#work">
              View work
              <ArrowDownRight />
            </a>
          </Button>
        </div>


        {/* =========================
            SOCIAL ICONS
        ========================== */}

        <div
          className="
            mt-8
            flex
            flex-wrap
            items-center
            gap-3
          "
        >
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={
                s.href.startsWith("http")
                  ? "_blank"
                  : undefined
              }
              rel={
                s.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={s.label}
              className="
                inline-flex
                size-11
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-line
                text-primary
                transition-[background-color,color,box-shadow]
                duration-150
                hover:bg-primary
                hover:text-primary-fg
                hover:shadow-glow
              "
            >
              <SocialGlyph
                kind={s.kind}
                className="size-4"
              />
            </a>
          ))}
        </div>
      </div>


      {/* =========================
          RIGHT — IMAGE
      ========================== */}

      <div
        className="
          flex
          min-w-0
          w-full
          items-center
          justify-center
          lg:justify-end
        "
      >

        {/* ORBITAL CONTAINER */}
        <div
          className="orbital relative max-w-full"
          style={{
            width: "min(420px, 100%)",
            maxWidth: "100%",
          }}
        >

          {/* Existing orbital animations */}
          <div
            className="orbital-spin"
            aria-hidden="true"
          />

          <div
            className="orbital-spin-alt"
            aria-hidden="true"
          />


          {/* =========================
              IMAGE CORE
          ========================== */}

          <div
            className="
              orbital-core
              relative
              max-w-full
              overflow-hidden
            "
            style={{
              width: "100%",
              maxWidth: "420px",
              aspectRatio: "2 / 3",
              position: "relative",
              overflow: "hidden",
            }}
          >

            <img
              src={site.portrait}
              alt="Editorial portrait of a developer in a dark studio, backlit in lime"
              width={420}
              height={630}
              className="
                block
                h-full
                w-full
                object-cover
                brightness-[0.88]
                contrast-[1.05]
              "
            />


            {/* =========================
                SUBTLE NEON GREEN OVERLAY
            ========================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
              "
              style={{
                background: "rgba(124, 240, 61, 0.08)",
                mixBlendMode: "screen",
              }}
            />

          </div>
        </div>
      </div>

    </section>
  );
}