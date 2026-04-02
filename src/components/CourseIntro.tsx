import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import stepLearn from "@/assets/step-learn.jpg";
import stepCreate from "@/assets/step-create.jpg";
import stepGrow from "@/assets/step-grow.jpg";
import stepMonetize from "@/assets/step-monetize.jpg";

const steps = [
  {
    num: "01",
    title: "Learn",
    description: "Master content fundamentals and build a strong creative foundation.",
    image: stepLearn,
  },
  {
    num: "02",
    title: "Create",
    description: "Build compelling content that resonates with your audience.",
    image: stepCreate,
  },
  {
    num: "03",
    title: "Grow",
    description: "Scale your reach and build a loyal community fast.",
    image: stepGrow,
  },
  {
    num: "04",
    title: "Monetize",
    description: "Turn your content into a sustainable income stream.",
    image: stepMonetize,
  },
];

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
    whileHover={{ y: -6, scale: 1.02 }}
    className="group relative overflow-hidden border transition-all duration-500"
    style={{
      backgroundColor: "#181825",
      borderColor: "rgba(124, 58, 237, 0.2)",
      borderRadius: "11px",
      boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
    }}
  >
    {/* Hover border glow */}
    <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 transition-all duration-500 pointer-events-none z-20" style={{ borderRadius: "11px" }} />
    <div className="absolute inset-0 group-hover:shadow-[0_8px_32px_rgba(124,58,237,0.12)] transition-all duration-500 pointer-events-none z-20" style={{ borderRadius: "11px" }} />

    <div className="relative p-6 space-y-4">
      {/* Step number + Title inline */}
      <div className="flex items-baseline gap-3">
        <span
          className="text-lg font-medium font-heading select-none shrink-0"
          style={{ color: "rgba(255,255,255,0.22)" }}
        >
          {step.num}
        </span>
        <h3 className="text-[22px] font-bold font-heading text-white group-hover:text-white/95 transition-colors duration-300">
          {step.title}
        </h3>
      </div>

      {/* Image */}
      <div className="relative overflow-hidden" style={{ borderRadius: "8px" }}>
        <motion.img
          src={step.image}
          alt={`${step.title} — ${step.description}`}
          loading="lazy"
          width={640}
          height={400}
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
          style={{ borderRadius: "8px" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181825]/50 via-transparent to-transparent pointer-events-none" style={{ borderRadius: "8px" }} />
        <div className="absolute inset-0 shadow-[inset_0_2px_10px_rgba(0,0,0,0.25)] pointer-events-none" style={{ borderRadius: "8px" }} />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.05] transition-colors duration-500 pointer-events-none" style={{ borderRadius: "8px" }} />
      </div>

      {/* Description */}
      <p className="text-[15px]" style={{ color: "#B8B8C0", lineHeight: 1.65 }}>
        {step.description}
      </p>
    </div>
  </motion.div>
);

const CourseIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "hsl(240, 20%, 4%)" }}>
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/[0.08] blur-[160px]" />
      </div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <div ref={ref} className="container relative z-10 max-w-6xl space-y-14">
        {/* Heading */}
        <div className="text-center space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-[0.25em] text-primary/70 font-heading uppercase"
          >
            Introducing
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold font-heading text-white"
          >
            <span className="text-gradient" style={{ filter: "drop-shadow(0 0 18px rgba(124,58,237,0.35))" }}>
              Nomad
            </span>{" "}
            School
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base max-w-md mx-auto"
            style={{ color: "#C4C4CC" }}
          >
            A simple system to start, grow & monetize content
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
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
