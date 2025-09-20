import { Camera, Archive, Mountain, Calendar, MapPin, MessageCircle } from "lucide-react";

const ExploreSection = () => {
  const exploreCards = [
    { title: "360 Virtual Tour", icon: Camera, description: "Immersive monastery exploration" },
    { title: "Digital Manuscripts", icon: Archive, description: "Ancient texts digitally preserved" },
    { title: "3D Reconstruction", icon: Mountain, description: "Historical architecture restored" },
    { title: "Events & Bookings", icon: Calendar, description: "Join sacred ceremonies" },
    { title: "Transport & Stay", icon: MapPin, description: "Complete travel assistance" },
    { title: "Health & Consciousness", icon: MessageCircle, description: "Wellness and mindfulness guidance" }
  ];

  return (
    <section id="explore-section" className="monastery-section" style={{ background: 'var(--stone)', opacity: 0.3 }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold monastery-text-primary mb-4">
            Explore Sacred Spaces
          </h2>
          <p className="text-xl monastery-text-secondary max-w-2xl mx-auto">
            Discover the full range of digital experiences we offer
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exploreCards.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="monastery-card p-6 group cursor-pointer">
                <div className="mb-4 transition-transform group-hover:scale-110" style={{ color: 'var(--accent-green)' }}>
                  <IconComponent size={40} />
                </div>
                <h3 className="text-xl font-semibold monastery-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="monastery-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;