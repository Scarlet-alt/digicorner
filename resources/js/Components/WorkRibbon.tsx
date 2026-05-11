import { PremiumMarquee } from "./PremiumMarquee";

export function WorkRibbon() {
  const items = ["Built for businesses that run on client experience"];

  return <PremiumMarquee items={items} className="work-ribbon" repeatWithinGroup={10} />;
}
