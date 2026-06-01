import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import storiesBanner from "@/assets/stories-banner.jpg";

const BackgroundParticles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {Array.from({ length: 50 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: Math.random() * 4 + 2,
          height: Math.random() * 4 + 2,
          backgroundColor: "hsl(var(--primary))",
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: 0,
        }}
        animate={{
          opacity: [0, 0.6, 0],
          y: [0, -40 - Math.random() * 60],
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
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, hsla(var(--primary), 0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>

    <BackgroundParticles />

    <div className="container relative z-10 max-w-6xl space-y-12">
      {/* Heading */}
      <div className="text-center space-y-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-semibold tracking-[0.25em] uppercase"
          style={{ color: "hsl(var(--primary))", opacity: 0.7 }}
        >
          Creative Director
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading"
        >
          An Editor Trusted By
          <br />
          <span className="text-gradient" style={{ filter: "drop-shadow(0 0 20px hsla(var(--primary), 0.4))" }}>
            Brands Worldwide
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
          Directing visual narratives that build massive organic traffic and drive industry results.
        </motion.p>
      </div>

      {/* Central banner */}
      <div className="relative w-full !mt-12 flex flex-col items-center justify-center">
        {/* Premium Portfolio Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 w-full md:w-[96%] lg:w-[94%] flex justify-center"
        >
          {/* Inner floating container */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.02,
              borderColor: "rgba(124, 58, 237, 0.6)",
              boxShadow: "0 0 50px rgba(124, 58, 237, 0.4), 0 10px 40px rgba(0, 0, 0, 0.6)",
            }}
            className="w-full rounded-[20px] md:rounded-[24px] overflow-hidden cursor-default transition-all duration-500 border border-violet-500/20 shadow-2xl relative bg-[#05010D]/40"
            style={{
              backdropFilter: "blur(12px)",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 20px rgba(124, 58, 237, 0.1)",
            }}
          >
            {/* Pulsing radial glow behind the card inside */}
            <motion.div
              className="absolute inset-0 pointer-events-none z-0 opacity-40 blur-[40px]"
              style={{
                background: "radial-gradient(circle at center, rgba(124, 58, 237, 0.35) 0%, transparent 70%)",
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Dark overlay between 20%-30% */}
            <div className="absolute inset-0 bg-black/25 z-10 pointer-events-none" />

            {/* Vignette effect overlay */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: "radial-gradient(circle, transparent 65%, rgba(5, 1, 13, 0.65) 100%)",
              }}
            />

            <img
              src={storiesBanner}
              alt="We Don't Just Edit, We Tell Stories — Vijay Kumar Creative Showcase"
              className="w-full h-full object-cover aspect-[2/1] relative z-0 select-none pointer-events-none"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center !mt-16"
      >
        <Button variant="gradient" size="lg" asChild>
          <a href="#contact">
            Book a Strategy Call <ArrowRight size={18} />
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default AuthoritySection;
