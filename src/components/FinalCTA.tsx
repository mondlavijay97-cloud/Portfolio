import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const FinalCTA = () => (
  <section className="py-24 relative overflow-hidden bg-background">
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
            Stop Overthinking.
            <br />
            <span className="text-gradient">Start Building.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md">
            Start from zero. Build real skills. Grow with clarity.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <Button
              variant="gradient"
              size="xl"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            >
              Enroll Now — ₹4,999 <ArrowRight size={18} />
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Live Support — ₹6,999 <ArrowRight size={18} />
            </Button>
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
              "I started from zero and within weeks I was consistently creating
              content. This system actually works."
            </p>

            <div className="flex items-center gap-3 pt-1">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                AV
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Aman Verma</p>
                <p className="text-xs text-muted-foreground">Student</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FinalCTA;
