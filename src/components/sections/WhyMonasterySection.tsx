import monkImg from "@/assets/monk.jpg";

const WhyMonasterySection = () => {
  return (
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
          <div className="monastery-card p-8 text-center overflow-hidden">
            <img 
              src={monkImg}
              alt="Monk at monastery"
              className="w-full h-64 object-cover rounded-xl mb-4"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold monastery-text-primary mb-4">Sacred Heritage</h3>
            <p className="monastery-text-secondary">Preserving centuries of spiritual wisdom for future generations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMonasterySection;