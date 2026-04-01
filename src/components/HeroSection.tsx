import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-creator.jpg";

const HeroSection = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    {/* Ambient glow */}
    <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-primary-bright/10 blur-[100px] pointer-events-none" />

    <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
      {/* Copy */}
      <div className="space-y-6 animate-fade-up">
        <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-6xl">
          Learn Content Creation
          <br />That Actually Gets You
          <br /><span className="text-gradient">Results</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg">
          From zero → to creating, growing & monetizing content using AI
        </p>
        <p className="text-sm text-muted-foreground/70">
          Built by a creator with <span className="text-primary-bright font-semibold">80K+ audience</span> & brand collaborations
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button variant="gradient" size="xl" asChild>
            <a href="#pricing">Enroll Now <ArrowRight size={18} /></a>
          </Button>
          <Button variant="outline" size="xl" asChild>
            <a href="#modules">View Curriculum</a>
          </Button>
        </div>
      </div>

      {/* Video placeholder */}
      <div className="relative group animate-fade-up flex justify-center" style={{ animationDelay: "0.15s" }}>
        <div className="rounded-2xl overflow-hidden border border-primary/20 glass-card max-w-[340px] w-full">
          <img src={heroImage} alt="Creator workspace" width={1024} height={768} className="w-full object-cover aspect-[3/4]" />
          <div className="absolute inset-0 flex items-center justify-center bg-background/40 rounded-2xl transition-colors group-hover:bg-background/20">
            <div className="flex items-center gap-3 rounded-full bg-gradient-cta px-5 py-2.5 glow-purple">
              <Play size={18} className="fill-foreground text-foreground" />
              <span className="text-xs font-semibold">Watch this before you enroll</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
