import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import logo from '../assets/Logo Red Colibri.jpeg';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre Nosotros' },
    { id: 'join', label: 'Únete' },
    { id: 'news', label: 'Novedades' },
    { id: 'partners', label: 'Amigos' },
    { id: 'contact', label: 'Contacto' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-warmSubtle'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 group"
            data-testid="navbar-logo"
          >
            <div>
              <img src={logo} alt="Logo Red Colibri" className="w-20 h-20" />
            </div>
            <span className="text-xl md:text-2xl font-heading font-bold text-textPrimary">
              Red Colibri
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-textSecondary hover:text-terracotta font-body font-medium transition-colors duration-200 relative group"
                data-testid={`navbar-link-${link.id}`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terracotta group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-terracotta hover:bg-terracotta-dark text-white rounded-full px-6 py-3 font-body font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              data-testid="navbar-cta-button"
            >
              Contáctanos
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-textPrimary hover:text-terracotta transition-colors"
            data-testid="navbar-mobile-menu-button"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-warmSubtle bg-white/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-textSecondary hover:text-terracotta font-body font-medium transition-colors duration-200 text-left px-4 py-2 hover:bg-warmSubtle rounded-lg"
                  data-testid={`navbar-mobile-link-${link.id}`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-terracotta hover:bg-terracotta-dark text-white rounded-full px-6 py-3 font-body font-semibold transition-all duration-300 mx-4"
                data-testid="navbar-mobile-cta-button"
              >
                Contáctanos
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
