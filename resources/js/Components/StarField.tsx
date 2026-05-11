import { useMemo } from "react";

export function StarField({ count = 15 }: { count?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.3,
        delay: Math.random() * 2,
        dur: 3 + Math.random() * 2,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s) => (
        <span
          key={s.id}
          className="star-twinkle absolute rounded-full bg-cream"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            // @ts-expect-error css vars
            "--delay": `${s.delay}s`,
            "--dur": `${s.dur}s`,
          }}
        />
      ))}
    </div>
  );
}
