import { motion } from "framer-motion";
import { ArrowRight, XCircle, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const painPoints = [
  { text: "You're starting from zero", icon: "😶" },
  { text: "You're confused about content", icon: "😵‍💫" },
  { text: "You've never created content before", icon: "😰" },
];

const reliefPoints = [
  { text: "Prior experience", icon: "🎯" },
  { text: "Editing skills", icon: "✂️" },
  { text: "Camera confidence", icon: "📷" },
];

const cardBase =
  "glass-card rounded-xl p-5 cursor-default transition-all duration-300";

const ObjectionSection = () => (
  <section id="objections" className="relative py-24 overflow-hidden">
    {/* Radial glow behind center */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
    </div>

    <div className="container relative max-w-6xl space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          If This Sounds Like{" "}
          <span className="text-gradient">You</span>…
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Most creators start exactly here. You're not behind — you're just
          starting.
        </p>
      </motion.div>

      {/* 3-part layout */}
      <div className="grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        {/* LEFT — Pain */}
        <div className="space-y-5">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold uppercase tracking-wider text-destructive/80 text-center lg:text-left"
          >
            Your Current Situation
          </motion.h3>
          {painPoints.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4, boxShadow: "0 0 24px rgba(239,68,68,0.15), 0 0 24px rgba(124,58,237,0.2)" }}
              className={`${cardBase} border-destructive/10 hover:border-destructive/30 flex items-center gap-4`}
            >
              <span className="text-2xl">{item.icon}</span>
              <div className="flex items-center gap-3 flex-1">
                <XCircle size={16} className="shrink-0 text-destructive/60" />
                <span className="text-muted-foreground">{item.text}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CENTER — Bridge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col items-center gap-4 py-6 lg:py-0"
        >
          {/* Arrow line (hidden on mobile) */}
          <div className="hidden lg:block w-px h-8 bg-gradient-to-b from-destructive/40 to-primary/60" />
          <div className="relative px-6 py-4 rounded-2xl border border-primary/30 bg-primary/5 text-center max-w-[220px]">
            <Sparkles size={16} className="absolute -top-2 -right-2 text-primary-bright icon-glow" />
            <p className="text-sm font-semibold text-foreground leading-snug">
              This is exactly
              <br />
              <span className="text-gradient text-base">what we fix.</span>
            </p>
          </div>
          <div className="hidden lg:block w-px h-8 bg-gradient-to-b from-primary/60 to-primary-bright/40" />
        </motion.div>

        {/* RIGHT — Relief */}
        <div className="space-y-5">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-sm font-semibold uppercase tracking-wider text-primary-bright text-center lg:text-left"
          >
            You're NOT expected to have…
          </motion.h3>
          {reliefPoints.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
              whileHover={{ y: -4, scale: 1.02, boxShadow: "0 0 30px rgba(124,58,237,0.3)" }}
              className={`${cardBase} border-primary/15 hover:border-primary/40 flex items-center gap-4`}
            >
              <span className="text-2xl">{item.icon}</span>
              <div className="flex items-center gap-3 flex-1">
                <Heart size={16} className="shrink-0 text-primary-bright" />
                <span className="text-muted-foreground">{item.text}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="text-center space-y-6 pt-4"
      >
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          Start from zero. Build real skills. Grow with clarity.
        </p>
        <Button
          variant="gradient"
          size="xl"
          className="group"
          onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
        >
          Enroll Now
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </Button>
      </motion.div>
    </div>
  </section>
);

export default ObjectionSection;
