import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, MapPin, Users, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const monasteries = [
    {
      id: 1,
      name: "Tiger's Nest Monastery",
      location: "Bhutan, Himalayas",
      region: "asia",
      image: "https://images.unsplash.com/photo-1544531586-fbb6cf2d4e29?w=400&h=300&fit=crop",
      description: "A sacred Buddhist site built on a cliff face 3,000 feet above the Paro valley floor.",
      visitors: "25K+",
      rating: 4.9,
      established: "1692"
    },
    {
      id: 2,
      name: "Mont-Saint-Michel",
      location: "Normandy, France",
      region: "europe",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=300&fit=crop",
      description: "Medieval abbey perched on a rocky tidal island, a masterpiece of Gothic architecture.",
      visitors: "45K+",
      rating: 4.8,
      established: "966"
    },
    {
      id: 3,
      name: "Meteora Monasteries",
      location: "Thessaly, Greece",
      region: "europe",
      image: "https://images.unsplash.com/photo-1555993539-1732b0258c5f?w=400&h=300&fit=crop",
      description: "Six Eastern Orthodox monasteries built on towering rock pillars reaching toward heaven.",
      visitors: "38K+",
      rating: 4.7,
      established: "14th Century"
    },
    {
      id: 4,
      name: "Shaolin Temple",
      location: "Henan, China",
      region: "asia",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      description: "The birthplace of Zen Buddhism and legendary home of Kung Fu martial arts.",
      visitors: "52K+",
      rating: 4.8,
      established: "495 AD"
    },
    {
      id: 5,
      name: "Ganden Monastery",
      location: "Tibet, China",
      region: "asia",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      description: "One of the 'great three' Gelug university monasteries, founded by Je Tsongkhapa.",
      visitors: "15K+",
      rating: 4.9,
      established: "1409"
    },
    {
      id: 6,
      name: "Rila Monastery",
      location: "Sofia, Bulgaria",
      region: "europe",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Bulgaria's largest monastery, renowned for its Renaissance architecture and frescoes.",
      visitors: "22K+",
      rating: 4.6,
      established: "927"
    }
  ];

  const regions = [
    { value: "all", label: "All Regions" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "americas", label: "Americas" },
    { value: "africa", label: "Africa" }
  ];

  const filteredMonasteries = monasteries.filter(monastery => {
    const matchesSearch = monastery.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         monastery.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === "all" || monastery.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-japanese-carmine to-sinopia text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Sacred Monasteries
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discover centuries-old monasteries from around the world, each with unique history and spiritual significance
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="monastery-section">
        <div className="container mx-auto px-4">
          <div className="bg-card monastery-card p-6 mb-12">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rose-taupe" size={20} />
                <input
                  type="text"
                  placeholder="Search monasteries by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border monastery-border rounded-xl focus:ring-2 focus:ring-japanese-carmine focus:border-transparent outline-none"
                />
              </div>

              {/* Region Filter */}
              <div className="flex items-center gap-3">
                <Filter className="text-rose-taupe" size={20} />
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="px-4 py-3 border monastery-border rounded-xl focus:ring-2 focus:ring-japanese-carmine focus:border-transparent outline-none bg-background"
                >
                  {regions.map(region => (
                    <option key={region.value} value={region.value}>
                      {region.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="monastery-text-secondary text-lg">
              Found <span className="font-semibold monastery-text-primary">{filteredMonasteries.length}</span> monasteries
            </p>
          </div>

          {/* Monastery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMonasteries.map(monastery => (
              <Link 
                key={monastery.id}
                to={`/monastery/${monastery.id}`}
                className="monastery-card group overflow-hidden"
              >
                <div className="aspect-video overflow-hidden rounded-t-xl">
                  <img 
                    src={monastery.image}
                    alt={monastery.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold monastery-text-primary group-hover:text-sinopia transition-colors">
                      {monastery.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="text-cadmium-orange fill-current" size={16} />
                      <span className="text-sm font-medium monastery-text-secondary">
                        {monastery.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center text-rose-taupe mb-3">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{monastery.location}</span>
                  </div>

                  <p className="monastery-text-secondary text-sm mb-4 leading-relaxed">
                    {monastery.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t monastery-border">
                    <div className="flex items-center gap-1 text-sm monastery-text-secondary">
                      <Users size={14} />
                      <span>{monastery.visitors} visitors</span>
                    </div>
                    <div className="text-sm monastery-text-secondary">
                      Est. {monastery.established}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredMonasteries.length === 0 && (
            <div className="text-center py-16">
              <div className="monastery-text-secondary text-xl mb-4">
                No monasteries found matching your search criteria
              </div>
              <p className="monastery-text-secondary">
                Try adjusting your search terms or select a different region
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Explore;