import { Gift } from "lucide-react";

const bonuses = [
  "Viral scripting frameworks",
  "AI automation workflows",
  "Script Generator GPT",
  "Content templates",
];

const BonusesSection = () => (
  <section className="py-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-glow-radial opacity-20 pointer-events-none" />
    <div className="container max-w-3xl text-center space-y-10 relative">
      <h2 className="text-3xl font-bold sm:text-4xl">
        <span className="text-gradient">Bonuses</span> Included
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {bonuses.map((b) => (
          <div key={b} className="flex items-center gap-3 rounded-xl glass-card glass-card-hover p-5 text-left">
            <Gift size={18} className="shrink-0 text-pink icon-glow-pink" />
            <span>{b}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BonusesSection;
