import React from 'react';
import { Building2, Heart, Handshake, Award, Users, Stethoscope } from 'lucide-react';

export const Partners = () => {
  const partners = [
    {
      name: 'Clínica Veterinaria San Francisco',
      icon: Stethoscope,
      description: 'Atención veterinaria con descuentos especiales para nuestros rescatados',
      color: 'terracotta'
    },
    {
      name: 'Fundación Amigos del Planeta',
      icon: Heart,
      description: 'Apoyo en campañas de concientización y educación ambiental',
      color: 'sage'
    },
    {
      name: 'PetShop La Mascota Feliz',
      icon: Building2,
      description: 'Donación mensual de alimentos y accesorios para nuestros animales',
      color: 'accentYellow'
    },
    {
      name: 'Municipalidad Local',
      icon: Handshake,
      description: 'Colaboración en jornadas de castración y vacunación gratuitas',
      color: 'sage'
    },
    {
      name: 'Asociación de Voluntarios Unidos',
      icon: Users,
      description: 'Red de voluntarios comprometidos con el bienestar animal',
      color: 'terracotta'
    },
    {
      name: 'Laboratorio VetMed',
      icon: Award,
      description: 'Provisión de medicamentos y tratamientos a precios solidarios',
      color: 'accentYellow'
    }
  ];

  const colorClasses = {
    terracotta: {
      bg: 'bg-terracotta/10',
      text: 'text-terracotta',
      border: 'border-terracotta/20'
    },
    sage: {
      bg: 'bg-sage/10',
      text: 'text-sage',
      border: 'border-sage/20'
    },
    accentYellow: {
      bg: 'bg-accentYellow/10',
      text: 'text-accentYellow',
      border: 'border-accentYellow/20'
    }
  };

  return (
    <section id="partners" className="py-20 md:py-32 bg-warmBg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-testid="partners-header">
          <span className="text-sm text-textSecondary uppercase tracking-widest font-body font-semibold">
            Trabajamos en equipo
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight text-textPrimary mt-4 mb-6">
            Instituciones Amigas
          </h2>
          <p className="text-lg leading-relaxed text-textSecondary font-body">
            Gracias al apoyo de nuestros aliados estratégicos podemos brindar 
            mejor atención y cuidado a cada animal rescatado.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => {
            const colors = colorClasses[partner.color];
            const PartnerIcon = partner.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 border ${colors.border} shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 group hover:-translate-y-1`}
                data-testid={`partner-card-${index}`}
              >
                <div className={`${colors.bg} p-4 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <PartnerIcon className={`w-8 h-8 ${colors.text}`} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-textPrimary mb-3">
                  {partner.name}
                </h3>
                <p className="text-base text-textSecondary font-body leading-relaxed">
                  {partner.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonial Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.08)] mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-terracotta/10 p-4 rounded-full">
              <Heart className="w-12 h-12 text-terracotta" fill="#E67E22" />
            </div>
          </div>
          <blockquote className="text-center">
            <p className="text-xl md:text-2xl font-heading text-textPrimary mb-6 italic">
              "La unión hace la fuerza. Juntos hemos logrado rescatar, curar y 
              encontrar hogares para cientos de animales. Cada alianza multiplica 
              nuestro impacto."
            </p>
            <footer className="text-base text-textSecondary font-body">
              — Equipo Red Colibri
            </footer>
          </blockquote>
        </div>

        {/* Call to Action for New Partners */}
        <div className="bg-sage/5 rounded-2xl p-12 border border-sage/20 text-center">
          <Handshake className="w-12 h-12 text-sage mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-textPrimary mb-4">
            ¿Quieres ser nuestro aliado?
          </h3>
          <p className="text-base text-textSecondary font-body mb-8 max-w-2xl mx-auto">
            Si tu organización comparte nuestra visión y quiere colaborar en 
            el bienestar animal, nos encantaría trabajar juntos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="bg-sage hover:bg-sage-dark text-white rounded-full px-8 py-4 font-body font-semibold transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
              data-testid="partners-cta-button"
            >
              Contactar
            </button>
            <a
              href="mailto:contacto@redcolibri.org"
              className="border-2 border-sage text-sage hover:bg-sage hover:text-white rounded-full px-8 py-4 font-body font-semibold transition-all duration-300 hover:-translate-y-1"
              data-testid="partners-email-button"
            >
              Enviar Email
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center" data-testid="partners-stat-allies">
            <div className="text-4xl md:text-5xl font-heading font-bold text-terracotta mb-2">
              15+
            </div>
            <div className="text-sm text-textMuted font-body uppercase tracking-wider">
              Aliados Activos
            </div>
          </div>
          <div className="text-center" data-testid="partners-stat-vets">
            <div className="text-4xl md:text-5xl font-heading font-bold text-sage mb-2">
              8
            </div>
            <div className="text-sm text-textMuted font-body uppercase tracking-wider">
              Veterinarias
            </div>
          </div>
          <div className="text-center" data-testid="partners-stat-shelters">
            <div className="text-4xl md:text-5xl font-heading font-bold text-accentYellow mb-2">
              5
            </div>
            <div className="text-sm text-textMuted font-body uppercase tracking-wider">
              Refugios
            </div>
          </div>
          <div className="text-center" data-testid="partners-stat-years">
            <div className="text-4xl md:text-5xl font-heading font-bold text-terracotta mb-2">
              6
            </div>
            <div className="text-sm text-textMuted font-body uppercase tracking-wider">
              Años Juntos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
