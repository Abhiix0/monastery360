import { Camera } from "lucide-react";
import virtualTourHero from "@/assets/images/home/virtual-tour-hero.jpg";

const VirtualTourHighlightSection = () => {
  return (
    <section className="monastery-section" style={{ background: 'var(--hero-bg)' }}>
      <div className="container mx-auto px-4">
        <div className="monastery-card max-w-4xl mx-auto text-center relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${virtualTourHero})` }}
          />
          <div 
            className="absolute inset-0"
            style={{ 
              background: 'linear-gradient(rgba(46,46,46,0.12), rgba(46,46,46,0.12))'
            }}
          />
          <div className="relative z-10 p-12">
            <h2 className="text-4xl font-bold monastery-text-primary mb-6">
              Step into the Monasteries
            </h2>
            <p className="text-xl monastery-text-secondary mb-8 max-w-2xl mx-auto">
              Experience the sacred atmosphere through immersive 360° virtual tours
            </p>
            <button 
              className="font-semibold px-8 py-4 rounded-xl inline-flex items-center gap-2 transition-colors"
              style={{
                background: 'var(--highlight)',
                color: 'var(--text-primary)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--link-hover)';
                e.currentTarget.style.color = 'var(--bg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--highlight)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onClick={() => document.getElementById('explore-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Virtual Tour <Camera size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTourHighlightSection;