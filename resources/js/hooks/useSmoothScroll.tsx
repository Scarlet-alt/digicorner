import { createContext, useContext, ReactNode, useRef, useEffect, useState } from "react";

interface SmoothScrollContextType {
  currentY: number;
  wrapperRef: React.RefObject<HTMLDivElement>;
}

const SmoothScrollContext = createContext<SmoothScrollContextType | null>(null);

export function useSmoothScroll() {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    throw new Error("useSmoothScroll must be used within SmoothScrollProvider");
  }
  return context;
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [currentY, setCurrentY] = useState(0);
  const targetYRef = useRef(0);
  const currentYRef = useRef(0);
  const maxScrollRef = useRef(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // Helper function for lerp
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    // Set body to overflow hidden to disable native scroll
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.height = "100vh";

    // Measure wrapper content height
    const measureScroll = () => {
      const contentHeight = wrapper.scrollHeight;
      maxScrollRef.current = Math.max(contentHeight - window.innerHeight, 0);
      targetYRef.current = Math.min(targetYRef.current, maxScrollRef.current);
      currentYRef.current = Math.min(currentYRef.current, maxScrollRef.current);
    };

    // Intercept wheel events
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetYRef.current += e.deltaY;
      targetYRef.current = Math.max(0, Math.min(targetYRef.current, maxScrollRef.current));
    };

    // Handle touch events for mobile
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touchY = e.touches[0].clientY;
      const delta = touchStartY - touchY;
      targetYRef.current += delta * 2;
      targetYRef.current = Math.max(0, Math.min(targetYRef.current, maxScrollRef.current));
      touchStartY = touchY;
    };

    // Animation loop
    let frameId: number;
    const tick = () => {
      const newY = lerp(currentYRef.current, targetYRef.current, 0.08);
      currentYRef.current = newY;
      setCurrentY(newY);
      wrapper.style.transform = `translate3d(0, ${-newY}px, 0)`;
      frameId = requestAnimationFrame(tick);
    };

    // Measure on init and resize
    measureScroll();
    window.addEventListener("resize", measureScroll);
    const resizeObserver = new ResizeObserver(measureScroll);
    resizeObserver.observe(wrapper);

    // Attach listeners
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    // Start animation loop
    frameId = requestAnimationFrame(tick);

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", measureScroll);
      resizeObserver.disconnect();
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.height = "";
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ currentY, wrapperRef }}>
      <div
        ref={wrapperRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          willChange: "transform",
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </SmoothScrollContext.Provider>
  );
}
