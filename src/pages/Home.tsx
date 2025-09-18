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
      color: "var(--text-primary)"
    },
    {
      icon: Calendar,
      title: "Events & Booking",
      description: "Join festivals, meditation retreats, and cultural ceremonies at authentic monastery locations.",
      link: "/events",
      color: "var(--link-hover)"
    },
    {
      icon: Archive,
      title: "Digital Archives",
      description: "Access rare manuscripts, historical artifacts, and sacred art from monastery collections.",
      link: "/archives",
      color: "var(--highlight)"
    },
    {
      icon: Camera,
      title: "Virtual Tours",
      description: "Experience immersive 360° tours of monastery halls, gardens, and meditation spaces.",
      link: "/tours",
      color: "var(--accent-green)"
    },
    {
      icon: MessageCircle,
      title: "Monk Chatbot",
      description: "Get guidance on meditation, philosophy, and spiritual practices from our AI monk assistant.",
      link: "/chatbot",
      color: "var(--mountain)"
    },
    {
      icon: Mountain,
      title: "About Our Mission",
      description: "Learn how Monastery360 preserves and shares the world's monastic heritage digitally.",
      link: "/about",
      color: "var(--link-hover)"
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
        <div className="absolute inset-0" style={{ 
          background: 'var(--gradient-hero)',
          opacity: 0.8 
        }} />
        
        <div className="relative z-10 text-center px-4 max-w-4xl" style={{ color: 'var(--text-primary)' }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Monastery<span style={{ color: 'var(--highlight)' }}>360</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed drop-shadow" style={{ 
            color: 'var(--text-accent)', 
            opacity: 0.95 
          }}>
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
                  <div className="mb-4 transition-transform group-hover:scale-110" style={{ color: feature.color }}>
                    <IconComponent size={40} />
                  </div>
                  <h3 className="text-xl font-semibold monastery-text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="monastery-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex items-center monastery-text-primary font-medium group-hover:monastery-text-secondary transition-colors" style={{
                    color: 'var(--text-primary)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--link-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  >
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="text-white py-16"
        style={{ 
          background: 'var(--gradient-primary)'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Begin Your Spiritual Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ 
            color: 'var(--bg)', 
            opacity: 0.9 
          }}>
            Join thousands of seekers exploring the world's most sacred monasteries from the comfort of your home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/events" 
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
            >
              Book an Experience <Calendar size={20} />
            </Link>
            <Link 
              to="/chatbot" 
              className="font-semibold px-8 py-4 rounded-xl inline-flex items-center gap-2 transition-all"
              style={{
                border: '2px solid var(--bg)',
                color: 'var(--bg)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bg)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--bg)';
              }}
            >
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