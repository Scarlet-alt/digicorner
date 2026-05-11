import { PremiumMarquee } from "./PremiumMarquee";

export function InterludeRibbon() {
  const items = ["Built for businesses that run on client experience"];

  return <PremiumMarquee items={items} className="interlude-ribbon" repeatWithinGroup={10} />;
}