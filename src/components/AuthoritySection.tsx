import { Users, Award, Shield, BookOpen } from "lucide-react";

const points = [
  { icon: Users, text: "80K+ audience built" },
  { icon: Award, text: "Worked with top brands" },
  { icon: Shield, text: "Real-world strategies" },
  { icon: BookOpen, text: "No theory — all execution" },
];

const AuthoritySection = () => (
  <section className="py-20 section-alt">
    <div className="container max-w-3xl text-center space-y-10">
      <h2 className="text-3xl font-bold sm:text-4xl">
        Learn From What <span className="text-gradient">Actually Works</span>
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {points.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-3 rounded-xl border border-primary/20 glass-card p-5 transition-all hover:border-primary/40 hover:glow-purple">
            <Icon size={20} className="shrink-0 text-primary icon-glow" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AuthoritySection;
