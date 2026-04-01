import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Target, BookOpen, Palette, TrendingUp, DollarSign, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tags = [
  { icon: Sparkles, text: "Beginner friendly" },
  { icon: Zap, text: "No fluff" },
  { icon: Target, text: "Execution focused" },
];

const steps = [
  {
    icon: BookOpen,
    title: "Learn",
    description: "Master content fundamentals",
  },
  {
    icon: Palette,
    title: "Create",
    description: "Build compelling content",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description: "Scale your audience fast",
  },
  {
    icon: DollarSign,
    title: "Monetize",
    description: "Turn content into income",
  },
];

const FlowLine = () => (
  <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 hidden lg:block">
    <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/60"
        style={{ filter: "blur(2px)" }}
        animate={{
          left: ["-2%", "102%"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 4,
          delay: i * 1.3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const Icon = step.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
      whileHover={{ y: -8, scale: 1.04 }}
      className="relative z-10 group"
    >
      <div className="relative rounded-xl p-6 bg-[hsl(240,24%,11%)] border border-white/[0.08] backdrop-blur-sm overflow-hidden transition-shadow duration-300 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]">
        {/* Inner gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative space-y-4">
          {/* Step number */}
          <div className="text-xs font-semibold text-primary/50 font-heading tracking-widest">
            STEP {index + 1}
          </div>

          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
            <Icon size={22} className="text-primary" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold font-heading text-foreground">{step.title}</h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const CourseIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "hsl(240, 20%, 4%)" }}>
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/[0.12] blur-[120px]" />
      </div>

      <div ref={ref} className="container relative z-10 max-w-6xl space-y-16">
        {/* Heading */}
        <div className="text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold font-heading"
          >
            Introducing{" "}
            <span className="text-gradient" style={{ filter: "drop-shadow(0 0 20px rgba(124,58,237,0.4))" }}>
              Nomad School
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-lg mx-auto"
          >
            A simple system to start, grow & monetize content
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {tags.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/[0.06] text-sm text-muted-foreground hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 cursor-default"
              >
                <Icon size={14} className="text-primary" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Flow system */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <FlowLine />

          {/* Step cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <StepCard key={step.title} step={step} index={i} />
            ))}
          </div>

          {/* Vertical connector for mobile */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-primary/30 to-transparent sm:hidden pointer-events-none" />
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
            <a href="#modules">
              View Curriculum <ArrowRight size={18} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseIntro;
