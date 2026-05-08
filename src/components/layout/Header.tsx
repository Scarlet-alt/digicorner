import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/digicorner-logo.png";

const navItems = [
  { name: "Solutions", path: "/solutions" },
  { name: "Industries", path: "/industries" },
  { name: "Process", path: "/process" },
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
];

export const Header = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <header className={cn("absolute top-0 left-0 right-0 z-50", !isHome && "relative")}>
      <div className="container flex items-center justify-between py-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="DigiCorner" className="w-8 h-8 object-contain" />
          <span className="font-display font-bold text-xl tracking-tight">DigiCorner</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-primary" : "text-foreground/80")
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/book"
          className="inline-flex items-center gap-2 font-semibold rounded-full px-5 py-2.5 text-sm transition-shadow"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,245,0.96) 0%, rgba(196,137,106,0.9) 100%)",
            color: "#0B1221",
            boxShadow: "0 12px 30px rgba(196,137,106,0.14), inset 0 1px 0 rgba(255,255,245,0.12)",
          }}
        >
          Book a Meeting <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </header>
  );
};
