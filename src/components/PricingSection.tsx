import { ShinyButton } from "@/components/ui/shiny-button";
import { Check, ArrowRight } from "lucide-react";

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
  <section id="pricing" className="py-20 relative">
    <div className="absolute inset-0 bg-glow pointer-events-none" />
    <div className="container space-y-12 relative">
      <h2 className="text-3xl font-bold text-center sm:text-4xl">
        Choose Your <span className="text-gradient">Plan</span>
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border p-8 space-y-6 transition-all ${
              plan.highlighted
                ? "border-primary/50 glass-card glow-purple relative"
                : "border-primary/20 glass-card"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-cta px-4 py-1 text-xs font-bold">
                POPULAR
              </span>
            )}
            <div>
              <h3 className="text-lg font-bold">{plan.name}</h3>
              <p className="text-3xl font-bold mt-2">{plan.price}</p>
            </div>
            <ul className="space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check size={16} className="text-primary-bright" /> {f}
                </li>
              ))}
            </ul>
            <ShinyButton className="w-full">
              Enroll Now <ArrowRight size={18} />
            </ShinyButton>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
