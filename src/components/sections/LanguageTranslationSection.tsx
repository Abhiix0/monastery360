import { Languages } from "lucide-react";

const LanguageTranslationSection = () => {
  return (
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
  );
};

export default LanguageTranslationSection;