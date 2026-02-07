import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-textPrimary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1 - About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-terracotta p-2 rounded-full">
                  <Heart className="w-5 h-5 text-white" fill="white" />
                </div>
                <span className="text-xl font-heading font-bold">Red Colibri</span>
              </div>
              <p className="text-gray-300 font-body text-sm leading-relaxed mb-4">
                Asociación sin fines de lucro dedicada a la 
                rehabilitación y adopción de animales en situación de calle.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/groups/632863836387087/?ref=share&mibextid=NSMWBT"
                  className="bg-white/10 hover:bg-terracotta p-2 rounded-lg transition-colors duration-300"
                  aria-label="Facebook"
                  data-testid="footer-social-facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/red_colibri_traslasierra/"
                  className="bg-white/10 hover:bg-terracotta p-2 rounded-lg transition-colors duration-300"
                  aria-label="Instagram"
                  data-testid="footer-social-instagram"
                  target="_blank"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h3 className="text-lg font-heading font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-3 font-body text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="text-gray-300 hover:text-terracotta transition-colors"
                    data-testid="footer-link-home"
                  >
                    Inicio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-gray-300 hover:text-terracotta transition-colors"
                    data-testid="footer-link-about"
                  >
                    Sobre Nosotros
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('join')}
                    className="text-gray-300 hover:text-terracotta transition-colors"
                    data-testid="footer-link-join"
                  >
                    Únete
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('news')}
                    className="text-gray-300 hover:text-terracotta transition-colors"
                    data-testid="footer-link-news"
                  >
                    Novedades
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3 - More Links */}
            <div>
              <h3 className="text-lg font-heading font-semibold mb-4">Más Info</h3>
              <ul className="space-y-3 font-body text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection('partners')}
                    className="text-gray-300 hover:text-terracotta transition-colors"
                    data-testid="footer-link-partners"
                  >
                    Instituciones Amigas
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-300 hover:text-terracotta transition-colors"
                    data-testid="footer-link-contact"
                  >
                    Contacto
                  </button>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-terracotta transition-colors">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-terracotta transition-colors">
                    Términos y Condiciones
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Contact Info */}
            <div>
              <h3 className="text-lg font-heading font-semibold mb-4">Contacto</h3>
              <ul className="space-y-4 font-body text-sm">
                <li className="flex items-start gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                  <a href="mailto:contacto@redcolibri.org" className="hover:text-terracotta transition-colors">
                    contacto@redcolibri.org
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                  <a href="https://wa.me/5493544579965" className="hover:text-terracotta transition-colors">
                    +549 3544 579965
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                  <span>Traslasierra, Cordoba, Argentina</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 font-body text-sm text-center md:text-left">
              © {currentYear} Red Colibri. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 font-body text-sm text-center md:text-right">
              Hecho con <Heart className="w-4 h-4 text-terracotta inline-block mx-1" fill="#E67E22" /> para nuestros amigos de cuatro patas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
