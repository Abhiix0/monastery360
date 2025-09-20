const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;