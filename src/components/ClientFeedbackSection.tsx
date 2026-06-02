import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Check } from "lucide-react";

export default function ClientFeedbackSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoPauseOrEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-24 relative overflow-hidden bg-background"
      style={{ backgroundColor: "hsl(240, 20%, 4%)" }}
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-primary/[0.08] blur-[150px]" />
      </div>

      <div className="container relative z-10 max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-primary/70 uppercase font-heading"
          >
            CLIENT TESTIMONIAL
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold font-heading text-white"
          >
            Client <span className="text-gradient" style={{ filter: "drop-shadow(0 0 18px rgba(124,58,237,0.35))" }}>Feedback</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
          >
            Hear directly from clients about their experience working with Vijay Kumar and the impact of the delivered content.
          </motion.p>
        </div>

        {/* Video Player Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative max-w-3xl mx-auto w-full"
        >
          {/* Subtle purple background ambient card highlight */}
          <div className="absolute inset-0 bg-primary/5 rounded-[20px] sm:rounded-[24px] blur-sm pointer-events-none" />

          {/* Premium Video Card Container */}
          <div 
            className="group relative overflow-hidden border border-white/10 rounded-[20px] sm:rounded-[24px] shadow-[0_0_40px_rgba(124,58,237,0.12)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(124,58,237,0.25)] hover:border-primary/30 bg-[#05010D]/40"
          >
            <div className="relative w-full overflow-hidden flex items-center justify-center bg-black/60 aspect-[16/9]">
              <video
                ref={videoRef}
                src="https://res.cloudinary.com/dvwmxd3kr/video/upload/v1780375998/IMG_7540_qfpyyo.mov"
                controls={isPlaying}
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={handleVideoPauseOrEnd}
                onEnded={handleVideoPauseOrEnd}
                className="w-full h-full object-contain relative z-10"
                onClick={handlePlayClick}
              />

              {/* Play Button Overlay */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/40 z-20 cursor-pointer transition-colors duration-300 hover:bg-black/35"
                  onClick={handlePlayClick}
                >
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full bg-primary/20 border border-primary/50 p-5 sm:p-6 transition-all duration-300 shadow-[0_0_30px_rgba(124,58,237,0.5)] flex items-center justify-center hover:bg-primary/30 hover:border-primary/70"
                    aria-label="Play Client Testimonial Video"
                  >
                    <Play size={28} className="text-white fill-white ml-0.5 sm:ml-1" />
                  </motion.button>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Optional Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-3 pt-4 sm:pt-6"
        >
          {[
            "Professional Communication",
            "High Quality Delivery",
            "Fast Turnaround"
          ].map((text, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md text-xs sm:text-sm text-foreground/80 font-medium transition-all duration-300 hover:border-primary/25 hover:bg-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
            >
              <Check size={14} className="text-primary shrink-0" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
