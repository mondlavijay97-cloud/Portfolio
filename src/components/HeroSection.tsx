import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-creator.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-16 pb-8">
    {/* Ambient glow */}
    <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-primary-bright/10 blur-[100px] pointer-events-none" />

    <div className="container grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-10 items-center">
      {/* Copy */}
      <div className="space-y-8 animate-fade-up">
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[4rem]">
          Learn Content Creation
          <br />That Actually Gets You
          <br /><span className="text-gradient">Results</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-lg">
          From zero → to creating, growing & monetizing content using AI
        </p>

        {/* Social proof */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {avatars.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt="Creator"
                width={32}
                height={32}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.35 }}
                className="w-8 h-8 sm:w-8 sm:h-8 rounded-full border-2 border-background object-cover shadow-md hover:scale-110 hover:shadow-primary/30 transition-transform duration-200 relative"
                style={{ zIndex: avatars.length - i }}
              />
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            className="text-sm text-muted-foreground"
          >
            Trusted by <span className="text-primary-bright font-semibold">1000+ creators</span> building content with AI
          </motion.p>
        </div>

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
