export const PageHero = ({ tag, title, highlight, description }: { tag?: string; title: string; highlight: string; description: string }) => (
  <section className="relative pt-32 pb-20 network-bg overflow-hidden">
    <div className="container relative text-center max-w-4xl">
      {tag && (
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/60 border border-border text-xs text-primary mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {tag}
        </div>
      )}
      <h1 className="font-display text-5xl md:text-6xl leading-[1.05] mb-6">
        {title} <span className="text-gradient">{highlight}</span>
      </h1>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{description}</p>
    </div>
  </section>
);
