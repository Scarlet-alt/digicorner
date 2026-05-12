import { Head, Link } from "@inertiajs/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layout } from "@/Components/Layout";

const SOLUTIONS = [
  {
    id: "ai-agents",
    n: "01",
    title: "AI Agents",
    sub: "Always-on intelligence",
    desc: "Intelligent assistants that answer client questions, qualify leads, schedule appointments, and provide support — around the clock, with the precision and tone of your best team member.",
    features: ["Voice & chat agents", "Lead qualification", "Booking integration", "CRM sync", "Custom knowledge base", "Multi-language"],
    industries: ["Hotels", "Clinics", "Real Estate", "Restaurants"],
    outcome: "On average, our AI agents handle 70% of incoming inquiries without human intervention.",
  },
  {
    id: "websites",
    n: "02",
    title: "Websites",
    sub: "Designed to convert",
    desc: "Premium websites that communicate trust, explain your offer with clarity, and turn visitors into serious enquiries. Built for speed, built to last, built to rank.",
    features: ["Custom design", "Mobile-first", "SEO optimised", "CMS integration", "Analytics setup", "Booking flows"],
    industries: ["All industries"],
    outcome: "Clean, fast, purposeful — every page has a job to do.",
  },
  {
    id: "saas",
    n: "03",
    title: "SaaS Platforms",
    sub: "Your business, systematised",
    desc: "Custom dashboards, client portals, and internal tools built around exactly how your operation works. No compromise, no workarounds — software shaped to your process.",
    features: ["Role-based access", "Custom dashboards", "API integrations", "Payment flows", "White-label ready", "Real-time data"],
    industries: ["Hotels", "Clinics", "Retail", "Service businesses"],
    outcome: "Internal tools that your team actually wants to use.",
  },
  {
    id: "automation",
    n: "04",
    title: "Business Automation",
    sub: "Remove the friction",
    desc: "Automated workflows that reduce manual work, remove human error, and run your back-office processes silently in the background — every day, without fail.",
    features: ["Workflow automation", "Email & SMS triggers", "Document generation", "Approval flows", "Reporting", "Integrations"],
    industries: ["All industries"],
    outcome: "We automate the repetitive so your team focuses on what matters.",
  },
  {
    id: "consulting",
    n: "05",
    title: "AI Consulting",
    sub: "Strategic clarity first",
    desc: "We audit your current operations, identify exactly where AI and automation create the most leverage, and build a clear roadmap — before a single line of code is written.",
    features: ["Process audit", "AI opportunity map", "Technology roadmap", "Tool selection", "ROI modelling", "Implementation guide"],
    industries: ["All industries"],
    outcome: "Know exactly what to build, why, and in what order.",
  },
];
function PageHero() {
  return (
    <header className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-copper">
          <span className="h-px w-12 bg-copper" />
          <span>Solutions</span>
        </div>
        <h1 className="font-display text-4xl md:text-6xl text-cream leading-tight">Intelligence, <span className="italic copper-text">precisely</span> delivered.</h1>
        <p className="mt-6 max-w-3xl text-muted-foreground">We build AI agents, premium websites, SaaS platforms, and automation that quietly remove friction and drive measurable outcomes for service businesses.</p>
      </div>
    </header>
  );
}


function SolutionCard({ s }: { s: typeof SOLUTIONS[number] }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });

  return (
    <section ref={ref} className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-copper">{s.n}</div>
            <h2 className="mb-4 font-display text-3xl md:text-4xl text-cream">{s.title}</h2>
            <p className="text-muted-foreground">{s.desc}</p>
            <div className="mt-6">
              <Link href="/book" className="inline-flex items-center gap-3 bg-copper px-5 py-2 text-sm font-mono uppercase tracking-[0.3em] text-background">Discuss</Link>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {s.features.slice(0, 6).map((f) => (
                <div key={f} className="flex items-center gap-3 border border-border/60 bg-ink/20 px-4 py-3">
                  <span className="h-px w-4 bg-copper shrink-0" />
                  <span className="font-mono text-sm uppercase tracking-[0.2em] text-cream/90">{f}</span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Best for</div>
              <div className="flex flex-wrap gap-2">
                {s.industries.map((ind) => (
                  <span key={ind} className="border border-copper/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-copper/80">{ind}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Solutions() {
  return (
    <Layout>
      <Head><title>Solutions — DigiCorner</title></Head>
      <PageHero />
      {SOLUTIONS.map((s) => <SolutionCard key={s.id} s={s} />)}
      <section className="bg-ink/10 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h3 className="font-display text-3xl text-cream mb-4">Not sure where to start?</h3>
          <p className="text-muted-foreground mb-6">A 30-minute call is all it takes to identify the highest-leverage opportunity in your business.</p>
          <Link href="/book" className="inline-flex items-center gap-3 bg-copper px-6 py-3 font-mono uppercase tracking-[0.3em] text-background">Book a free consultation →</Link>
        </div>
      </section>
    </Layout>
  );
}
