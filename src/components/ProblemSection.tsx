import { AlertCircle } from "lucide-react";

const problems = [
  "Don't know what to post",
  "Overthinking content ideas",
  "Saving reels but not executing",
  "Feeling left behind",
];

const ProblemSection = () => (
  <section className="py-20 section-alt">
    <div className="container max-w-3xl text-center space-y-10">
      <h2 className="text-3xl font-bold sm:text-4xl">
        You're Not Stuck. You're Just <span className="text-gradient">Confused.</span>
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {problems.map((p) => (
          <div key={p} className="flex items-center gap-3 rounded-xl border border-border/50 bg-background/50 p-4 text-left">
            <AlertCircle size={18} className="shrink-0 text-primary icon-glow" />
            <span className="text-muted-foreground">{p}</span>
          </div>
        ))}
      </div>
      <p className="text-lg text-muted-foreground">
        Content is not hard.<br />
        <span className="text-foreground font-semibold">Clarity is missing.</span>
      </p>
    </div>
  </section>
);

export default ProblemSection;
