import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ScrollProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 pointer-events-none"
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#C4896A] to-[#D4976A] rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${scrollProgress}%` }}
            transition={{ type: "tween", ease: "linear", duration: 0.1 }}
          />
        </div>
        <span className="text-xs text-white/50 font-mono min-w-[2.5rem]">
          {Math.round(scrollProgress)}%
        </span>
      </div>
    </motion.div>
  );
};
