import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Target, BookOpen, Palette, TrendingUp, DollarSign, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

import stepLearn from "@/assets/step-learn.jpg";
import stepCreate from "@/assets/step-create.jpg";
import stepGrow from "@/assets/step-grow.jpg";
import stepMonetize from "@/assets/step-monetize.jpg";

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
    image: stepLearn,
    step: 1,
  },
  {
    icon: Palette,
    title: "Create",
    description: "Build compelling content",
    image: stepCreate,
    step: 2,
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description: "Scale your audience fast",
    image: stepGrow,
    step: 3,
  },
  {
    icon: DollarSign,
    title: "Monetize",
    description: "Turn content into income",
    image: stepMonetize,
    step: 4,
  },
];

const ShowcaseCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const Icon = step.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.15 + index * 0.12 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Outer glow on hover */}
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-primary/30 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />

      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative rounded-3xl overflow-hidden"
        style={{ backgroundColor: "hsl(240, 24%, 8%)" }}
      >
        {/* Glass border */}
        <div className="absolute inset-0 rounded-3xl border border-white/[0.06] group-hover:border-primary/30 transition-colors duration-500 pointer-events-none z-20" />

        {/* Inner gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-transparent to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

        <div className="relative z-10 p-5 space-y-4">
          {/* Top bar: Icon + Arrow */}
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
              <Icon size={18} className="text-primary" />
            </div>

            <motion.div
              animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
              transition={{ duration: 0.2 }}
              className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:-rotate-45" />
            </motion.div>
          </div>

          {/* Title */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground/50 font-heading mb-1">
              STEP {step.step}
            </p>
            <h3
              className="text-2xl font-bold font-heading bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-bright, 263 70% 60%)))",
              }}
            >
              {step.title}
            </h3>
          </div>

          {/* Image */}
          <div className="relative rounded-xl overflow-hidden">
            {/* Blurred background layer */}
            <div className="absolute inset-0 z-0">
              <img
                src={step.image}
                alt=""
                className="w-full h-full object-cover blur-xl scale-110 opacity-40"
                aria-hidden="true"
              />
            </div>

            <motion.img
              src={step.image}
              alt={`${step.title} - ${step.description}`}
              loading="lazy"
              width={640}
              height={512}
              className="relative z-10 w-full h-40 object-cover rounded-xl"
              animate={isHovered ? { scale: 1.06 } : { scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />

            {/* Image overlay gradient */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[hsl(240,24%,8%)/0.6] via-transparent to-transparent pointer-events-none rounded-xl" />
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
        </div>

        {/* Bottom glow accent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </motion.div>
  );
};

const FlowLine = () => (
  <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 hidden lg:block pointer-events-none">
    <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
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

const CourseIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "hsl(240, 20%, 4%)" }}>
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full bg-primary/[0.14] blur-[140px]" />
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

        {/* Cards grid */}
        <div className="relative">
          <FlowLine />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <ShowcaseCard key={step.title} step={step} index={i} />
            ))}
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
