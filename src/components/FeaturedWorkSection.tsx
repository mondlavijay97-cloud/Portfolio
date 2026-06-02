import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Folder } from "lucide-react";
import { portfolioCategories } from "@/data/portfolioData";

const FeaturedWorkSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Calculate scroll-based progress value (0 to 100)
  const progress = useTransform(scrollYProgress, [0.15, 0.65], [0, 100]);
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const unsubscribe = progress.on("change", (v) => setProgressValue(v));
    return unsubscribe;
  }, [progress]);

  // Dynamic active index based on 6 intervals of ~16.67%
  const getActiveIndex = () => {
    if (progressValue >= 83.3) return 5;
    if (progressValue >= 66.6) return 4;
    if (progressValue >= 50.0) return 3;
    if (progressValue >= 33.3) return 2;
    if (progressValue >= 16.6) return 1;
    if (progressValue >= 0) return 0;
    return -1;
  };

  const activeIndex = getActiveIndex();

  return (
    <section id="toolkit" ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-glow pointer-events-none" />

      <div className="container max-w-6xl relative z-10 space-y-14">
        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            My <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Explore a selection of commercials, reels, motion graphics, wedding films, corporate projects, and brand campaigns crafted to drive engagement and tell compelling stories.
          </p>
        </div>

        {/* Loading / Progress indicator - EXACTLY AS ORIGINALLY DESIGNED */}
        <div className="text-center">
          <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
            LOADING PROJECT ARCHIVE...{" "}
            <span className="text-primary font-bold">
              {Math.min(Math.round(progressValue), 100)}%
            </span>
          </span>
        </div>

        {/* Desktop: Horizontal timeline - EXACT STRUCTURE PRESERVED */}
        <div className="hidden md:block">
          {/* Progress line + nodes */}
          <div className="relative mx-8 mb-14">
            {/* Base line */}
            <div className="h-[2px] w-full rounded-none" style={{ background: "hsl(var(--muted))" }} />
            {/* Animated fill */}
            <motion.div
              className="absolute top-0 left-0 h-[2px] rounded-none"
              style={{
                width: `${Math.min(progressValue, 100)}%`,
                background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-bright)))",
                boxShadow: "0 0 12px hsl(var(--primary) / 0.6)",
              }}
            />

            {/* Nodes */}
            {portfolioCategories.map((_, i) => {
              const pos = (i / (portfolioCategories.length - 1)) * 100;
              const isActive = i <= activeIndex;
              return (
                <div
                  key={i}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                  style={{ left: `${pos}%` }}
                >
                  {/* Outer ring */}
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center transition-all duration-500"
                    style={{
                      border: `2px solid ${isActive ? "hsl(var(--primary))" : "hsl(var(--muted))"}`,
                      boxShadow: isActive ? "0 0 16px hsl(var(--primary) / 0.5)" : "none",
                      transform: isActive ? "scale(1.3)" : "scale(1)",
                      background: "hsl(var(--background))",
                    }}
                  >
                    {/* Inner dot */}
                    <div
                      className="w-2.5 h-2.5 rounded-full transition-all duration-500"
                      style={{
                        background: isActive ? "hsl(var(--primary))" : "hsl(var(--muted))",
                      }}
                    />
                  </div>
                  {/* Pulse ring for active */}
                  {isActive && i === activeIndex && (
                    <motion.div
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{ border: "1px solid hsl(var(--primary))" }}
                      animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Cards Grid - 3 Columns Desktop, 2 Columns Tablet, 1 Column Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 pt-6">
            {portfolioCategories.map((category, i) => {
              const isScrollActive = i <= activeIndex;
              return (
                <Link
                  key={category.id}
                  to={`/${category.id}.html`}
                  className="group block relative pt-4"
                >
                  {/* Premium Digital Folder Tab Outline */}
                  <div
                    className="absolute top-4 left-5 -translate-y-[calc(100%-1px)] h-[26px] w-[100px] rounded-t-lg z-0 transition-all duration-500"
                    style={{
                      backgroundColor: "hsl(240, 24% ,11%)",
                      borderTop: isScrollActive ? "1px solid rgba(124, 58, 237, 0.4)" : "1px solid rgba(255, 255, 255, 0.08)",
                      borderLeft: isScrollActive ? "1px solid rgba(124, 58, 237, 0.4)" : "1px solid rgba(255, 255, 255, 0.08)",
                      borderRight: isScrollActive ? "1px solid rgba(124, 58, 237, 0.4)" : "1px solid rgba(255, 255, 255, 0.08)",
                      clipPath: "polygon(0 0, 78% 0, 92% 100%, 0% 100%)",
                    }}
                  />

                  {/* Main Folder Card Body */}
                  <motion.div
                    className="rounded-xl overflow-hidden transition-all duration-500 glass-card relative z-10"
                    style={{
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                    whileHover={{
                      y: -6,
                      borderColor: "rgba(124, 58, 237, 0.6)",
                      boxShadow: "0 0 35px rgba(124, 58, 237, 0.35)",
                    }}
                    animate={{
                      borderColor: isScrollActive ? "rgba(124, 58, 237, 0.5)" : "rgba(255, 255, 255, 0.08)",
                      boxShadow: isScrollActive ? "0 0 25px rgba(124, 58, 237, 0.2)" : "none",
                      y: isScrollActive ? -4 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {/* Folder Thumbnail Image */}
                    <div className="relative h-48 overflow-hidden bg-black/30">
                      <img
                        src={category.image}
                        alt={category.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        style={{
                          filter: isScrollActive ? "brightness(1.05)" : "brightness(0.6)",
                          opacity: isScrollActive ? 1 : 0.7,
                        }}
                      />
                      <div
                        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-60"
                        style={{
                          background: "linear-gradient(to top, hsl(var(--surface)), transparent 70%)",
                        }}
                      />

                      {/* Floating Folder Tag Overlay (Left Corner) */}
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 flex items-center gap-1.5 z-20">
                        <Folder size={11} className="text-primary fill-primary/30" />
                        <span className="text-[9px] font-bold text-white/95 tracking-widest uppercase">DIR</span>
                      </div>

                      {/* Explore Folder Icon Overlay on Hover (Center) */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 z-30 transition-all duration-300 bg-black/20 backdrop-blur-[2px]">
                        <div className="rounded-full bg-primary/20 border border-primary/50 p-4 transition-transform duration-300 scale-90 group-hover:scale-100 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                          <Folder size={22} className="text-white fill-white/20" />
                        </div>
                      </div>
                    </div>

                    {/* Folder Footer - Category Title Only */}
                    <div className="p-5 flex items-center justify-between">
                      <h3 className="font-heading font-bold text-foreground text-lg lg:text-xl transition-colors group-hover:text-primary-bright">
                        {category.title}
                      </h3>
                      <Folder size={16} className="text-muted-foreground transition-colors group-hover:text-primary" />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical timeline - EXACT STRUCTURE PRESERVED */}
        <div className="md:hidden space-y-0 relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-[2px]"
            style={{ background: "hsl(var(--muted))" }}
          />
          <motion.div
            className="absolute left-5 top-0 w-[2px]"
            style={{
              height: `${Math.min(progressValue, 100)}%`,
              background: "linear-gradient(180deg, hsl(var(--primary)), hsl(var(--primary-bright)))",
              boxShadow: "0 0 12px hsl(var(--primary) / 0.6)",
            }}
          />

          {portfolioCategories.map((category, i) => {
            const isScrollActive = i <= activeIndex;
            return (
              <div key={category.id} className="relative pl-14 pb-12">
                {/* Node */}
                <div className="absolute left-5 top-4 -translate-x-1/2 z-10">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center transition-all duration-500"
                    style={{
                      border: `2px solid ${isScrollActive ? "hsl(var(--primary))" : "hsl(var(--muted))"}`,
                      boxShadow: isScrollActive ? "0 0 12px hsl(var(--primary) / 0.5)" : "none",
                      background: "hsl(var(--background))",
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full transition-all duration-500"
                      style={{
                        background: isScrollActive ? "hsl(var(--primary))" : "hsl(var(--muted))",
                      }}
                    />
                  </div>
                </div>

                {/* Clickable Mobile Folder Wrapper */}
                <Link to={`/${category.id}.html`} className="group block relative pt-4">
                  {/* Mobile Folder Tab outline */}
                  <div
                    className="absolute top-4 left-4 -translate-y-[calc(100%-1px)] h-[22px] w-[80px] rounded-t-md z-0 transition-all duration-500"
                    style={{
                      backgroundColor: "hsl(240, 24% ,11%)",
                      borderTop: isScrollActive ? "1px solid rgba(124, 58, 237, 0.4)" : "1px solid rgba(255, 255, 255, 0.08)",
                      borderLeft: isScrollActive ? "1px solid rgba(124, 58, 237, 0.4)" : "1px solid rgba(255, 255, 255, 0.08)",
                      borderRight: isScrollActive ? "1px solid rgba(124, 58, 237, 0.4)" : "1px solid rgba(255, 255, 255, 0.08)",
                      clipPath: "polygon(0 0, 78% 0, 92% 100%, 0% 100%)",
                    }}
                  />

                  <motion.div
                    className="rounded-xl overflow-hidden transition-all duration-500 glass-card relative z-10"
                    style={{
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                    whileHover={{
                      borderColor: "rgba(124, 58, 237, 0.6)",
                      boxShadow: "0 0 25px rgba(124, 58, 237, 0.3)",
                    }}
                    animate={{
                      scale: isScrollActive ? 1.02 : 1,
                      borderColor: isScrollActive ? "rgba(124, 58, 237, 0.4)" : "rgba(255, 255, 255, 0.08)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                        style={{
                          filter: isScrollActive ? "brightness(1.05)" : "brightness(0.6)",
                          opacity: isScrollActive ? 1 : 0.7,
                        }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(to top, hsl(var(--surface)), transparent 60%)",
                        }}
                      />
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 flex items-center gap-1.5 z-20">
                        <Folder size={10} className="text-primary fill-primary/30" />
                        <span className="text-[8px] font-bold text-white/95 tracking-widest uppercase">DIR</span>
                      </div>
                    </div>
                    
                    <div className="p-4 flex items-center justify-between">
                      <h3 className="font-heading font-bold text-foreground text-base">
                        {category.title}
                      </h3>
                      <Folder size={14} className="text-muted-foreground" />
                    </div>
                  </motion.div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
