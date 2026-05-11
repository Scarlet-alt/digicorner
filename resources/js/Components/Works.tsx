import { motion, useReducedMotion } from "framer-motion";
import { WorkRibbon } from "./WorkRibbon";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";

const WORKS = [
  {
    title: "AI Client Assistant",
    role: "Flagship product",
    img: w1,
    desc: "A trained assistant that answers client questions any time of day, qualifies leads, and books meetings directly into your calendar — so your team only steps in when it matters.",
  },
  {
    title: "Architecture Portfolio",
    role: "Website · Identity",
    img: w2,
    desc: "A quiet, editorial portfolio for an architecture studio — built to let the projects breathe and to make every drawing feel inevitable.",
  },
  {
    title: "Esports Team Website",
    role: "Website · Motion",
    img: w3,
    desc: "A high-energy team site with roster, match schedule, and sponsor walls — built to feel like a broadcast, not a brochure.",
  },
  {
    title: "Photography Gear Store",
    role: "E-commerce · Build",
    img: w4,
    desc: "A focused online store for photography gear — clean product pages, fast checkout, and an order flow that respects both the buyer and the shop owner.",
  },
];

function WorkCard({ w, i }: { w: typeof WORKS[number]; i: number }) {
  const isEven = i % 2 === 0;
  const reduceMotion = useReducedMotion();

  const rowDelay = i * 0.06;

  const container = reduceMotion
    ? { initial: false, whileInView: {}, transition: { duration: 0 } }
    : {
        initial: { opacity: 0, y: 26 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.9, delay: rowDelay, ease: [0.16, 1, 0.3, 1] },
      };

  const reveal = reduceMotion
    ? { initial: false, whileInView: {}, transition: { duration: 0 } }
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
      };

  const imageMask = reduceMotion
    ? { initial: false, whileInView: {}, transition: { duration: 0 } }
    : {
        initial: { clipPath: "inset(0 0 100% 0)", opacity: 0.7 },
        whileInView: { clipPath: "inset(0 0 0% 0)", opacity: 1 },
        transition: { duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] },
      };

  const imageScale = reduceMotion
    ? { initial: false, whileInView: {}, transition: { duration: 0 } }
    : {
        initial: { scale: 1.06, y: 12 },
        whileInView: { scale: 1, y: 0 },
        transition: { duration: 1.1, delay: 0.12, ease: [0.16, 1, 0.3, 1] },
      };

  return (
    <motion.article
      className="work-entry relative border-y border-border/70 bg-ink/15"
      initial={container.initial}
      whileInView={container.whileInView}
      transition={container.transition}
      viewport={{ once: true, margin: "-12% 0px -10% 0px" }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-12 md:gap-12 md:px-12 md:py-20">
        <div className={`col-span-12 md:col-span-6 ${isEven ? "md:order-1" : "md:order-2"}`}>
          <motion.div
            className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-copper"
            initial={reveal.initial}
            whileInView={reveal.whileInView}
            transition={{ ...reveal.transition, delay: reduceMotion ? 0 : rowDelay + 0.02 }}
            viewport={{ once: true, margin: "-12% 0px -10% 0px" }}
          >
            <span>{String(i + 1).padStart(2, "0")} / {String(WORKS.length).padStart(2, "0")}</span>
            <span className="h-px w-8 bg-copper/80" />
            <span>{w.role}</span>
          </motion.div>
          <motion.h3
            className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight text-cream italic mb-6"
            initial={reveal.initial}
            whileInView={reveal.whileInView}
            transition={{ ...reveal.transition, delay: reduceMotion ? 0 : rowDelay + 0.12 }}
            viewport={{ once: true, margin: "-12% 0px -10% 0px" }}
          >
            {w.title}
          </motion.h3>
          <motion.p
            className="text-muted-foreground max-w-lg mb-8"
            initial={reveal.initial}
            whileInView={reveal.whileInView}
            transition={{ ...reveal.transition, delay: reduceMotion ? 0 : rowDelay + 0.2 }}
            viewport={{ once: true, margin: "-12% 0px -10% 0px" }}
          >
            {w.desc}
          </motion.p>
          <motion.a
            href="#"
            className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-copper hover:underline w-fit"
            initial={reveal.initial}
            whileInView={reveal.whileInView}
            transition={{ ...reveal.transition, delay: reduceMotion ? 0 : rowDelay + 0.28 }}
            viewport={{ once: true, margin: "-12% 0px -10% 0px" }}
          >
            Explore case →
          </motion.a>
        </div>

        <div className={`col-span-12 md:col-span-6 ${isEven ? "md:order-2" : "md:order-1"}`}>
          <motion.div
            className="mockup overflow-hidden rounded-md bg-ink/20 border border-border shadow-[0_20px_60px_-25px_rgba(0,0,0,0.65)] w-full h-[48vh] md:h-[64vh]"
            initial={imageMask.initial}
            whileInView={imageMask.whileInView}
            transition={imageMask.transition}
            viewport={{ once: true, margin: "-10% 0px -8% 0px" }}
          >
            <motion.div
              className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center"
              initial={imageScale.initial}
              whileInView={imageScale.whileInView}
              transition={imageScale.transition}
              viewport={{ once: true, margin: "-10% 0px -8% 0px" }}
            >
              <img src={w.img} alt={w.title} loading="lazy" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

export function Works() {
  return (
    <section id="work" className="relative bg-background">
      <div className="px-6 pb-10 pt-10 md:px-12 md:pb-14 md:pt-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-copper">
            <span className="block h-px w-12 bg-copper" />
            <span>Work</span>
          </div>
          <h2 className="font-display text-4xl text-cream md:text-6xl">
            Selected <span className="italic copper-text">work</span>.
          </h2>
        </div>
      </div>

      <div id="work-section" className="relative bg-background">
        {WORKS.map((w, i) => (
          <div key={w.title}>
            <WorkCard w={w} i={i} />
          </div>
        ))}
      </div>

      <WorkRibbon />
    </section>
  );
}
