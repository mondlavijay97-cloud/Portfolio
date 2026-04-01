import { CheckCircle, XCircle } from "lucide-react";

const forYou = [
  "You're starting from zero",
  "You're confused about content",
  "You've never created content before",
];

const dontNeed = [
  "Prior experience",
  "Editing skills",
  "Camera confidence",
];

const ObjectionSection = () => (
  <section id="objections" className="py-20 section-alt">
    <div className="container max-w-3xl text-center space-y-10">
      <h2 className="text-3xl font-bold sm:text-4xl">
        This is For You <span className="text-gradient">If…</span>
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 text-left">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-highlight">Perfect for you</h3>
          {forYou.map((t) => (
            <div key={t} className="flex items-center gap-3">
              <CheckCircle size={18} className="shrink-0 text-primary-highlight icon-glow" />
              <span className="text-muted-foreground">{t}</span>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-pink">You don't need</h3>
          {dontNeed.map((t) => (
            <div key={t} className="flex items-center gap-3">
              <XCircle size={18} className="shrink-0 text-pink icon-glow-pink" />
              <span className="text-muted-foreground">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ObjectionSection;
