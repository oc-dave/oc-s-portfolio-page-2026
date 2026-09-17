import { createFileRoute } from "@tanstack/react-router";
import { SiteBackground } from "@/components/site/background";
import { SiteCursor } from "@/components/site/cursor";
import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { StackMarquee } from "@/components/site/marquee";
import { About } from "@/components/site/about";
import { Work } from "@/components/site/work";
import { Services } from "@/components/site/services";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/footer";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <a href="#home" className="skip-link">
        Skip to content
      </a>
      <SiteBackground />
      <SiteCursor />
      <SiteNav />
      <main className="relative z-10">
        <Hero />
        <StackMarquee />
        <About />
        <Work />
        <Services />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
