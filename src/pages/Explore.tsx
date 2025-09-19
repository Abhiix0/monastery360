import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, MapPin, Users, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedMonastery, setSelectedMonastery] = useState(null);

  const monasteries = [
    {
      id: 1,
      name: "Rumtek Monastery (Dharma Chakra Centre)",
      location: "24 km from Gangtok, Sikkim, India (altitude: 1,500m)",
      region: "asia",
  image: "https://files.oaiusercontent.com/file-1e7e2e7e-6b7e-4e2e-8e2e-2e7e2e7e2e7e/rumtek-festival.jpg",
      description: "Largest monastery in Sikkim, seat of the Karmapa Lama, replica of the original Kagyu sect HQ in Tibet. Houses sacred relics, golden stupa, and Karma Shri Nalanda Institute. Features seven auspicious attributes and a magnificent four-story temple.",
      visitors: "Varies",
      rating: 4.9,
      established: "1734 / 1966",
      fullInfo: `Name: Rumtek Monastery / Dharma Chakra Centre\nLocation: 24 kilometers from Gangtok, Sikkim, at an altitude of 1,500 meters (4,900 ft)\nFounded: Originally built in 1734 by the 9th Karmapa Wangchuk Dorje, rebuilt and inaugurated in 1966 by the 16th Karmapa\nSect: Karma Kagyu (Tibetan Buddhism)\nHighlights:\n• Largest monastery in Sikkim and seat of the Karmapa Lama\n• Replica of the original Kagyu sect headquarters in Tibet\n• Houses sacred relics and artifacts brought from Tibet\n• Features a golden stupa containing relics of the 16th Karmapa\n• Home to Karma Shri Nalanda Institute for Higher Buddhist Studies\n• Built with seven auspicious attributes: seven streams flowing towards it, seven hills facing it, mountain behind, snow ranges in front, and river below\n• Magnificent four-story main temple topped by golden sculpture\n• Ten-feet-high statue of Sakyamuni Buddha in shrine hall\nFestivals:\n• Losar (Tibetan New Year) - February/March with Cham masked dances\n• Gutor - End of Tibetan year with ritual dances in main courtyard\n• Kagyu Monlam Chenmo - Great prayer festival for world peace\n• Mahakala Puja - Performed before New Year to dispel negativity\nNearby Attractions:\n• Gangtok (24 km)\n• Enchey Monastery\n• Hanuman Tok`
    },
    {
      id: 2,
      name: "Pemyangtse Monastery",
      location: "Near Pelling, West Sikkim, India (2,085m elevation)",
      region: "asia",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Pemayangtse_Monastery_Sikkim_India.jpg",
      description: "Second oldest and premier Nyingma monastery in Sikkim. Three-storied Tibetan architecture, Zangdok Palri, panoramic Kanchenjunga views, ancient murals, and gold-plated Guru Padmasambhava statue.",
      visitors: "Varies",
      rating: 4.8,
      established: "1705",
      fullInfo: `Name: Pemyangtse Monastery (\"Perfect Sublime Lotus\")\nLocation: Near Pelling, West Sikkim, 110 km from Gangtok, at 2,085m elevation\nFounded: 1705 by Lama Lhatsun Chempo (originally started as small Lhakhang in 1647)\nSect: Nyingma Order of Tibetan Buddhism\nHighlights:\n• Second oldest monastery in Sikkim and premier Nyingma monastery\n• Three-storied traditional Tibetan architecture\n• Built exclusively for \"ta-tshang\" (pure monks of Tibetan lineage)\n• Seven-tiered wooden structure \"Zangdok Palri\" depicting Guru Rinpoche's heavenly palace\n• Panoramic views of Kanchenjunga range\n• Ancient murals, sculptures, and gold-plated statue of Guru Padmasambhava\n• Overlooks ruins of Rabdentse (former capital of Sikkim)\n• Controls all other Nyingma monasteries in Sikkim\nFestivals:\n• Cham Dance Festival (Drupka Teshi) - 28th and 29th day of 12th lunar month (February)\n• Pang Lhabsol - Traditional ritual dance performed by Pemyangtse lamas\n• Annual monastic dances performed in palace chapel in Gangtok\nNearby Attractions:\n• Pelling Skywalk (2 km)\n• Rabdentse Ruins\n• Khecheopalri Lake\n• Sanga Choeling Monastery`
    },
    {
      id: 3,
      name: "Tashiding Monastery",
      location: "West Sikkim, 27 km from Gyalshing, India",
      region: "asia",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Tashiding_Monastery_Sikkim_India.jpg",
      description: "Most sacred and holiest monastery in Sikkim, called 'Heart of Sikkim'. Home to Thong-Wa-Rang-Dol chorten, 41 chortens, and spectacular Kanchenjunga backdrop.",
      visitors: "Varies",
      rating: 4.7,
      established: "1641",
      fullInfo: `Name: Tashiding Monastery (\"The Devoted Central Glory\")\nLocation: West Sikkim, 27 km from Gyalshing, on hilltop between Rathong and Rangeet rivers\nFounded: 1641 by Ngadak Sempa Chempo Phunshok Rigzing\nSect: Nyingma sect of Tibetan Buddhism\nHighlights:\n• Most sacred and holiest monastery in Sikkim, called \"Heart of Sikkim\"\n• Houses sacred Thong-Wa-Rang-Dol chorten believed to purify sins by sight\n• 41 chortens of different categories including \"Chortens of Enlightenment\"\n• Legend says Guru Padmasambhava shot arrow here to select meditation site\n• Spectacular backdrop of Mount Kanchenjunga\n• Prayer wheels line the path from market to monastery\n• Part of Buddhist pilgrimage circuit starting from Yuksom\nFestivals:\n• Bumchu Festival - 14th-15th of first lunar month (February/March)\n• Sacred holy water ceremony where water level predicts future\n• Attracts devotees from India, Bhutan, Nepal, and Sri Lanka\n• Water distributed at midnight ceremony believed to have healing properties\nNearby Attractions:\n• Yuksom (25 km)\n• Pelling (36 km)\n• Dubdi Monastery\n• Khecheopalri Lake\n• Norbugang Chorten`
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
      <section 
        className="text-white py-16"
        style={{ 
          background: 'var(--gradient-primary)'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Sacred Monasteries
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ 
              color: 'var(--bg)', 
              opacity: 0.9 
            }}>
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
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2" size={20} style={{ color: 'var(--text-accent)' }} />
                <input
                  type="text"
                  placeholder="Search monasteries by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl outline-none"
                  style={{
                    border: '1px solid var(--stone)',
                    background: 'var(--bg)',
                    color: 'var(--text-primary)'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--highlight)';
                    e.currentTarget.style.boxShadow = '0 0 0 2px rgba(194, 167, 109, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--stone)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Region Filter */}
              <div className="flex items-center gap-3">
                <Filter size={20} style={{ color: 'var(--text-accent)' }} />
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="px-4 py-3 rounded-xl outline-none"
                  style={{
                    border: '1px solid var(--stone)',
                    background: 'var(--bg)',
                    color: 'var(--text-primary)'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--highlight)';
                    e.currentTarget.style.boxShadow = '0 0 0 2px rgba(194, 167, 109, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--stone)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
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
              <div
                key={monastery.id}
                className="monastery-card group overflow-hidden cursor-pointer"
                onClick={() => setSelectedMonastery(monastery)}
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
                    <h3 className="text-xl font-semibold monastery-text-primary group-hover:monastery-text-secondary transition-colors"
                        style={{ color: 'var(--text-primary)' }}
                    >
                      {monastery.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star size={16} style={{ color: 'var(--highlight)', fill: 'var(--highlight)' }} />
                      <span className="text-sm font-medium monastery-text-secondary">
                        {monastery.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center mb-3" style={{ color: 'var(--text-accent)' }}>
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{monastery.location}</span>
                  </div>
                  <p className="monastery-text-secondary text-sm mb-4 leading-relaxed">
                    {monastery.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--stone)' }}>
                    <div className="flex items-center gap-1 text-sm monastery-text-secondary">
                      <Users size={14} />
                      <span>{monastery.visitors} visitors</span>
                    </div>
                    <div className="text-sm monastery-text-secondary">
                      Est. {monastery.established}
                    </div>
                  </div>
                </div>
              </div>
            ))}
      {/* Modal for full info */}
      {selectedMonastery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-xl max-w-lg w-full p-8 relative shadow-lg overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-black"
              onClick={() => setSelectedMonastery(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: 'var(--text-primary)' }}>{selectedMonastery.name}</h2>
            <img src={selectedMonastery.image} alt={selectedMonastery.name} className="w-full rounded mb-4" />
            <pre className="whitespace-pre-wrap text-sm" style={{ color: 'var(--text-secondary)' }}>{selectedMonastery.fullInfo}</pre>
          </div>
        </div>
      )}
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