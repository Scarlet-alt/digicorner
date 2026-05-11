import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { StarField } from "./StarField";

// THE MAIN SCROLL-ZOOM ANIMATION
// Section is 300vh tall — text is pinned sticky in center
// Large dramatic zoom with cinematic blur effect
export function ScrollScrubTitle() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // ZOOM: dramatic scale that fills viewport
  const scale = useTransform(scrollYProgress, [0, 0.45, 0.85, 1], [0.9, 1, 1.4, 6]);

  // Opacity: fades in, holds, fades out
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.6, 0.9, 1], [0, 1, 1, 0.6, 0]);

  // Blur: cinematic blur effect
  const blurVal = useTransform(scrollYProgress, [0, 0.25, 0.6, 1], [16, 0, 0, 30]);
  const filter = useTransform(blurVal, (b) => `blur(${b}px)`);

  // Stars parallax: subtle background movement
  const starsY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const starsScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* Parallax star field with reduced particle count */}
        <motion.div
          style={{ y: starsY, scale: starsScale }}
          className="absolute inset-0"
        >
          <StarField count={16} />
        </motion.div>

        {/* Radial vignette on stars - static for performance */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_75%)]" />

        {/* THE SCROLL-ZOOM TEXT - RESTORED ORIGINAL DRAMATIC EFFECT */}
        <motion.div
          style={{ scale, opacity, filter }}
          className="relative z-10 contain-paint"
        >
          <motion.h2
            className="text-balance px-6 text-center font-display text-[14vw] leading-[0.85] text-cream md:text-[10vw] select-none"
          >
            <span className="block">Built for businesses</span>
            <span className="block italic copper-text">that run on</span>
            <span className="block">client experience.</span>
          </motion.h2>
        </motion.div>

        {/* Scroll progress hint */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
        >
          Interlude / hold your breath
        </motion.div>

        {/* Scene label fades in mid-scroll */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.8, 1], [0, 1, 1, 0]) }}
          className="absolute top-10 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-copper"
        >
          Scene 02.2 / Interlude
        </motion.div>
      </div>
    </section>
  );
}
