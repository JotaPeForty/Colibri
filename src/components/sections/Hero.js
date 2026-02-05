import React from 'react';
import { Heart, PawPrint, Shield } from 'lucide-react';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToJoin = () => {
    const element = document.getElementById('join');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with grain texture */}
      <div className="absolute inset-0 bg-warmBg grain-texture"></div>
      
      {/* Decorative blob */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
          {/* Left Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-block">
              <span className="text-sm text-textSecondary uppercase tracking-widest font-body font-semibold px-4 py-2 bg-warmSubtle rounded-full">
                Asociación sin fines de lucro
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-textPrimary leading-tight" data-testid="hero-title">
              Cada vida merece una{' '}
              <span className="text-terracotta relative inline-block">
                segunda oportunidad
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 5 100 2 150 4C200 6 250 8 298 4" stroke="#F1C40F" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-textSecondary font-body">
              En Red Colibri rescatamos, curamos y protegemos animales en situación de calle. 
              Trabajamos incansablemente para darles el amor y cuidado que merecen hasta 
              encontrarles un hogar definitivo lleno de cariño.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="bg-terracotta hover:bg-terracotta-dark text-white rounded-full px-8 py-6 text-lg font-body font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-testid="hero-cta-adopt"
              >
                Quiero Adoptar
              </button>
              <button
                onClick={scrollToJoin}
                className="border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-white rounded-full px-8 py-6 text-lg font-body font-semibold transition-all duration-300 hover:-translate-y-1"
                data-testid="hero-cta-volunteer"
              >
                Ser Voluntario
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-warmSubtle">
              <div className="text-center" data-testid="hero-stat-rescued">
                <div className="text-3xl md:text-4xl font-heading font-bold text-terracotta">500+</div>
                <div className="text-sm text-textMuted font-body mt-1">Rescatados</div>
              </div>
              <div className="text-center" data-testid="hero-stat-adopted">
                <div className="text-3xl md:text-4xl font-heading font-bold text-sage">350+</div>
                <div className="text-sm text-textMuted font-body mt-1">Adoptados</div>
              </div>
              <div className="text-center" data-testid="hero-stat-campaigns">
                <div className="text-3xl md:text-4xl font-heading font-bold text-accentYellow">80+</div>
                <div className="text-sm text-textMuted font-body mt-1">Castraciones</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] group">
              <img
                src="https://images.unsplash.com/photo-1713709506271-167a04f4e6cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHJ1bm5pbmclMjBncmFzc3xlbnwwfHx8fDE3Njk1NjYzMDJ8MA&ixlib=rb-4.1.0&q=85"
                alt="Perro feliz corriendo en el pasto"
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                data-testid="hero-image"
              />
              
              {/* Floating cards */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-terracotta/10 p-3 rounded-xl">
                    <Heart className="w-6 h-6 text-terracotta" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-textPrimary">
                      Unidos por los animales
                    </div>
                    <div className="text-sm text-textSecondary font-body">
                      Cada adopción cambia una vida
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 bg-sage p-4 rounded-2xl shadow-lg rotate-12 hidden lg:block">
              <PawPrint className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accentYellow p-4 rounded-2xl shadow-lg -rotate-12 hidden lg:block">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
