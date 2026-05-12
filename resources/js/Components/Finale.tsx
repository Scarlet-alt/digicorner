import { motion } from "framer-motion";

export function Finale() {
  return (
    <section id="book" className="relative overflow-hidden bg-background px-6 pb-12 pt-32 md:px-12 md:pt-40">
      {/* Soft single glow — no scroll-driven scale */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[40vw] w-[40vw] -translate-x-1/2 rounded-full bg-copper/15 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-copper"
        >
          <span className="block h-px w-12 bg-copper" />
          <span>Book Now</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance font-display text-5xl leading-[1] text-cream md:text-7xl"
        >
          Have a project <span className="italic copper-text">in mind?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
        >
          Tell us a bit about your business and what you'd like to build. We'll come back within 24 hours.
        </motion.p>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Write to</div>
            <a
              href="mailto:hello@digicorner.ai"
              className="hover-line inline-flex items-baseline gap-3 font-display text-2xl text-cream md:text-3xl"
            >
              hello@digicorner.ai<span className="ml-3 text-copper">→</span>
            </a>
            <div className="mt-8 mb-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Or book directly</div>
            <a
              href="#"
              className="inline-flex items-center gap-3 border border-copper bg-copper/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-cream transition-colors hover:bg-copper/20"
            >
              Book a 30-min call <span className="text-copper">→</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Elsewhere</div>
            <ul className="space-y-2 font-display text-xl text-cream md:text-2xl">
              {["Instagram", "LinkedIn", "WhatsApp", "Calendly"].map((s) => (
                <li key={s}>
                  <a href="#" className="group inline-flex items-center gap-3">
                    <span className="block h-px w-6 bg-border transition-all group-hover:w-10 group-hover:bg-copper" />
                    <span className="transition-colors group-hover:text-copper">{s}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
