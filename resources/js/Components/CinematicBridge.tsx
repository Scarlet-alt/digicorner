import { motion } from "framer-motion";

export function CinematicBridge() {
  return (
    <section className="relative isolate overflow-hidden bg-transparent px-6 py-6 pointer-events-none h-[clamp(3rem,8vh,5rem)] md:px-12 md:py-8 md:h-[clamp(5rem,12vh,8rem)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(183,134,86,0.14)_0%,rgba(6,11,20,0.38)_42%,rgba(6,11,20,0.72)_70%,rgba(6,11,20,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,11,20,0.78),rgba(6,11,20,0.58)_45%,rgba(6,11,20,0.82)_100%)]" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 opacity-90"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 h-1 w-1 rounded-full bg-cream/90" />
          <div className="absolute top-1/2 right-1/4 h-0.5 w-0.5 rounded-full bg-cream/90" />
          <div className="absolute bottom-1/3 left-1/2 h-1 w-1 rounded-full bg-cream/90" />
          <div className="absolute bottom-1/4 right-1/3 h-0.5 w-0.5 rounded-full bg-cream/90" />
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-b from-transparent to-background/20" />
    </section>
  );
}
