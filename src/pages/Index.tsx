import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import CinematicIntro from "@/components/CinematicIntro";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import OpportunitySection from "@/components/OpportunitySection";
import ModulesSection from "@/components/ModulesSection";
import AuthoritySection from "@/components/AuthoritySection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import SocialSection from "@/components/SocialSection";

import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const Index = () => {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("vijay_portfolio_seen_intro");
    if (!hasSeenIntro) {
      setShowIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem("vijay_portfolio_seen_intro", "true");
    setShowIntro(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && (
          <CinematicIntro onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      <div 
        className="transition-opacity duration-1000" 
        style={{ opacity: showIntro ? 0 : 1 }}
      >
        <Header />
        <main>
          <HeroSection />
          <AuthoritySection />
          <FeaturedWorkSection />
          <ProblemSection />
          <OpportunitySection />
          <ModulesSection />
          
          <SocialSection />
          <FinalCTA />
        </main>
        <Footer />
        <MobileCTA />
      </div>
    </>
  );
};

export default Index;

