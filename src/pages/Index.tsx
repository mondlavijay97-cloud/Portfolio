import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import OpportunitySection from "@/components/OpportunitySection";
import CourseIntro from "@/components/CourseIntro";
import ModulesSection from "@/components/ModulesSection";
import AuthoritySection from "@/components/AuthoritySection";
import BonusesSection from "@/components/BonusesSection";

import PricingSection from "@/components/PricingSection";
import ObjectionSection from "@/components/ObjectionSection";

import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <ProblemSection />
      <OpportunitySection />
      <CourseIntro />
      <ModulesSection />
      <AuthoritySection />
      <BonusesSection />
      
      <PricingSection />
      <ObjectionSection />
      
      <FinalCTA />
    </main>
    <Footer />
    <MobileCTA />
  </>
);

export default Index;
