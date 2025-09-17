import { Heart, Globe, Users, Award, Mail, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & Digital Preservation Specialist",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&face",
      bio: "Former UNESCO World Heritage specialist with 15 years of experience in cultural preservation."
    },
    {
      name: "Brother Marcus Rivera",
      role: "Spiritual Advisor & Content Curator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&face",
      bio: "Benedictine monk and scholar who spent 20 years studying in monasteries across Tibet and Europe."
    },
    {
      name: "Elena Patel",
      role: "Virtual Reality Developer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&face",
      bio: "Leading VR technologist specializing in immersive cultural experiences and 360° documentation."
    },
    {
      name: "Dr. James Harrison",
      role: "Digital Archivist & Historian",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&face",
      bio: "Medieval historian and digital humanities expert with expertise in manuscript preservation."
    }
  ];

  const stats = [
    { icon: Globe, number: "127", label: "Monasteries Documented" },
    { icon: Users, number: "50K+", label: "Community Members" },
    { icon: Award, number: "15", label: "Cultural Heritage Awards" },
    { icon: Heart, number: "1M+", label: "Lives Touched" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-japanese-carmine to-sinopia text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Monastery360
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Preserving spiritual heritage through innovative technology and mindful storytelling
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="monastery-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold monastery-text-primary mb-6">
                Our Sacred Mission
              </h2>
              <p className="text-lg monastery-text-secondary leading-relaxed">
                In an increasingly digital world, we believe that ancient wisdom and sacred spaces should remain 
                accessible to all seekers. Monastery360 bridges the gap between timeless spiritual traditions 
                and cutting-edge technology, creating immersive experiences that honor the contemplative life 
                while making it available to a global community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-japanese-carmine rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold monastery-text-primary mb-3">
                  Preserve Heritage
                </h3>
                <p className="monastery-text-secondary">
                  Documenting and safeguarding monastic traditions, architecture, and wisdom for future generations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cadmium-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold monastery-text-primary mb-3">
                  Share Globally
                </h3>
                <p className="monastery-text-secondary">
                  Making sacred spaces and spiritual teachings accessible to people worldwide through technology.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-sinopia rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold monastery-text-primary mb-3">
                  Build Community
                </h3>
                <p className="monastery-text-secondary">
                  Connecting seekers, scholars, and spiritual practitioners in a global community of mindfulness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-straw/10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-japanese-carmine rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="text-white" size={20} />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold monastery-text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm monastery-text-secondary">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="monastery-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold monastery-text-primary mb-6">
                Our Story
              </h2>
            </div>

            <div className="space-y-8">
              <div className="monastery-card p-8">
                <h3 className="text-xl font-semibold monastery-text-primary mb-4">
                  The Beginning (2019)
                </h3>
                <p className="monastery-text-secondary leading-relaxed">
                  Monastery360 was born from a chance encounter between Dr. Sarah Chen, a UNESCO cultural 
                  preservation specialist, and Brother Marcus Rivera during a documentation project at a 
                  remote Tibetan monastery. They witnessed firsthand how climate change and modernization 
                  were threatening these sacred spaces and their irreplaceable wisdom.
                </p>
              </div>

              <div className="monastery-card p-8">
                <h3 className="text-xl font-semibold monastery-text-primary mb-4">
                  The Vision (2020)
                </h3>
                <p className="monastery-text-secondary leading-relaxed">
                  Combining Sarah's expertise in digital preservation with Marcus's deep spiritual knowledge, 
                  they envisioned a platform that could capture not just the physical beauty of monasteries, 
                  but their essence—the peace, wisdom, and transformative power that visitors experience. 
                  The goal was to democratize access to these sacred spaces for anyone seeking spiritual growth.
                </p>
              </div>

              <div className="monastery-card p-8">
                <h3 className="text-xl font-semibold monastery-text-primary mb-4">
                  The Innovation (2021-2023)
                </h3>
                <p className="monastery-text-secondary leading-relaxed">
                  With Elena Patel's revolutionary VR technology and Dr. Harrison's archival expertise, 
                  the team developed proprietary methods for creating truly immersive spiritual experiences. 
                  They pioneered techniques that capture not just 360° visuals, but the acoustic properties, 
                  energy, and atmosphere that make each monastery unique.
                </p>
              </div>

              <div className="monastery-card p-8">
                <h3 className="text-xl font-semibold monastery-text-primary mb-4">
                  The Community (2024)
                </h3>
                <p className="monastery-text-secondary leading-relaxed">
                  Today, Monastery360 has grown into a global community of seekers, with partnerships 
                  spanning 30 countries. Our AI monk chatbot, Brother Tenzin, has provided guidance to 
                  over 100,000 individuals, while our virtual tours have allowed people from every continent 
                  to experience the transformative power of sacred spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-straw/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold monastery-text-primary mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg monastery-text-secondary max-w-2xl mx-auto">
              A diverse group of technologists, scholars, and spiritual practitioners united by our shared mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="monastery-card p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold monastery-text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-cadmium-orange font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm monastery-text-secondary leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="monastery-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold monastery-text-primary mb-6">
                Get In Touch
              </h2>
              <p className="text-lg monastery-text-secondary">
                We'd love to hear from you. Reach out with questions, partnership opportunities, or just to share your experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="monastery-card p-6 text-center">
                <div className="w-12 h-12 bg-japanese-carmine rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={20} />
                </div>
                <h3 className="font-semibold monastery-text-primary mb-2">Email Us</h3>
                <p className="monastery-text-secondary">hello@monastery360.com</p>
              </div>

              <div className="monastery-card p-6 text-center">
                <div className="w-12 h-12 bg-cadmium-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white" size={20} />
                </div>
                <h3 className="font-semibold monastery-text-primary mb-2">Call Us</h3>
                <p className="monastery-text-secondary">+1 (555) MONASTERY</p>
              </div>

              <div className="monastery-card p-6 text-center">
                <div className="w-12 h-12 bg-sinopia rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" size={20} />
                </div>
                <h3 className="font-semibold monastery-text-primary mb-2">Visit Us</h3>
                <p className="monastery-text-secondary">Sacred Valley Retreat Center<br/>Tibet</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="monastery-card p-8">
                <h3 className="text-xl font-semibold monastery-text-primary mb-4">
                  Partner With Us
                </h3>
                <p className="monastery-text-secondary leading-relaxed mb-6">
                  Are you a monastery, cultural institution, or technology partner interested in collaborating? 
                  We're always seeking new opportunities to expand our mission of preserving and sharing 
                  spiritual heritage.
                </p>
                <button className="monastery-btn-primary">
                  Learn About Partnerships
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;