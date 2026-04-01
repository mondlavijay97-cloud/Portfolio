import { BookOpen, PenTool, FileText, MessageSquare, Film, Bot, TrendingUp, Coins, User, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const leftModules = [
  {
    icon: BookOpen,
    title: "Content Foundations",
    bullets: ["Creator mindset", "Platform understanding"],
  },
  {
    icon: PenTool,
    title: "Content Strategy",
    bullets: ["Niche selection", "Positioning"],
  },
  {
    icon: FileText,
    title: "Script Writing",
    bullets: ["Hooks & retention", "CTA placement"],
  },
  {
    icon: MessageSquare,
    title: "Storytelling",
    bullets: ["Narrative arcs", "Emotional triggers"],
  },
];

const rightModules = [
  {
    icon: Film,
    title: "Editing System",
    bullets: ["Efficient workflows", "Tool stack"],
  },
  {
    icon: Bot,
    title: "AI Content Creation",
    bullets: ["Prompt engineering", "Automation"],
  },
  {
    icon: TrendingUp,
    title: "Growth Systems",
    bullets: ["Instagram & YouTube growth", "Algorithm understanding"],
  },
  {
    icon: Coins,
    title: "Monetization",
    bullets: ["Freelancing", "Brand deals & income streams"],
  },
];

const ModuleCard = ({
  module,
  index,
  side,
}: {
  module: (typeof leftModules)[0];
  index: number;
  side: "left" | "right";
}) => {
  const Icon = module.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.25 }}
        className="relative flex items-start gap-4 rounded-xl p-4 border transition-all duration-300"
        style={{
          backgroundColor: "#181825",
          borderColor: hovered ? "rgba(124,58,237,0.4)" : "rgba(124,58,237,0.15)",
          boxShadow: hovered ? "0 0 20px rgba(124,58,237,0.15)" : "none",
        }}
      >
        <div
          className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
          style={{
            backgroundColor: hovered ? "rgba(124,58,237,0.2)" : "rgba(124,58,237,0.1)",
            border: `1px solid ${hovered ? "rgba(168,85,247,0.4)" : "rgba(124,58,237,0.2)"}`,
          }}
        >
          <Icon size={18} className="text-primary transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-bold text-foreground">{module.title}</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {module.bullets.join(" · ")}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CenterAvatar = () => (
  <div className="relative flex items-center justify-center">
    {/* Outer rings */}
    {[120, 160, 200].map((size, i) => (
      <motion.div
        key={size}
        className="absolute rounded-full border pointer-events-none"
        style={{
          width: size,
          height: size,
          borderColor: `rgba(124,58,237,${0.12 - i * 0.03})`,
        }}
        animate={{ scale: [1, 1.04, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
      />
    ))}

    {/* Core circle */}
    <motion.div
      className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center"
      style={{
        background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, rgba(124,58,237,0.08) 70%)",
        border: "2px solid rgba(124,58,237,0.4)",
        boxShadow: "0 0 40px rgba(124,58,237,0.3), inset 0 0 20px rgba(124,58,237,0.1)",
      }}
      animate={{ boxShadow: ["0 0 40px rgba(124,58,237,0.3)", "0 0 60px rgba(124,58,237,0.5)", "0 0 40px rgba(124,58,237,0.3)"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <User size={32} className="text-primary" />
    </motion.div>
  </div>
);

/* SVG connection lines for desktop */
const ConnectionLines = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
    viewBox="0 0 1200 600"
    preserveAspectRatio="xMidYMid meet"
    fill="none"
  >
    <defs>
      <linearGradient id="lineGradL" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="rgba(124,58,237,0.05)" />
        <stop offset="100%" stopColor="rgba(124,58,237,0.3)" />
      </linearGradient>
      <linearGradient id="lineGradR" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="rgba(124,58,237,0.3)" />
        <stop offset="100%" stopColor="rgba(124,58,237,0.05)" />
      </linearGradient>
    </defs>
    {/* Left lines */}
    {[0, 1, 2, 3].map((i) => {
      const y = 75 + i * 140;
      return (
        <motion.line
          key={`l-${i}`}
          x1="320" y1={y} x2="555" y2="300"
          stroke="url(#lineGradL)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
        />
      );
    })}
    {/* Right lines */}
    {[0, 1, 2, 3].map((i) => {
      const y = 75 + i * 140;
      return (
        <motion.line
          key={`r-${i}`}
          x1="645" y1="300" x2="880" y2={y}
          stroke="url(#lineGradR)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
        />
      );
    })}
  </svg>
);

const ModulesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="modules" className="relative py-24 overflow-hidden" style={{ backgroundColor: "#0B0B0F" }}>
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.12] blur-[140px]" />
      </div>

      <div ref={ref} className="container relative z-10 max-w-6xl space-y-16">
        {/* Heading */}
        <div className="text-center space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-[0.25em] text-primary/70 uppercase"
          >
            Complete Learning Ecosystem
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold font-heading"
          >
            What You'll{" "}
            <span
              className="text-gradient"
              style={{ filter: "drop-shadow(0 0 20px rgba(124,58,237,0.4))" }}
            >
              Learn
            </span>
          </motion.h2>
        </div>

        {/* Radial layout — desktop */}
        <div className="relative hidden lg:block" style={{ minHeight: 600 }}>
          <ConnectionLines />

          {/* Left cards */}
          <div className="absolute left-0 top-0 w-[320px] space-y-4" style={{ top: 20 }}>
            {leftModules.map((m, i) => (
              <ModuleCard key={m.title} module={m} index={i} side="left" />
            ))}
          </div>

          {/* Center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <CenterAvatar />
          </div>

          {/* Right cards */}
          <div className="absolute right-0 top-0 w-[320px] space-y-4" style={{ top: 20 }}>
            {rightModules.map((m, i) => (
              <ModuleCard key={m.title} module={m} index={i} side="right" />
            ))}
          </div>
        </div>

        {/* Mobile / tablet layout */}
        <div className="lg:hidden space-y-8">
          <div className="flex justify-center">
            <CenterAvatar />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[...leftModules, ...rightModules].map((m, i) => (
              <ModuleCard key={m.title} module={m} index={i} side={i < 4 ? "left" : "right"} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button variant="gradient" size="lg" asChild>
            <a href="#pricing">
              Start Learning Now <ArrowRight size={18} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ModulesSection;
