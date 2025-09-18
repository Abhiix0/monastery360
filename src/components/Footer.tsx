import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import monasteryLogo from "@/assets/monastery-logo.png";

const Footer = () => {
  return (
    <footer className="bg-deep-walnut text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={monasteryLogo} alt="Monastery360 Logo" className="w-8 h-8" />
              <span className="text-xl font-bold">Monastery360</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Discover the spiritual heritage of monasteries worldwide through immersive digital experiences, 
              virtual tours, and authentic cultural events.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-warm-terracotta/20 hover:bg-warm-terracotta transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-warm-terracotta/20 hover:bg-warm-terracotta transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-warm-terracotta/20 hover:bg-warm-terracotta transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/explore" className="text-white/80 hover:text-white transition-colors">Explore Monasteries</Link></li>
              <li><Link to="/events" className="text-white/80 hover:text-white transition-colors">Events & Booking</Link></li>
              <li><Link to="/archives" className="text-white/80 hover:text-white transition-colors">Digital Archives</Link></li>
              <li><Link to="/tours" className="text-white/80 hover:text-white transition-colors">Virtual Tours</Link></li>
              <li><Link to="/chatbot" className="text-white/80 hover:text-white transition-colors">Monk Chatbot</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-warm-terracotta" />
                <span className="text-white/80">info@monastery360.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-warm-terracotta" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-warm-terracotta" />
                <span className="text-white/80">Sacred Valley, Tibet</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 Monastery360. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;