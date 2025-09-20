import { Link } from "react-router-dom";
import { ArrowRight, Mountain, Calendar, Archive, Camera, MessageCircle, Search, MapPin, Globe, Languages, Play, ChevronRight, Clock } from "lucide-react";
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
      link: "/",
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
        
      </section>

      {/* Why Monastery360 Section */}
      <section className="monastery-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold monastery-text-primary mb-6">
                Why Monastery360?
              </h2>
              <p className="text-lg monastery-text-secondary mb-4 leading-relaxed">
                Experience the profound tranquility and rich heritage of Sikkim's sacred monasteries through cutting-edge digital technology. Our platform bridges ancient wisdom with modern accessibility.
              </p>
              <p className="text-lg monastery-text-secondary mb-4 leading-relaxed">
                From immersive 360° virtual tours to digitized manuscripts, we preserve and share the spiritual treasures of Himalayan Buddhism for global exploration and learning.
              </p>
              <p className="text-lg monastery-text-secondary leading-relaxed">
                Join us in this sacred journey of discovery, where technology serves to deepen understanding and connection to these timeless places of peace.
              </p>
            </div>
            <div className="monastery-card p-8 text-center">
              <div className="text-6xl mb-4" style={{ color: 'var(--highlight)' }}>🏔️</div>
              <h3 className="text-2xl font-semibold monastery-text-primary mb-4">Sacred Heritage</h3>
              <p className="monastery-text-secondary">Preserving centuries of spiritual wisdom for future generations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="monastery-section" style={{ background: 'var(--stone)', opacity: 0.3 }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold monastery-text-primary mb-4">
              Explore Our Features
            </h2>
            <p className="text-xl monastery-text-secondary max-w-2xl mx-auto">
              Discover the full range of digital experiences we offer
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "360 Virtual Tour", icon: Camera, description: "Immersive monastery exploration" },
              { title: "Digital Manuscripts", icon: Archive, description: "Ancient texts digitally preserved" },
              { title: "3D Reconstruction", icon: Mountain, description: "Historical architecture restored" },
              { title: "Events & Bookings", icon: Calendar, description: "Join sacred ceremonies" },
              { title: "Transport & Stay", icon: MapPin, description: "Complete travel assistance" },
              { title: "Health & Consciousness", icon: MessageCircle, description: "Wellness and mindfulness guidance" }
            ].map((item, index) => {
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

      {/* Featured Monasteries Section */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Rumtek Monastery", location: "East Sikkim" },
              { name: "Pemayangtse Monastery", location: "West Sikkim" },
              { name: "Tashiding Monastery", location: "West Sikkim" },
              { name: "Enchey Monastery", location: "Gangtok" },
              { name: "Dubdi Monastery", location: "West Sikkim" },
              { name: "Phensang Monastery", location: "North Sikkim" }
            ].map((monastery, index) => (
              <div key={index} className="monastery-card group cursor-pointer overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-stone-300 to-stone-400 flex items-center justify-center" style={{ 
                  background: 'linear-gradient(135deg, var(--stone), var(--mountain))', 
                  opacity: 0.7 
                }}>
                  <Mountain size={48} style={{ color: 'var(--bg)' }} />
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

      {/* Interactive Map Preview Section */}
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

      {/* Upcoming Festivals & Events Section */}
      <section className="monastery-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold monastery-text-primary mb-4">
              Upcoming Festivals & Events
            </h2>
            <p className="text-xl monastery-text-secondary max-w-2xl mx-auto">
              Join authentic spiritual celebrations and cultural events
            </p>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              {[
                { name: "Losar Festival", date: "February 10, 2024" },
                { name: "Buddha Jayanti", date: "May 8, 2024" },
                { name: "Saga Dawa", date: "June 15, 2024" },
                { name: "Drukpa Kunley", date: "August 22, 2024" },
                { name: "Dassain Festival", date: "October 12, 2024" },
                { name: "Tihar Festival", date: "November 3, 2024" }
              ].map((event, index) => (
                <div key={index} className="monastery-card p-6 min-w-[300px] flex-shrink-0">
                  <div className="mb-4" style={{ color: 'var(--link-hover)' }}>
                    <Clock size={32} />
                  </div>
                  <h3 className="text-xl font-semibold monastery-text-primary mb-2">
                    {event.name}
                  </h3>
                  <p className="monastery-text-secondary">
                    {event.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Highlight Section */}
      <section className="monastery-section" style={{ background: 'var(--hero-bg)' }}>
        <div className="container mx-auto px-4">
          <div className="monastery-card max-w-4xl mx-auto text-center p-12 relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-gradient-to-br opacity-10"
              style={{ background: 'var(--gradient-primary)' }}
            />
            <div className="relative z-10">
              <div className="mb-8" style={{ color: 'var(--highlight)' }}>
                <Play size={80} className="mx-auto" />
              </div>
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

      {/* Language Translation Section */}
      <section className="monastery-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold monastery-text-primary mb-4">
              Language Translation
            </h2>
            <p className="text-xl monastery-text-secondary max-w-2xl mx-auto">
              Translate content between English, Nepali, and other local languages
            </p>
          </div>
          <div className="monastery-card max-w-2xl mx-auto p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium monastery-text-primary mb-2">Enter text to translate</label>
                <textarea 
                  className="w-full p-3 border rounded-lg resize-none" 
                  style={{ 
                    borderColor: 'var(--stone)',
                    background: 'var(--bg)',
                    color: 'var(--text-primary)'
                  }}
                  rows={4}
                  placeholder="Enter text here..."
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium monastery-text-primary mb-2">From</label>
                  <select 
                    className="w-full p-3 border rounded-lg"
                    style={{ 
                      borderColor: 'var(--stone)',
                      background: 'var(--bg)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <option>English</option>
                    <option>Nepali</option>
                    <option>Hindi</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium monastery-text-primary mb-2">To</label>
                  <select 
                    className="w-full p-3 border rounded-lg"
                    style={{ 
                      borderColor: 'var(--stone)',
                      background: 'var(--bg)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <option>Nepali</option>
                    <option>English</option>
                    <option>Hindi</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium monastery-text-primary mb-2">Translation</label>
                <div 
                  className="w-full p-3 border rounded-lg min-h-[100px]"
                  style={{ 
                    borderColor: 'var(--stone)',
                    background: 'var(--hero-bg)',
                    color: 'var(--text-accent)'
                  }}
                >
                  Translation will appear here...
                </div>
              </div>
              <button 
                className="w-full font-semibold px-6 py-3 rounded-lg inline-flex items-center justify-center gap-2 transition-colors"
                style={{
                  background: 'var(--accent-green)',
                  color: 'var(--bg)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--link-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--accent-green)';
                }}
              >
                <Languages size={20} />
                Translate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
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

      {/* About Section */}
      <section className="monastery-section" style={{ background: 'var(--bg)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold monastery-text-primary mb-4">
              About Monastery360
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg monastery-text-secondary mb-6 leading-relaxed text-center">
              Monastery360 is a pioneering digital preservation project dedicated to documenting and sharing the rich spiritual heritage of Sikkim's Buddhist monasteries. Through advanced technology and deep cultural respect, we create immersive experiences that connect global audiences with these sacred spaces.
            </p>
            <p className="text-lg monastery-text-secondary mb-6 leading-relaxed text-center">
              Our mission extends beyond documentation – we aim to foster understanding, preserve ancient wisdom, and support local communities in maintaining their spiritual traditions for future generations.
            </p>
            <p className="text-lg monastery-text-secondary leading-relaxed text-center">
              Whether you're a spiritual seeker, cultural enthusiast, or academic researcher, Monastery360 offers unprecedented access to the profound beauty and wisdom of Himalayan Buddhism.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section - Original */}
      <section id="explore-section" className="monastery-section">
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
              to="/" 
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