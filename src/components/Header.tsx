import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#modules" },
  { label: "Work", href: "#toolkit" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="font-heading text-3xl font-bold tracking-tight">
          Hello, I'm <span className="text-gradient">Vijay</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-base text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
          <Button variant="gradient" size="default" asChild>
            <a href="#contact" className="text-base">Let's Talk<ArrowRight size={18} className="ml-1" /></a>
          </Button>
        </nav>

        <button
          className="md:hidden text-foreground hover:text-primary transition-colors p-2"
          onClick={() => setMobileOpen(true)}
          aria-label="Open Navigation Menu"
        >
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Dark glassmorphic backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Sliding drawer from the right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[280px] sm:w-[320px] bg-[#05010D]/95 backdrop-blur-2xl border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl md:hidden"
              style={{
                boxShadow: "-10px 0 30px rgba(0, 0, 0, 0.6)",
              }}
            >
              <div className="space-y-8">
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <span className="font-heading text-xl font-bold">
                    <span className="text-gradient">Vijay</span> Kumar
                  </span>
                  <button
                    className="text-foreground hover:text-primary transition-colors p-1"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close Navigation Menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-6">
                  {navLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-lg font-medium text-muted-foreground hover:text-white transition-colors py-2 border-b border-white/[0.02]"
                    >
                      {l.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium text-muted-foreground hover:text-white transition-colors py-2 border-b border-white/[0.02]"
                  >
                    Let's Talk
                  </a>
                </nav>
              </div>

              {/* Bottom CTA in drawer */}
              <div className="space-y-4 pt-6 border-t border-white/5">
                <Button variant="gradient" size="lg" className="w-full flex justify-center items-center" asChild>
                  <a
                    href="https://calendly.com/mondlavijay97/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                  >
                    Book a Call <ArrowRight size={18} className="ml-1" />
                  </a>
                </Button>
                <p className="text-[10px] text-center text-white/30 tracking-wider uppercase font-semibold">
                  Typically responds in 24h
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;