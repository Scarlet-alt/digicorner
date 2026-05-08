import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bot, LayoutGrid, Code2, Workflow, Database, ArrowRight, ChevronRight, CheckCircle2, Building2, Stethoscope, Home as HomeIcon, UtensilsCrossed, ShoppingBag, Briefcase, Sparkles, Search, PenTool, Hammer, Rocket } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import IntroVideo from "@/components/IntroVideo";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CenterStageCarousel } from "@/components/CenterStageCarousel";
import { ScrollSection } from "@/components/ScrollSection";
import { ScrollReveal, ParallaxImage, FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { ScrollProgressIndicator } from "@/components/ScrollProgressIndicator";
import dash1 from "@/assets/dashboard-1.jpg";
import dash2 from "@/assets/dashboard-2.jpg";
import mesh from "@/assets/network-mesh.jpg";
import heroPremium from "@/assets/hero-premium.png";

const services = [
  { icon: Bot, title: "AI Agents", desc: "Trained assistants that answer client questions, handle requests, and free up your team." },
  { icon: LayoutGrid, title: "Websites", desc: "Clear, well-built websites that explain what you do and make it easy to get in touch." },
  { icon: Code2, title: "SaaS & Dashboards", desc: "Custom tools and portals built around your actual workflow — not a generic template." },
  { icon: Workflow, title: "Business Automation", desc: "Workflows that handle the repetitive work so your team doesn't have to." },
];

const industries = [
  { icon: Building2, title: "Hotels & Riads", desc: "Booking, guest questions, follow-ups, and operations." },
  { icon: Stethoscope, title: "Clinics & Spas", desc: "Appointments, client reminders, and service inquiries." },
  { icon: HomeIcon, title: "Real Estate", desc: "Lead capture, qualification, follow-up, and CRM flow." },
  { icon: UtensilsCrossed, title: "Restaurants & Cafes", desc: "Bookings, menus, customer messages, and daily workflows." },
  { icon: ShoppingBag, title: "Retail & E-commerce", desc: "Product pages, support, abandoned carts, and reporting." },
  { icon: Briefcase, title: "Service Businesses", desc: "Requests, scheduling, reminders, and internal tracking." },
];

const featured = [
  { tag: "AI Receptionist", img: mesh, title: "Available around the clock", desc: "Answers questions, qualifies requests, and books meetings — on its own.", href: "/solutions" },
  { tag: "Booking Website", img: dash2, title: "Clean, direct, and connected", desc: "A website where clients find what they need, pick a time, and get a confirmation — without calling you.", href: "/solutions" },
  { tag: "Admin Dashboard", img: dash1, title: "Your business, at a glance", desc: "Custom dashboards that show reservations, client activity, and performance in one place.", href: "/solutions" },
];

const process = [
  { icon: Search, title: "Discover", desc: "Understand the business, the gaps, and what to build first." },
  { icon: PenTool, title: "Design", desc: "Map the structure before writing a single line of code." },
  { icon: Hammer, title: "Build", desc: "Build the website, system, or assistant to a clear standard." },
  { icon: Workflow, title: "Automate", desc: "Connect the workflows that save your team time." },
  { icon: Rocket, title: "Launch", desc: "Test, hand over, and make sure it works in real use." },
];

const why = [
  { icon: Sparkles, title: "Less manual work", desc: "Automate follow-ups, reminders, reports, and repetitive tasks." },
  { icon: LayoutGrid, title: "Better client experience", desc: "Make booking, questions, and next steps easier for your clients." },
  { icon: Briefcase, title: "Cleaner operations", desc: "Connect your website, forms, data, and team workflows." },
];

const demoProjects = [
  { img: dash1, title: "Hospitality Dashboard", desc: "Unified reservations, guest data, and revenue intelligence for a boutique hotel group.", href: "/work" },
  { img: dash2, title: "Clinic Booking System", desc: "Premium booking flow with automated reminders and AI client follow-up.", href: "/work" },
  { img: mesh, title: "Real Estate Lead Engine", desc: "Intelligent lead capture, qualification, and CRM automation for a property network.", href: "/work" },
];



const Index = () => {
  const [showIntro, setShowIntro] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get("intro") === "1") {
        return true;
      }

      return !sessionStorage.getItem("digicornerIntroSeen");
    } catch (e) {
      return false;
    }
  });

  const handleIntroFinish = () => {
    try {
      sessionStorage.setItem("digicornerIntroSeen", "true");
    } catch (e) {}
    setShowIntro(false);
  };

  return (
    <Layout>
      <ScrollProgressIndicator />
      {/* Intro video (homepage only) */}
      {showIntro && <IntroVideo onFinish={handleIntroFinish} />}
      <div className={`${showIntro ? "opacity-0 pointer-events-none" : "opacity-100"} transition-opacity duration-700`}>
        {/* HERO */}
    <section className="relative min-h-[780px] md:min-h-[820px] lg:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroPremium}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-right md:object-right-bottom"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(11,18,33,0.94)_0%,rgba(11,18,33,0.55)_35%,rgba(11,18,33,0.22)_55%,transparent_100%)]" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_right,rgba(196,137,106,0.12),transparent_35%)]" />
      <div className="container relative z-20 py-32 md:py-36 lg:py-40">
        <motion.div 
          className="max-w-2xl space-y-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(196,137,106,0.08)] border border-[rgba(196,137,106,0.18)] text-[#C4896A] text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4" />
            Digital Intelligence Agency
          </motion.div>
          <motion.h1 
            className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your Digital Corner for AI, Automation & Growth
          </motion.h1>
          <motion.p 
            className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            DigiCorner designs intelligent digital systems for businesses that need clarity, speed, and premium execution.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/book" className="bg-gradient-primary text-primary-foreground font-semibold rounded-full px-8 py-4 hover:shadow-glow transition-all duration-300 inline-flex items-center justify-center gap-2">
              Book a Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/solutions" className="border border-border bg-card/80 text-foreground font-semibold rounded-full px-8 py-4 hover:bg-card transition-all duration-300 inline-flex items-center justify-center gap-2">
              See Our Solutions <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* WHAT WE BUILD */}
    <ScrollSection>
      <section className="relative py-28 bg-[hsl(222,22%,12%)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#08111f] via-[#0b1221] to-[#08111f] opacity-95 pointer-events-none" />
        <div className="relative z-10 container">
          <ScrollReveal className="max-w-2xl mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              What We Build
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-off-white">
              Four core solutions we specialize in.
            </h2>
          </ScrollReveal>
          <StaggerContainer>
            <div className="grid md:grid-cols-2 gap-6">
                  {services.map((s, idx) => (
                <StaggerItem key={s.title}>
                  <div className="min-h-[220px] rounded-2xl border border-[rgba(255,255,245,0.08)] bg-[#0B1221] p-6 flex flex-col hover:border-primary/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 text-primary flex items-center justify-center mb-4">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-2xl mb-3 text-off-white">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 font-light text-sm flex-grow">{s.desc}</p>
                    <Link to="/solutions" className="text-primary inline-flex items-center gap-2 transition-all font-semibold hover:text-primary/80 text-sm">
                      Explore <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>
    </ScrollSection>

    {/* WHY DIGICORNER */}
    <ScrollSection>
      <section className="relative py-24 bg-[hsl(222,24%,10%)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#070f1b] via-[#08101c] to-[#060b15] opacity-95 pointer-events-none" />
        <div className="relative z-10 container">
          <div className="grid gap-12 lg:grid-cols-[1fr_480px] items-start">
            <ScrollReveal className="lg:pr-8">
              <p className="text-xs text-primary tracking-[0.22em] mb-4 font-semibold">WHY DIGICORNER</p>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.02] text-off-white mb-6">
                Smart systems designed for premium execution.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg max-w-xl">
                We focus on clarity, precision, and business impact. Every system we build serves a strategic purpose.
              </p>
            </ScrollReveal>
            <StaggerContainer staggerDelay={0.15} className="space-y-8">
              <StaggerItem>
                <div className="flex items-start gap-4">
                  <div className="text-primary font-mono text-sm font-semibold min-w-[24px]">01</div>
                  <div>
                    <h3 className="text-off-white font-semibold mb-2">Smart Systems</h3>
                    <p className="text-off-white/75 leading-relaxed text-sm">
                      AI, automation, and integrated workflows that reduce manual work and scale with your business.
                    </p>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="flex items-start gap-4">
                  <div className="text-primary font-mono text-sm font-semibold min-w-[24px]">02</div>
                  <div>
                    <h3 className="text-off-white font-semibold mb-2">Premium Design</h3>
                    <p className="text-off-white/75 leading-relaxed text-sm">
                      Intentional design that reflects your brand and delivers results. Not templates. Not trends.
                    </p>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="flex items-start gap-4">
                  <div className="text-primary font-mono text-sm font-semibold min-w-[24px]">03</div>
                  <div>
                    <h3 className="text-off-white font-semibold mb-2">Business-First Thinking</h3>
                    <p className="text-off-white/75 leading-relaxed text-sm">
                      Every decision is tied to outcomes. Revenue, efficiency, client satisfaction. Real metrics.
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>
    </ScrollSection>

    {/* INDUSTRIES WE SERVE */}
    <ScrollSection>
      <section className="relative py-36 bg-[hsl(222,24%,12%)] overflow-hidden">
        <div className="absolute inset-0 bg-[#07101d] opacity-95 pointer-events-none" />
        <div className="relative z-10 container">
          <ScrollReveal className="max-w-2xl mb-14">
            <p className="text-xs text-primary tracking-[0.22em] mb-4 font-semibold">— INDUSTRIES WE SERVE</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.02] text-off-white mb-6">
              Built for businesses that run on client experience.
            </h2>
          </ScrollReveal>
          <StaggerContainer>
            <div className="grid gap-6 lg:grid-cols-3 sm:grid-cols-2">
              {industries.map((industry, idx) => (
                <StaggerItem key={industry.title}>
                  <div className="rounded-[2rem] border border-[rgba(255,255,245,0.08)] bg-[#0B1221] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-4">
                      <industry.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-display text-lg mb-2 text-off-white">{industry.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{industry.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>
    </ScrollSection>

    {/* FEATURED SOLUTIONS */}
    <ScrollSection>
      <section className="py-36 relative bg-[hsl(222,26%,11%)] border-y border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-[#090f1b]/95 to-[#0b1221]/100 pointer-events-none" />
        <div className="container relative z-10">
          <ScrollReveal className="max-w-3xl mb-12">
            <p className="text-xs text-primary tracking-[0.2em] mb-4">— FEATURED SOLUTIONS</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">Our most requested solutions.</h2>
          </ScrollReveal>
          <FadeIn duration={0.7} delay={0.2} className="mb-10 text-sm text-muted-foreground max-w-2xl">
            Real systems. Built for real operations.
          </FadeIn>
          <CenterStageCarousel items={featured} />
        </div>
      </section>
    </ScrollSection>

    {/* PROCESS */}
    <ScrollSection>
      <section className="py-28">
        <div className="container">
          <ScrollReveal className="max-w-2xl mb-14">
            <p className="text-xs text-primary tracking-[0.2em] mb-4">— OUR PROCESS</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1]">How we go from brief to launch.</h2>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.08}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
              {process.map((p, idx) => (
                <StaggerItem key={p.title}>
                  <div className="relative rounded-3xl border border-border/60 bg-[#0B1221] p-6 transition-all duration-500 hover:border-primary/30">
                    <div className="text-xs text-primary mb-3">0{idx + 1}</div>
                    <p.icon className="w-5 h-5 text-primary mb-3" />
                    <h4 className="font-display mb-2">{p.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>
    </ScrollSection>

    {/* WORK */}
    <ScrollSection>
      <section className="py-36 bg-[hsl(222,26%,11%)] border-y border-border">
        <div className="container relative z-10">
          <ScrollReveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-16">
            <div>
              <p className="text-xs text-primary tracking-[0.2em] mb-4">— DEMO PROJECTS</p>
                <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">A few things we've <span className="text-gradient">built.</span></h2>
            </div>
            <Link to="/work" className="text-sm text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">View all work <ArrowRight className="w-4 h-4" /></Link>
          </ScrollReveal>
          <CenterStageCarousel items={demoProjects} />
        </div>
      </section>
    </ScrollSection>

    {/* FINAL CTA */}
    <ScrollSection>
      <section className="py-36 relative overflow-hidden bg-[hsl(222,32%,8%)]">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-base/95 via-navy-base/92 to-navy-deep/95 pointer-events-none" />
        
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="relative max-w-4xl mx-auto rounded-3xl p-14 md:p-24 overflow-hidden border border-[rgba(255,255,245,0.12)] bg-[rgba(11,18,33,0.92)] shadow-card">
              <div className="relative z-10 text-center">
                <h2 className="font-display text-5xl md:text-6xl mb-8 leading-[1.05] text-off-white">
                  Ready to build your digital system?
                </h2>
                <p className="text-xl md:text-2xl text-off-white/75 mb-12 max-w-2xl mx-auto font-light">
                  Let's talk about your goals and create a strategy that delivers results.
                </p>
                <Link
                  to="/book"
                  className="group relative inline-flex items-center gap-3 px-12 py-5 rounded-full font-semibold text-[#0B1221] overflow-hidden transition-all duration-300 shadow-card hover:shadow-glow-soft"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,245,0.96) 0%, rgba(196,137,106,0.9) 100%)",
                    boxShadow: "0 24px 70px rgba(196,137,106,0.2), inset 0 1px 0 rgba(255,255,245,0.22)",
                  }}
                >
                  <span className="relative z-10">Book a Call</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </ScrollSection>
      </div>
    </Layout>
  );
};

export default Index;
