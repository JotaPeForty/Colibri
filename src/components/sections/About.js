import React from 'react';
import { Heart, Target, Eye, Users } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compasión',
      description: 'Cada animal merece amor, respeto y dignidad sin importar su condición.'
    },
    {
      icon: Target,
      title: 'Compromiso',
      description: 'Trabajamos sin descanso para garantizar el bienestar de cada animal rescatado.'
    },
    {
      icon: Eye,
      title: 'Transparencia',
      description: 'Operamos con honestidad y apertura en todas nuestras acciones.'
    },
    {
      icon: Users,
      title: 'Comunidad',
      description: 'Juntos somos más fuertes y podemos lograr un mayor impacto.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-sage/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-testid="about-header">
          <span className="text-sm text-textSecondary uppercase tracking-widest font-body font-semibold">
            Conoce nuestra historia
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight text-textPrimary mt-4 mb-6">
            Sobre Red Colibri
          </h2>
          <p className="text-lg leading-relaxed text-textSecondary font-body">
            Somos una asociación sin fines de lucro dedicada a la 
            rehabilitación y adopción de animales en situación de calle.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] group">
            <img
              src="https://images.pexels.com/photos/422220/pexels-photo-422220.jpeg"
              alt="Perro feliz"
              className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              data-testid="about-main-image"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-textPrimary mb-4">
                Nuestra Misión
              </h3>
              <p className="text-base leading-relaxed text-textSecondary font-body">
                Rehabilitar animales en situación de vulnerabilidad, 
                brindándoles atención médica, cuidado emocional y un espacio seguro 
                mientras encontramos familias responsables que les brinden un hogar 
                definitivo lleno de amor.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-textPrimary mb-4">
                Nuestra Visión
              </h3>
              <p className="text-base leading-relaxed text-textSecondary font-body">
                Crear una comunidad donde ningún animal sufra abandono o maltrato, 
                promoviendo la tenencia responsable, la esterilización y el respeto 
                hacia todos los seres vivos. Soñamos con un mundo donde cada animal 
                tenga un hogar y sea valorado como parte de la familia.
              </p>
            </div>

            <div className="bg-warmSubtle p-6 rounded-2xl border border-warmSubtle">
              <h4 className="font-heading font-semibold text-lg text-textPrimary mb-3">
                Lo que hacemos
              </h4>
              <ul className="space-y-3 font-body text-textSecondary">
                <li className="flex items-start gap-3">
                  <span className="text-terracotta mt-1">✓</span>
                  <span>Rehabilitación de animales en situación de calle o peligro</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta mt-1">✓</span>
                  <span>Atención veterinaria completa y rehabilitación</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta mt-1">✓</span>
                  <span>Búsqueda de hogares temporales y definitivos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta mt-1">✓</span>
                  <span>Campañas de castración y esterilización</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta mt-1">✓</span>
                  <span>Educación sobre tenencia responsable</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-3xl md:text-4xl font-heading font-semibold text-center text-textPrimary mb-12">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const ValueIcon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-warmSubtle shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 group hover:-translate-y-1"
                  data-testid={`about-value-${index}`}
                >
                  <div className="bg-terracotta/10 p-4 rounded-xl inline-block mb-4 group-hover:bg-terracotta/20 transition-colors duration-300">
                    <ValueIcon className="w-8 h-8 text-terracotta" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-heading font-semibold text-textPrimary mb-3">
                    {value.title}
                  </h4>
                  <p className="text-base text-textSecondary font-body leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
