import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SOLUTIONS = [
  { k: "01", t: "AI Assistants", d: "Trained agents that answer questions, qualify leads, and book meetings — 24/7." },
  { k: "02", t: "Websites & E-commerce", d: "Fast, clear sites that explain what you do and make it easy to buy or get in touch." },
  { k: "03", t: "Automation", d: "Follow-ups, reports, internal flows — handled in the background, every day." },
];

function SplitChars({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <span ref={ref} className={`inline-block ${className}`} aria-label={text}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "110%", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: delay + i * 0.025, ease: [0.16, 1, 0.3, 1] }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}

export function Manifesto() {
  return (
    <section id="solutions" className="relative px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-copper"
        >
          <span className="block h-px w-12 bg-copper" />
          <span>What We Build</span>
        </motion.div>

        <h2 className="font-display text-5xl leading-[0.95] text-cream md:text-7xl">
          <SplitChars text="Five ways we" /><br />
          <SplitChars text="deliver" className="italic copper-text" delay={0.05} />{" "}
          <SplitChars text="intelligence." delay={0.1} />
        </h2>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {SOLUTIONS.map((c, i) => (
            <motion.div
              key={c.k}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group card-lift border-t border-border pt-6 transition-colors"
            >
              <div className="mb-4 h-px w-8 bg-copper" />
              <div className="mb-4 font-mono text-xs text-copper">{c.k}</div>
              <h3 className="mb-3 font-display text-2xl text-cream text-transition group-hover:text-copper">
                {c.t}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
