import { ArrowRight, Compass, Bot, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { useState } from "react";

const benefits = [
  {
    icon: Compass,
    title: "We'll look at what you actually have",
    desc: "We ask the right questions and listen before suggesting anything.",
  },
  {
    icon: Bot,
    title: "We'll tell you what's worth building first",
    desc: "Practical guidance on what to build first — website, assistant, dashboard, or automation.",
  },
  {
    icon: CheckCircle2,
    title: "You’ll leave with a clear next step",
    desc: "A concrete recommendation. Not a long proposal full of options.",
  },
];

const Book = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = "Book a Call Request";
    const body = `Hi,\n\nI'd like to book a call with you.\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:hello@digicorner.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Show success message
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <Layout>
      <section className="pt-20 pb-24 network-bg">
        <div className="container max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h1 className="font-display text-5xl md:text-6xl mb-5">Book a <span className="text-gradient">Call</span></h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Thirty minutes to look at your business, find where the friction is, and work out what's worth building first.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors">
                <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <benefit.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            {submitted ? (
              <div className="text-center">
                <p className="text-lg font-semibold text-primary mb-2">Thank you!</p>
                <p className="text-sm text-muted-foreground">
                  We've received your request and will reply within 24 hours to confirm a time.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us a bit about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold rounded-full px-7 py-3.5 hover:shadow-glow transition-shadow w-full md:w-auto justify-center"
                >
                  Send Request <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
            <p className="text-xs text-muted-foreground mt-4">
              We'll reply within 24 hours to confirm a time that works for you.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Book;
