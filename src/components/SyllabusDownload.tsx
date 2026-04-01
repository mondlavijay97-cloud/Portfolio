import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const SyllabusDownload = () => (
  <section className="py-20 section-alt">
    <div className="container max-w-2xl">
      <div className="rounded-2xl border border-primary/30 glass-card p-10 text-center space-y-6 glow-purple">
        <h2 className="text-2xl font-bold sm:text-3xl">Want the Full Breakdown?</h2>
        <p className="text-muted-foreground">Get the complete syllabus with module details, timelines, and outcomes.</p>
        <Button variant="gradient" size="lg">
          <Download size={18} /> Download Syllabus
        </Button>
      </div>
    </div>
  </section>
);

export default SyllabusDownload;
