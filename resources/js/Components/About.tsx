import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-copper"
        >
          <span className="block h-px w-12 bg-copper" />
          <span>About</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance font-display text-3xl leading-[1.2] text-cream md:text-5xl"
        >
          DigiCorner is a small studio building <span className="italic copper-text">websites, AI assistants and automation</span> for service businesses — quietly, carefully, and built to last.
        </motion.p>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {[
            { k: "Remote", v: "Working with clients worldwide from Morocco." },
            { k: "Senior only", v: "No juniors learning on your project. Ever." },
            { k: "Long-term", v: "We support what we ship — for as long as you need." },
          ].map((c) => (
            <div key={c.k} className="border-t border-border pt-5">
              <div className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-copper">{c.k}</div>
              <p className="text-sm leading-relaxed text-muted-foreground">{c.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
