import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import bonusScripting from "@/assets/bonus-scripting.jpg";
import bonusAutomation from "@/assets/bonus-automation.jpg";
import bonusGenerator from "@/assets/bonus-generator.jpg";
import bonusTemplates from "@/assets/bonus-templates.jpg";

const bonuses = [
  {
    title: "Viral Scripting Frameworks",
    description: "Proven frameworks for viral hooks",
    image: bonusScripting,
  },
  {
    title: "AI Automation Workflows",
    description: "Automate your content system",
    image: bonusAutomation,
  },
  {
    title: "Script Generator GPT",
    description: "Generate scripts instantly",
    image: bonusGenerator,
  },
  {
    title: "Content Templates",
    description: "Ready-to-use high-performing templates",
    image: bonusTemplates,
  },
];

const BonusesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const progress = useTransform(scrollYProgress, [0.15, 0.65], [0, 100]);
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const unsubscribe = progress.on("change", (v) => setProgressValue(v));
    return unsubscribe;
  }, [progress]);

  const getActiveIndex = () => {
    if (progressValue >= 87.5) return 3;
    if (progressValue >= 62.5) return 2;
    if (progressValue >= 37.5) return 1;
    if (progressValue >= 12.5) return 0;
    return -1;
  };

  const activeIndex = getActiveIndex();

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-glow pointer-events-none" />

      <div className="container max-w-6xl relative z-10 space-y-14">
        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="text-gradient">Bonuses</span> Included
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto">
            Everything you need to execute — unlocked step by step
          </p>
        </div>

        {/* Unlocking label */}
        <div className="text-center">
          <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
            Unlocking Bonuses...{" "}
            <span className="text-primary font-bold">{Math.min(Math.round(progressValue), 100)}%</span>
          </span>
        </div>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden md:block">
          {/* Progress line + nodes */}
          <div className="relative mx-8 mb-10">
            {/* Base line */}
            <div className="h-[2px] w-full rounded-none" style={{ background: "hsl(var(--muted))" }} />
            {/* Animated fill */}
            <motion.div
              className="absolute top-0 left-0 h-[2px] rounded-none"
              style={{
                width: `${Math.min(progressValue, 100)}%`,
                background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-bright)))",
                boxShadow: "0 0 12px hsl(var(--primary) / 0.6)",
              }}
            />

            {/* Nodes */}
            {bonuses.map((_, i) => {
              const pos = (i / (bonuses.length - 1)) * 100;
              const isActive = i <= activeIndex;
              return (
                <div
                  key={i}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                  style={{ left: `${pos}%` }}
                >
                  {/* Outer ring */}
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center transition-all duration-500"
                    style={{
                      border: `2px solid ${isActive ? "hsl(var(--primary))" : "hsl(var(--muted))"}`,
                      boxShadow: isActive ? "0 0 16px hsl(var(--primary) / 0.5)" : "none",
                      transform: isActive ? "scale(1.3)" : "scale(1)",
                    }}
                  >
                    {/* Inner dot */}
                    <div
                      className="w-2.5 h-2.5 rounded-full transition-all duration-500"
                      style={{
                        background: isActive
                          ? "hsl(var(--primary))"
                          : "hsl(var(--muted))",
                      }}
                    />
                  </div>
                  {/* Pulse ring for active */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ border: "1px solid hsl(var(--primary))" }}
                      animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-4 gap-5">
            {bonuses.map((bonus, i) => {
              const isActive = i <= activeIndex;
              return (
                <motion.div
                  key={bonus.title}
                  className="rounded-xl overflow-hidden transition-all duration-500"
                  style={{
                    background: "hsl(var(--surface))",
                    border: `1px solid ${isActive ? "hsl(var(--primary) / 0.5)" : "hsl(var(--border))"}`,
                    boxShadow: isActive ? "0 0 25px hsl(var(--primary) / 0.2)" : "none",
                  }}
                  animate={{
                    y: isActive ? -6 : 0,
                    scale: isActive ? 1.03 : 1,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={bonus.image}
                      alt={bonus.title}
                      loading="lazy"
                      width={640}
                      height={512}
                      className="w-full h-full object-cover transition-all duration-500"
                      style={{
                        filter: isActive ? "brightness(1.1)" : "brightness(0.5)",
                        opacity: isActive ? 1 : 0.5,
                      }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(to top, hsl(var(--surface)), transparent 50%)",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-1.5">
                    <h3 className="font-heading font-semibold text-foreground text-sm lg:text-base">
                      {bonus.title}
                    </h3>
                    <p className="text-muted-foreground text-xs lg:text-sm">
                      {bonus.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden space-y-0 relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-[2px]"
            style={{ background: "hsl(var(--muted))" }}
          />
          <motion.div
            className="absolute left-5 top-0 w-[2px]"
            style={{
              height: `${Math.min(progressValue, 100)}%`,
              background: "linear-gradient(180deg, hsl(var(--primary)), hsl(var(--primary-bright)))",
              boxShadow: "0 0 12px hsl(var(--primary) / 0.6)",
            }}
          />

          {bonuses.map((bonus, i) => {
            const isActive = i <= activeIndex;
            return (
              <div key={bonus.title} className="relative pl-14 pb-8">
                {/* Node */}
                <div className="absolute left-5 top-4 -translate-x-1/2 z-10">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center transition-all duration-500"
                    style={{
                      border: `2px solid ${isActive ? "hsl(var(--primary))" : "hsl(var(--muted))"}`,
                      boxShadow: isActive ? "0 0 12px hsl(var(--primary) / 0.5)" : "none",
                      background: "hsl(var(--background))",
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full transition-all duration-500"
                      style={{
                        background: isActive ? "hsl(var(--primary))" : "hsl(var(--muted))",
                      }}
                    />
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  className="rounded-xl overflow-hidden transition-all duration-500"
                  style={{
                    background: "hsl(var(--surface))",
                    border: `1px solid ${isActive ? "hsl(var(--primary) / 0.5)" : "hsl(var(--border))"}`,
                    boxShadow: isActive ? "0 0 20px hsl(var(--primary) / 0.15)" : "none",
                  }}
                  animate={{ scale: isActive ? 1.02 : 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={bonus.image}
                      alt={bonus.title}
                      loading="lazy"
                      width={640}
                      height={512}
                      className="w-full h-full object-cover transition-all duration-500"
                      style={{
                        filter: isActive ? "brightness(1.1)" : "brightness(0.5)",
                        opacity: isActive ? 1 : 0.5,
                      }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(to top, hsl(var(--surface)), transparent 50%)",
                      }}
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <h3 className="font-heading font-semibold text-foreground text-sm">
                      {bonus.title}
                    </h3>
                    <p className="text-muted-foreground text-xs">{bonus.description}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Button variant="gradient" size="xl" className="group" asChild>
            <a href="#pricing">
              Get All Bonuses Now
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
