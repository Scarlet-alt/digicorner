import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Book Now", href: "#book" },
];

export function MenuOverlay() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/70 hover:text-copper"
        aria-label="Open menu"
      >
        <span className="flex flex-col gap-[3px]">
          <span className="h-px w-5 bg-current" />
          <span className="h-px w-5 bg-current" />
        </span>
        Index
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[150] flex flex-col bg-background"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(100% 0 0 0)" }}
            transition={{ duration: 0.9, ease: [0.85, 0, 0.15, 1] }}
          >
            <div className="flex items-center justify-between px-6 py-5 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/70 md:px-12">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-copper" />
                DigiCorner — Index
              </span>
              <button
                onClick={() => setOpen(false)}
                className="hover:text-copper"
                aria-label="Close menu"
              >
                Close ✕
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2 px-6 md:px-12">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-baseline justify-between border-b border-border py-6"
                >
                  <span className="flex items-baseline gap-6">
                    <span className="font-mono text-xs text-copper">0{i + 1}</span>
                    <span className="font-display text-5xl text-cream transition-all group-hover:translate-x-4 group-hover:italic group-hover:text-copper md:text-7xl">
                      {l.label}
                    </span>
                  </span>
                  <span className="font-mono text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center justify-between px-6 py-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:px-12">
              <span>hello@digicorner.studio</span>
              <span>EST · 2020</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
