import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Recorded Course",
    price: "₹4,999",
    features: ["5-hour training", "Lifetime access", "All 7 modules", "Bonus resources"],
    highlighted: false,
  },
  {
    name: "Recorded + Live Support",
    price: "₹6,999",
    features: ["Everything in Recorded", "Live Q&A sessions", "Community access", "Personal feedback"],
    highlighted: true,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24 relative">
    <div className="absolute inset-0 bg-glow pointer-events-none" />
    <div className="container relative max-w-4xl mx-auto space-y-14 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl font-heading">
          Choose Your <span className="text-gradient">Plan</span>
        </h2>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 items-center">
        {/* Mobile: show highlighted first */}
        {[...plans].sort((a, b) => {
          if (typeof window !== "undefined" && window.innerWidth < 640) {
            return (b.highlighted ? 1 : 0) - (a.highlighted ? 1 : 0);
          }
          return 0;
        }).map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{
              y: -6,
              transition: { duration: 0.25 },
            }}
            className={`relative rounded-2xl p-8 sm:p-10 flex flex-col gap-8 transition-all duration-300 ${
              plan.highlighted
                ? "glass-card border border-primary/40 glow-purple scale-[1.03] sm:scale-105 z-10"
                : "glass-card border border-primary/15 hover:border-primary/30"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-cta px-5 py-1 text-xs font-bold tracking-wide text-primary-foreground shadow-lg">
                POPULAR
              </span>
            )}

            <div className="space-y-2">
              <h3 className="text-lg font-semibold font-heading text-foreground">{plan.name}</h3>
              <p className="text-4xl sm:text-5xl font-bold font-heading text-foreground tracking-tight">
                {plan.price}
              </p>
            </div>

            <ul className="space-y-4 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check size={16} className="text-primary-bright shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <Button
              variant={plan.highlighted ? "gradient" : "outline"}
              size="lg"
              className="w-full"
            >
              Enroll Now <ArrowRight size={18} />
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
