import { Users, Award, Shield, BookOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import mentorImage from "@/assets/ajay_nomad_bgless.png";

const pills = [
  { icon: Users, text: "80K+ audience built", position: "top-left" },
  { icon: Award, text: "Worked with top brands", position: "top-right" },
  { icon: Shield, text: "Real-world strategies", position: "bottom-left" },
  { icon: BookOpen, text: "No theory — all execution", position: "bottom-right" },
] as const;

const pillPositions = {
  "top-left": { desktop: "top-[20%] left-[8%]", delay: 0 },
  "top-right": { desktop: "top-[20%] right-[8%]", delay: 0.8 },
  "bottom-left": { desktop: "bottom-[30%] left-[8%]", delay: 1.6 },
  "bottom-right": { desktop: "bottom-[30%] right-[8%]", delay: 2.4 },
};

const FloatingPill = ({
  icon: Icon,
  text,
  position,
}: {
  icon: typeof Users;
  text: string;
  position: keyof typeof pillPositions;
}) => {
  const pos = pillPositions[position];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`absolute ${pos.desktop} z-20 hidden lg:block`}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4 + pos.delay, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          whileHover={{ y: -4, scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="group flex items-center gap-4 rounded-full px-7 py-4 cursor-default transition-all duration-300"
          style={{
            backgroundColor: "rgba(24, 24, 37, 0.6)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(124, 58, 237, 0.2)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = "rgba(124, 58, 237, 0.5)";
            el.style.boxShadow = "0 4px 30px rgba(124, 58, 237, 0.2), 0 0 15px rgba(124, 58, 237, 0.1)";
            el.style.backdropFilter = "blur(24px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = "rgba(124, 58, 237, 0.2)";
            el.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
            el.style.backdropFilter = "blur(16px)";
          }}
        >
          <Icon size={18} className="text-primary shrink-0" />
          <span className="text-sm font-medium text-foreground whitespace-nowrap">{text}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ConcentricRings = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ top: "-5%" }}>
    {[280, 380, 480].map((size, i) => (
      <motion.div
        key={size}
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          border: `1px solid hsla(var(--primary), ${0.12 - i * 0.03})`,
          boxShadow: `0 0 ${8 + i * 4}px hsla(var(--primary), ${0.06 - i * 0.015})`,
        }}
        animate={{ scale: [1, 1.03, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}
    {/* Expanding ripple waves */}
    {[0, 1, 2].map((i) => (
      <motion.div
        key={`ripple-${i}`}
        className="absolute rounded-full"
        style={{
          width: 200,
          height: 200,
          border: "1px solid hsla(var(--primary), 0.2)",
        }}
        animate={{ scale: [1, 3], opacity: [0.3, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: i * 1.7, ease: "easeOut" }}
      />
    ))}
  </div>
);

const BackgroundParticles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: Math.random() * 3 + 1,
          height: Math.random() * 3 + 1,
          backgroundColor: "hsl(var(--primary))",
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: 0,
        }}
        animate={{
          opacity: [0, 0.4, 0],
          y: [0, -30 - Math.random() * 40],
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

const AuthoritySection = () => (
  <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#0B0B0F" }}>
    {/* Radial glow behind center */}
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, hsla(var(--primary), 0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>

    <BackgroundParticles />

    <div className="container relative z-10 max-w-5xl space-y-12">
      {/* Heading */}
      <div className="text-center space-y-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-semibold tracking-[0.25em] uppercase"
          style={{ color: "hsl(var(--primary))", opacity: 0.7 }}
        >
          Your Mentor
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading"
        >
          Learn From Someone Who's
          <br />
          <span className="text-gradient" style={{ filter: "drop-shadow(0 0 20px hsla(var(--primary), 0.4))" }}>
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

      {/* Central image + floating pills */}
      <div className="relative flex justify-center !mt-0" style={{ minHeight: 520 }}>
        <ConcentricRings />

        {/* Floating pills */}
        {pills.map((pill) => (
          <FloatingPill key={pill.text} {...pill} />
        ))}

        {/* Creator image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 flex justify-center"
        >
          {/* Glow behind image */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
            style={{
              width: 350,
              height: 350,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, rgba(124, 58, 237, 0.08) 50%, transparent 70%)",
              filter: "blur(40px)",
              transform: "translate(-50%, 10%)",
            }}
          />
          <img
            src={mentorImage}
            alt="Ajay Nomad — Your Mentor"
            className="relative z-10 w-[280px] sm:w-[320px] lg:w-[360px] object-contain"
            style={{
              maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
              filter: "drop-shadow(0 0 40px rgba(124, 58, 237, 0.2))",
            }}
          />
        </motion.div>

        {/* Mobile pills — 2 per row */}
        <div className="lg:hidden absolute bottom-0 left-0 right-0 z-20">
          <div className="grid grid-cols-2 gap-3 px-4">
            {pills.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 rounded-full px-4 py-2.5"
                style={{
                  backgroundColor: "rgba(24, 24, 37, 0.6)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(124, 58, 237, 0.2)",
                }}
              >
                <Icon size={14} className="text-primary shrink-0" />
                <span className="text-xs font-medium text-foreground">{text}</span>
              </div>
            ))}
          </div>
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
            Enroll Now <ArrowRight size={18} />
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default AuthoritySection;
