import { Button } from "@/components/ui/button";

const MobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/80 backdrop-blur-xl p-3 md:hidden">
    <Button variant="gradient" size="lg" className="w-full" asChild>
      <a href="#pricing">Enroll Now</a>
    </Button>
  </div>
);

export default MobileCTA;
