import React from 'react';
import { Calendar, Heart, Stethoscope, Users } from 'lucide-react';

export const News = () => {
  const news = [
    {
      id: 1,
      title: 'Jornada de Castración Exitosa',
      date: '15 de Enero, 2025',
      category: 'Campaña',
      icon: Stethoscope,
      description: 'Realizamos nuestra jornada mensual de castración gratuita con más de 40 animales atendidos.',
      image: 'https://images.pexels.com/photos/6235124/pexels-photo-6235124.jpeg',
      color: 'sage'
    },
    {
      id: 2,
      title: '20 Adopciones en Diciembre',
      date: '28 de Diciembre, 2024',
      category: 'Adopciones',
      icon: Heart,
      description: 'Cerramos el año con 20 nuevas familias felices. Gracias a todos los que abrieron sus corazones.',
      image: 'https://placehold.co/600x400/F5F0E6/2C3E50?text=Adopciones',
      color: 'terracotta'
    },
    {
      id: 3,
      title: 'Nuevo Refugio Temporal',
      date: '10 de Diciembre, 2024',
      category: 'Noticias',
      icon: Users,
      description: 'Inauguramos un nuevo espacio para albergar más animales rescatados mientras encuentran hogar.',
      image: 'https://placehold.co/600x400/F5F0E6/2C3E50?text=Refugio',
      color: 'accentYellow'
    },
    {
      id: 4,
      title: 'Rescate de 8 Cachorros',
      date: '5 de Diciembre, 2024',
      category: 'Rescate',
      icon: Heart,
      description: 'Rescatamos una camada de 8 cachorros abandonados. Todos están sanos y listos para adopción.',
      image: 'https://placehold.co/600x400/F5F0E6/2C3E50?text=Rescate',
      color: 'terracotta'
    },
    {
      id: 5,
      title: 'Taller de Tenencia Responsable',
      date: '1 de Diciembre, 2024',
      category: 'Educación',
      icon: Users,
      description: 'Dictamos un taller gratuito sobre cuidados básicos y tenencia responsable de mascotas.',
      image: 'https://placehold.co/600x400/F5F0E6/2C3E50?text=Taller',
      color: 'sage'
    },
    {
      id: 6,
      title: 'Campaña de Vacunación',
      date: '20 de Noviembre, 2024',
      category: 'Campaña',
      icon: Stethoscope,
      description: 'Vacunación antirrábica gratuita para la comunidad. Más de 60 animales vacunados.',
      image: 'https://placehold.co/600x400/F5F0E6/2C3E50?text=Vacunacion',
      color: 'accentYellow'
    }
  ];

  const colorClasses = {
    terracotta: 'bg-terracotta/10 text-terracotta',
    sage: 'bg-sage/10 text-sage',
    accentYellow: 'bg-accentYellow/10 text-accentYellow'
  };

  return (
    <section id="news" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-testid="news-header">
          <span className="text-sm text-textSecondary uppercase tracking-widest font-body font-semibold">
            Mantente informado
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight text-textPrimary mt-4 mb-6">
            Novedades
          </h2>
          <p className="text-lg leading-relaxed text-textSecondary font-body">
            Conoce las últimas noticias, rescates, adopciones y eventos de Red Colibri.
          </p>
        </div>

        {/* Featured News - Large Card */}
        <div className="mb-12 bg-warmSubtle rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] group">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden">
              <img
                src={news[0].image}
                alt={news[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-testid="news-featured-image"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${colorClasses[news[0].color]}`}>
                  {React.createElement(news[0].icon, { className: "w-5 h-5", strokeWidth: 2 })}
                </div>
                <span className="text-sm font-body font-semibold text-textMuted uppercase tracking-wider">
                  {news[0].category}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-textPrimary mb-4">
                {news[0].title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-textMuted font-body mb-6">
                <Calendar className="w-4 h-4" />
                <span>{news[0].date}</span>
              </div>
              <p className="text-base text-textSecondary font-body leading-relaxed mb-6">
                {news[0].description}
              </p>
              <div className="inline-flex">
                <button className="text-terracotta font-body font-semibold hover:underline flex items-center gap-2 group">
                  Leer más
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* News Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {news.slice(1).map((item, index) => {
            const ItemIcon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 group hover:-translate-y-1"
                data-testid={`news-card-${index}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute top-4 left-4 p-2 rounded-lg ${colorClasses[item.color]} backdrop-blur-sm`}>
                    <ItemIcon className="w-5 h-5" strokeWidth={2} />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-body font-semibold text-textMuted uppercase tracking-wider mb-2">
                    {item.category}
                  </div>
                  <h4 className="text-xl font-heading font-semibold text-textPrimary mb-3 line-clamp-2">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-textMuted font-body mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <p className="text-sm text-textSecondary font-body leading-relaxed line-clamp-3 mb-4">
                    {item.description}
                  </p>
                  <button className="text-terracotta text-sm font-body font-semibold hover:underline flex items-center gap-2 group">
                    Leer más
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 text-center bg-sage/5 rounded-2xl p-12 border border-sage/20">
          <Heart className="w-12 h-12 text-sage mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-textPrimary mb-4">
            No te pierdas ninguna novedad
          </h3>
          <p className="text-base text-textSecondary font-body mb-8 max-w-2xl mx-auto">
            Sigue nuestras redes sociales para estar al día con rescates, adopciones y eventos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="bg-white hover:bg-warmSubtle border border-warmSubtle text-textPrimary rounded-full px-6 py-3 font-body font-semibold transition-all duration-300 hover:-translate-y-1"
              data-testid="news-social-facebook"
            >
              Facebook
            </a>
            <a
              href="#"
              className="bg-white hover:bg-warmSubtle border border-warmSubtle text-textPrimary rounded-full px-6 py-3 font-body font-semibold transition-all duration-300 hover:-translate-y-1"
              data-testid="news-social-instagram"
            >
              Instagram
            </a>
            <a
              href="#"
              className="bg-white hover:bg-warmSubtle border border-warmSubtle text-textPrimary rounded-full px-6 py-3 font-body font-semibold transition-all duration-300 hover:-translate-y-1"
              data-testid="news-social-whatsapp"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
