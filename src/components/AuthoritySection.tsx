import { useState } from "react";
import { Users, Award, Shield, BookOpen, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import mentorImage from "@/assets/ajay_nomad_bgless.png";

/* ─── pill config: angle on the orbit circle (0° = right, 90° = bottom) ─── */
const pills = [
  { icon: Users,    text: "80K+ audience built",       slot: "top-left"     as const },
  { icon: Award,    text: "Worked with top brands",    slot: "top-right"    as const },
  { icon: Shield,   text: "Real-world strategies",     slot: "bottom-left"  as const },
  { icon: BookOpen, text: "No theory — all execution", slot: "bottom-right" as const },
];

/* Strict symmetric positions — all measured from the centre of the orbit area */
const slotStyles: Record<string, { x: number; y: number; rotate: number; scale: number }> = {
  "top-left":     { x: -300, y: -140, rotate: -6, scale: 0.92 },
  "top-right":    { x:  300, y: -140, rotate:  6, scale: 0.92 },
  "bottom-left":  { x: -300, y:  160, rotate:  4, scale: 1.05 },
  "bottom-right": { x:  300, y:  160, rotate: -4, scale: 1.05 },
};

/* ─── Background particles ─── */
const BackgroundParticles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {Array.from({ length: 50 }).map((_, i) => (
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
        animate={{ opacity: [0, 0.45, 0], y: [0, -30 - Math.random() * 40] }}
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

/* ─── Concentric orbit rings ─── */
const OrbitRings = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    {[260, 360, 460].map((size, i) => (
      <motion.div
        key={size}
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          border: `1px solid hsla(var(--primary), ${0.14 - i * 0.03})`,
          boxShadow: `0 0 ${8 + i * 4}px hsla(var(--primary), ${0.07 - i * 0.015})`,
        }}
        animate={{ scale: [1, 1.025, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 7 + i * 2, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}
    {/* Expanding ripple pulses */}
    {[0, 1, 2].map((i) => (
      <motion.div
        key={`rp-${i}`}
        className="absolute rounded-full"
        style={{ width: 180, height: 180, border: "1px solid hsla(var(--primary), 0.18)" }}
        animate={{ scale: [1, 3], opacity: [0.25, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, delay: i * 1.8, ease: "easeOut" }}
      />
    ))}
  </div>
);

/* ─── Hover connection line (pill → centre) ─── */
const ConnectionLine = ({ x, y, visible }: { x: number; y: number; visible: boolean }) => {
  // Convert pixel offsets to SVG-friendly percentages (viewBox 800×600)
  const cx = 400 + x;
  const cy = 300 + y;
  return (
    <AnimatePresence>
      {visible && (
        <motion.svg
          viewBox="0 0 800 600"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 15 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <defs>
            <linearGradient id={`lg-${x}-${y}`} x1={cx} y1={cy} x2="400" y2="280" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(124,58,237,0.45)" />
              <stop offset="100%" stopColor="rgba(124,58,237,0)" />
            </linearGradient>
            <filter id={`gl-${x}-${y}`}>
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>
          <line
            x1={cx} y1={cy} x2="400" y2="280"
            stroke={`url(#lg-${x}-${y})`}
            strokeWidth="1.5"
            filter={`url(#gl-${x}-${y})`}
          />
        </motion.svg>
      )}
    </AnimatePresence>
  );
};

/* ─── Single orbital pill ─── */
const OrbitalPill = ({
  icon: Icon,
  text,
  slot,
  index,
  hoveredIndex,
  onHover,
}: {
  icon: typeof Users;
  text: string;
  slot: string;
  index: number;
  hoveredIndex: number | null;
  onHover: (i: number | null) => void;
}) => {
  const s = slotStyles[slot];
  const isHovered = hoveredIndex === index;
  const isFaded = hoveredIndex !== null && hoveredIndex !== index;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.12 }}
      className="absolute z-20 hidden lg:block"
      style={{
        left: "50%",
        top: "50%",
        marginLeft: s.x,
        marginTop: s.y,
        transform: "translate(-50%, -50%)",
      }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5 + index * 0.7, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.08 : isFaded ? s.scale * 0.97 : s.scale,
            rotate: s.rotate,
            opacity: isFaded ? 0.55 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex items-center gap-4 rounded-full px-7 py-4 cursor-default"
          style={{
            backgroundColor: isHovered ? "rgba(24,24,37,0.8)" : "rgba(24,24,37,0.6)",
            backdropFilter: isHovered ? "blur(24px)" : "blur(16px)",
            border: isHovered
              ? "1px solid rgba(124,58,237,0.5)"
              : "1px solid rgba(124,58,237,0.25)",
            boxShadow: isHovered
              ? "0 4px 30px rgba(124,58,237,0.25), 0 0 20px rgba(124,58,237,0.15)"
              : "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          <Icon size={24} className="text-primary shrink-0" />
          <span className="text-base font-semibold text-foreground whitespace-nowrap">{text}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Main section ─── */
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
            background: "radial-gradient(circle, hsla(var(--primary),0.14) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <BackgroundParticles />

      <div className="container relative z-10 max-w-6xl">
        {/* ── Heading block ── */}
        <div className="text-center space-y-5 mb-8">
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
            <span className="text-gradient" style={{ filter: "drop-shadow(0 0 25px hsla(var(--primary),0.5))" }}>
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
        </div>

        {/* ── Orbital area (fixed aspect box) ── */}
        <div className="relative mx-auto" style={{ maxWidth: 800, aspectRatio: "4/3" }}>
          <OrbitRings />

          {/* Connection lines */}
          {pills.map((p, i) => (
            <ConnectionLine
              key={`cl-${i}`}
              x={slotStyles[p.slot].x}
              y={slotStyles[p.slot].y}
              visible={hoveredPill === i}
            />
          ))}

          {/* Pills */}
          {pills.map((p, i) => (
            <OrbitalPill
              key={p.text}
              icon={p.icon}
              text={p.text}
              slot={p.slot}
              index={i}
              hoveredIndex={hoveredPill}
              onHover={setHoveredPill}
            />
          ))}

          {/* ── Mentor image (dead centre) ── */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Glow */}
            <div
              className="absolute"
              style={{
                width: 420,
                height: 420,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(124,58,237,0.3) 0%, rgba(124,58,237,0.08) 50%, transparent 70%)",
                filter: "blur(40px)",
                transform: "translateY(5%)",
              }}
            />
            <motion.img
              src={mentorImage}
              alt="Ajay Nomad — Your Mentor"
              className="relative z-10 w-[320px] sm:w-[360px] lg:w-[420px] object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                maskImage: "linear-gradient(to bottom, black 72%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 72%, transparent 100%)",
                filter: "drop-shadow(0 0 50px rgba(124,58,237,0.25)) contrast(1.05)",
              }}
            />
          </div>

          {/* Mobile pills */}
          <div className="lg:hidden absolute bottom-0 left-0 right-0 z-20">
            <div className="grid grid-cols-2 gap-3 px-4">
              {pills.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 rounded-full px-4 py-2.5"
                  style={{
                    backgroundColor: "rgba(24,24,37,0.6)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(124,58,237,0.25)",
                  }}
                >
                  <Icon size={14} className="text-primary shrink-0" />
                  <span className="text-xs font-medium text-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA below image ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-center mt-6"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(124,58,237,0.3)",
                "0 0 35px rgba(124,58,237,0.5)",
                "0 0 20px rgba(124,58,237,0.3)",
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
    </section>
  );
};

export default AuthoritySection;
