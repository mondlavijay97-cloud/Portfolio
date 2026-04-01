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
  <section id="modules" className="py-20 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[200px] pointer-events-none" />
    <div className="container space-y-12 relative">
      <h2 className="text-3xl font-bold text-center sm:text-4xl">
        What You'll <span className="text-gradient">Learn</span>
      </h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map(({ icon: Icon, title, bullets }) => (
          <div
            key={title}
            className="group rounded-2xl glass-card glass-card-hover p-6 space-y-4 bg-gradient-card transition-all duration-300"
          >
            <Icon size={28} className="text-primary-highlight icon-glow" />
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
