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
  const [selectedArchive, setSelectedArchive] = useState<Archive | null>(null);

  // Full info for each monastery
  const fullArchiveInfo: Record<number, string> = {
    1: `RUMTEK :\n108-volume Kangyur\nHigh in the Himalayas, nestled between Tibet, Bhutan, and Nepal and is the north eastern Indian state of Sikkim.\nSikkim was a small independent Buddhist kingdom until the 1970s, after which it became a state of India. Buddhism still plays an important role in the life of the state (the state motto is Conqueror of the Three Worlds, the name of a protective Buddha aspect). The largest Buddhist monastery in Sikkim is Rumtek monastery, which is the main seat-in-exile of Thaye Dorje, His Holiness the 17th Gyalwa Karmapa.\nWangchuk Dorje, the 9th Karmapa, founded the original Rumtek monastery in 1734 with the patronage of the king, the fourth Chogyal Gyurmed Namgyal. It was then, and is today, the seat of the Kagyu tradition in Sikkim.\n\nView of the capital of Sikkim, Gangtok, from Rumtek Monastery.\nBy 1956, the monastery was almost in ruins. When Rangjung Rigpe Dorje, His Holiness the 16th Gyalwa Karmapa, visited Sikkim on pilgrimage, lamas from Rumtek asked him to visit the monastery. Karmapa replied that he would come later, but the time was not yet right. Three years later, the 16th Karmapa, along with Mipham Chokyi Lodro, His Holiness the 14th Kunzig Shamar Rinpoche, had to escape from China and leave Tibet. They were welcomed in Bhutan, before being invited to Sikkim.\nThe 16th Karmapa was offered several sites in the kingdom to establish a new seat in exile, by the Maharaja, Sir Tashi Namgyal. He chose Rumtek because it possessed all of the auspicious attributes needed for the seat of activity of a Karmapa: seven streams flowing towards it, seven hills facing it, a mountain behind, snow ranges in front, and a river below, spiralling downhill like the form of a conch-shell.\n\nThe view from Rumtek monastery\nCarving a monastery complex from the raw jungle was a difficult task, only possible through immense assistance and dedication. The Maharaja of Sikkim gifted seventy-four acres of land at the Rumtek site to the 16th Karmapa. The Prime Minister of India, Pandit Jawaharlal Nehru, promised free food and clothing for the people working there. The government of Sikkim donated funds for the provision of a road, electricity, water, and other necessities. The government of India gave grants for a meditation hall, living quarters, and medical aid. The general public also gave generously, even though no appeal had been made.\nAfter four years of construction work, Rumtek monastery, designed in the traditional Tibetan style, was completed. Precious relics, texts and statues that the 16th Karmapa’s party had managed to save from Tibet, including the entire 108-volume canon of the Buddha’s teachings, were installed, and the 16th Karmapa himself took up residence in 1966.\n\nHis Holiness the 16th Gyalwa Karmapa (right) with His Holiness the 14th Shamar Rinpoche (left), performing a ceremony at Rumtek monastery\nThe 16th Karmapa was fond of birds, and the complex at Rumtek included an aviary, as well as a temple, school, several stupas, a retreat for monks to meditate, and other buildings. After the 16th Karmapa passed away in 1981, his relics were interred in a golden stupa at the site.\n\nReliquary stupa of the 16th Karmapa in Rumtek monastery\nThe original monastery, a short distance away from the new one, has recently been rebuilt with assistance from the Sikkimese government.`,
    2: `PEMYANGTSE:\nDorje Shugden in Nyingma Pemayangtse Monastery, Sikkim\nPemayangtse Monastery in Sikkim, founded by Lhatsun Namkha Jigme of the Nyingma tradition.\nOne of the earliest modern academic references to Dorje Shugden, which includes a description of his form, can be found in Professor and Lieutenant Colonel Laurence Austine Waddell’s description of Pemayangtse Monastery in Sikkim.\nWaddell was a British explorer; a Professor of Tibetan, Chemistry and Pathology; and an Indian Army surgeon. He travelled extensively in India throughout the 1890s (including Sikkim and areas on the borders of Nepal and Tibet) and wrote about the Tibetan Buddhist religious practices he observed.\nPemayangtse Monastery that Wadell wrote about is also known as Pemiongchi and his description of the sacred Nyingma monastery appears in “Lamaism in Sikhim”, first published by W.H. Allen and Co. in 1895 under the title “The Buddhism of Tibet or Lamaism”.\nPemayangtse is one of the six major monasteries of the Nyingma tradition in Sikkim. Established by the master Lhatsun Namkha Jigme (1597-1653) in 1647, it originally began as a small shrine called the Tsangkhang on the very site that the present monastery is located on. It is the main seat of Lhatsun Namkha Jigme’s lineage in the world.\nIt is said that Pemayangtse was designed, if not actually built, by Lhatsun Namkha Jigme as a “high-class” monastery for “ta-sang” or “pure monks” of the pure Tibetan race; celibate and not deformed. The monastery has reportedly retained this reputation. It also was regarded as a royal monastery and was intended to play a unique role in the kingdom of Sikkim: lamas of Pemayangtse would become the king’s spiritual teachers. The Pemayangtse lamas were also the only ones with the power and authority to bestow initiations on the royal family.\nWaddell notes that Pemayangtse’s parent monastery was the famed Mindrolling Monastery in Tibet. At the time, it was also one of only two monasteries in Sikkim that had the complete collection of both the Kangyur (the spoken teachings of the historical Buddha) and the Tangyur (Buddhist commentaries by various Indian and Tibetan masters since the time of the historical Buddha).\nThe monastery, located at an elevation of 2,085 metres, is built amidst the scenic backdrop of snow-capped mountains and hills on every side. It is a three-storied building with murals on its walls and statues of Buddhist saints deified on its various floors.\nOn the third floor, there is a seven-tiered and painted wooden structure portraying Guru Rinpoche’s “Heavenly Palace” known as “Pedma Drawai Shing Kod”, which was originally built by Lhatsun Namkha Jigme himself.\nThe great majority of the monasteries in Sikkim belong to the Nyingma subsect originating from Pemayangtse, known as Lhatsunpa. Only Namchi, Tashidling, Sinon and Thangmochhe Monasteries belong to the Ngadakpa subsect, whereas Kartok and Do-Ling Monasteries belong to the Kartokpa subsect of the Nyingma tradition. These other monasteries are practically subordinate to Pemayangtse, although Namchi and Kartok Monasteries are nominal heads of the Ngadakpa and Kartokpa lineages respectively.\nPemayangtse also exercises supervision over Ling-Them, Zimik, and Phaggye Monasteries which belong to the Rongpa people, also sometimes known as the Lepcha people, who can also enrol in Rigon and Sangngachholing Monasteries. Nuns are admitted to a few monasteries, but their numbers are extremely small, and they are usually illiterate and old.`,
    3: `TASHIDING :\nTashiding Monastery- the holiest monastery of Sikkim\nTashiding Monastery is believed to be the holiest monastery in Sikkim. The legend is that just the glimpse of Thongwa Rangdol Shrine (chorten) , washes away your sins. Seeing is cleansing here; no need to take a holy dip into a holy river. The walk up to the monastery is dotted with white coloured prayer flags . The carvings on the walls which lead to the complex are the Buddhist Chant-“Om Mane Padme Hum”. All this makes it a surrounding full of prayer and positivity, which will anyways change a person.\nPrayer flags and Inscriptions outside Tashiding Monastery\nTashiding-the devoted central glory\nTashiding means “The Devoted Central Glory”. This monastery was founded in 1641 by Ngadak Sempa Chempo Phunshok Rigzing.  He belonged to the Nyingma sect of Tibetan Buddhism. Though the other belief is, when Guru Padmasambhava was looking out for a quiet place, he shot an arrow into the sky which landed on the site of the Tashiding Gompa. It is situated at a height of 5000 feet .  So other than peace and tranquillity you can soak in the beauty of the valley between the two rivers and surrounded  by the Kanchenjunga range\nThe magic vase & Bumchu festival\nThe monastery has a sealed pot (magic vase) of holy water, which is taken out once in a year during the Bumchu ( Bum means pot and Chu means water) festival.  This festival is celebrated on the 14th and 15th day of the first month of the Tibetan calendar.  Buddhists from all over the globe come to attend this festival in which the sealed pot is opened by the monks and the water level is checked. Buddhists believe that the water level helps in predicting how prosperous will be the upcoming year. A full pot implies a prosperous year ahead. Low water level is a sign of famine. Dusty water indicates a year full of conflict and clash.\nTemple complex and Inscriptions outside the monastery\nstone slabs and chortens outside Tasiding Monastery\nThere are 41 Chortens (shrines) outside the temple complex. These chortens are segregated as chortens of enlightenment, chortens of reconciliation and chortens of great miracle. Though the main temple has been renovated and rebuilt, it is surrounded by these original chortens. The chortens hold the relics of Sikkim Chogyals and Lamas, including the ‘Thong-Wa-rang-Dol’ chorten which is believed wash away the sins of anybody who looks at it.\nDoesn’t all this sound magical?  Even if you don’t believe in magic, this beautiful mountain trip and a few days with the lovely locals and monks will make the whole experience out of the world. A trip to Tashiding monastery should be clubbed with Gangtok and you must have a 4 to 5 days plan cover these, given the travel time.`
  };

  const archives: Archive[] = [
    {
      id: 1,
      title: "108-volume Kangyur",
      type: "manuscript",
      monastery: "Rumtek Monastery",
      location: "Sikkim, India",
      century: "18th-20th Century",
      description: `108-volume Kangyur. Largest Buddhist monastery in Sikkim, seat-in-exile of the Karmapa. Founded in 1734, rebuilt after 1956, houses precious relics, texts, and a golden stupa.`,
      image: "https://files.oaiusercontent.com/file-1e7e2e7e-6b7e-4e2e-8e2e-2e7e2e7e2e7e/rumtek-festival.jpg",
      views: 3200,
      likes: 210,
      downloadable: false
    },
    {
      id: 2,
      title: "Dorje Shugden in Nyingma Pemayangtse Monastery",
      type: "artwork",
      monastery: "Pemayangtse Monastery",
      location: "Pelling, Sikkim, India",
      century: "17th Century",
      description: `Founded by Lhatsun Namkha Jigme in 1647. Main seat of his lineage, designed for “pure monks.” Renowned for murals, statues, and Guru Rinpoche’s Heavenly Palace. Houses Kangyur and Tangyur collections.`,
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Pemayangtse_Monastery_Sikkim_India.jpg",
      views: 2500,
      likes: 180,
      downloadable: false
    },
    {
      id: 3,
      title: "Tashiding Monastery - The Holiest Monastery of Sikkim",
      type: "artifact",
      monastery: "Tashiding Monastery",
      location: "West Sikkim, India",
      century: "17th Century",
  description: `Holiest monastery in Sikkim, founded in 1641. Known for Thongwa Rangdol Shrine (washes away sins by sight), 41 chortens, and the Bumchu festival with its sacred water vase.`,
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Tashiding_Monastery_Sikkim_India.jpg",
      views: 2100,
      likes: 150,
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
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6 text-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Digital Archives & Treasures
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
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
                    <button className="monastery-btn-accent py-2 px-4 text-xs" onClick={() => setSelectedArchive(archive)}>
                      View Details
                    </button>
      {/* Modal for full archive info */}
      {selectedArchive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-xl max-w-lg w-full p-8 relative shadow-lg" style={{ maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
            <button
              className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-black"
              onClick={() => setSelectedArchive(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: 'var(--text-primary)' }}>{selectedArchive.title}</h2>
            <img src={selectedArchive.image} alt={selectedArchive.title} className="w-full rounded mb-4" />
            <div style={{ overflowY: 'auto', flex: 1, minHeight: 0 }}>
              <pre className="whitespace-pre-wrap text-sm" style={{ color: 'var(--text-secondary)' }}>{fullArchiveInfo[selectedArchive.id]}</pre>
            </div>
          </div>
        </div>
      )}
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