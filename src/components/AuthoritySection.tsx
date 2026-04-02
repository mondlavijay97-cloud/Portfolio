import { useState } from "react";
import { Users, Award, Shield, BookOpen, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import mentorImage from "@/assets/ajay_nomad_bgless.png";

const pills = [
  { icon: Users, text: "80K+ audience built", angle: -60 },
  { icon: Award, text: "Worked with top brands", angle: 60 },
  { icon: Shield, text: "Real-world strategies", angle: -120 },
  { icon: BookOpen, text: "No theory — all execution", angle: 120 },
] as const;

const BackgroundParticles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {Array.from({ length: 60 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: Math.random() * 3 + 1.5,
          height: Math.random() * 3 + 1.5,
          backgroundColor: "hsl(var(--primary))",
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: 0,
        }}
        animate={{
          opacity: [0, 0.5, 0],
          y: [0, -30 - Math.random() * 50],
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 6,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

const RotatingRings = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ top: "-5%" }}>
    {[240, 340, 440, 540].map((size, i) => (
      <motion.div
        key={size}
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          border: `1px solid hsla(var(--primary), ${0.15 - i * 0.03})`,
          boxShadow: `0 0 ${10 + i * 5}px hsla(var(--primary), ${0.08 - i * 0.015})`,
        }}
        animate={{
          rotate: i % 2 === 0 ? [0, 360] : [360, 0],
          scale: [1, 1.02, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          rotate: { duration: 15 + i * 5, repeat: Infinity, ease: "linear" },
          scale: { duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    ))}
    {/* Expanding ripples */}
    {[0, 1, 2].map((i) => (
      <motion.div
        key={`ripple-${i}`}
        className="absolute rounded-full"
        style={{
          width: 180,
          height: 180,
          border: "1px solid hsla(var(--primary), 0.2)",
        }}
        animate={{ scale: [1, 3.5], opacity: [0.3, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: i * 2, ease: "easeOut" }}
      />
    ))}
  </div>
);

const ConnectionLine = ({
  fromAngle,
  visible,
}: {
  fromAngle: number;
  visible: boolean;
}) => {
  const rad = (fromAngle * Math.PI) / 180;
  const orbitRadius = 260;
  const startX = 50 + (Math.cos(rad) * orbitRadius * 100) / 700;
  const startY = 50 + (Math.sin(rad) * orbitRadius * 100) / 600;

  return (
    <AnimatePresence>
      {visible && (
        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none z-15"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <defs>
            <linearGradient id={`line-grad-${fromAngle}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsla(var(--primary), 0.5)" />
              <stop offset="100%" stopColor="hsla(var(--primary), 0)" />
            </linearGradient>
            <filter id={`glow-${fromAngle}`}>
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <line
            x1={`${startX}%`}
            y1={`${startY}%`}
            x2="50%"
            y2="48%"
            stroke={`url(#line-grad-${fromAngle})`}
            strokeWidth="1.5"
            filter={`url(#glow-${fromAngle})`}
          />
        </motion.svg>
      )}
    </AnimatePresence>
  );
};

const OrbitalPill = ({
  icon: Icon,
  text,
  angle,
  index,
  hoveredIndex,
  onHover,
}: {
  icon: typeof Users;
  text: string;
  angle: number;
  index: number;
  hoveredIndex: number | null;
  onHover: (i: number | null) => void;
}) => {
  const isTop = angle < 0;
  const tilt = isTop ? (angle < -90 ? -5 : 5) : angle > 90 ? 5 : -5;
  const scale = isTop ? 0.94 : 1.04;
  const isHovered = hoveredIndex === index;
  const isFaded = hoveredIndex !== null && hoveredIndex !== index;

  // Position pills in orbital layout
  const rad = (angle * Math.PI) / 180;
  const orbitX = Math.cos(rad) * 280;
  const orbitY = Math.sin(rad) * 220;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      className="absolute z-20 hidden lg:block"
      style={{
        left: `calc(50% + ${orbitX}px)`,
        top: `calc(48% + ${orbitY}px)`,
        transform: `translate(-50%, -50%)`,
      }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4 + index * 0.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.08 : isFaded ? 0.97 : scale,
            opacity: isFaded ? 0.55 : 1,
            rotate: tilt,
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex items-center gap-4 rounded-full px-7 py-4 cursor-default"
          style={{
            backgroundColor: isHovered ? "rgba(24, 24, 37, 0.8)" : "rgba(24, 24, 37, 0.6)",
            backdropFilter: isHovered ? "blur(24px)" : "blur(16px)",
            border: isHovered
              ? "1px solid rgba(124, 58, 237, 0.5)"
              : "1px solid rgba(124, 58, 237, 0.25)",
            boxShadow: isHovered
              ? "0 4px 30px rgba(124, 58, 237, 0.25), 0 0 20px rgba(124, 58, 237, 0.15)"
              : "0 4px 20px rgba(0, 0, 0, 0.3)",
            transformStyle: "preserve-3d",
            perspective: "600px",
          }}
        >
          <Icon size={24} className="text-primary shrink-0" />
          <span className="text-base font-semibold text-foreground whitespace-nowrap">{text}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const AuthoritySection = () => {
  const [hoveredPill, setHoveredPill] = useState<number | null>(null);

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#0B0B0F" }}>
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: 800,
            height: 800,
            borderRadius: "50%",
            background: "radial-gradient(circle, hsla(var(--primary), 0.14) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <BackgroundParticles />

      <div className="container relative z-10 max-w-6xl space-y-12">
        {/* Heading */}
        <div className="text-center space-y-5">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-[0.3em] uppercase"
            style={{ color: "#A855F7", opacity: 0.8 }}
          >
            Your Mentor
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-tight"
          >
            Learn From Someone Who's
            <br />
            <span
              className="text-gradient"
              style={{ filter: "drop-shadow(0 0 25px hsla(var(--primary), 0.5))" }}
            >
              Done It
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg max-w-xl mx-auto"
            style={{ color: "#B8B8C0" }}
          >
            Built an audience. Worked with brands. Now teaching you the system.
          </motion.p>

          {/* CTA directly below subtext */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(124, 58, 237, 0.3)",
                  "0 0 35px rgba(124, 58, 237, 0.5)",
                  "0 0 20px rgba(124, 58, 237, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block rounded-full"
            >
              <Button variant="gradient" size="lg" className="rounded-full" asChild>
                <a href="#pricing">
                  Enroll Now <ArrowRight size={18} />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Central orbital area */}
        <div className="relative flex justify-center !mt-0" style={{ minHeight: 560 }}>
          <RotatingRings />

          {/* Connection lines */}
          {pills.map((pill, i) => (
            <ConnectionLine key={`line-${i}`} fromAngle={pill.angle} visible={hoveredPill === i} />
          ))}

          {/* Orbital pills */}
          {pills.map((pill, i) => (
            <OrbitalPill
              key={pill.text}
              icon={pill.icon}
              text={pill.text}
              angle={pill.angle}
              index={i}
              hoveredIndex={hoveredPill}
              onHover={setHoveredPill}
            />
          ))}

          {/* Creator image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 flex justify-center"
          >
            {/* Glow behind image */}
            <div
              className="absolute bottom-0 left-1/2"
              style={{
                width: 400,
                height: 400,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, rgba(124, 58, 237, 0.1) 45%, transparent 70%)",
                filter: "blur(40px)",
                transform: "translate(-50%, 10%)",
              }}
            />
            <motion.img
              src={mentorImage}
              alt="Ajay Nomad — Your Mentor"
              className="relative z-10 w-[300px] sm:w-[340px] lg:w-[380px] object-contain"
              animate={{ scale: [1.05, 1.08, 1.05] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                filter:
                  "drop-shadow(0 0 50px rgba(124, 58, 237, 0.25)) contrast(1.05)",
              }}
            />
          </motion.div>

          {/* Mobile pills */}
          <div className="lg:hidden absolute bottom-0 left-0 right-0 z-20">
            <div className="grid grid-cols-2 gap-3 px-4">
              {pills.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 rounded-full px-4 py-2.5"
                  style={{
                    backgroundColor: "rgba(24, 24, 37, 0.6)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(124, 58, 237, 0.25)",
                  }}
                >
                  <Icon size={14} className="text-primary shrink-0" />
                  <span className="text-xs font-medium text-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
