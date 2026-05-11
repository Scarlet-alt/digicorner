import { Head } from "@inertiajs/react";
import { motion, useScroll, useSpring } from "framer-motion";
import { About } from "@/Components/About";
import { AboutRibbon } from "@/Components/AboutRibbon";
import { Finale } from "@/Components/Finale";
import { HeroScene } from "@/Components/HeroScene";
import { HorizontalReel } from "@/Components/HorizontalReel";
import { IntroVideoOverlay } from "@/Components/IntroVideoOverlay";
import { InterludeRibbon } from "@/Components/InterludeRibbon";
import { LogoMarquee } from "@/Components/LogoMarquee";
import { Manifesto } from "@/Components/Manifesto";
import { MarqueeRibbon } from "@/Components/MarqueeRibbon";
import { MenuOverlay } from "@/Components/MenuOverlay";
import { ProcessRibbon } from "@/Components/ProcessRibbon";
import { ScrollScrubTitle } from "@/Components/ScrollScrubTitle";
import { Works } from "@/Components/Works";

const NAV = [
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Book Now", href: "#book" },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <>
      <Head>
        <title>DigiCorner — Websites, AI assistants & automation</title>
        <meta name="description" content="DigiCorner — we build the systems your business runs on." />
      </Head>

      <main className="grain relative">
        <IntroVideoOverlay videoSource="/videos/digicorner-intro.mp4" buttonLabel="Enter DigiCorner" />

        <motion.div
          style={{ scaleX: progress }}
          className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-copper"
        />

        <nav className="fixed inset-x-0 top-0 z-[55] flex items-center justify-between bg-background/60 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/80 backdrop-blur-md md:px-12">
          <a href="#top" className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-copper" />
            DigiCorner
          </a>
          <div className="hidden items-center gap-7 lg:flex">
            {NAV.slice(0, -1).map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-copper">
                {n.label}
              </a>
            ))}
            <a
              href="#book"
              className="border border-copper bg-copper/10 px-4 py-2 text-cream transition-colors hover:bg-copper/20"
            >
              Book Now →
            </a>
          </div>
          <div className="lg:hidden">
            <MenuOverlay />
          </div>
        </nav>

        <div id="top">
          <HeroScene />
        </div>
        <MarqueeRibbon />
        <Manifesto />
        <LogoMarquee />
        <ScrollScrubTitle />
        <InterludeRibbon />
        <HorizontalReel />
        <div className="h-10 md:h-16" />
        <ProcessRibbon />
        <div className="h-10 md:h-16" />
        <Works />
        <About />
        <AboutRibbon />
        <Finale />
      </main>
    </>
  );
}
