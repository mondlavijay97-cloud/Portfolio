import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Users, Award, Shield, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import mentorImage from "@/assets/vijay_kumar_profile.png";

const pills = [
  { icon: Users, text: "8+ Years Experience", position: "top-left" },
  { icon: Award, text: "Worked with 100+ Brands", position: "top-right" },
  { icon: Shield, text: "15M+ Collective Views", position: "bottom-left" },
  { icon: BookOpen, text: "Multi-Platform Expert", position: "bottom-right" },
] as const;

// Define specific delays and durations for gentle floating motion offsets
const pillPositions = {
  "top-left": { desktop: "top-[15%] left-[-22%]", delay: 0, duration: 4.5 },
  "top-right": { desktop: "top-[15%] right-[-22%]", delay: 0.8, duration: 5.2 },
  "bottom-left": { desktop: "bottom-[20%] left-[-16%]", delay: 1.6, duration: 5.8 },
  "bottom-right": { desktop: "bottom-[20%] right-[-16%]", delay: 2.4, duration: 6.5 },
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
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`absolute ${pos.desktop} z-20 hidden lg:block`}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: pos.duration, repeat: Infinity, ease: "easeInOut", delay: pos.delay }}
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
          <Icon size={24} className="text-primary shrink-0" />
          <span className="text-base font-semibold text-foreground whitespace-nowrap">{text}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ConcentricRings = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ top: "-15%" }}>
    {/* Ripple waves — matching portrait design */}
    {[0, 1, 2, 3].map((i) => (
      <motion.div
        key={`hero-ripple-${i}`}
        className="absolute rounded-full"
        style={{
          width: 140,
          height: 140,
          border: "1.5px solid rgba(124, 58, 237, 0.55)",
        }}
        animate={{ scale: [0.8, 2.5], opacity: [0, 0.45, 0] }}
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

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-12">
      {/* Ambient glows using existing palette */}
      <div className="absolute top-10 left-1/4 w-[400px] h-[400px] rounded-full bg-[#7C3AED]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] rounded-full bg-[#A855F7]/10 blur-[100px] pointer-events-none" />

      {/* Grid restructured to 50% / 50% on desktop with cinematic wide spacing and horizontal offsets */}
      <div className="container max-w-[1340px] grid gap-12 lg:grid-cols-2 lg:gap-24 items-center relative z-10">
        
        {/* Left Side: Editorial Content - Shifted slightly left and vertically balanced */}
        <div className="space-y-8 animate-fade-up lg:-translate-x-10 lg:-translate-y-4">
          {/* Glowing small tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#A855F7] inline-block bg-[#7C3AED]/10 border border-[#7C3AED]/25 rounded-full px-4 py-1.5 shadow-[0_0_15px_rgba(124,58,237,0.15)]">
              Vijay Kumar
            </span>
          </motion.div>

          {/* Heading - Significantly enlarged and refined to 3 lines maximum with premium tracking and leading */}
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tighter sm:text-5xl lg:text-[4.5rem] text-white">
            Crafting Videos That
            <br />
            Capture Attention &
            <br />
            <span className="text-gradient drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]">
              Drive Results
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
            Professional Video Editor with 8+ years of experience creating high-performing videos for brands, businesses, and creators.
          </p>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg pt-2">
            {[
              "8+ Years Experience",
              "Motion Graphics Specialist",
              "Professional Color Grading",
              "Multi-Platform Content Expert"
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3 text-sm text-foreground/90 font-medium"
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 shadow-[0_0_8px_rgba(124,58,237,0.2)]">
                  <Check size={12} className="text-[#A855F7]" />
                </div>
                <span>{text}</span>
              </motion.div>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="gradient" size="xl" asChild className="glow-purple">
              <a href="#modules">
                View My Work <ArrowRight size={18} className="ml-1" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild className="hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/5 transition-all">
              <a href="#contact">Let's Work Together</a>
            </Button>
          </div>
        </div>

        {/* Right Side: Cyber Portrait Showcase - Shifted slightly right to balance the wider cinematic layout */}
        <div className="relative w-full flex justify-center items-center min-h-[540px] !mt-0 lg:translate-x-10">
          <ConcentricRings />

          {/* Floating pills (visible on desktop) */}
          {pills.map((pill) => (
            <FloatingPill key={pill.text} {...pill} />
          ))}

          {/* Portrait Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 flex justify-center"
          >
            {/* Subtle radial background glow */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-0"
              style={{
                width: 440,
                height: 440,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(124, 58, 237, 0.22) 0%, rgba(124, 58, 237, 0.05) 50%, transparent 70%)",
                filter: "blur(40px)",
                transform: "translate(-50%, 10%)",
              }}
            />

            {/* Futuristic Halo Glow behind the head */}
            <div
              className="absolute top-[8%] left-1/2 -translate-x-1/2 w-52 h-52 rounded-full pointer-events-none z-0"
              style={{
                background: "radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(59, 130, 246, 0.12) 55%, transparent 75%)",
                filter: "blur(18px)",
                transform: "translateX(-50%)",
              }}
            />

            {/* Wrapper for soft, slow floating effect (subtle vertical movement loops every 7 seconds) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 flex justify-center"
            >
              <img
                src={mentorImage}
                alt="Vijay Kumar — Senior Video Editor"
                className="w-[360px] sm:w-[420px] lg:w-[480px] object-contain rounded-none select-none pointer-events-none"
                style={{
                  maskImage: "linear-gradient(to bottom, black 82%, transparent 99%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 82%, transparent 99%)",
                  filter: "drop-shadow(0 0 35px rgba(124, 58, 237, 0.32)) drop-shadow(0 0 15px rgba(59, 130, 246, 0.15))",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Mobile pills layout (rendered on mobile/tablet screen widths) */}
          <div className="lg:hidden absolute bottom-[-40px] left-0 right-0 z-20">
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
      </div>
    </section>
  );
};

export default HeroSection;
