import { useState } from "react";
import { Play, ArrowLeft, ArrowRight, MapPin, Clock, Users, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Tour {
  id: number;
  title: string;
  monastery: string;
  location: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Advanced";
  rating: number;
  views: number;
  description: string;
  highlights: string[];
  thumbnail: string;
  is360: boolean;
}

const VirtualTours = () => {
  const [currentTour, setCurrentTour] = useState<number | null>(null);
  const [currentScene, setCurrentScene] = useState(0);

  const tours: Tour[] = [
    {
      id: 1,
      title: "Sacred Halls of Wisdom",
      monastery: "Tiger's Nest Monastery",
      location: "Paro Valley, Bhutan",
      duration: "25 min",
      difficulty: "Moderate",
      rating: 4.9,
      views: 12847,
      description: "Journey through the legendary Tiger's Nest, perched dramatically on a cliff face 3,000 feet above the valley floor.",
      highlights: ["Main Prayer Hall", "Guru Rinpoche Cave", "Sacred Waterfalls", "Mountain Views"],
      thumbnail: "https://images.unsplash.com/photo-1544531586-fbb6cf2d4e29?w=400&h=300&fit=crop",
      is360: true
    },
    {
      id: 2,
      title: "Medieval Abbey Exploration",
      monastery: "Mont-Saint-Michel Abbey",
      location: "Normandy, France",
      duration: "35 min",
      difficulty: "Easy",
      rating: 4.8,
      views: 18392,
      description: "Explore the Gothic architecture and hidden passages of this UNESCO World Heritage medieval abbey.",
      highlights: ["Gothic Cathedral", "Cloister Garden", "Crypts", "Abbey Library"],
      thumbnail: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=300&fit=crop",
      is360: true
    },
    {
      id: 3,
      title: "Meteora Rock Monasteries",
      monastery: "Great Meteoron",
      location: "Thessaly, Greece",
      duration: "30 min",
      difficulty: "Advanced",
      rating: 4.7,
      views: 9654,
      description: "Discover monasteries built on towering rock pillars, showcasing Byzantine art and breathtaking landscapes.",
      highlights: ["Rock Formations", "Byzantine Frescoes", "Panoramic Views", "Ancient Pathways"],
      thumbnail: "https://images.unsplash.com/photo-1555993539-1732b0258c5f?w=400&h=300&fit=crop",
      is360: true
    },
    {
      id: 4,
      title: "Zen Temple Gardens",
      monastery: "Kinkaku-ji Temple",
      location: "Kyoto, Japan",
      duration: "20 min",
      difficulty: "Easy",
      rating: 4.9,
      views: 21567,
      description: "Experience the serene beauty of traditional Japanese zen architecture and meticulously designed gardens.",
      highlights: ["Golden Pavilion", "Reflection Pool", "Tea House", "Bamboo Paths"],
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      is360: true
    },
    {
      id: 5,
      title: "Himalayan Sanctuary",
      monastery: "Rongbuk Monastery",
      location: "Mount Everest, Tibet",
      duration: "40 min",
      difficulty: "Advanced",
      rating: 4.8,
      views: 7892,
      description: "Visit the world's highest monastery with stunning views of Mount Everest's north face.",
      highlights: ["Main Assembly Hall", "Everest Base Camp", "Prayer Wheels", "Alpine Views"],
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      is360: true
    },
    {
      id: 6,
      title: "Desert Fortress Monastery",
      monastery: "Saint Catherine's",
      location: "Sinai Peninsula, Egypt",
      duration: "28 min",
      difficulty: "Moderate",
      rating: 4.6,
      views: 11234,
      description: "Explore one of the oldest continuously operating Christian monasteries, home to the Burning Bush.",
      highlights: ["Ancient Library", "Burning Bush", "Fortress Walls", "Icon Collection"],
      thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      is360: true
    }
  ];

  const scenes = [
    "Main Entrance",
    "Prayer Hall", 
    "Sacred Garden",
    "Library",
    "Meditation Chamber",
    "Mountain View"
  ];

  const startTour = (tourId: number) => {
    setCurrentTour(tourId);
    setCurrentScene(0);
  };

  const nextScene = () => {
    setCurrentScene((prev) => (prev + 1) % scenes.length);
  };

  const prevScene = () => {
    setCurrentScene((prev) => (prev - 1 + scenes.length) % scenes.length);
  };

  const exitTour = () => {
    setCurrentTour(null);
    setCurrentScene(0);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-green-600 bg-green-100";
      case "Moderate": return "text-cadmium-orange bg-yellow-100";
      case "Advanced": return "text-red-600 bg-red-100";
      default: return "text-rose-taupe bg-gray-100";
    }
  };

  if (currentTour) {
    const tour = tours.find(t => t.id === currentTour)!;
    
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Tour Viewer */}
        <div className="relative h-screen">
          {/* 360° Viewer Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-japanese-carmine via-sinopia to-cadmium-orange flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 border-4 border-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Play size={48} className="text-white ml-2" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{scenes[currentScene]}</h3>
              <p className="text-white/80">{tour.monastery}</p>
              <p className="text-sm text-white/60 mt-2">
                Scene {currentScene + 1} of {scenes.length}
              </p>
            </div>
          </div>

          {/* Tour Controls */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
            <button
              onClick={exitTour}
              className="bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-xl backdrop-blur-sm transition-all"
            >
              Exit Tour
            </button>
            <div className="bg-black/50 backdrop-blur-sm rounded-xl px-4 py-2">
              <span className="text-sm">{tour.title}</span>
            </div>
          </div>

          {/* Scene Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
            <button
              onClick={prevScene}
              className="bg-black/50 hover:bg-black/70 p-3 rounded-full backdrop-blur-sm transition-all"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="bg-black/50 backdrop-blur-sm rounded-xl px-6 py-3">
              <span className="text-sm font-medium">{scenes[currentScene]}</span>
            </div>
            <button
              onClick={nextScene}
              className="bg-black/50 hover:bg-black/70 p-3 rounded-full backdrop-blur-sm transition-all"
            >
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Scene Indicators */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2">
            {scenes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentScene(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentScene ? "bg-cadmium-orange" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-japanese-carmine to-sinopia text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Virtual 360° Tours
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Immerse yourself in sacred spaces through cutting-edge virtual reality experiences
            </p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="monastery-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tours.map(tour => (
              <div key={tour.id} className="monastery-card overflow-hidden">
                <div className="aspect-video overflow-hidden rounded-t-xl relative group cursor-pointer">
                  <img 
                    src={tour.thumbnail}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                  <button
                    onClick={() => startTour(tour.id)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all">
                      <Play size={24} className="text-japanese-carmine ml-1" />
                    </div>
                  </button>
                  {tour.is360 && (
                    <div className="absolute top-3 left-3 bg-cadmium-orange text-white text-xs px-2 py-1 rounded-full font-medium">
                      360°
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold monastery-text-primary mb-1">
                        {tour.title}
                      </h3>
                      <p className="monastery-text-secondary text-sm">{tour.monastery}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="text-cadmium-orange fill-current" size={16} />
                        <span className="text-sm font-medium">{tour.rating}</span>
                      </div>
                      <div className="text-xs monastery-text-secondary">
                        {tour.views.toLocaleString()} views
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center monastery-text-secondary">
                      <MapPin size={14} className="mr-1" />
                      <span className="text-sm">{tour.location}</span>
                    </div>
                    <div className="flex items-center monastery-text-secondary">
                      <Clock size={14} className="mr-1" />
                      <span className="text-sm">{tour.duration}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(tour.difficulty)}`}>
                      {tour.difficulty}
                    </span>
                  </div>

                  <p className="monastery-text-secondary text-sm leading-relaxed mb-4">
                    {tour.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium monastery-text-primary mb-2">Tour Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 bg-straw/20 monastery-text-secondary rounded-lg"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => startTour(tour.id)}
                    className="w-full monastery-btn-primary flex items-center justify-center gap-2"
                  >
                    <Play size={18} />
                    Start Virtual Tour
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-16 bg-straw/10 rounded-2xl p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold monastery-text-primary mb-4">
                Experience Sacred Spaces Like Never Before
              </h2>
              <p className="monastery-text-secondary max-w-2xl mx-auto leading-relaxed">
                Our virtual tours use state-of-the-art 360° technology to transport you inside the world's most 
                sacred monasteries. Navigate freely through ancient halls, examine intricate details up close, 
                and discover hidden corners that few visitors ever see.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VirtualTours;