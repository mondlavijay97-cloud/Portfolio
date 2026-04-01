import { Sparkles, Zap, Target } from "lucide-react";
import ShinyButton from "@/components/ui/ShinyButton";

const CourseIntro = () => (
  <section className="py-20 section-alt">
    <div className="container max-w-3xl text-center space-y-8">
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
            <Icon size={16} className="text-primary" />
            <span>{text}</span>
          </div>
        ))}
      </div>
      <a href="#modules">
        <ShinyButton variant="secondary" size="lg">View Curriculum</ShinyButton>
      </a>
    </div>
  </section>
);

export default CourseIntro;
