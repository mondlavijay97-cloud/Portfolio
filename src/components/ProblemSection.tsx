import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Lightbulb, Bookmark, TrendingDown } from "lucide-react";

const confusionCards = [
  { icon: Brain, title: "Don't know what to post", quadrant: "top-left" },
  { icon: Lightbulb, title: "Overthinking content ideas", quadrant: "top-right" },
  { icon: Bookmark, title: "Saving reels but not executing", quadrant: "bottom-left" },
  { icon: TrendingDown, title: "Feeling left behind", quadrant: "bottom-right" },
];

/* ── Expanding radar ripples ── */
const Ripples = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    {[0, 1, 2, 3].map((i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: 280 + i * 120,
          height: 280 + i * 120,
          border: "1px solid hsl(var(--primary) / 0.12)",
        }}
        animate={{ scale: [1, 1.6], opacity: [0.3, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: i * 1,
          ease: "easeOut",
        }}
      />
    ))}
  </div>
);

/* ── Floating particles ── */
const Particles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    dur: Math.random() * 8 + 6,
    delay: Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: "hsl(var(--primary) / 0.25)",
          }}
          animate={{ y: [0, -15, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

/* ── Center clarity hub ── */
const ClarityHub = () => (
  <div className="relative flex items-center justify-center">
    {/* Outer ring 3 */}
    <div
      className="absolute w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full"
      style={{
        border: "1px solid hsl(var(--primary) / 0.08)",
      }}
    />
    {/* Outer ring 2 */}
    <div
      className="absolute w-[270px] h-[270px] md:w-[320px] md:h-[320px] rounded-full"
      style={{
        border: "1px solid hsl(var(--primary) / 0.15)",
      }}
    />
    {/* Outer ring 1 */}
    <div
      className="absolute w-[230px] h-[230px] md:w-[270px] md:h-[270px] rounded-full"
      style={{
        border: "1px solid hsl(var(--primary) / 0.22)",
      }}
    />

    {/* Core circle */}
    <div
      className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full flex items-center justify-center backdrop-blur-md z-10"
      style={{
        background: "radial-gradient(circle, hsl(var(--surface)) 0%, hsl(var(--background)) 100%)",
        border: "1.5px solid hsl(var(--primary) / 0.4)",
        boxShadow:
          "0 0 60px hsl(var(--primary) / 0.15), 0 0 120px hsl(var(--primary) / 0.08), inset 0 0 40px hsl(var(--primary) / 0.06)",
      }}
    >
      <div className="text-center px-6 space-y-2">
        <motion.p
          className="text-base md:text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Content is not hard.
        </motion.p>
        <motion.p
          className="text-lg md:text-xl font-bold font-heading text-gradient"
          style={{ filter: "drop-shadow(0 0 16px hsl(var(--primary) / 0.6))" }}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          Clarity is missing.
        </motion.p>
      </div>
    </div>
  </div>
);

/* ── SVG connection lines (orthogonal paths) ── */
const ConnectionLines = ({ hoveredIndex }: { hoveredIndex: number | null }) => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
    viewBox="0 0 1000 700"
    preserveAspectRatio="none"
    fill="none"
  >
    <defs>
      <filter id="line-glow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Top-left: card right edge → bend → circle left */}
    <motion.path
      d="M 273 136 L 330 136 L 330 322 L 388 322"
      stroke={`hsl(var(--primary) / ${hoveredIndex === 0 ? "0.6" : "0.2"})`}
      strokeWidth={hoveredIndex === 0 ? 2 : 1}
      filter="url(#line-glow)"
      vectorEffect="non-scaling-stroke"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
    />
    {/* Top-right: circle right → bend → card left edge */}
    <motion.path
      d="M 612 322 L 670 322 L 670 136 L 727 136"
      stroke={`hsl(var(--primary) / ${hoveredIndex === 1 ? "0.6" : "0.2"})`}
      strokeWidth={hoveredIndex === 1 ? 2 : 1}
      filter="url(#line-glow)"
      vectorEffect="non-scaling-stroke"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
    />
    {/* Bottom-left: card right edge → bend → circle left */}
    <motion.path
      d="M 273 585 L 330 585 L 330 378 L 388 378"
      stroke={`hsl(var(--primary) / ${hoveredIndex === 2 ? "0.6" : "0.2"})`}
      strokeWidth={hoveredIndex === 2 ? 2 : 1}
      filter="url(#line-glow)"
      vectorEffect="non-scaling-stroke"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut" }}
    />
    {/* Bottom-right: circle right → bend → card left edge */}
    <motion.path
      d="M 612 378 L 670 378 L 670 585 L 727 585"
      stroke={`hsl(var(--primary) / ${hoveredIndex === 3 ? "0.6" : "0.2"})`}
      strokeWidth={hoveredIndex === 3 ? 2 : 1}
      filter="url(#line-glow)"
      vectorEffect="non-scaling-stroke"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.9, ease: "easeInOut" }}
    />
  </svg>
);

