import { ArrowRight } from "lucide-react";
import { ShinyButtonLink } from "@/components/ui/shiny-button";

const FinalCTA = () => (
  <section className="py-24 section-alt relative overflow-hidden">
    <div className="absolute inset-0 bg-glow pointer-events-none" />
    <div className="container max-w-2xl text-center space-y-8 relative">
      <h2 className="text-3xl font-bold sm:text-5xl">
        Stop Overthinking.<br />
        <span className="text-gradient">Start Creating.</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <ShinyButtonLink href="#pricing">Enroll Now – ₹4,999 <ArrowRight size={18} /></ShinyButtonLink>
        <ShinyButtonLink href="#pricing">Get Live Support – ₹6,999 <ArrowRight size={18} /></ShinyButtonLink>
      </div>
    </div>
  </section>
);

export default FinalCTA;
