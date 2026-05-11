import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.png";

export function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background image */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 flex h-full flex-col justify-between hero-content-x py-10"
      >
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>DigiCorner Studio</span>
          <span>{new Date().getFullYear()}</span>
        </div>

        <div className="flex max-w-3xl flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-mono text-xs uppercase tracking-[0.4em] text-copper"
          >
            Applied intelligence agency
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance font-display text-[14vw] leading-[0.9] text-cream md:text-[7vw]"
          >
            We build the systems your business <span className="italic copper-text">runs on.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Websites, AI assistants, and automation for service businesses that want cleaner systems and fewer manual tasks.
          </motion.p>
        </div>

        <div className="flex items-end justify-end font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span className="hidden md:inline">© DigiCorner</span>
        </div>
      </motion.div>
    </section>
  );
}
