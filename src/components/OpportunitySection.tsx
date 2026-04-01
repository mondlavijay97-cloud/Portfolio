import { TrendingUp, Briefcase, UserCheck, DollarSign } from "lucide-react";

const items = [
  { icon: UserCheck, text: "Build personal brand" },
  { icon: Briefcase, text: "Get freelance clients" },
  { icon: TrendingUp, text: "Land better jobs" },
  { icon: DollarSign, text: "Create income streams" },
];

const OpportunitySection = () => (
  <section className="py-20 relative">
    <div className="absolute inset-0 bg-glow pointer-events-none" />
    <div className="container max-w-3xl text-center space-y-10 relative">
      <h2 className="text-3xl font-bold sm:text-4xl">
        Content is the <span className="text-gradient">New Skill</span>
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-3 rounded-xl border border-primary/20 glass-card p-5 text-left transition-all hover:border-primary/40 hover:glow-purple">
            <Icon size={20} className="shrink-0 text-primary icon-glow" />
            <span>{text}</span>
          </div>
        ))}
      </div>
      <p className="text-lg font-semibold">
        Content = <span className="text-gradient">Skill + Leverage + Opportunity</span>
      </p>
    </div>
  </section>
);

export default OpportunitySection;
