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
          borderColor: "#7C3AED",
          borderWidth: "1px",
          boxShadow: hovered
            ? "0 0 12px rgba(124, 58, 237, 0.5), 0 0 30px rgba(124, 58, 237, 0.2), inset 0 0 12px rgba(124, 58, 237, 0.05)"
            : "0 0 8px rgba(124, 58, 237, 0.25), 0 0 20px rgba(124, 58, 237, 0.1)",
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

/* Premium 3-layer center hub */
const CenterHub = () => (
  <div className="relative flex items-center justify-center" style={{ width: 220, height: 220 }}>


    {/* Inner core */}
    <motion.div
      className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center"
      style={{
        backgroundColor: "hsl(var(--card))",
        border: "2.5px solid hsla(var(--primary), 0.7)",
        boxShadow: "0 0 50px hsla(var(--primary), 0.3), 0 0 100px hsla(var(--primary), 0.15), inset 0 0 30px hsla(var(--primary), 0.1)",
      }}
      animate={{
        scale: [1, 1.05, 1],
        borderColor: [
          "hsla(var(--primary), 0.7)",
          "hsla(var(--primary), 1)",
          "hsla(var(--primary), 0.7)",
        ],
        boxShadow: [
          "0 0 50px hsla(var(--primary), 0.3), 0 0 100px hsla(var(--primary), 0.15), inset 0 0 30px hsla(var(--primary), 0.1)",
          "0 0 70px hsla(var(--primary), 0.5), 0 0 120px hsla(var(--primary), 0.25), inset 0 0 40px hsla(var(--primary), 0.15)",
          "0 0 50px hsla(var(--primary), 0.3), 0 0 100px hsla(var(--primary), 0.15), inset 0 0 30px hsla(var(--primary), 0.1)",
        ],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <User size={36} className="text-primary" />
    </motion.div>
  </div>
);

/* Orthogonal SVG connection lines: center → H → V → H → card */
const OrthogonalLines = ({ hoveredIndex }: { hoveredIndex: number | null }) => {
  const totalRows = 4;
  const padY = 8;
  const centerX = 50;
  const centerY = 50;
  const leftCardX = 31;
  const rightCardX = 69;
  // Horizontal bus distance from center
  const leftBusX = 40;
  const rightBusX = 60;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
      fill="none"
    >
      <defs>
        <filter id="lineGlow">
          <feGaussianBlur stdDeviation="0.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="lineGlowStrong">
          <feGaussianBlur stdDeviation="0.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {[0, 1, 2, 3].map((i) => {
        const rowY = padY + ((100 - padY * 2) / (totalRows - 1)) * i;
        const isLeftHovered = hoveredIndex === i;
        const isRightHovered = hoveredIndex === i + 4;

        // Left path: center → H to leftBusX → V to rowY → H to leftCardX
        const leftPath = `M ${centerX} ${centerY} H ${leftBusX} V ${rowY} H ${leftCardX}`;
        // Right path: center → H to rightBusX → V to rowY → H to rightCardX
        const rightPath = `M ${centerX} ${centerY} H ${rightBusX} V ${rowY} H ${rightCardX}`;

        return (
          <g key={i}>
            {/* Left orthogonal line */}
            <motion.path
              d={leftPath}
              stroke="hsl(var(--primary))"
              strokeWidth={isLeftHovered ? "0.5" : "0.2"}
              strokeLinejoin="round"
              strokeLinecap="round"
              opacity={isLeftHovered ? 0.9 : 0.3}
              filter={isLeftHovered ? "url(#lineGlowStrong)" : "url(#lineGlow)"}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: isLeftHovered ? 0.9 : 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 + i * 0.12 }}
            />
            {/* Left glow duplicate for hovered state */}
            {isLeftHovered && (
              <motion.path
                d={leftPath}
                stroke="hsl(var(--primary))"
                strokeWidth="1.2"
                strokeLinejoin="round"
                strokeLinecap="round"
                opacity={0.15}
                filter="url(#lineGlowStrong)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4 }}
              />
            )}

            {/* Small dot at card junction */}
            <motion.circle
              cx={leftCardX}
              cy={rowY}
              r={isLeftHovered ? "0.6" : "0.35"}
              fill="hsl(var(--primary))"
              opacity={isLeftHovered ? 1 : 0.5}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.8 + i * 0.12 }}
            />

            {/* Right orthogonal line */}
            <motion.path
              d={rightPath}
              stroke="hsl(var(--primary))"
              strokeWidth={isRightHovered ? "0.5" : "0.2"}
              strokeLinejoin="round"
              strokeLinecap="round"
              opacity={isRightHovered ? 0.9 : 0.3}
              filter={isRightHovered ? "url(#lineGlowStrong)" : "url(#lineGlow)"}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: isRightHovered ? 0.9 : 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 + i * 0.12 }}
            />
            {isRightHovered && (
              <motion.path
                d={rightPath}
                stroke="hsl(var(--primary))"
                strokeWidth="1.2"
                strokeLinejoin="round"
                strokeLinecap="round"
                opacity={0.15}
                filter="url(#lineGlowStrong)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4 }}
              />
            )}

            {/* Small dot at card junction */}
            <motion.circle
              cx={rightCardX}
              cy={rowY}
              r={isRightHovered ? "0.6" : "0.35"}
              fill="hsl(var(--primary))"
              opacity={isRightHovered ? 1 : 0.5}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.8 + i * 0.12 }}
            />
          </g>
        );
      })}

      {/* Center dot */}
      <motion.circle
        cx={centerX}
        cy={centerY}
        r="0.8"
        fill="hsl(var(--primary))"
        opacity={0.8}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />
    </svg>
  );
};

const ModulesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="modules" className="relative py-24 overflow-x-hidden" style={{ backgroundColor: "#0B0B0F" }}>
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
            className="text-sm font-semibold tracking-[0.25em] text-primary/70 uppercase"
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

        {/* Radial layout — desktop */}
        <div className="relative hidden lg:grid" style={{ gridTemplateColumns: "1fr auto 1fr", minHeight: 560 }}>
          <OrthogonalLines hoveredIndex={hoveredIndex} />

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
            <CenterHub />
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
            <CenterHub />
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
