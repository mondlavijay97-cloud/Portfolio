import { BookOpen, PenTool, FileText, MessageSquare, Film, Bot, TrendingUp, Coins, User, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const leftModules = [
  { icon: BookOpen, title: "Content Foundations", bullets: ["Creator mindset", "Platform understanding"] },
  { icon: PenTool, title: "Content Strategy", bullets: ["Niche selection", "Positioning"] },
  { icon: FileText, title: "Script Writing", bullets: ["Hooks & retention", "CTA placement"] },
  { icon: MessageSquare, title: "Storytelling", bullets: ["Narrative arcs", "Emotional triggers"] },
];

const rightModules = [
  { icon: Film, title: "Editing System", bullets: ["Efficient workflows", "Tool stack"] },
  { icon: Bot, title: "AI Content Creation", bullets: ["Prompt engineering", "Automation"] },
  { icon: TrendingUp, title: "Growth Systems", bullets: ["Instagram & YouTube growth", "Algorithm understanding"] },
  { icon: Coins, title: "Monetization", bullets: ["Freelancing", "Brand deals & income streams"] },
];

const ModuleCard = ({
  module,
  index,
  side,
  onHover,
}: {
  module: (typeof leftModules)[0];
  index: number;
  side: "left" | "right";
  onHover?: (hovered: boolean) => void;
}) => {
  const Icon = module.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
      onMouseEnter={() => { setHovered(true); onHover?.(true); }}
      onMouseLeave={() => { setHovered(false); onHover?.(false); }}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.25 }}
        className="relative flex items-start gap-4 rounded-xl p-4 border transition-all duration-300"
        style={{
          backgroundColor: "hsl(var(--card))",
          borderColor: hovered ? "hsla(var(--primary), 0.4)" : "hsla(var(--primary), 0.15)",
          boxShadow: hovered ? "0 0 24px hsla(var(--primary), 0.2)" : "none",
        }}
      >
        <div
          className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
          style={{
            backgroundColor: hovered ? "hsla(var(--primary), 0.2)" : "hsla(var(--primary), 0.1)",
            border: `1px solid ${hovered ? "hsla(var(--primary), 0.4)" : "hsla(var(--primary), 0.2)"}`,
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
  <div className="relative flex items-center justify-center" style={{ width: 200, height: 200 }}>
    {[120, 160, 200].map((size, i) => (
      <motion.div
        key={size}
        className="absolute rounded-full border pointer-events-none"
        style={{
          width: size,
          height: size,
          borderColor: `hsla(var(--primary), ${0.12 - i * 0.03})`,
        }}
        animate={{ scale: [1, 1.04, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
      />
    ))}
    <motion.div
      className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center"
      style={{
        background: "radial-gradient(circle, hsla(var(--primary), 0.25) 0%, hsla(var(--primary), 0.08) 70%)",
        border: "2px solid hsla(var(--primary), 0.4)",
        boxShadow: "0 0 40px hsla(var(--primary), 0.3), inset 0 0 20px hsla(var(--primary), 0.1)",
      }}
      animate={{
        boxShadow: [
          "0 0 40px hsla(var(--primary), 0.3)",
          "0 0 60px hsla(var(--primary), 0.5)",
          "0 0 40px hsla(var(--primary), 0.3)",
        ],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <User size={32} className="text-primary" />
    </motion.div>
  </div>
);

/* Dynamic SVG connection lines */
const ConnectionLines = ({ hoveredIndex }: { hoveredIndex: number | null }) => {
  // Grid layout: left cards at x~27%, right cards at x~73%, center at 50%
  // 4 rows evenly spaced within the container
  const rows = [0, 1, 2, 3];
  const totalRows = 4;
  const padY = 8; // percent padding top/bottom
  const centerX = 50;
  const centerY = 50;
  const leftCardX = 30; // right edge of left cards (percentage)
  const rightCardX = 70; // left edge of right cards

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
      fill="none"
    >
      <defs>
        <filter id="lineGlow">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {rows.map((i) => {
        const rowY = padY + ((100 - padY * 2) / (totalRows - 1)) * i;
        const isLeftHovered = hoveredIndex === i;
        const isRightHovered = hoveredIndex === i + 4;
        return (
          <g key={i}>
            {/* Left line */}
            <motion.line
              x1={leftCardX} y1={rowY} x2={centerX} y2={centerY}
              stroke="hsl(var(--primary))"
              strokeWidth={isLeftHovered ? "0.4" : "0.2"}
              opacity={isLeftHovered ? 0.8 : 0.3}
              filter="url(#lineGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: isLeftHovered ? 0.8 : 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
            />
            {/* Right line */}
            <motion.line
              x1={centerX} y1={centerY} x2={rightCardX} y2={rowY}
              stroke="hsl(var(--primary))"
              strokeWidth={isRightHovered ? "0.4" : "0.2"}
              opacity={isRightHovered ? 0.8 : 0.3}
              filter="url(#lineGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: isRightHovered ? 0.8 : 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
            />
          </g>
        );
      })}
    </svg>
  );
};

const ModulesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
              style={{ filter: "drop-shadow(0 0 20px hsla(var(--primary), 0.4))" }}
            >
              Learn
            </span>
          </motion.h2>
        </div>

        {/* Radial layout — desktop: CSS Grid for perfect symmetry */}
        <div className="relative hidden lg:grid" style={{ gridTemplateColumns: "1fr auto 1fr", minHeight: 560 }}>
          <ConnectionLines hoveredIndex={hoveredIndex} />

          {/* Left cards */}
          <div className="flex flex-col justify-between py-2 pr-8 z-10">
            {leftModules.map((m, i) => (
              <ModuleCard
                key={m.title}
                module={m}
                index={i}
                side="left"
                onHover={(h) => setHoveredIndex(h ? i : null)}
              />
            ))}
          </div>

          {/* Center */}
          <div className="flex items-center justify-center z-10">
            <CenterAvatar />
          </div>

          {/* Right cards */}
          <div className="flex flex-col justify-between py-2 pl-8 z-10">
            {rightModules.map((m, i) => (
              <ModuleCard
                key={m.title}
                module={m}
                index={i}
                side="right"
                onHover={(h) => setHoveredIndex(h ? i + 4 : null)}
              />
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
