import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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
  <section id="pricing" className="py-20">
    <div className="container space-y-12">
      <h2 className="text-3xl font-bold text-center sm:text-4xl">
        Choose Your <span className="text-gradient">Plan</span>
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border p-8 space-y-6 ${
              plan.highlighted
                ? "border-primary/50 bg-card glow-purple relative"
                : "border-border/50 bg-card"
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
                  <Check size={16} className="text-accent" /> {f}
                </li>
              ))}
            </ul>
            <Button variant={plan.highlighted ? "gradient" : "outline"} size="lg" className="w-full">
              Enroll Now
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
