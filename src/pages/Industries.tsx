import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";

const industries = [
  {
    title: "Hotels & Riads",
    problem: "Guests ask on WhatsApp, email, and phone. Nothing is in one place and things get missed.",
    builds: [
      "AI receptionist for guest questions",
      "Booking website with clear offers",
      "Reservation and operations dashboard"
    ],
    outcome: "Fewer missed messages. More direct bookings. A front desk that isn't constantly putting out fires."
  },
  {
    title: "Clinics & Spas",
    problem: "Half the day goes to scheduling calls and answering the same questions over and over.",
    builds: [
      "Appointment booking flow",
      "AI assistant for common questions",
      "Client follow-up automation"
    ],
    outcome: "Less time on the phone. Fewer no-shows. The team focuses on care, not admin."
  },
  {
    title: "Real Estate",
    problem: "Leads come in from everywhere, nobody qualifies them consistently, and follow-ups happen whenever someone remembers.",
    builds: [
      "Lead capture website",
      "AI qualification flow",
      "CRM and follow-up automation"
    ],
    outcome: "A cleaner pipeline. Faster replies. Fewer leads going cold because nobody followed up."
  },
  {
    title: "Restaurants & Cafes",
    problem: "Reservation requests pile up on WhatsApp, the menu online is outdated, and messages come in during service when no one can respond.",
    builds: [
      "Booking or reservation flow",
      "Menu or offer website",
      "Customer message automation"
    ],
    outcome: "Fewer missed bookings. Less back-and-forth. Things run more quietly."
  },
  {
    title: "Retail & E-commerce",
    problem: "Customers ask the same questions constantly, order updates are handled one by one, and nobody has a clear picture of what's actually selling.",
    builds: [
      "Online store or product pages",
      "Customer support assistant",
      "Sales and inventory dashboard"
    ],
    outcome: "Less repetitive support. A clearer view of the numbers. A shop that runs with less daily effort."
  },
  {
    title: "Service Businesses",
    problem: "Everything lives in a different place — a spreadsheet here, a WhatsApp group there, a notes app somewhere else.",
    builds: [
      "Lead intake flow",
      "Booking and scheduling system",
      "Internal tracking dashboard"
    ],
    outcome: "One place for everything. Less time on admin. A clearer picture of how the business is doing."
  },
];

const Industries = () => (
  <Layout>
    <PageHero
      tag="Industries We Serve"
      title="Built for businesses that run on"
      highlight="service."
      description="We work with hotels, clinics, restaurants, real estate agencies, and other service businesses. The tools are different. The goal is always the same: less manual work, clearer operations, better client experience."
    />

    <section className="py-16">
      <div className="container grid md:grid-cols-2 gap-8">
        {industries.map((ind) => (
          <div key={ind.title} className="border border-primary/20 rounded-2xl bg-gradient-to-br from-[#0B1221] to-[#070f1b] p-10" style={{boxShadow: "0 8px 32px rgba(196,137,106,0.08)"}}>
            <h3 className="font-display text-2xl text-off-white mb-6">{ind.title}</h3>
            
            <div className="mb-8">
              <p className="text-xs text-primary tracking-wide font-semibold mb-3">Problem</p>
              <p className="text-sm text-muted-foreground">{ind.problem}</p>
            </div>
            
            <div className="mb-8">
              <p className="text-xs text-primary tracking-wide font-semibold mb-3">We can build</p>
              <ul className="space-y-2">
                {ind.builds.map((build, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                    <span className="text-sm text-off-white/90">{build}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="border-t border-primary/10 pt-6">
              <p className="text-xs text-primary tracking-wide font-semibold mb-2">Outcome</p>
              <p className="text-sm text-off-white/80">{ind.outcome}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-off-white">What every system is <span className="text-gradient">built around.</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">The industry changes. These four things don't.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="border border-primary/20 rounded-2xl bg-gradient-to-br from-[#0B1221] to-[#070f1b] p-10" style={{boxShadow: "0 8px 32px rgba(196,137,106,0.08)"}}>
            <h4 className="font-display text-2xl text-off-white mb-3">Client experience</h4>
            <p className="text-sm text-muted-foreground">From the first message to the next booking, the path should be obvious.</p>
          </div>
          <div className="border border-primary/20 rounded-2xl bg-gradient-to-br from-[#0B1221] to-[#070f1b] p-10" style={{boxShadow: "0 8px 32px rgba(196,137,106,0.08)"}}>
            <h4 className="font-display text-2xl text-off-white mb-3">Operations</h4>
            <p className="text-sm text-muted-foreground">Your tools, your team, and your data should all point in the same direction.</p>
          </div>
          <div className="border border-primary/20 rounded-2xl bg-gradient-to-br from-[#0B1221] to-[#070f1b] p-10" style={{boxShadow: "0 8px 32px rgba(196,137,106,0.08)"}}>
            <h4 className="font-display text-2xl text-off-white mb-3">Automation</h4>
            <p className="text-sm text-muted-foreground">The tasks your team does every day because there's no system for them yet.</p>
          </div>
          <div className="border border-primary/20 rounded-2xl bg-gradient-to-br from-[#0B1221] to-[#070f1b] p-10" style={{boxShadow: "0 8px 32px rgba(196,137,106,0.08)"}}>
            <h4 className="font-display text-2xl text-off-white mb-3">Visibility</h4>
            <p className="text-sm text-muted-foreground">A clear view of what's happening so you're not guessing.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-20">
      <div className="container">
        <div className="border border-primary/20 rounded-2xl bg-gradient-to-br from-[#0B1221] to-[#070f1b] p-12 text-center max-w-3xl mx-auto" style={{boxShadow: "0 8px 32px rgba(196,137,106,0.08)"}}>
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-off-white">Tell us how your business works.</h2>
          <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
            We'll work out what to build — whether that's a website, a booking flow, an AI assistant, a dashboard, or a combination of all of them.
          </p>
          <Link 
            to="/book" 
            className="inline-flex items-center gap-2 font-semibold rounded-full px-8 py-4 transition-all"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,245,0.96) 0%, rgba(196,137,106,0.9) 100%)",
              color: "#0B1221",
              boxShadow: "0 12px 30px rgba(196,137,106,0.14), inset 0 1px 0 rgba(255,255,245,0.12)",
            }}
          >
            Book a Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Industries;
