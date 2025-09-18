import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import monasteryLogo from "@/assets/monastery-logo.png";

const Footer = () => {
  return (
    <footer style={{ background: 'var(--wood)', color: 'var(--bg)' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={monasteryLogo} alt="Monastery360 Logo" className="w-8 h-8" />
              <span className="text-xl font-bold" style={{ color: 'var(--bg)' }}>Monastery360</span>
            </div>
            <p className="mb-6 max-w-md" style={{ color: 'var(--bg)', opacity: 0.9 }}>
              Discover the spiritual heritage of monasteries worldwide through immersive digital experiences, 
              virtual tours, and authentic cultural events.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 rounded-full transition-colors"
                style={{ backgroundColor: 'rgba(166, 94, 59, 0.2)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--link-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(166, 94, 59, 0.2)';
                }}
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full transition-colors"
                style={{ backgroundColor: 'rgba(166, 94, 59, 0.2)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--link-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(166, 94, 59, 0.2)';
                }}
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full transition-colors"
                style={{ backgroundColor: 'rgba(166, 94, 59, 0.2)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--link-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(166, 94, 59, 0.2)';
                }}
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4" style={{ color: 'var(--bg)' }}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/explore" 
                  className="transition-colors"
                  style={{ color: 'var(--bg)', opacity: 0.9 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--highlight)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--bg)';
                    e.currentTarget.style.opacity = '0.9';
                  }}
                >
                  Explore Monasteries
                </Link>
              </li>
              <li>
                <Link 
                  to="/events" 
                  className="transition-colors"
                  style={{ color: 'var(--bg)', opacity: 0.9 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--highlight)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--bg)';
                    e.currentTarget.style.opacity = '0.9';
                  }}
                >
                  Events & Booking
                </Link>
              </li>
              <li>
                <Link 
                  to="/archives" 
                  className="transition-colors"
                  style={{ color: 'var(--bg)', opacity: 0.9 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--highlight)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--bg)';
                    e.currentTarget.style.opacity = '0.9';
                  }}
                >
                  Digital Archives
                </Link>
              </li>
              <li>
                <Link 
                  to="/tours" 
                  className="transition-colors"
                  style={{ color: 'var(--bg)', opacity: 0.9 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--highlight)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--bg)';
                    e.currentTarget.style.opacity = '0.9';
                  }}
                >
                  Virtual Tours
                </Link>
              </li>
              <li>
                <Link 
                  to="/chatbot" 
                  className="transition-colors"
                  style={{ color: 'var(--bg)', opacity: 0.9 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--highlight)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--bg)';
                    e.currentTarget.style.opacity = '0.9';
                  }}
                >
                  Monk Chatbot
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4" style={{ color: 'var(--bg)' }}>Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} style={{ color: 'var(--link-hover)' }} />
                <span style={{ color: 'var(--bg)', opacity: 0.9 }}>info@monastery360.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} style={{ color: 'var(--link-hover)' }} />
                <span style={{ color: 'var(--bg)', opacity: 0.9 }}>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} style={{ color: 'var(--link-hover)' }} />
                <span style={{ color: 'var(--bg)', opacity: 0.9 }}>Sacred Valley, Tibet</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 flex flex-col md:flex-row justify-between items-center" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <p className="text-sm" style={{ color: 'var(--bg)', opacity: 0.6 }}>
            © 2024 Monastery360. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              to="/privacy" 
              className="text-sm transition-colors"
              style={{ color: 'var(--bg)', opacity: 0.6 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--bg)';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--bg)';
                e.currentTarget.style.opacity = '0.6';
              }}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-sm transition-colors"
              style={{ color: 'var(--bg)', opacity: 0.6 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--bg)';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--bg)';
                e.currentTarget.style.opacity = '0.6';
              }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;