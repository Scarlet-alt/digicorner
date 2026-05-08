import { Bot, LayoutGrid, Code2, Workflow, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";

const Solutions = () => (
  <Layout>
    <PageHero tag="What We Build" title="The right tool for the job." highlight="" description="Tell us what's broken or missing. We'll build the right thing." />

    <section className="py-16 bg-navy-base">
      <div className="container space-y-12">
        {/* Featured Solution - AI Agents */}
        <div className="card-premium p-8 md:p-12 overflow-hidden shadow-card">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
                <Bot className="w-4 h-4" />
                Featured Solution
              </div>
              <h2 className="font-display text-4xl md:text-5xl mb-4">AI Agents</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                A trained assistant that handles client questions, qualifies requests, and books meetings — so your team only steps in when it matters.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Responds to client questions any time of day</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Asks the right questions to qualify a lead</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Books meetings directly into your calendar</span>
                </div>
              </div>
            </div>

            {/* Premium AI Agents chat preview */}
            <div className="relative rounded-2xl border border-primary/20 overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#070f1b] shadow-lg" style={{boxShadow: "0 8px 32px rgba(196,137,106,0.08)"}}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
              <div className="relative p-6 space-y-3">
                {/* Incoming message */}
                <div className="flex items-end gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3 h-3 text-primary" />
                  </div>
                  <div className="bg-primary/15 border border-primary/20 rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[180px]">
                    <p className="text-sm text-off-white/90 leading-snug">Hi, I can help with bookings.</p>
                  </div>
                </div>

                {/* Outgoing message */}
                <div className="flex items-end justify-end gap-2">
                  <div className="bg-primary/30 border border-primary/40 rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[180px]">
                    <p className="text-sm text-off-white leading-snug">I'd like to schedule a call</p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold text-off-white/70">
                    Y
                  </div>
                </div>

                {/* Incoming message with status */}
                <div className="flex items-end gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3 h-3 text-primary" />
                  </div>
                  <div className="bg-primary/15 border border-primary/20 rounded-2xl rounded-bl-sm px-4 py-2.5">
                    <p className="text-sm text-off-white/90 leading-snug">Connecting you now...</p>
                  </div>
                </div>

                {/* Status indicator */}
                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-primary/10 pl-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/80" />
                  <span className="text-xs text-primary/70 font-medium">Qualified Lead</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Websites - Browser mockup card */}
        <div className="card-premium p-8 overflow-hidden shadow-card">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <LayoutGrid className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl mb-2">Websites</h3>
              <p className="text-muted-foreground mb-4">A website that explains what you do, builds trust quickly, and makes it easy for the right clients to get in touch.</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  <span>Clear structure and messaging</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  <span>Works well on every device</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  <span>Contact and lead capture built in</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              {/* Premium browser mockup */}
              <div className="rounded-xl border border-primary/20 overflow-hidden bg-gradient-to-b from-[#0B1221] to-[#070f1b] shadow-lg" style={{boxShadow: "0 8px 32px rgba(196,137,106,0.08)"}}>
                {/* Browser chrome */}
                <div className="bg-[#05090f] px-4 py-3 flex items-center gap-3 border-b border-primary/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary/40" />
                    <div className="w-3 h-3 rounded-full bg-primary/30" />
                    <div className="w-3 h-3 rounded-full bg-primary/20" />
                  </div>
                  <div className="flex-1 bg-primary/5 rounded px-3 py-1.5 text-xs text-primary/40 border border-primary/10">
                    example.com
                  </div>
                </div>
                
                {/* Page content preview */}
                <div className="p-8 space-y-6">
                  {/* Hero section */}
                  <div className="space-y-3">
                    <div className="h-8 bg-gradient-to-r from-primary/30 to-primary/20 rounded w-2/3" />
                    <div className="h-3 bg-primary/10 rounded w-4/5" />
                    <div className="h-3 bg-primary/5 rounded w-3/4" />
                  </div>

                  {/* Feature grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                      <div className="h-3 bg-primary/20 rounded w-1/2 mb-2" />
                      <div className="h-2 bg-primary/10 rounded" />
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                      <div className="h-3 bg-primary/20 rounded w-1/2 mb-2" />
                      <div className="h-2 bg-primary/10 rounded" />
                    </div>
                  </div>

                  {/* CTA button */}
                  <div className="pt-2">
                    <div className="h-10 bg-gradient-to-r from-primary/40 to-primary/30 rounded-lg w-40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SaaS Solutions - Dashboard mockup */}
        <div className="card-premium p-8 overflow-hidden shadow-card">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              {/* Premium dashboard preview */}
              <div className="rounded-xl border border-primary/20 overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#070f1b] shadow-lg p-6" style={{boxShadow: "0 8px 32px rgba(196,137,106,0.08)"}}>
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-primary/10">
                  <h4 className="font-semibold text-sm text-off-white">Performance Dashboard</h4>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary/80" />
                    <div className="w-2 h-2 rounded-full bg-primary/40" />
                    <div className="w-2 h-2 rounded-full bg-primary/20" />
                  </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                    <div className="text-xs text-primary/60 mb-1">Total Revenue</div>
                    <div className="h-6 bg-gradient-to-r from-primary/40 to-primary/20 rounded w-20" />
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                    <div className="text-xs text-primary/60 mb-1">Active Users</div>
                    <div className="h-6 bg-gradient-to-r from-primary/40 to-primary/20 rounded w-16" />
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                    <div className="text-xs text-primary/60 mb-1">Conversion Rate</div>
                    <div className="h-6 bg-gradient-to-r from-primary/40 to-primary/20 rounded w-14" />
                  </div>
                </div>

                {/* Chart placeholder */}
                <div className="h-24 bg-primary/5 border border-primary/10 rounded-lg flex items-end justify-between p-4">
                  <div className="w-1 bg-primary/60 rounded-t" style={{height: '35%'}} />
                  <div className="w-1 bg-primary/70 rounded-t" style={{height: '55%'}} />
                  <div className="w-1 bg-primary/80 rounded-t" style={{height: '75%'}} />
                  <div className="w-1 bg-primary rounded-t" style={{height: '95%'}} />
                  <div className="w-1 bg-primary/70 rounded-t" style={{height: '60%'}} />
                </div>
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl mb-2">SaaS & Custom Platforms</h3>
              <p className="text-muted-foreground mb-4">Portals, dashboards, and internal tools built around how your team actually works — not adapted from a generic template.</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  <span>Built to your specific workflow</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  <span>Accessible on any device</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  <span>Designed to expand as your needs change</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Automation - Workflow visual */}
        <div className="card-premium p-8 overflow-hidden shadow-card">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
              <Workflow className="w-5 h-5" />
            </div>
            <h3 className="font-display text-2xl mb-2">Business Automation</h3>
            <p className="text-muted-foreground max-w-md mx-auto">The repetitive parts of your operation — follow-ups, reminders, notifications, internal reports — handled automatically.</p>
          </div>

          {/* Premium workflow steps visual */}
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <div className="flex items-center gap-3 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg px-4 py-3">
              <div className="w-8 h-8 rounded-full bg-primary/30 text-off-white flex items-center justify-center text-sm font-semibold border border-primary/40">1</div>
              <span className="text-sm font-medium text-off-white">Trigger</span>
            </div>
            <div className="hidden sm:flex w-12 h-px bg-gradient-to-r from-primary/40 to-transparent" />
            <div className="flex items-center gap-3 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg px-4 py-3">
              <div className="w-8 h-8 rounded-full bg-primary/30 text-off-white flex items-center justify-center text-sm font-semibold border border-primary/40">2</div>
              <span className="text-sm font-medium text-off-white">Process</span>
            </div>
            <div className="hidden sm:flex w-12 h-px bg-gradient-to-r from-primary/40 to-transparent" />
            <div className="flex items-center gap-3 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg px-4 py-3">
              <div className="w-8 h-8 rounded-full bg-primary/30 text-off-white flex items-center justify-center text-sm font-semibold border border-primary/40">3</div>
              <span className="text-sm font-medium text-off-white">Complete</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8 text-center">
            <div className="text-sm">
              <CheckCircle2 className="w-4 h-4 text-primary mx-auto mb-2" />
              <span>Less time spent on tasks that repeat every day</span>
            </div>
            <div className="text-sm">
              <CheckCircle2 className="w-4 h-4 text-primary mx-auto mb-2" />
              <span>Fewer things falling through the gaps</span>
            </div>
            <div className="text-sm">
              <CheckCircle2 className="w-4 h-4 text-primary mx-auto mb-2" />
              <span>Runs in the background while your team focuses elsewhere</span>
            </div>
          </div>
        </div>

        {/* AI Strategy - Roadmap visual */}
        <div className="card-premium p-8 overflow-hidden shadow-card">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl mb-2">AI Consulting</h3>
              <p className="text-muted-foreground mb-4">Not sure where AI fits in your business? We help you work out what's worth building, what to avoid, and where to start.</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  <span>Review your current setup and identify the gaps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  <span>Recommend tools that match your actual situation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  <span>Map out a realistic plan with a clear first step</span>
                </div>
              </div>
            </div>

            {/* Premium roadmap visual */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/30 text-off-white flex items-center justify-center text-sm font-semibold border border-primary/40 flex-shrink-0 mt-1">1</div>
                <div className="flex-1">
                  <div className="font-semibold text-sm text-off-white">Review</div>
                  <div className="text-xs text-muted-foreground mt-1">Look at what you have and what's missing</div>
                </div>
              </div>
              <div className="ml-3 w-0.5 h-6 bg-gradient-to-b from-primary/40 to-primary/10" />
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/30 text-off-white flex items-center justify-center text-sm font-semibold border border-primary/40 flex-shrink-0 mt-1">2</div>
                <div className="flex-1">
                  <div className="font-semibold text-sm text-off-white">Direction</div>
                  <div className="text-xs text-muted-foreground mt-1">Agree on what to build and in what order</div>
                </div>
              </div>
              <div className="ml-3 w-0.5 h-6 bg-gradient-to-b from-primary/40 to-primary/10" />
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/30 text-off-white flex items-center justify-center text-sm font-semibold border border-primary/40 flex-shrink-0 mt-1">3</div>
                <div className="flex-1">
                  <div className="font-semibold text-sm text-off-white">Action</div>
                  <div className="text-xs text-muted-foreground mt-1">Start with the highest-impact piece first</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 relative bg-navy-lighter">
      {/* Ambient lighting for CTA */}
      <div className="absolute inset-0 bg-radial-glow-soft opacity-30 pointer-events-none" />
      <div className="container relative z-10">
        <div className="card-glass p-12 text-center max-w-3xl mx-auto shadow-illuminated">
          <h2 className="font-display text-3xl mb-3 text-off-white">Not sure where to start?</h2>
          <p className="text-muted-foreground mb-6">Tell us what your business looks like right now. We'll work out what's worth building first.</p>
          <Link to="/book" className="bg-gradient-primary text-primary-foreground rounded-full px-6 py-3 font-semibold inline-flex items-center gap-2 hover:shadow-glow transition-shadow">
            Book a Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Solutions;
