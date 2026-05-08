import { Link } from "react-router-dom";
import logo from "@/assets/digicorner-logo.png";

const solutions = [
  { name: "What We Build", path: "/solutions" },
  { name: "AI Agents", path: "/solutions" },
  { name: "Websites", path: "/solutions" },
  { name: "SaaS & Dashboards", path: "/solutions" },
  { name: "Business Automation", path: "/solutions" },
];
const company = [
  { name: "About", path: "/about" },
  { name: "Demo Projects", path: "/work" },
  { name: "How We Work", path: "/process" },
  { name: "Careers", path: "/about" },
  { name: "Contact", path: "/book" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <img src={logo} alt="DigiCorner" className="w-9 h-9 object-contain" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We build websites, AI assistants, automation, and dashboards for service businesses. Based in Morocco. Working internationally.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold mb-5">Solutions</h4>
            <ul className="space-y-3">
              {solutions.map((s) => (
                <li key={s.name}><Link to={s.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">{s.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map((s) => (
                <li key={s.name}><Link to={s.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">{s.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>hello@digicorner.ai</li>
              <li>Remote / Morocco / Serving international clients</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© 2026 DigiCorner. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
