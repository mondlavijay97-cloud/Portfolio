import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Briefcase, UserCheck, DollarSign } from "lucide-react";

const blocks = [
  { icon: UserCheck, text: "Build personal brand", x: "-55%", y: "-60%" },
  { icon: Briefcase, text: "Get freelance clients", x: "55%", y: "-45%" },
  { icon: TrendingUp, text: "Land better jobs", x: "-50%", y: "50%" },
  { icon: DollarSign, text: "Create income streams", x: "52%", y: "65%" },
];

const words = ["Skill", "Leverage", "Opportunity"];

const OpportunitySection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "hsl(var(--background))" }}>
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(var(--primary) / 0.08) 0%, transparent 70%)" }}
      />

      <div className="container max-w-4xl relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-24"
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

        {/* Constellation layout */}
        <div className="relative flex items-center justify-center" style={{ minHeight: "380px" }}>
          {/* Center pill */}
          <motion.div
            className="relative z-10 px-8 py-4 rounded-full font-heading text-lg font-bold tracking-wider text-primary-foreground"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-bright)))",
              boxShadow: "0 0 30px hsl(var(--primary) / 0.3)",
            }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            CONTENT
          </motion.div>

          {/* Floating blocks */}
          {blocks.map(({ icon: Icon, text, x, y }, i) => {
            const isHovered = hovered === i;
            return (
              <motion.div
                key={text}
                className="absolute cursor-pointer"
                style={{ left: "50%", top: "50%" }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                animate={{
                  x, y,
                  translateY: isHovered ? "-8px" : "0px",
                  scale: isHovered ? 1.05 : 1,
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div
                    className="flex items-center gap-3 rounded-xl px-5 py-4 whitespace-nowrap transition-shadow duration-300"
                    style={{
                      background: "hsl(var(--surface))",
                      boxShadow: isHovered
                        ? "0 8px 30px hsl(var(--primary) / 0.15), 0 2px 8px hsl(0 0% 0% / 0.3)"
                        : "0 2px 8px hsl(0 0% 0% / 0.2)",
                    }}
                  >
                    <div
                      className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
                      style={{ background: "hsl(var(--primary) / 0.1)" }}
                    >
                      <Icon size={18} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{text}</span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
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
