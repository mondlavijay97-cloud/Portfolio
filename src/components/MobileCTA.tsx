import { ArrowRight } from "lucide-react";
import ShinyButton from "@/components/ui/ShinyButton";

const MobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/50 bg-background/90 backdrop-blur-xl p-3 md:hidden">
    <a href="#pricing">
      <ShinyButton variant="primary" size="lg" className="w-full">Enroll Now <ArrowRight size={18} /></ShinyButton>
    </a>
  </div>
);

export default MobileCTA;
