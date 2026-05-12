import { Head } from "@inertiajs/react";
import { About } from "@/Components/About";
import { AboutRibbon } from "@/Components/AboutRibbon";
import { Finale } from "@/Components/Finale";
import { HeroScene } from "@/Components/HeroScene";
import { HorizontalReel } from "@/Components/HorizontalReel";
import { IntroVideoOverlay } from "@/Components/IntroVideoOverlay";
import { InterludeRibbon } from "@/Components/InterludeRibbon";
import { Layout } from "@/Components/Layout";
import { LogoMarquee } from "@/Components/LogoMarquee";
import { Manifesto } from "@/Components/Manifesto";
import { MarqueeRibbon } from "@/Components/MarqueeRibbon";
import { ProcessRibbon } from "@/Components/ProcessRibbon";
import { ScrollScrubTitle } from "@/Components/ScrollScrubTitle";
import { Works } from "@/Components/Works";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>DigiCorner — Websites, AI assistants & automation</title>
        <meta name="description" content="DigiCorner — we build the systems your business runs on." />
      </Head>
      <IntroVideoOverlay videoSource="/videos/digicorner-intro.mp4" buttonLabel="Enter DigiCorner" />
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
    </Layout>
  );
}
