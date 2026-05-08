import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";

const beliefs = [
  { title: "Understand before building", desc: "We don't start designing until we understand the business." },
  { title: "Connected over scattered", desc: "Your website, forms, automations, and data should work as one system." },
  { title: "Design serves a purpose", desc: "A well-designed system is one that works clearly, not just one that looks good." },
  { title: "Built to last and adapt", desc: "A system that can't be updated or expanded isn't really done." },
];

const differentiators = [
  { title: "We start with the business, not the technology", desc: "The tools we recommend come after we understand how you operate." },
  { title: "Everything is custom", desc: "We don't adapt templates. We build from the brief." },
  { title: "You always know what's happening", desc: "We explain what we're building and why before we build it." },
  { title: "Details matter to us", desc: "Clean code, careful design, and systems that hold up in real use." },
  { title: "We build for the long run", desc: "The systems we hand over are designed to be used, updated, and expanded." },
];

const About = () => (
  <Layout>
    <PageHero 
      tag="About DigiCorner" 
      title="A digital agency built for" 
      highlight="businesses that run on operations."
      description="We build the websites, tools, and automations that help service businesses run with less friction — and serve their clients better."
    />

    <section className="py-16">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs text-primary tracking-widest mb-4">OUR STORY</p>
          <h2 className="font-display text-3xl md:text-4xl leading-[1.15] mb-6">
            Built around one simple idea:<br /><span className="text-gradient">your systems should work as well as you do.</span>
          </h2>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>DigiCorner started because most businesses needed more than a website — they needed the tools behind it to actually work.</p>
            <p>We focus on the operational layer: how clients reach you, how requests are handled, what gets automated, and what your team stops doing manually.</p>
            <p>Every system we build is designed to be clear to use, reliable in real conditions, and easy to hand back to your team.</p>
          </div>
        </div>
        <div className="border border-primary/20 rounded-2xl bg-gradient-to-br from-[#0B1221] to-[#070f1b] p-8" style={{boxShadow: "0 8px 32px rgba(196,137,106,0.08)"}}>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-off-white">DigiCorner</p>
              <p className="text-xs text-muted-foreground">Digital agency</p>
            </div>
          </div>
          <p className="text-sm text-off-white/80 leading-relaxed">Strategy-first. Built to last.</p>
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl mb-3">What We <span className="text-gradient">Believe</span></h2>
          <p className="text-muted-foreground">These aren't values on a slide. They're how we actually make decisions.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {beliefs.map((b) => (
            <div key={b.title} className="border border-primary/20 rounded-2xl bg-gradient-to-br from-[#0B1221] to-[#070f1b] p-8" style={{boxShadow: "0 8px 32px rgba(196,137,106,0.08)"}}>
              <h4 className="font-display text-lg text-off-white mb-3">{b.title}</h4>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-card/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl mb-3">How We <span className="text-gradient">Work</span></h2>
          <p className="text-muted-foreground">The same process, every time — because it works.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Discover", desc: "We look at how your business runs and where things get stuck." },
            { title: "Design", desc: "We map the structure before writing a line of code." },
            { title: "Build", desc: "We create the website, assistant, dashboard, or automation." },
            { title: "Refine", desc: "We test, fix, and make sure it works in real use." },
          ].map((item) => (
            <div key={item.title} className="border border-primary/20 rounded-2xl bg-gradient-to-br from-[#0B1221] to-[#070f1b] p-8" style={{boxShadow: "0 8px 32px rgba(196,137,106,0.08)"}}>
              <p className="text-xs text-primary mb-3 tracking-widest font-semibold">{item.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl mb-3">What makes us <span className="text-gradient">different</span></h2>
          <p className="text-muted-foreground">A few things worth knowing before you reach out.</p>
        </div>
        <div className="space-y-4">
          {differentiators.map((d) => (
            <div key={d.title} className="border border-primary/20 rounded-2xl bg-gradient-to-br from-[#0B1221] to-[#070f1b] p-8" style={{boxShadow: "0 8px 32px rgba(196,137,106,0.08)"}}>
              <h4 className="font-display text-lg text-off-white mb-2">{d.title}</h4>
              <p className="text-sm text-muted-foreground">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-20">
      <div className="container">
        <div className="border border-primary/20 rounded-2xl bg-gradient-to-br from-[#0B1221] to-[#070f1b] p-12 text-center max-w-3xl mx-auto" style={{boxShadow: "0 8px 32px rgba(196,137,106,0.08)"}}>
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-off-white">If this sounds like the right fit, <span className="text-gradient">let's talk.</span></h2>
          <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
            We work with a small number of clients at a time. If your project is a good match, we'll tell you clearly.
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

export default About;
