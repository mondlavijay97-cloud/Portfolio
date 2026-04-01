import { Download } from "lucide-react";
import ShinyButton from "@/components/ui/ShinyButton";

const SyllabusDownload = () => (
  <section className="py-20 section-alt">
    <div className="container max-w-2xl">
      <div className="rounded-2xl border border-primary/30 glass-card p-10 text-center space-y-6 glow-purple">
        <h2 className="text-2xl font-bold sm:text-3xl">Want the Full Breakdown?</h2>
        <p className="text-muted-foreground">Get the complete syllabus with module details, timelines, and outcomes.</p>
        <ShinyButton variant="primary" size="lg">
          <Download size={18} /> Download Syllabus
        </ShinyButton>
      </div>
    </div>
  </section>
);

export default SyllabusDownload;
