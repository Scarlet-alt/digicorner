import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export type CenterStageCarouselItem = {
  img: string;
  title: string;
  desc: string;
  href: string;
  tag?: string;
};

type CenterStageCarouselProps = {
  items: CenterStageCarouselItem[];
};

type CardPosition = "left" | "center" | "right";

type CarouselCardState = {
  x: number;
  scale: number;
  opacity: number;
  zIndex: number;
};

const desktopCardState: Record<CardPosition, CarouselCardState> = {
  left: { x: -300, scale: 0.84, opacity: 0.5, zIndex: 10 },
  center: { x: 0, scale: 1, opacity: 1, zIndex: 30 },
  right: { x: 300, scale: 0.84, opacity: 0.5, zIndex: 10 },
};

const mobileCardState: CarouselCardState = {
  x: 0,
  scale: 1,
  opacity: 1,
  zIndex: 30,
};

export function CenterStageCarousel({ items }: CenterStageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();

    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const prevIndex = (activeIndex - 1 + items.length) % items.length;
  const nextIndex = (activeIndex + 1) % items.length;

  const goPrev = () => setActiveIndex((current) => (current - 1 + items.length) % items.length);
  const goNext = () => setActiveIndex((current) => (current + 1) % items.length);

  const getPosition = (cardIndex: number): CardPosition => {
    if (cardIndex === prevIndex) return "left";
    if (cardIndex === activeIndex) return "center";
    return "right";
  };

  const getCardStyle = (position: CardPosition): React.CSSProperties => {
    const state = prefersReducedMotion ? mobileCardState : desktopCardState[position];

    return {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: "min(100%, 420px)",
      transform: prefersReducedMotion
        ? "translate(-50%, -50%)"
        : `translate(-50%, -50%) translateX(${state.x}px) scale(${state.scale})`,
      opacity: state.opacity,
      zIndex: state.zIndex,
      transition: prefersReducedMotion
        ? "none"
        : "transform 550ms cubic-bezier(0.16, 1, 0.3, 1), opacity 550ms cubic-bezier(0.16, 1, 0.3, 1)",
      willChange: "transform, opacity",
    };
  };

  return (
    <>
      <div className="relative overflow-visible">
        <button
          type="button"
          onClick={goPrev}
          className="hidden md:inline-flex absolute top-1/2 -translate-y-1/2 left-4 lg:left-6 xl:left-8 z-50 h-14 w-14 items-center justify-center rounded-full border border-border bg-[#0B1221]/95 text-off-white transition-colors hover:border-primary/30 hover:bg-[#0B1221]"
          aria-label="Previous slide"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        <div
          className="mx-auto max-w-[1400px] px-4 md:px-0"
          onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX)}
          onTouchEnd={(event) => {
            if (touchStartX === null) return;
            const touchEndX = event.changedTouches[0]?.clientX;
            const diff = touchStartX - touchEndX;
            if (diff > 40) goNext();
            if (diff < -40) goPrev();
            setTouchStartX(null);
          }}
        >
          <div className="hidden md:block relative h-[540px] lg:h-[500px] overflow-visible">
            <div style={getCardStyle(getPosition(prevIndex))}>
              <CarouselCard item={items[prevIndex]} />
            </div>
            <div style={getCardStyle(getPosition(activeIndex))}>
              <CarouselCard item={items[activeIndex]} />
            </div>
            <div style={getCardStyle(getPosition(nextIndex))}>
              <CarouselCard item={items[nextIndex]} />
            </div>
          </div>

          <div className="md:hidden relative h-[390px] sm:h-[430px] overflow-hidden">
            <div style={getCardStyle("center")}>
              <CarouselCard item={items[activeIndex]} />
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={goNext}
          className="hidden md:inline-flex absolute top-1/2 -translate-y-1/2 right-4 lg:right-6 xl:right-8 z-50 h-14 w-14 items-center justify-center rounded-full border border-border bg-[#0B1221]/95 text-off-white transition-colors hover:border-primary/30 hover:bg-[#0B1221]"
          aria-label="Next slide"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4 md:hidden">
        <button
          type="button"
          onClick={goPrev}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-[#0B1221]/95 text-off-white transition-colors hover:border-primary/30 hover:bg-[#0B1221]"
          aria-label="Previous slide"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={goNext}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-[#0B1221]/95 text-off-white transition-colors hover:border-primary/30 hover:bg-[#0B1221]"
          aria-label="Next slide"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </>
  );
}

function CarouselCard({ item }: { item: CenterStageCarouselItem }) {
  return (
    <Link
      to={item.href}
      className="group block overflow-hidden rounded-[1.75rem] border bg-[#0B1221] h-full w-full flex flex-col shadow-[0_30px_70px_-40px_rgba(0,0,0,0.55)]"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted flex-shrink-0">
        <img
          src={item.img}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover object-center motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="p-6 md:p-7 flex flex-col flex-grow">
        {item.tag ? (
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">{item.tag}</p>
        ) : null}
        <h3 className="font-display text-2xl md:text-3xl leading-tight text-off-white mb-3 motion-safe:transition-all motion-safe:duration-500">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground flex-grow">{item.desc}</p>
      </div>
    </Link>
  );
}
