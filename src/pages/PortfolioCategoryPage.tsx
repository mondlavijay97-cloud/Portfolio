import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Video, Folder, Film } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { portfolioCategories, VideoProject } from "@/data/portfolioData";

// Video Card component to manage its own loading skeleton, aspect ratio, and fade-in cleanly
const GalleryVideoCard = ({ 
  video,
  index,
  aspectRatio
}: { 
  video: VideoProject;
  index: number;
  aspectRatio: "16/9" | "9/16";
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const isVertical = aspectRatio === "9/16";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
      // Loop vertical float offset animation
      animate-float={{ y: [0, -6, 0] }}
      style={{ y: [0, -6, 0] }}
      whileHover={{ 
        scale: 1.01,
        borderColor: "rgba(124, 58, 237, 0.6)",
        boxShadow: "0 0 35px rgba(124, 58, 237, 0.35)" 
      }}
      className={`relative rounded-xl overflow-hidden glass-card border border-white/5 p-4 flex flex-col gap-4 group transition-all duration-300 cursor-default ${
        isVertical ? "max-w-[340px] mx-auto w-full" : "w-full"
      }`}
    >
      {/* Video Player Container - Adapts aspect ratio based on video properties */}
      <div 
        className={`relative w-full overflow-hidden rounded-lg bg-black/60 shadow-inner border border-white/5 ${
          isVertical ? "aspect-[9/16]" : "aspect-video"
        }`}
      >
        
        {/* Animated Loading Skeleton & Custom Spinner */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-neutral-950/80 animate-pulse flex flex-col items-center justify-center gap-3 z-20">
            <div className="w-9 h-9 rounded-full border-2 border-primary border-t-transparent animate-spin" />
            <span className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">Buffering Film...</span>
          </div>
        )}

        {/* HTML5 Video Player - Object Fit Contain to prevent cropping, stretching, or zooming */}
        <video
          src={video.videoUrl}
          controls
          playsInline
          preload="metadata"
          onLoadedData={() => setIsLoaded(true)}
          className={`w-full h-full object-contain transition-opacity duration-700 ease-out z-10 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Video Details */}
      <div className="px-1 flex items-center justify-between z-20">
        <h4 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-primary-bright transition-colors line-clamp-1">
          {video.title}
        </h4>
        <Film size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
      </div>
    </motion.div>
  );
};

const PortfolioCategoryPage = () => {
  const { category } = useParams<{ category: string }>();

  // Find active category
  const currentCategory = portfolioCategories.find(
    (c) => c.id === category
  );

  // Fallback for route mismatches
  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-[#05010D] text-white flex flex-col justify-between">
        <Header />
        <main className="container max-w-4xl py-32 text-center space-y-6 flex-grow flex flex-col items-center justify-center">
          <div className="rounded-full bg-destructive/10 border border-destructive/20 p-6 glow-purple">
            <Video size={48} className="text-destructive" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading">Folder Empty</h2>
          <p className="text-muted-foreground text-lg max-w-md">
            The project archive directory you are trying to access is empty or has been relocated.
          </p>
          <div className="pt-2">
            <Link to="/#toolkit">
              <span className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowLeft size={16} /> Return to Home Categories
              </span>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05010D] text-white overflow-x-hidden relative">
      {/* Background radial glows */}
      <div className="absolute inset-0 bg-glow pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-radial-glow pointer-events-none opacity-40 blur-[80px]" 
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)" }}
      />
      
      <Header />

      <main className="relative z-10 pt-28 pb-20 container max-w-5xl space-y-16">
        
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/#toolkit" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors group"
          >
            <div className="rounded-full bg-white/5 border border-white/10 p-1.5 transition-colors group-hover:bg-white/10">
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            </div>
            Back to Categories
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="space-y-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2.5"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase flex items-center gap-1.5">
              <Folder size={12} className="text-primary fill-primary/30" /> Category Archive
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-tight">
              <span className="text-gradient">{currentCategory.title}s</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl"
          >
            {currentCategory.description}
          </motion.p>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-border/50 via-border/20 to-transparent" />

        {/* Project Gallery - 2 videos per row on desktop & tablet, 1 per row on mobile */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-between"
          >
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">Project Gallery</h2>
              <p className="text-xs text-muted-foreground">Click a video project below to load and play controls.</p>
            </div>
            <div className="bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-primary uppercase">
              {currentCategory.videos.length} Films
            </div>
          </motion.div>

          {/* Grid Layout - 2 columns desktop/tablet, 1 column mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentCategory.videos.map((video, index) => (
              <GalleryVideoCard
                key={video.id}
                video={video}
                index={index}
                aspectRatio={currentCategory.aspectRatio}
              />
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default PortfolioCategoryPage;
