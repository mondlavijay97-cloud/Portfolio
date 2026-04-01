import { ArrowRight } from "lucide-react";
import { ShinyButtonLink } from "@/components/ui/shiny-button";

const MobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/50 bg-background/90 backdrop-blur-xl p-3 md:hidden">
    <ShinyButtonLink href="#pricing" className="w-full text-center">
      Enroll Now <ArrowRight size={18} />
    </ShinyButtonLink>
  </div>
);

export default MobileCTA;
