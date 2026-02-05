import React from 'react';
import { HandHeart, Users, DollarSign, Share2, Package, Calendar } from 'lucide-react';

export const JoinUs = () => {
  const ways = [
    {
      icon: HandHeart,
      title: 'Voluntariado',
      description: 'Ayúdanos en el cuidado diario, paseos, eventos y más. Tu tiempo es invaluable.',
      color: 'terracotta'
    },
    {
      icon: Users,
      title: 'Hogar Temporal',
      description: 'Acoge un animal mientras encuentra su familia definitiva. Marca la diferencia.',
      color: 'sage'
    },
    {
      icon: DollarSign,
      title: 'Donaciones',
      description: 'Contribuye con el tratamiento veterinario, alimentación y refugio.',
      color: 'accentYellow'
    },
    {
      icon: Package,
      title: 'Donaciones en Especie',
      description: 'Alimento, medicinas, mantas y juguetes son siempre bienvenidos.',
      color: 'accentPink'
    },
    {
      icon: Share2,
      title: 'Difusión',
      description: 'Comparte nuestras publicaciones y ayúdanos a encontrar hogares.',
      color: 'sage'
    },
    {
      icon: Calendar,
      title: 'Eventos',
      description: 'Participa en nuestras jornadas de adopción y campañas de castración.',
      color: 'terracotta'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="join" className="py-20 md:py-32 bg-warmBg relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-testid="join-header">
          <span className="text-sm text-textSecondary uppercase tracking-widest font-body font-semibold">
            Sé parte del cambio
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight text-textPrimary mt-4 mb-6">
            Únete a Red Colibri
          </h2>
          <p className="text-lg leading-relaxed text-textSecondary font-body">
            Hay muchas formas de ayudar. Cada contribución, sin importar su tamaño, 
            hace una diferencia real en la vida de nuestros animales.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <img
            src="https://images.pexels.com/photos/35231854/pexels-photo-35231854.jpeg"
            alt="Voluntarios felices"
            className="w-full h-[400px] object-cover"
            data-testid="join-hero-image"
          />
        </div>

        {/* Ways to Help Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ways.map((way, index) => {
            const colorClasses = {
              terracotta: 'bg-terracotta/10 text-terracotta',
              sage: 'bg-sage/10 text-sage',
              accentYellow: 'bg-accentYellow/10 text-accentYellow',
              accentPink: 'bg-[#FADBD8] text-terracotta'
            };

            const WayIcon = way.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-warmSubtle shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 group hover:-translate-y-1"
                data-testid={`join-way-${index}`}
              >
                <div className={`p-4 rounded-xl inline-block mb-4 ${colorClasses[way.color]}`}>
                  <WayIcon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-textPrimary mb-3">
                  {way.title}
                </h3>
                <p className="text-base text-textSecondary font-body leading-relaxed">
                  {way.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Requirements Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.08)] mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-textPrimary mb-6">
                Requisitos para Voluntarios
              </h3>
              <ul className="space-y-4 font-body text-textSecondary">
                <li className="flex items-start gap-3">
                  <span className="text-terracotta text-xl">•</span>
                  <span>Mayor de 18 años (menores con autorización de padres)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta text-xl">•</span>
                  <span>Amor y respeto por los animales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta text-xl">•</span>
                  <span>Disponibilidad de al menos 4 horas semanales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta text-xl">•</span>
                  <span>Compromiso y responsabilidad</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta text-xl">•</span>
                  <span>Actitud positiva y trabajo en equipo</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-textPrimary mb-6">
                Requisitos para Hogar Temporal
              </h3>
              <ul className="space-y-4 font-body text-textSecondary">
                <li className="flex items-start gap-3">
                  <span className="text-sage text-xl">•</span>
                  <span>Espacio adecuado y seguro en tu hogar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage text-xl">•</span>
                  <span>Disponibilidad para cuidados básicos diarios</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage text-xl">•</span>
                  <span>Compromiso hasta encontrar adopción definitiva</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage text-xl">•</span>
                  <span>Otros animales deben estar vacunados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage text-xl">•</span>
                  <span>Permiso de todos los miembros del hogar</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-terracotta/5 rounded-2xl p-12 border border-terracotta/20">
          <h3 className="text-3xl font-heading font-bold text-textPrimary mb-4">
            ¿Listo para hacer la diferencia?
          </h3>
          <p className="text-lg text-textSecondary font-body mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad de amantes de los animales. Juntos podemos 
            dar a cada animal la vida que merece.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-terracotta hover:bg-terracotta-dark text-white rounded-full px-8 py-6 text-lg font-body font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            data-testid="join-cta-button"
          >
            Quiero Colaborar
          </button>
        </div>
      </div>
    </section>
  );
};
