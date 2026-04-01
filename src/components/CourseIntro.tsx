import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Target } from "lucide-react";

const CourseIntro = () => (
  <section className="py-20 section-alt relative overflow-hidden">
    <div className="absolute inset-0 bg-glow-radial opacity-20 pointer-events-none" />
    <div className="container max-w-3xl text-center space-y-8 relative">
      <h2 className="text-3xl font-bold sm:text-4xl">
        Introducing <span className="text-gradient">Nomad School</span>
      </h2>
      <p className="text-muted-foreground text-lg">A simple system to start, grow & monetize content</p>
      <div className="flex flex-wrap justify-center gap-6">
        {[
          { icon: Sparkles, text: "Beginner friendly" },
          { icon: Zap, text: "No fluff" },
          { icon: Target, text: "Execution focused" },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-2 text-muted-foreground">
            <Icon size={16} className="text-primary-highlight icon-glow" />
            <span>{text}</span>
          </div>
        ))}
      </div>
      <Button variant="gradient" size="lg" asChild>
        <a href="#modules">View Curriculum</a>
      </Button>
    </div>
  </section>
);

export default CourseIntro;
