import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";
import dash1 from "@/assets/dashboard-1.jpg";
import dash2 from "@/assets/dashboard-2.jpg";
import mesh from "@/assets/network-mesh.jpg";
import team from "@/assets/team-meeting.jpg";

const studies = [
  {
    tag: "Demo Project", img: dash1, title: "Retail Demand Intelligence",
    challenge: "Most retailers don't know what's low, what's selling, or where the gaps are until it's already a problem.",
    solution: "A dashboard that tracks stock levels, flags what's running low, and shows what's actually selling.",
    results: ["Demand forecasting model", "Inventory dashboard", "Automated alerts", "Sales reporting"],
    tags: ["Retail", "AI", "React"],
  },
  {
    tag: "Concept Solution", img: dash2, title: "Service Booking Platform",
    challenge: "Most service businesses manage bookings through WhatsApp and spreadsheets. Nothing is tracked properly.",
    solution: "A booking platform where clients schedule themselves and the team gets notified automatically.",
    results: ["Client booking flow", "Team automation", "Operations dashboard", "Performance reports"],
    tags: ["SaaS", "Booking", "React"],
  },
  {
    tag: "Demo Project", img: "https://placehold.co/600x400/0a0f1e/c9956c?text=Dashboard+Preview", title: "Real Estate Client Intelligence",
    challenge: "Leads come in from different places, nobody qualifies them, and follow-ups depend on whoever remembers.",
    solution: "A central dashboard where leads are captured, qualified, tracked, and followed up without manual effort.",
    results: ["Lead qualification", "Pipeline tracking", "Automated follow-ups", "Conversion reports"],
    tags: ["Real Estate", "CRM", "AI"],
  },
  {
    tag: "Concept Solution", img: "https://placehold.co/600x400/0a0f1e/c9956c?text=Dashboard+Preview", title: "Clinic AI Reception System",
    challenge: "Staff spend half their day answering the same questions and chasing appointment confirmations.",
    solution: "An AI assistant that answers common questions, books appointments directly, and sends reminders — so the team focuses on care.",
    results: ["AI query handling", "Appointment automation", "Client follow-ups", "Operations dashboard"],
    tags: ["Healthcare", "AI", "Automation"],
  },
];

const Work = () => (
  <Layout>
    <PageHero tag="Demo Projects" title="Concept builds. Real thinking." highlight="" description="Each one was built around a real business problem. Here's how we approached it." />

    <section className="py-16">
      <div className="container space-y-8">
        {studies.map((s, i) => (
          <div key={s.title} className={`grid md:grid-cols-2 gap-8 items-center bg-card border border-border rounded-2xl p-6 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="rounded-xl overflow-hidden aspect-[4/3] bg-muted">
              <img src={s.img} alt={s.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="p-2">
              <p className="text-xs text-primary tracking-widest mb-2">{s.tag}</p>
              <h3 className="font-display text-2xl mb-4">{s.title}</h3>
              <div className="space-y-3 mb-5">
                <div><p className="text-xs text-primary">The Challenge:</p><p className="text-sm text-muted-foreground">{s.challenge}</p></div>
                <div><p className="text-xs text-primary">The Solution:</p><p className="text-sm text-muted-foreground">{s.solution}</p></div>
              </div>
              <p className="text-xs text-primary mb-2">Demo Highlights:</p>
              <div className="grid grid-cols-2 gap-2 mb-5">
                {s.results.map((r) => (
                  <div key={r} className="bg-secondary/40 rounded-lg px-3 py-2 text-xs">{r}</div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                {s.tags.map((t) => <span key={t} className="text-xs bg-secondary px-3 py-1 rounded-full">{t}</span>)}
              </div>
              <Link to="/book" className="text-sm text-primary inline-flex items-center gap-1">Discuss a custom build <ExternalLink className="w-3.5 h-3.5" /></Link>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="py-20 bg-card/30">
      <div className="container text-center mb-10">
        <h2 className="font-display text-4xl mb-3">What you're looking at.</h2>
        <p className="text-muted-foreground">These are concept builds — not case studies with made-up numbers. They exist to show how we think and what we build.</p>
      </div>
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          ["Strategy","Built around real business problems, not trend-chasing"],
          ["Systems","Websites, AI assistants, automation, and dashboards"],
          ["Clarity","Every dashboard designed to actually get used"],
          ["Method","We define the problem before we write a line of code"],
        ].map(([n,l]) => (
          <div key={l} className="text-center">
            <div className="font-display text-2xl text-primary mb-2">{n}</div>
            <div className="text-sm text-muted-foreground">{l}</div>
          </div>
        ))}
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="bg-card border border-border rounded-2xl p-12 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl mb-3">Have something specific in mind?</h2>
          <p className="text-muted-foreground mb-6">Tell us about your business. We'll work out whether a demo, a custom build, or a conversation makes the most sense as a first step.</p>
          <Link to="/book" className="bg-gradient-primary text-primary-foreground rounded-full px-6 py-3 font-semibold inline-flex items-center gap-2 hover:shadow-glow transition-shadow">
            Book a Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Work;
