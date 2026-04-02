import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Curriculum", href: "#modules" },
  { label: "Outcomes", href: "#transformation" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#objections" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="font-heading text-3xl font-bold tracking-tight">
          <span className="text-gradient">Nomad</span> School
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-base text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
          <Button variant="gradient" size="default" asChild>
            <a href="#pricing" className="text-base">Enroll Now <ArrowRight size={18} /></a>
          </Button>
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="container flex flex-col gap-4 py-6">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground">
                {l.label}
              </a>
            ))}
            <Button variant="gradient" size="lg" asChild>
              <a href="#pricing" onClick={() => setMobileOpen(false)}>Enroll Now <ArrowRight size={18} /></a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
