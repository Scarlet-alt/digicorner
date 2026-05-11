import { PremiumMarquee } from "./PremiumMarquee";

export function MarqueeRibbon() {
  const items = [
    "AI Agents",
    "Premium Websites",
    "Business Automation",
    "SaaS Platforms",
    "Intelligent Systems",
    "Digital Infrastructure",
    "AI Consulting",
    "Custom Dashboards",
    "Workflow Automation",
    "Smart Booking",
    "Client Portals",
    "Refined Execution",
  ];

  return <PremiumMarquee items={items} />;
}
