import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CinematicIntroProps {
  onComplete: () => void;
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [scene, setScene] = useState(1);

  useEffect(() => {
    // Sequence timelines
    const timers = [
      setTimeout(() => setScene(2), 800),    // Scene 2: Vijay Kumar Name
      setTimeout(() => setScene(3), 2000),   // Scene 3: Subtitle
      setTimeout(() => setScene(4), 3100),   // Scene 4: PORTFOLIO reveal
      setTimeout(() => setScene(5), 4100),   // Scene 5: Dissolve / Fade out
      setTimeout(() => onComplete(), 4800),  // Done: reveal hero
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  // Floating ambient purple particles
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 2,
  }));

  // Title letters for Vijay Kumar
  const nameLetters = "VIJAY KUMAR".split("");

  return (
    <div className="fixed inset-0 z-[999] bg-[#000000] overflow-hidden flex flex-col items-center justify-center select-none font-heading">
      {/* Background Particles (Scenes 1-4) */}
      <AnimatePresence>
        {scene < 5 && (
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: p.size,
                  height: p.size,
                  background: "radial-gradient(circle, #A855F7 0%, #7C3AED 100%)",
                  boxShadow: "0 0 10px #7C3AED",
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: [0, 0.7, 0],
                  y: [50, -100],
                  x: [0, Math.random() * 40 - 20],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Screen flash glow at Scene 4 */}
      {scene === 4 && (
        <motion.div
          className="absolute inset-0 bg-[#7C3AED]/5 pointer-events-none blur-[100px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.4] }}
          transition={{ duration: 1 }}
        />
      )}

      {/* Intro Content Container */}
      <div className="relative text-center flex flex-col items-center justify-center px-4 max-w-4xl">
        <AnimatePresence mode="wait">
          {/* Scenes 2 & 3: Name & Subtitle */}
          {(scene === 2 || scene === 3) && (
            <motion.div
              key="scene-2-3"
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="space-y-4"
            >
              {/* Vijay Kumar Letter-by-Letter Entrance */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[0.25em] text-white flex justify-center flex-wrap">
                {nameLetters.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                    style={{
                      textShadow: "0 0 20px rgba(124, 58, 237, 0.4)",
                      marginRight: char === " " ? "0.6em" : "0.05em",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>

              {/* Subtitle */}
              {scene === 3 && (
                <motion.p
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-[#A855F7] text-sm sm:text-lg lg:text-xl font-medium tracking-[0.4em] uppercase"
                  style={{
                    textShadow: "0 0 10px rgba(168, 85, 247, 0.3)",
                  }}
                >
                  Senior Video Editor & Motion Graphics Artist
                </motion.p>
              )}
            </motion.div>
          )}

          {/* Scene 4: Large PORTFOLIO Text */}
          {scene === 4 && (
            <motion.div
              key="scene-4"
              initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1.05, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.15, filter: "blur(15px)" }}
              transition={{
                opacity: { duration: 0.8, ease: "easeOut" },
                scale: { duration: 1.2, ease: "easeOut" },
                filter: { duration: 0.8 },
              }}
              className="relative flex items-center justify-center"
            >
              {/* Backlight Glow */}
              <div className="absolute w-[300px] h-[100px] bg-[#7C3AED]/20 rounded-full blur-[80px]" />
              
              <h2
                className="text-6xl sm:text-8xl lg:text-[7rem] font-extrabold tracking-[0.3em] text-white"
                style={{
                  textShadow: "0 0 35px rgba(124, 58, 237, 0.8), 0 0 70px rgba(168, 85, 247, 0.4)",
                }}
              >
                PORTFOLIO
              </h2>
            </motion.div>
          )}

          {/* Scene 5: Particle Dissolve Overlay Transition */}
          {scene === 5 && (
            <motion.div
              key="scene-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center bg-black/90 pointer-events-none"
            >
              {/* Concentrating particles forming the center reveal */}
              {Array.from({ length: 40 }).map((_, i) => {
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 200 + 100;
                return (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{
                      background: "radial-gradient(circle, #FFFFFF 0%, #7C3AED 100%)",
                      boxShadow: "0 0 8px #A855F7",
                    }}
                    initial={{
                      x: Math.cos(angle) * distance,
                      y: Math.sin(angle) * distance,
                      opacity: 1,
                      scale: Math.random() * 1.5 + 0.5,
                    }}
                    animate={{
                      x: 0,
                      y: 0,
                      opacity: [1, 0.8, 0],
                      scale: [1.2, 0.4, 0],
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeIn",
                      delay: Math.random() * 0.25,
                    }}
                  />
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Skip Intro Button */}
      {scene < 5 && (
        <motion.button
          onClick={() => {
            setScene(5);
            onComplete();
          }}
          className="absolute bottom-8 right-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/40 hover:text-white/80 transition-colors duration-300 border border-white/10 hover:border-white/20 rounded-full px-4 py-2 bg-black/40 backdrop-blur-md cursor-pointer z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Skip Intro
        </motion.button>
      )}
    </div>
  );
}
