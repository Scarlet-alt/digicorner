import { Link, usePage } from "@inertiajs/react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Solutions", href: "/solutions" },
  { label: "Process",   href: "/process"   },
  { label: "Work",      href: "/work"       },
  { label: "About",     href: "/about"      },
];

export function Nav() {
  const { url } = usePage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 40));
  }, [scrollY]);

  const isActive = (href: string) => url.startsWith(href);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-[55] flex items-center justify-between px-6 py-5 transition-all duration-500 md:px-14 ${
          scrolled ? "bg-background/75 backdrop-blur-md border-b border-border/40" : "bg-transparent"
        }`}
      >
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative flex h-7 w-7 items-center justify-center">
            <span className="absolute inset-0 rounded-sm bg-copper/20 transition-all group-hover:bg-copper/30" />
            <svg viewBox="0 0 28 28" fill="none" className="relative h-5 w-5">
              <path
                d="M4 4h20v8H12v4h12v8H4V4z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
                className="text-copper"
              />
            </svg>
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-cream/90 transition-colors group-hover:text-copper">
            DigiCorner
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-mono text-[10px] uppercase tracking-[0.3em] transition-colors ${
                isActive(l.href) ? "text-copper" : "text-cream/60 hover:text-cream"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <Link
            href="/book"
            className="hidden border border-copper bg-copper/10 px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-cream transition-all hover:bg-copper hover:text-background lg:inline-flex"
          >
            Book a call →
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-[5px] p-1 text-cream/70 hover:text-copper transition-colors lg:hidden"
            aria-label="Open menu"
          >
            <span className="h-px w-6 bg-current" />
            <span className="h-px w-4 bg-current" />
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            className="hidden flex-col gap-[5px] p-1 text-cream/50 hover:text-copper transition-colors lg:flex"
            aria-label="Open menu"
          >
            <span className="h-px w-5 bg-current" />
            <span className="h-px w-3 bg-current" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[200] flex flex-col overflow-hidden bg-background"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(100% 0 0% 0)" }}
            transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
          >
            <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-copper/8 blur-[120px]" />

            <div className="flex items-center justify-between px-6 py-5 md:px-14">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-copper">DigiCorner · Index</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60 hover:text-copper transition-colors"
                aria-label="Close menu"
              >
                Close ✕
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center px-6 md:px-14">
              {[...NAV_LINKS, { label: "Book a Call", href: "/book" }].map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between border-b border-border/60 py-5 md:py-7"
                  >
                    <div className="flex items-baseline gap-5">
                      <span className="font-mono text-[10px] text-copper">0{i + 1}</span>
                      <span className="font-display text-4xl text-cream transition-all duration-300 group-hover:translate-x-3 group-hover:italic group-hover:text-copper md:text-6xl">
                        {l.label}
                      </span>
                    </div>
                    <span className="translate-x-0 font-mono text-xs text-copper opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">→</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:px-14">
              <span>hello@digicorner.ai</span>
              <span>Marrakesh · Morocco</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
