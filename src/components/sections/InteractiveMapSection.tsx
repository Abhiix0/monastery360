import { Globe } from "lucide-react";

const InteractiveMapSection = () => {
  return (
    <section 
      className="py-16"
      style={{ 
        background: 'var(--gradient-primary)'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Interactive Map of Sikkim
        </h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto text-white" style={{ opacity: 0.9 }}>
          Discover monastery locations across the beautiful landscapes of Sikkim
        </p>
        <div className="monastery-card max-w-4xl mx-auto p-12 text-center">
          <div className="mb-6" style={{ color: 'var(--highlight)' }}>
            <Globe size={80} className="mx-auto" />
          </div>
          <h3 className="text-2xl font-semibold monastery-text-primary mb-4">
            Map of Sikkim – Interactive version coming soon
          </h3>
          <p className="monastery-text-secondary text-lg">
            Explore monastery locations with detailed information and directions
          </p>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMapSection;