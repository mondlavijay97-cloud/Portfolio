import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Briefcase, UserCheck, DollarSign } from "lucide-react";

const outcomes = [
  { icon: UserCheck, text: "Build personal brand" },
  { icon: Briefcase, text: "Get freelance clients" },
  { icon: TrendingUp, text: "Land better jobs" },
  { icon: DollarSign, text: "Create income streams" },
];

const words = ["Skill", "Leverage", "Opportunity"];

/* Animated dots that travel along the connector line */
const FlowDots = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
        style={{ background: "hsl(var(--primary))", boxShadow: "0 0 8px hsl(var(--primary) / 0.6)" }}
        animate={{ left: ["-4%", "104%"] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: i * 0.8,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

const OpportunitySection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "hsl(var(--background))" }}>
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(var(--primary) / 0.06) 0%, transparent 70%)" }}
      />

      <div className="container max-w-6xl relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl font-heading">
            Content is the{" "}
            <span className="text-gradient">New Skill</span>
          </h2>
        </motion.div>

        {/* Horizontal flow: CONTENT → line → 2x2 grid */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
          {/* LEFT — Core pill */}
          <motion.div
            className="shrink-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="px-10 py-6 rounded-2xl font-heading text-xl font-bold tracking-wider text-primary-foreground"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-bright)))",
                boxShadow: "0 0 40px hsl(var(--primary) / 0.25)",
              }}
            >
              CONTENT
            </div>
          </motion.div>

          {/* CENTER — Connector line (hidden on mobile) */}
          <motion.div
            className="hidden lg:block relative flex-1 mx-4"
            style={{ height: 2 }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div
              className="w-full h-full origin-left"
              style={{
                background: "linear-gradient(90deg, hsl(var(--primary) / 0.6), hsl(var(--primary) / 0.15))",
              }}
            />
            <FlowDots />
          </motion.div>

          {/* Mobile connector (vertical) */}
          <motion.div
            className="lg:hidden relative w-0.5 h-12"
            style={{ background: "linear-gradient(180deg, hsl(var(--primary) / 0.6), hsl(var(--primary) / 0.1))" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />

          {/* RIGHT — 2x2 outcome grid */}
          <div className="grid grid-cols-2 gap-4 shrink-0">
            {outcomes.map(({ icon: Icon, text }, i) => {
              const isHovered = hovered === i;
              return (
                <motion.div
                  key={text}
                  className="cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.04 }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    className="flex items-center gap-3 rounded-xl px-5 py-4 transition-shadow duration-300"
                    style={{
                      background: "hsl(var(--surface))",
                      boxShadow: isHovered
                        ? "0 8px 30px hsl(var(--primary) / 0.12), 0 2px 10px hsl(0 0% 0% / 0.3)"
                        : "0 2px 8px hsl(0 0% 0% / 0.2)",
                    }}
                  >
                    <div
                      className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
                      style={{ background: "hsl(var(--primary) / 0.1)" }}
                    >
                      <Icon size={18} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">{text}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Final statement */}
        <div className="text-center mt-20">
          <motion.p
            className="text-lg sm:text-xl font-semibold font-heading"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Content ={" "}
            {words.map((word, i) => (
              <motion.span
                key={word}
                className="text-gradient"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
              >
                {word}
                {i < words.length - 1 && <span className="text-foreground"> + </span>}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;
