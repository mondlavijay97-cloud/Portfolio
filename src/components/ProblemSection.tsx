import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Lightbulb, Bookmark, TrendingDown, Zap } from "lucide-react";

const confusionCards = [
  { icon: Brain, title: "Don't know what to post", rotation: -2.5, x: "5%", y: "8%" },
  { icon: Lightbulb, title: "Overthinking content ideas", rotation: 3, x: "55%", y: "2%" },
  { icon: Bookmark, title: "Saving reels but not executing", rotation: -1.5, x: "10%", y: "55%" },
  { icon: TrendingDown, title: "Feeling left behind", rotation: 2.5, x: "58%", y: "50%" },
];

const Particles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 50,
    size: Math.random() * 2.5 + 1,
    duration: Math.random() * 8 + 6,
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
            background: "hsl(263 84% 58% / 0.3)",
          }}
          animate={{ y: [0, -20, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

const ConfusionCard = ({
  item,
  index,
}: {
  item: (typeof confusionCards)[0];
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <motion.div
      className="relative cursor-pointer"
      initial={{ opacity: 0, y: 30, rotate: item.rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: item.rotation }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Floating animation */}
      <motion.div
        animate={{
          y: [0, index % 2 === 0 ? -8 : -5, 0],
          x: [0, index % 2 === 0 ? 3 : -3, 0],
        }}
        transition={{
          duration: 3.5 + index * 0.7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          animate={hovered ? {
            x: [0, -2, 2, -1, 1, 0],
            transition: { duration: 0.4, ease: "easeInOut" }
          } : {}}
          className="rounded-xl p-5 overflow-hidden backdrop-blur-md"
          style={{
            background: "hsl(240 24% 11% / 0.8)",
            border: `1px solid ${hovered ? "hsl(263 84% 58% / 0.4)" : "hsl(263 84% 58% / 0.12)"}`,
            boxShadow: hovered
              ? "0 0 30px hsl(263 84% 58% / 0.2), inset 0 1px 0 hsl(0 0% 100% / 0.05)"
              : "inset 0 1px 0 hsl(0 0% 100% / 0.03)",
            transition: "border-color 0.3s, box-shadow 0.3s",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
              style={{
                background: "linear-gradient(135deg, hsl(263 84% 58% / 0.15), hsl(271 91% 65% / 0.08))",
              }}
            >
              <Icon size={18} style={{ color: "hsl(263 84% 58%)", filter: "drop-shadow(0 0 4px hsl(263 84% 58% / 0.5))" }} />
            </div>
            <span className="text-sm font-medium text-foreground/80">{item.title}</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const GlowingBeam = () => (
  <div className="relative flex justify-center py-6">
    <div className="relative w-px h-32">
      {/* Static line */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, hsl(263 84% 58% / 0.3), hsl(263 84% 58% / 0.05))" }}
      />
      {/* Animated light pulse */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-1 rounded-full"
        style={{
          height: 40,
          background: "linear-gradient(to bottom, transparent, hsl(263 84% 58% / 0.8), transparent)",
          boxShadow: "0 0 12px hsl(263 84% 58% / 0.6), 0 0 24px hsl(263 84% 58% / 0.3)",
        }}
        animate={{ top: ["-20%", "120%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
      />
      {/* Glow halo at top */}
      <div
        className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full"
        style={{ background: "radial-gradient(circle, hsl(263 84% 58% / 0.4), transparent 70%)" }}
      />
      {/* Glow halo at bottom */}
      <div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full"
        style={{ background: "radial-gradient(circle, hsl(263 84% 58% / 0.5), transparent 70%)" }}
      />
    </div>
  </div>
);

const ProblemSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "hsl(var(--background))" }}>
      {/* Background noise/particles for chaos zone */}
      <Particles />

      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(0 70% 50% / 0.04) 0%, transparent 70%)" }}
      />

      <div className="container max-w-5xl relative z-10">
        {/* ─── HEADING ─── */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-xs uppercase tracking-[0.2em] mb-4"
            style={{ color: "hsl(263 84% 58% / 0.7)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Problem
          </motion.span>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl font-heading leading-tight">
            You're Not Stuck. You're Just{" "}
            <span
              className="text-gradient"
              style={{ filter: "drop-shadow(0 0 20px hsl(263 84% 58% / 0.5))" }}
            >
              Confused.
            </span>
          </h2>
        </motion.div>

        {/* ─── CONFUSION ZONE ─── */}
        <div className="relative mb-4">
          {/* Scattered cards - desktop: absolute positioning, mobile: grid */}
          <div className="hidden md:block relative" style={{ height: 320 }}>
            {confusionCards.map((item, i) => (
              <div
                key={item.title}
                className="absolute"
                style={{
                  left: item.x,
                  top: item.y,
                  width: "40%",
                  maxWidth: 320,
                }}
              >
                <ConfusionCard item={item} index={i} />
              </div>
            ))}
          </div>

          {/* Mobile: simple stacked layout */}
          <div className="grid gap-3 sm:grid-cols-2 md:hidden">
            {confusionCards.map((item, i) => (
              <ConfusionCard key={item.title} item={{ ...item, rotation: 0 }} index={i} />
            ))}
          </div>
        </div>

        {/* ─── CONNECTING BEAM ─── */}
        <GlowingBeam />

        {/* ─── CLARITY ZONE ─── */}
        <motion.div
          className="relative text-center pt-4 pb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Radial glow behind clarity */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, hsl(263 84% 58% / 0.12) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 space-y-4">
            <motion.p
              className="text-lg md:text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Content is not hard.
            </motion.p>
            <motion.p
              className="text-2xl md:text-3xl font-bold font-heading"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span
                className="text-gradient"
                style={{ filter: "drop-shadow(0 0 20px hsl(263 84% 58% / 0.6))" }}
              >
                Clarity
              </span>{" "}
              is missing.
            </motion.p>

            {/* Solution preview card */}
            <motion.div
              className="inline-block mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div
                className="flex items-center gap-3 px-6 py-4 rounded-xl"
                style={{
                  background: "hsl(240 24% 11%)",
                  border: "1px solid hsl(263 84% 58% / 0.25)",
                  boxShadow: "0 0 30px hsl(263 84% 58% / 0.1), inset 0 1px 0 hsl(0 0% 100% / 0.05)",
                }}
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-lg"
                  style={{
                    background: "linear-gradient(135deg, hsl(263 84% 58% / 0.2), hsl(271 91% 65% / 0.1))",
                  }}
                >
                  <Zap size={18} style={{ color: "hsl(263 84% 58%)", filter: "drop-shadow(0 0 6px hsl(263 84% 58% / 0.6))" }} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">Structured Content System</p>
                  <p className="text-xs text-muted-foreground">From confusion to consistent creation</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
