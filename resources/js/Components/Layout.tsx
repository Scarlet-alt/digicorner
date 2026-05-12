import { ReactNode } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "@inertiajs/react";
import { Nav } from "./Nav";

interface LayoutProps {
  children: ReactNode;
}

const FOOTER_LINKS = [
  { label: "Solutions", href: "/solutions" },
  { label: "Process", href: "/process" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Book a Call", href: "/book" },
];

export function Layout({ children }: LayoutProps) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="grain relative">
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-copper"
      />

      <Nav />

      <main>{children}</main>

      <footer className="border-t border-border/40 bg-background px-6 py-16 md:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <Link href="/" className="font-mono text-xs uppercase tracking-[0.3em] text-copper">
                DigiCorner
              </Link>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Digital Intelligence Agency — AI agents, premium websites, SaaS platforms, and automation for modern businesses.
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-10 gap-y-3">
              {FOOTER_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-copper"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="space-y-2">
              <a
                href="mailto:hello@digicorner.ai"
                className="block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-copper"
              >
                hello@digicorner.ai
              </a>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">Marrakesh · Morocco</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/40 pt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
            <span>© {new Date().getFullYear()} DigiCorner</span>
            <span>Built for growth</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
