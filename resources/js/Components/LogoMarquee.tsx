import { PremiumMarquee } from "./PremiumMarquee";

const INDUSTRIES = [
  "Hotels & Riads", "Clinics & Spas", "Real Estate", "Restaurants & Cafés",
  "Retail & E-commerce", "Service Businesses", "Esports", "Architecture Studios",
];

export function LogoMarquee() {
  return (
    <section id="industries" className="relative border-y border-border bg-background py-20">
      <div className="mx-auto mb-10 max-w-6xl px-6 md:px-12">
        <div className="mb-4 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-copper">
          <span className="block h-px w-12 bg-copper" />
          <span>Industries</span>
        </div>
        <h2 className="max-w-2xl font-display text-3xl leading-[1.1] text-cream md:text-5xl">
          Built for businesses that <span className="italic copper-text">run on clients.</span>
        </h2>
      </div>

      <PremiumMarquee
        items={INDUSTRIES}
        className="logo-marquee"
        repeatWithinGroup={2}
        separatorSymbol="✦"
      />
    </section>
  );
}
