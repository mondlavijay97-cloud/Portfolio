import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const MobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/50 bg-background/90 backdrop-blur-xl p-3 md:hidden">
    <Button variant="gradient" size="lg" className="w-full" asChild>
      <a href="#contact">Let's Work Together <ArrowRight size={18} /></a>
    </Button>
  </div>
);

export default MobileCTA;
