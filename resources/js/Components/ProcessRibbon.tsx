import { PremiumMarquee } from "./PremiumMarquee";

export function ProcessRibbon() {
  const items = ["Discover", "Design", "Build", "Launch"];

  return <PremiumMarquee items={items} className="process-ribbon" repeatWithinGroup={6} />;
}