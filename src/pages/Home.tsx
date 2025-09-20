import Header from "@/components/Header";
import Footer from "@/components/Footer";
import monasteryHero from "@/assets/monastery-hero.jpg";

// Section components
import WhyMonasterySection from "@/components/sections/WhyMonasterySection";
import ExploreSection from "@/components/sections/ExploreSection";
import FeaturedMonasteriesSection from "@/components/sections/FeaturedMonasteriesSection";
import InteractiveMapSection from "@/components/sections/InteractiveMapSection";
import UpcomingFestivalsSection from "@/components/sections/UpcomingFestivalsSection";
import VirtualTourHighlightSection from "@/components/sections/VirtualTourHighlightSection";
import LanguageTranslationSection from "@/components/sections/LanguageTranslationSection";
import CallToActionSection from "@/components/sections/CallToActionSection";
import AboutSection from "@/components/sections/AboutSection";

const Home = () => {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${monasteryHero})` }}
        />
        <div className="absolute inset-0" style={{ 
          background: 'var(--gradient-hero)',
          opacity: 0.8 
        }} />
        
      </section>

      <WhyMonasterySection />
      <ExploreSection />
      <FeaturedMonasteriesSection />
      <InteractiveMapSection />
      <UpcomingFestivalsSection />
      <VirtualTourHighlightSection />
      <LanguageTranslationSection />
      <CallToActionSection />
      <AboutSection />

      <Footer />
    </div>
  );
};

export default Home;