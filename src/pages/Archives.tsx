import { useState } from "react";
import { Search, Filter, FileText, Image, Scroll, Download, Eye, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Archive {
  id: number;
  title: string;
  type: "manuscript" | "artwork" | "artifact";
  monastery: string;
  location: string;
  century: string;
  description: string;
  image: string;
  views: number;
  likes: number;
  downloadable: boolean;
}

const Archives = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());

  const archives: Archive[] = [
    {
      id: 1,
      title: "Lotus Sutra Manuscript",
      type: "manuscript",
      monastery: "Todai-ji Temple",
      location: "Nara, Japan",
      century: "8th Century",
      description: "Ancient Buddhist text written in gold ink on indigo paper, containing profound teachings on the nature of Buddha.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      views: 2847,
      likes: 156,
      downloadable: true
    },
    {
      id: 2,
      title: "Mandala of Compassion",
      type: "artwork",
      monastery: "Hemis Monastery",
      location: "Ladakh, India", 
      century: "15th Century",
      description: "Intricate sand mandala representing the Buddhist concept of impermanence and the path to enlightenment.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      views: 1923,
      likes: 89,
      downloadable: false
    },
    {
      id: 3,
      title: "Tibetan Singing Bowl",
      type: "artifact",
      monastery: "Rongbuk Monastery",
      location: "Tibet, China",
      century: "12th Century",
      description: "Sacred bronze bowl used for meditation and healing ceremonies, inscribed with Om Mani Padme Hum mantra.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      views: 1567,
      likes: 92,
      downloadable: false
    },
    {
      id: 4,
      title: "Book of Hours",
      type: "manuscript",
      monastery: "Mont-Saint-Michel Abbey",
      location: "Normandy, France",
      century: "14th Century",
      description: "Illuminated prayer book featuring exquisite miniatures depicting the life of Christ and various saints.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      views: 3421,
      likes: 203,
      downloadable: true
    },
    {
      id: 5,
      title: "Byzantine Fresco Fragment",
      type: "artwork",
      monastery: "Hosios Loukas",
      location: "Boeotia, Greece",
      century: "11th Century",
      description: "Preserved wall painting showing the Pantocrator, demonstrating the pinnacle of Byzantine artistic achievement.",
      image: "https://images.unsplash.com/photo-1555993539-1732b0258c5f?w=400&h=300&fit=crop",
      views: 2156,
      likes: 134,
      downloadable: false
    },
    {
      id: 6,
      title: "Jade Buddha Statue",
      type: "artifact",
      monastery: "Jade Buddha Temple",
      location: "Shanghai, China",
      century: "19th Century",
      description: "Exquisite jade carving of Buddha in meditation posture, brought from Burma and enshrined in pure gold.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      views: 4231,
      likes: 287,
      downloadable: false
    }
  ];

  const types = [
    { value: "all", label: "All Types", icon: FileText },
    { value: "manuscript", label: "Manuscripts", icon: Scroll },
    { value: "artwork", label: "Artwork", icon: Image },
    { value: "artifact", label: "Artifacts", icon: Eye }
  ];

  const filteredArchives = archives.filter(archive => {
    const matchesSearch = archive.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         archive.monastery.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         archive.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || archive.type === selectedType;
    return matchesSearch && matchesType;
  });

  const toggleLike = (id: number) => {
    const newLiked = new Set(likedItems);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedItems(newLiked);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "manuscript": return <Scroll size={16} />;
      case "artwork": return <Image size={16} />;
      case "artifact": return <Eye size={16} />;
      default: return <FileText size={16} />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "manuscript": return "bg-japanese-carmine text-white";
      case "artwork": return "bg-cadmium-orange text-white";
      case "artifact": return "bg-sinopia text-white";
      default: return "bg-rose-taupe text-white";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-japanese-carmine to-sinopia text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Digital Archives & Treasures
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Explore rare manuscripts, sacred artwork, and ancient artifacts preserved from monasteries worldwide
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
                  placeholder="Search by title, monastery, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border monastery-border rounded-xl focus:ring-2 focus:ring-japanese-carmine focus:border-transparent outline-none"
                />
              </div>

              {/* Type Filter */}
              <div className="flex flex-wrap gap-2">
                {types.map(type => {
                  const IconComponent = type.icon;
                  return (
                    <button
                      key={type.value}
                      onClick={() => setSelectedType(type.value)}
                      className={`px-4 py-3 rounded-xl flex items-center gap-2 transition-all ${
                        selectedType === type.value
                          ? "bg-japanese-carmine text-white"
                          : "border monastery-border hover:bg-straw/20"
                      }`}
                    >
                      <IconComponent size={16} />
                      <span className="text-sm font-medium">{type.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="monastery-text-secondary text-lg">
              Found <span className="font-semibold monastery-text-primary">{filteredArchives.length}</span> items in our digital collection
            </p>
          </div>

          {/* Archives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArchives.map(archive => (
              <div key={archive.id} className="monastery-card group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden rounded-t-xl relative">
                  <img 
                    src={archive.image}
                    alt={archive.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getTypeColor(archive.type)}`}>
                      {getTypeIcon(archive.type)}
                      {archive.type.charAt(0).toUpperCase() + archive.type.slice(1)}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 flex gap-2">
                    {archive.downloadable && (
                      <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                        <Download size={14} className="text-japanese-carmine" />
                      </button>
                    )}
                    <button 
                      onClick={() => toggleLike(archive.id)}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                    >
                      <Heart 
                        size={14} 
                        className={likedItems.has(archive.id) ? "text-red-500 fill-current" : "text-rose-taupe"} 
                      />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold monastery-text-primary mb-2 group-hover:text-sinopia transition-colors">
                    {archive.title}
                  </h3>

                  <div className="text-sm monastery-text-secondary space-y-1 mb-3">
                    <div>{archive.monastery}</div>
                    <div className="flex justify-between">
                      <span>{archive.location}</span>
                      <span>{archive.century}</span>
                    </div>
                  </div>

                  <p className="monastery-text-secondary text-sm leading-relaxed mb-4">
                    {archive.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t monastery-border text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 monastery-text-secondary">
                        <Eye size={14} />
                        <span>{archive.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1 monastery-text-secondary">
                        <Heart size={14} />
                        <span>{archive.likes + (likedItems.has(archive.id) ? 1 : 0)}</span>
                      </div>
                    </div>
                    <button className="monastery-btn-accent py-2 px-4 text-xs">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredArchives.length === 0 && (
            <div className="text-center py-16">
              <div className="monastery-text-secondary text-xl mb-4">
                No items found matching your search criteria
              </div>
              <p className="monastery-text-secondary">
                Try adjusting your search terms or select a different type filter
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Archives;