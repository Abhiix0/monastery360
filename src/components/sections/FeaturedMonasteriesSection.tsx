import { MapPin } from "lucide-react";
import monkImg from "@/assets/monk.jpg";
import pemayangtse from "@/assets/images/home/pemayangtse.jpg";
import tashiding from "@/assets/images/home/tashiding.jpg";
import enchey from "@/assets/images/home/enchey.jpg";

const FeaturedMonasteriesSection = () => {
  const monasteries = [
    { name: "Rumtek Monastery", location: "East Sikkim", image: monkImg, alt: "Monk at Rumtek Monastery, East Sikkim" },
    { name: "Pemayangtse Monastery", location: "West Sikkim", image: pemayangtse, alt: "Pemayangtse Monastery with prayer flags, West Sikkim" },
    { name: "Tashiding Monastery", location: "West Sikkim", image: tashiding, alt: "Tashiding Monastery with colorful prayer flags, West Sikkim" },
    { name: "Enchey Monastery", location: "Gangtok", image: enchey, alt: "Enchey Monastery in Gangtok, Sikkim" },
  ];

  return (
    <section className="monastery-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold monastery-text-primary mb-4">
            Featured Monasteries
          </h2>
          <p className="text-xl monastery-text-secondary max-w-2xl mx-auto">
            Explore some of Sikkim's most revered spiritual sanctuaries
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {monasteries.map((monastery, index) => (
            <div key={index} className="monastery-card group cursor-pointer overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={monastery.image}
                  alt={monastery.alt}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold monastery-text-primary mb-2">
                  {monastery.name}
                </h3>
                <p className="monastery-text-secondary flex items-center gap-2">
                  <MapPin size={16} style={{ color: 'var(--accent-green)' }} />
                  {monastery.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMonasteriesSection;