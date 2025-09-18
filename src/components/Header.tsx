import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import monasteryLogo from "@/assets/monastery-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Events", path: "/events" },
    { name: "Archives", path: "/archives" },
    { name: "Virtual Tours", path: "/tours" },
    { name: "Monk Chat", path: "/chatbot" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className="text-white shadow-lg sticky top-0 z-50" 
      style={{ 
        background: 'var(--text-primary)', 
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        boxShadow: '0 2px 8px rgba(46,46,46,0.06)' 
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity" style={{ color: 'var(--bg)' }}>
            <img src={monasteryLogo} alt="Monastery360 Logo" className="w-8 h-8" />
            <span className="text-xl font-bold">Monastery360</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive(item.path)
                    ? "text-white"
                    : "hover:text-white"
                }`}
                style={{ 
                  backgroundColor: isActive(item.path) ? 'var(--link-hover)' : 'transparent',
                  color: isActive(item.path) ? 'var(--bg)' : 'var(--bg)'
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.color = 'var(--link-hover)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.color = 'var(--bg)';
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="monastery-btn-accent px-4 py-2 text-sm"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: 'var(--bg)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(166, 94, 59, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-3 py-2 rounded-lg transition-all"
                  style={{ 
                    backgroundColor: isActive(item.path) ? 'var(--link-hover)' : 'transparent',
                    color: 'var(--bg)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(item.path)) {
                      e.currentTarget.style.backgroundColor = 'rgba(166, 94, 59, 0.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.path)) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="monastery-btn-accent px-4 py-2 text-sm w-fit"
              >
                Login
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;