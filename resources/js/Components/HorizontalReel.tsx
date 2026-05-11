import { motion } from "framer-motion";

const STEPS = [
  { k: "01", t: "Discover", d: "We look at how your business runs today and where things get stuck." },
  { k: "02", t: "Design", d: "We map exactly what we're building and why — before any code is written." },
  { k: "03", t: "Build", d: "We build to a precise standard. Tested before you ever see it." },
  { k: "04", t: "Launch", d: "Final checks, mobile review, handover. Ready for real use, not a demo." },
];

export function HorizontalReel() {
  return (
    <section id="process" className="relative px-6 pt-20 pb-10 md:px-12 md:pt-24 md:pb-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-copper"
        >
          <span className="block h-px w-12 bg-copper" />
          <span>Process</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl font-display text-4xl leading-[1.05] text-cream md:text-6xl"
        >
          A simple, <span className="italic copper-text">honest process.</span>
        </motion.h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((p, i) => (
            <motion.div
              key={p.k}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="card-lift border-glow relative border border-border bg-ink/40 p-8"
            >
              <div className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-copper">
                Step {p.k}
              </div>
              <h3 className="mb-3 font-display text-3xl italic text-cream">{p.t}.</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
