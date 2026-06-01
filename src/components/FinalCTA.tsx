import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const FinalCTA = () => (
  <section id="contact" className="py-24 relative overflow-hidden bg-background">
    {/* Background glow */}
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px]"
        style={{ background: "radial-gradient(ellipse at center bottom, hsl(var(--primary) / 0.18) 0%, transparent 70%)" }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>

    <div className="container max-w-6xl relative z-10">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading leading-tight">
            Let's Build Something
            <br />
            <span className="text-gradient">Extraordinary.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md">
            Transform your raw footage into high-retention commercial assets today.
          </p>

          <motion.div
            className="space-y-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="gradient"
                size="xl"
                className="group transition-all duration-300 hover:-translate-y-0.5"
                asChild
              >
                <a 
                  href="https://calendly.com/mondlavijay97/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Book a consultation call with Vijay Kumar"
                >
                  Let's Discuss Your Project{" "}
                  <ArrowRight size={18} className="ml-2 inline transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="group transition-all duration-300 hover:-translate-y-0.5"
                onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore My Pipeline{" "}
                <ArrowRight size={18} className="ml-2 inline transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
            
            {/* Subtle Trust Text */}
            <p className="text-white/40 text-xs sm:text-sm tracking-wide font-medium pl-1">
              &bull; Available for freelance & contract projects &bull; Usually responds within 24 hours
            </p>
          </motion.div>
        </motion.div>

        {/* Right – social proof card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="glass-card rounded-2xl p-8 space-y-5 glow-purple"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Stars */}
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-primary text-primary" />
              ))}
            </div>

            <p className="text-foreground/90 text-base leading-relaxed italic">
              "Vijay's edits completely transformed our content strategy. Our viewer
              retention jumped by 40% and our revenue doubled within two months."
            </p>

            <div className="flex items-center gap-3 pt-1">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                AV
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Aman Verma</p>
                <p className="text-xs text-muted-foreground">Creator & Brand Founder</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FinalCTA;
