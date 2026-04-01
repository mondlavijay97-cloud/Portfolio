import { ArrowRight } from "lucide-react";

const outcomes = [
  "What to create",
  "How to create",
  "How to grow",
  "How to monetize",
];

const TransformationSection = () => (
  <section id="transformation" className="py-20">
    <div className="container max-w-3xl text-center space-y-10">
      <h2 className="text-3xl font-bold sm:text-4xl">
        After This, You'll Have <span className="text-gradient">Clarity</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {outcomes.map((o, i) => (
          <div key={o} className="flex items-center gap-3">
            <span className="rounded-xl border border-border/50 bg-card px-5 py-3 font-medium">{o}</span>
            {i < outcomes.length - 1 && <ArrowRight size={16} className="text-primary hidden sm:block" />}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TransformationSection;
