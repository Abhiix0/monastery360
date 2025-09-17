import { Link } from "react-router-dom";
import { ArrowRight, Mountain, Calendar, Archive, Camera, MessageCircle, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import monasteryHero from "@/assets/monastery-hero.jpg";

const Home = () => {
  const features = [
    {
      icon: Search,
      title: "Explore Monasteries",
      description: "Discover sacred sites from around the world with detailed information and stunning imagery.",
      link: "/explore",
      color: "text-japanese-carmine"
    },
    {
      icon: Calendar,
      title: "Events & Booking",
      description: "Join festivals, meditation retreats, and cultural ceremonies at authentic monastery locations.",
      link: "/events",
      color: "text-sinopia"
    },
    {
      icon: Archive,
      title: "Digital Archives",
      description: "Access rare manuscripts, historical artifacts, and sacred art from monastery collections.",
      link: "/archives",
      color: "text-cadmium-orange"
    },
    {
      icon: Camera,
      title: "Virtual Tours",
      description: "Experience immersive 360° tours of monastery halls, gardens, and meditation spaces.",
      link: "/tours",
      color: "text-japanese-carmine"
    },
    {
      icon: MessageCircle,
      title: "Monk Chatbot",
      description: "Get guidance on meditation, philosophy, and spiritual practices from our AI monk assistant.",
      link: "/chatbot",
      color: "text-sinopia"
    },
    {
      icon: Mountain,
      title: "About Our Mission",
      description: "Learn how Monastery360 preserves and shares the world's monastic heritage digitally.",
      link: "/about",
      color: "text-cadmium-orange"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${monasteryHero})` }}
        />
        <div className="absolute inset-0 monastery-hero opacity-80" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Monastery<span className="text-cadmium-orange">360</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed drop-shadow">
            Discover the spiritual heritage of monasteries worldwide through immersive digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/explore" className="monastery-btn-primary inline-flex items-center gap-2 text-lg">
              Start Exploring <ArrowRight size={20} />
            </Link>
            <Link to="/tours" className="monastery-btn-accent inline-flex items-center gap-2 text-lg">
              Virtual Tours <Camera size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="monastery-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold monastery-text-primary mb-4">
              Explore Sacred Spaces
            </h2>
            <p className="text-xl monastery-text-secondary max-w-2xl mx-auto">
              Immerse yourself in the tranquil world of monasteries with our comprehensive digital platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Link 
                  key={index}
                  to={feature.link}
                  className="monastery-card p-6 group cursor-pointer"
                >
                  <div className={`${feature.color} mb-4 transition-transform group-hover:scale-110`}>
                    <IconComponent size={40} />
                  </div>
                  <h3 className="text-xl font-semibold monastery-text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="monastery-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex items-center text-japanese-carmine font-medium group-hover:text-sinopia transition-colors">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-japanese-carmine via-sinopia to-cadmium-orange text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Begin Your Spiritual Journey Today
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of seekers exploring the world's most sacred monasteries from the comfort of your home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/events" className="bg-white text-japanese-carmine hover:bg-straw transition-colors font-semibold px-8 py-4 rounded-xl inline-flex items-center gap-2">
              Book an Experience <Calendar size={20} />
            </Link>
            <Link to="/chatbot" className="border-2 border-white text-white hover:bg-white hover:text-japanese-carmine transition-all font-semibold px-8 py-4 rounded-xl inline-flex items-center gap-2">
              Ask a Monk <MessageCircle size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;