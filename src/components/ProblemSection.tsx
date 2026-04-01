import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Lightbulb, Bookmark, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Brain,
    title: "Don't know what to post",
    description: "You scroll endlessly but never hit publish",
  },
  {
    icon: Lightbulb,
    title: "Overthinking content ideas",
    description: "Too many ideas, no execution",
  },
  {
    icon: Bookmark,
    title: "Saving reels but not executing",
    description: "Inspiration without action leads nowhere",
  },
  {
    icon: TrendingDown,
    title: "Feeling left behind",
    description: "Everyone is growing except you",
  },
];

const Particles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/20"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

const ProblemCard = ({
  item,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  item: (typeof problems)[0];
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
}) => {
  const isHovered = hoveredIndex === index;
  const isFaded = hoveredIndex !== null && !isHovered;
  const Icon = item.icon;

  return (
    <motion.div
      className="relative cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      animate={{
        scale: isHovered ? 1.08 : isFaded ? 0.95 : 1,
        opacity: isFaded ? 0.4 : 1,
        filter: isFaded ? "blur(2px)" : "blur(0px)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Float animation wrapper */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="relative rounded-xl p-6 overflow-hidden transition-shadow duration-300"
          style={{
            background: "hsl(240 24% 11%)",
            border: `1px solid ${isHovered ? "hsl(263 84% 58% / 0.5)" : "hsl(0 0% 100% / 0.06)"}`,
            backdropFilter: "blur(12px)",
            boxShadow: isHovered
              ? "0 0 40px hsl(263 84% 58% / 0.25), inset 0 1px 0 hsl(0 0% 100% / 0.06)"
              : "inset 0 1px 0 hsl(0 0% 100% / 0.04)",
          }}
        >
          {/* Inner gradient overlay */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, hsl(263 84% 58% / 0.08) 0%, transparent 60%)",
            }}
          />

          <div className="relative z-10 space-y-4">
            {/* Icon */}
            <div
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl"
              style={{
                background: "linear-gradient(135deg, hsl(263 84% 58% / 0.15), hsl(271 91% 65% / 0.08))",
                boxShadow: isHovered ? "0 0 20px hsl(263 84% 58% / 0.3)" : "none",
              }}
            >
              <Icon size={22} className="text-primary-bright" style={{ filter: "drop-shadow(0 0 6px hsl(263 84% 58% / 0.5))" }} />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-foreground font-heading">{item.title}</h3>

            {/* Revealed description */}
            <AnimatePresence>
              {isHovered && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-sm text-muted-foreground leading-relaxed"
                >
                  {item.description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProblemSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "hsl(var(--background))" }}>
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(263 84% 58% / 0.12) 0%, transparent 70%)" }}
      />

      <Particles />

      <div className="container max-w-4xl relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl font-heading">
            You're Not Stuck. You're Just{" "}
            <span
              className="text-gradient"
              style={{ filter: "drop-shadow(0 0 20px hsl(263 84% 58% / 0.5))" }}
            >
              Confused.
            </span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 mb-20">
          {problems.map((item, i) => (
            <ProblemCard
              key={item.title}
              item={item}
              index={i}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>

        {/* Clarity transition */}
        <div className="text-center space-y-3">
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Content is not hard.
          </motion.p>
          <motion.p
            className="text-xl font-semibold text-foreground font-heading"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span
              className="text-gradient"
              style={{ filter: "drop-shadow(0 0 16px hsl(263 84% 58% / 0.6))" }}
            >
              Clarity
            </span>{" "}
            is missing.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
