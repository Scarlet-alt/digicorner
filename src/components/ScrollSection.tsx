import { useEffect, useRef, useState } from "react";

type ScrollSectionProps = {
  children: React.ReactNode;
  className?: string;
  parallax?: boolean;
};

/**
 * ScrollSection: Premium scroll experience wrapper
 *
 * Each section animates in as it enters the viewport:
 * - opacity: 0.92 → 1 (never disappears)
 * - translateY: 36px → 0 (subtle upward motion)
 * - scale: 0.985 → 1 (slight expansion)
 * - duration: 800ms ease-out
 * - respects prefers-reduced-motion
 */
export const ScrollSection: React.FC<ScrollSectionProps> = ({
  children,
  className = "",
  parallax = false,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReduced(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReduced) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Replayable section animation: activate in view, reset out of view.
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [prefersReduced]);

  // Subtle parallax scroll effect on background
  useEffect(() => {
    if (!parallax || !parallaxRef.current) return;

    if (prefersReduced) return;

    const handleScroll = () => {
      const rect = parallaxRef.current?.getBoundingClientRect();
      if (!rect) return;

      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const offset = (scrolled - elementTop) * 0.5;

      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [parallax, prefersReduced]);

  return (
    <div
      ref={sectionRef}
      className={className}
      style={{
        opacity: isInView ? 1 : 0.92,
        transform: isInView ? "translateY(0) scale(1)" : "translateY(28px) scale(0.985)",
        transition: prefersReduced
          ? "none"
          : "opacity 720ms cubic-bezier(0.16, 1, 0.3, 1), transform 720ms cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform, opacity",
      }}
    >
      {parallax ? (
        <div
          ref={parallaxRef}
          style={{
            position: "relative",
            transition: prefersReduced ? "none" : "transform 0ms linear",
          }}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
};
