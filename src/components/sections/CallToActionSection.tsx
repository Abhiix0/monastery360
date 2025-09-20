import { ChevronRight } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section 
      className="py-16"
      style={{ 
        background: 'var(--gradient-accent)'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Join us in preserving and exploring Sikkim's spiritual heritage
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white" style={{ opacity: 0.9 }}>
          Begin your journey into the sacred world of Himalayan monasteries
        </p>
        <button 
          className="font-semibold px-8 py-4 rounded-xl inline-flex items-center gap-2 transition-colors"
          style={{
            background: 'var(--bg)',
            color: 'var(--text-primary)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--stone)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--bg)';
          }}
          onClick={() => document.getElementById('explore-section')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Start Exploring <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection;