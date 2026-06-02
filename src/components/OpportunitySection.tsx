import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Briefcase, UserCheck, DollarSign } from "lucide-react";

const outcomes = [
  { icon: UserCheck, text: "Retain Audiences", id: 0 },
  { icon: Briefcase, text: "Elevate Brand Value", id: 1 },
  { icon: TrendingUp, text: "Drive Conversions", id: 2 },
  { icon: DollarSign, text: "Scale Organically", id: 3 },
];

const words = ["Rhythm", "Color", "Structure"];

/* Particles flowing along the main beam */
const BeamParticles = ({ boostedCard }: { boostedCard: number | null }) => (
  <div className="absolute inset-0 overflow-hidden">
    {Array.from({ length: 5 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute top-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: i % 2 === 0 ? 4 : 3,
          height: i % 2 === 0 ? 4 : 3,
          background: "hsl(var(--primary))",
          boxShadow: "0 0 8px hsl(var(--primary) / 0.8), 0 0 16px hsl(var(--primary) / 0.4)",
          top: `${42 + (i % 3) * 8}%`,
        }}
        animate={{ left: ["-2%", "102%"] }}
        transition={{
          duration: boostedCard !== null ? 1.8 : 2.8,
          repeat: Infinity,
          delay: i * 0.5,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

/* SVG curved paths from engine to each card position */
const ConnectionPaths = ({ hoveredCard }: { hoveredCard: number | null }) => {
  const paths = [
    "M 0,50 C 40,50 60,15 100,15",
    "M 0,50 C 40,50 60,40 100,40",
    "M 0,50 C 40,50 60,60 100,60",
    "M 0,50 C 40,50 60,85 100,85",
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
    >
      {paths.map((d, i) => (
        <g key={i}>
          <motion.path
            d={d}
            stroke="url(#pathGrad)"
            strokeWidth={1.2}
            vectorEffect="non-scaling-stroke"
            fill="none"
            animate={{
              opacity: hoveredCard === null ? 0.5 : hoveredCard === i ? 0.9 : 0.15,
              strokeWidth: hoveredCard === i ? 2 : 1.2,
            }}
            transition={{ duration: 0.4 }}
          />
          {/* Moving particles along this path */}
          {[0, 1, 2].map((p) => (
            <motion.circle
              key={p}
              r={1.2}
              fill="hsl(var(--primary))"
              filter="url(#particleGlow)"
              animate={{
                opacity: hoveredCard === null ? [0.4, 0.8, 0.4] : hoveredCard === i ? [0.6, 1, 0.6] : [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <animateMotion
                dur={`${hoveredCard === i ? 1.8 : 2.8 + p * 0.3}s`}
                repeatCount="indefinite"
                begin={`${p * 0.9}s`}
                path={d}
              />
            </motion.circle>
          ))}
        </g>
      ))}
      <defs>
        <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
        </linearGradient>
        <filter id="particleGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
};

const OpportunitySection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative pt-16 pb-8 sm:pt-28 sm:pb-28 overflow-hidden bg-background">
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />
      {/* Floating micro particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: i % 3 === 0 ? 2 : 1.5,
              height: i % 3 === 0 ? 2 : 1.5,
              background: "hsl(var(--primary) / 0.3)",
              boxShadow: "0 0 4px hsl(var(--primary) / 0.2)",
              left: `${8 + (i * 7.5) % 85}%`,
              top: `${10 + ((i * 13) % 80)}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + (i % 3) * 1.5,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      {/* Radial glow behind engine */}
      <div
        className="absolute top-1/2 left-[15%] -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, hsl(var(--primary) / 0.1) 0%, transparent 65%)",
        }}
      />
      {/* Subtle right fade */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background: "linear-gradient(270deg, hsl(var(--primary) / 0.03) 0%, transparent 60%)",
        }}
      />

      <div className="container max-w-6xl relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-10 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl min-[360px]:text-3xl font-bold sm:text-4xl lg:text-5xl font-heading leading-tight">
            Videos are the{" "}
            <span className="text-gradient">Ultimate Leverage</span>
          </h2>
        </motion.div>

        {/* Engine Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-0 relative">
          {/* Connection paths (desktop only) */}
          <div className="hidden lg:block absolute inset-0 z-0">
            <ConnectionPaths hoveredCard={hovered} />
          </div>

          {/* LEFT — Content Engine */}
          <motion.div
            className="shrink-0 relative z-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Outer glow ring */}
            <div
              className="absolute -inset-3 sm:-inset-4 rounded-2xl sm:rounded-3xl pointer-events-none"
              style={{
                background: "radial-gradient(ellipse, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
              }}
            />
            <motion.div
              className="relative px-7 py-4 sm:px-10 sm:py-6 rounded-xl sm:rounded-2xl font-heading text-base sm:text-xl font-bold tracking-wider text-primary-foreground select-none"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-bright)))",
                boxShadow:
                  "0 0 32px hsl(var(--primary) / 0.3), 0 0 64px hsl(var(--primary) / 0.15), inset 0 1px 0 hsl(0 0% 100% / 0.15)",
              }}
              animate={{
                scale: [1, 1.04, 1],
                boxShadow: [
                  "0 0 32px hsl(var(--primary) / 0.3), 0 0 64px hsl(var(--primary) / 0.15), inset 0 1px 0 hsl(0 0% 100% / 0.15)",
                  "0 0 45px hsl(var(--primary) / 0.45), 0 0 80px hsl(var(--primary) / 0.25), inset 0 1px 0 hsl(0 0% 100% / 0.2)",
                  "0 0 32px hsl(var(--primary) / 0.3), 0 0 64px hsl(var(--primary) / 0.15), inset 0 1px 0 hsl(0 0% 100% / 0.15)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              VIDEO ENGINE
            </motion.div>
          </motion.div>

          {/* CENTER — Energy Flow Beam (desktop) */}
          <motion.div
            className="hidden lg:block relative flex-1 mx-4 z-10"
            style={{ height: 2 }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Core beam */}
            <motion.div
              className="w-full h-full origin-left rounded-full"
              style={{
                background: "linear-gradient(90deg, hsl(var(--primary) / 0.7), hsl(var(--primary) / 0.1))",
              }}
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Dashed overlay for data-flow feel */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(90deg, transparent 0px, transparent 8px, hsl(var(--primary) / 0.15) 8px, hsl(var(--primary) / 0.15) 12px)`,
              }}
            >
              <motion.div
                className="w-full h-full"
                animate={{ x: [0, 20] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                style={{
                  backgroundImage: `repeating-linear-gradient(90deg, transparent 0px, transparent 8px, hsl(var(--primary) / 0.2) 8px, hsl(var(--primary) / 0.2) 12px)`,
                }}
              />
            </div>
            <BeamParticles boostedCard={hovered} />
          </motion.div>

          {/* Mobile connector */}
          <motion.div
            className="lg:hidden relative w-0.5 h-5 my-1"
            style={{ background: "linear-gradient(180deg, hsl(var(--primary) / 0.6), hsl(var(--primary) / 0.1))" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />

          {/* RIGHT — Outcome Cards 2x2 */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-[420px] mx-auto lg:max-w-none lg:w-auto shrink-0 relative z-10">
            {outcomes.map(({ icon: Icon, text, id }) => {
              const isHovered = hovered === id;
              const isDimmed = hovered !== null && hovered !== id;
              return (
                <motion.div
                  key={text}
                  className="cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  animate={{
                    y: [0, -3, 0],
                    opacity: isDimmed ? 0.5 : 1,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + id * 0.1,
                    y: { duration: 3 + id * 0.4, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 0.3 }
                  }}
                  onMouseEnter={() => setHovered(id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <motion.div
                    className="flex items-center gap-2 sm:gap-3 rounded-xl px-2.5 sm:px-5 h-[68px] sm:h-20"
                    style={{
                      background: "hsl(var(--surface))",
                      borderWidth: 1,
                      borderStyle: "solid",
                    }}
                    animate={{
                      borderColor: isHovered
                        ? "hsl(271 81% 56% / 0.6)"
                        : ["hsl(271 81% 56% / 0.1)", "hsl(271 81% 56% / 0.3)", "hsl(271 81% 56% / 0.1)"],
                      boxShadow: isHovered
                        ? "0 8px 30px hsl(271 81% 56% / 0.15), 0 0 20px hsl(271 81% 56% / 0.08)"
                        : [
                            "0 0 4px hsl(271 81% 56% / 0.05)",
                            "0 0 10px hsl(271 81% 56% / 0.12)",
                            "0 0 4px hsl(271 81% 56% / 0.05)",
                          ],
                    }}
                    transition={{
                      duration: 3.5 + id * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div
                      className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg shrink-0"
                      style={{ background: "hsl(var(--primary) / 0.1)" }}
                    >
                      <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-primary" />
                    </div>
                    <span className="text-[11px] min-[360px]:text-xs sm:text-sm font-medium text-foreground whitespace-nowrap overflow-hidden text-ellipsis">
                      {text}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-10 sm:mt-20">
          <motion.p
            className="text-sm min-[360px]:text-base sm:text-xl font-semibold font-heading"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Video ={" "}
            {words.map((word, i) => (
              <motion.span
                key={word}
                className="text-gradient"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.3 }}
              >
                {word}
                {i < words.length - 1 && <span className="text-foreground"> + </span>}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </div>

      {/* Premium subtle divider line with purple glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.25), transparent)",
          boxShadow: "0 0 10px hsl(var(--primary) / 0.15)",
        }}
      />
    </section>
  );
};

export default OpportunitySection;