/* ── Confusion card ── */
const ConfusionCard = ({
  item,
  index,
  onHover,
  hoveredIndex,
}: {
  item: (typeof confusionCards)[0];
  index: number;
  onHover: (i: number | null) => void;
  hoveredIndex: number | null;
}) => {
  const Icon = item.icon;
  const isHovered = hoveredIndex === index;
  const isDimmed = hoveredIndex !== null && !isHovered;

  return (
    <motion.div
      className="relative cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      whileHover={{ y: -4, scale: 1.02 }}
      style={{ opacity: isDimmed ? 0.5 : 1, transition: "opacity 0.3s" }}
    >
      {/* Floating animation */}
      <motion.div
        animate={{ y: [0, index % 2 === 0 ? -6 : -4, 0] }}
        transition={{ duration: 3.5 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="rounded-xl p-4 backdrop-blur-md"
          style={{
            background: "hsl(var(--surface) / 0.8)",
            border: `1px solid hsl(var(--primary) / ${isHovered ? "0.4" : "0.12"})`,
            boxShadow: isHovered
              ? "0 0 30px hsl(var(--primary) / 0.15), inset 0 1px 0 hsl(var(--foreground) / 0.04)"
              : "inset 0 1px 0 hsl(var(--foreground) / 0.03)",
            transition: "border-color 0.3s, box-shadow 0.3s",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--primary-bright) / 0.08))",
              }}
            >
              <Icon
                size={16}
                style={{
                  color: "hsl(var(--primary))",
                  filter: "drop-shadow(0 0 4px hsl(var(--primary) / 0.5))",
                }}
              />
            </div>
            <span className="text-sm font-medium text-foreground/80">{item.title}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ── Main section ── */
const ProblemSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative pt-24 md:pt-32 pb-0 overflow-hidden" style={{ background: "hsl(var(--background))" }}>
      <Particles />

      {/* Radial glow behind center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)" }}
      />

      <div className="container max-w-6xl relative z-10">
        {/* Section label */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-sm md:text-base uppercase tracking-[0.2em] mb-4 font-semibold"
            style={{ color: "hsl(var(--primary) / 0.7)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why You Feel Stuck
          </motion.span>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl font-heading leading-tight">
            You're Not Stuck. You're Just{" "}
            <span className="text-gradient" style={{ filter: "drop-shadow(0 0 20px hsl(var(--primary) / 0.5))" }}>
              Confused.
            </span>
          </h2>
        </motion.div>

        {/* ── Desktop radial layout ── */}
        <div className="hidden md:block relative" style={{ height: 620 }}>
          <ConnectionLines hoveredIndex={hoveredIndex} />
          <Ripples />

          {/* Center hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ClarityHub />
          </div>

          {/* Top-left card */}
          <div className="absolute" style={{ left: "3%", top: "15%", width: 260 }}>
            <ConfusionCard item={confusionCards[0]} index={0} onHover={setHoveredIndex} hoveredIndex={hoveredIndex} />
          </div>
          {/* Top-right card */}
          <div className="absolute" style={{ right: "3%", top: "15%", width: 260 }}>
            <ConfusionCard item={confusionCards[1]} index={1} onHover={setHoveredIndex} hoveredIndex={hoveredIndex} />
          </div>
          {/* Bottom-left card */}
          <div className="absolute" style={{ left: "3%", bottom: "12%", width: 260 }}>
            <ConfusionCard item={confusionCards[2]} index={2} onHover={setHoveredIndex} hoveredIndex={hoveredIndex} />
          </div>
          {/* Bottom-right card */}
          <div className="absolute" style={{ right: "3%", bottom: "12%", width: 260 }}>
            <ConfusionCard item={confusionCards[3]} index={3} onHover={setHoveredIndex} hoveredIndex={hoveredIndex} />
          </div>
        </div>

        {/* ── Mobile layout ── */}
        <div className="md:hidden space-y-8">
          <div className="flex justify-center">
            <ClarityHub />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {confusionCards.map((item, i) => (
              <ConfusionCard key={item.title} item={item} index={i} onHover={setHoveredIndex} hoveredIndex={hoveredIndex} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
