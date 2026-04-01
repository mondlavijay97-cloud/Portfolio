import { Button } from "@/components/ui/button";

const FinalCTA = () => (
  <section className="py-24 section-alt relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
    <div className="container max-w-2xl text-center space-y-8 relative">
      <h2 className="text-3xl font-bold sm:text-5xl">
        Stop Overthinking.<br />
        <span className="text-gradient">Start Creating.</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="gradient" size="xl">Enroll Now – ₹4,999</Button>
        <Button variant="outline" size="xl">Get Live Support – ₹6,999</Button>
      </div>
    </div>
  </section>
);

export default FinalCTA;
