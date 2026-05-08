import { Lightbulb, FileCode, Code2, Zap, Rocket, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We look at how your business runs today — what tools you use, where things get stuck, and what's eating time it shouldn't.",
    happens: ["Business review", "Questions and gaps", "Priority mapping"],
    receive: "A clear agreement on what to build first and why."
  },
  {
    num: "02",
    title: "Design",
    desc: "Before any code is written, we map out exactly what we're building and why.",
    happens: ["User flow", "Structure and architecture", "Feature planning"],
    receive: "A clear structure you can review before we touch anything."
  },
  {
    num: "03",
    title: "Build",
    desc: "We build the website, system, or assistant to a precise standard. Tested before you see it.",
    happens: ["Front-end build", "System setup", "Integrations", "Testing"],
    receive: "A working version ready for review."
  },
  {
    num: "04",
    title: "Automate",
    desc: "We build the logic that runs in the background — so your team isn't doing by hand what a system can handle.",
    happens: ["Forms", "Notifications", "Follow-ups", "Reports", "Internal workflows"],
    receive: "A system that handles the repetitive parts without anyone chasing them."
  },
  {
    num: "05",
    title: "Launch",
    desc: "We run final checks, make sure everything works on every device, and hand it over properly.",
    happens: ["Final checks", "Mobile review", "Speed review", "Handover", "Launch support"],
    receive: "Something ready for real use — not just a demo."
  },
];

const Process = () => (
  <Layout>
    <PageHero 
      tag="How We Work" 
      title="From first call to" 
      highlight="launch."
      description="Every project starts with a conversation. Every project ends with something that works in real life."
    />

    {/* Main Process Steps */}
    <section className="py-20">
      <div className="container space-y-8 max-w-4xl">
        {steps.map((step, idx) => (
          <div key={step.num} className="relative">
            {/* Connection line */}
            {idx < steps.length - 1 && (
              <div className="absolute left-12 top-32 bottom-0 w-px bg-gradient-to-b from-primary/40 to-transparent" />
            )}
            
            {/* Step card */}
            <div className="border border-primary/20 rounded-2xl bg-gradient-to-br from-[#0B1221] to-[#070f1b] p-8 md:p-10 relative" style={{boxShadow: "0 8px 32px rgba(196,137,106,0.08)"}}>
              {/* Step number */}
              <div className="flex items-start gap-6 mb-6">
                <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-4xl text-primary/80">{step.num}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-3xl text-off-white mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-lg">{step.desc}</p>
                </div>
              </div>

              {/* Content grid */}
              <div className="grid md:grid-cols-2 gap-8 ml-30">
                {/* What happens */}
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-4 tracking-wide">What happens</h4>
                  <div className="space-y-3">
                    {step.happens.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                        <span className="text-off-white/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* You receive */}
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-4 tracking-wide">You receive</h4>
                  <p className="text-sm text-off-white/90 leading-relaxed">{step.receive}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Why this process works */}
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-off-white">Why this <span className="text-gradient">works.</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Most projects go wrong in the first two weeks. This process is designed to prevent that.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="border border-primary/20 rounded-2xl bg-gradient-to-br from-[#0B1221] to-[#070f1b] p-8 text-center" style={{boxShadow: "0 8px 32px rgba(196,137,106,0.08)"}}>
            <h4 className="font-display text-xl mb-3 text-off-white">Structure first</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We don't start building until we know exactly what we're building and why.
            </p>
          </div>

          <div className="border border-primary/20 rounded-2xl bg-gradient-to-br from-[#0B1221] to-[#070f1b] p-8 text-center" style={{boxShadow: "0 8px 32px rgba(196,137,106,0.08)"}}>
            <h4 className="font-display text-xl mb-3 text-off-white">Built around your operation</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every decision comes from how you actually work, not from a template.
            </p>
          </div>

          <div className="border border-primary/20 rounded-2xl bg-gradient-to-br from-[#0B1221] to-[#070f1b] p-8 text-center" style={{boxShadow: "0 8px 32px rgba(196,137,106,0.08)"}}>
            <h4 className="font-display text-xl mb-3 text-off-white">Nothing handed over half-done</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We adjust until the system is ready for real use, not just ready to show.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-20">
      <div className="container">
        <div className="border border-primary/20 rounded-2xl bg-gradient-to-br from-[#0B1221] to-[#070f1b] p-12 text-center max-w-3xl mx-auto" style={{boxShadow: "0 8px 32px rgba(196,137,106,0.08)"}}>
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-off-white">Want to see how this applies to your business?</h2>
          <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
            Book a call. We'll look at your setup and work out what to build first.
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

export default Process;
