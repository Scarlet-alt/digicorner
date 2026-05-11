type PremiumMarqueeProps = {
  items: string[];
  className?: string;
  ariaHidden?: boolean;
  repeatWithinGroup?: number;
  showSeparator?: boolean;
  separatorSymbol?: string;
};

export function PremiumMarquee({
  items,
  className = "",
  ariaHidden = true,
  repeatWithinGroup = 1,
  showSeparator = true,
  separatorSymbol = "•",
}: PremiumMarqueeProps) {
  const repeatCount = Math.max(1, repeatWithinGroup);
  const groupItems = Array.from({ length: repeatCount }, () => items).flat();

  return (
    <div className={`marquee-strip ${className}`.trim()} aria-hidden={ariaHidden}>
      <div className="marquee-track">
        {Array.from({ length: 2 }, (_, groupIndex) => (
          <div key={`group-${groupIndex}`} className="premium-marquee-group">
            {groupItems.map((item, index) => {
              const isLast = index === groupItems.length - 1;

              return (
                <div key={`${groupIndex}-${index}`} className="marquee-item">
                  <span>{item}</span>
                  {showSeparator && !isLast && <span className="separator">{separatorSymbol}</span>}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
