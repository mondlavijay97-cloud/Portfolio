import { Layers, PenTool, BookOpen, FileText, Film, Bot, Coins } from "lucide-react";

const modules = [
  { icon: Layers, title: "Foundation", bullets: ["Creator mindset", "Platform understanding"] },
  { icon: PenTool, title: "What to Create", bullets: ["Niche selection", "Content strategy"] },
  { icon: BookOpen, title: "Storytelling", bullets: ["Hook frameworks", "Narrative arcs"] },
  { icon: FileText, title: "Script Writing", bullets: ["Viral structures", "CTA placement"] },
  { icon: Film, title: "Editing System", bullets: ["Efficient workflows", "Tool stack"] },
  { icon: Bot, title: "AI for Content", bullets: ["Prompt engineering", "Automation"] },
  { icon: Coins, title: "Monetization & Career", bullets: ["Revenue streams", "Brand deals"] },
];

const ModulesSection = () => (
  <section id="modules" className="py-20 relative">
    <div className="absolute inset-0 bg-glow pointer-events-none" />
    <div className="container space-y-12 relative">
      <h2 className="text-3xl font-bold text-center sm:text-4xl">
        What You'll <span className="text-gradient">Learn</span>
      </h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map(({ icon: Icon, title, bullets }) => (
          <div
            key={title}
            className="group rounded-2xl border border-primary/20 glass-card p-6 space-y-4 transition-all hover:border-primary/40 hover:glow-purple"
          >
            <Icon size={28} className="text-primary icon-glow" />
            <h3 className="text-lg font-bold">{title}</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ModulesSection;
