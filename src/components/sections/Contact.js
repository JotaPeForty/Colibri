import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.'
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending contact message:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contacto@redcolibri.org',
      link: 'mailto:contacto@redcolibri.org'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+54 11 1234-5678',
      link: 'tel:+541112345678'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Buenos Aires, Argentina',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-testid="contact-header">
          <span className="text-sm text-textSecondary uppercase tracking-widest font-body font-semibold">
            Estamos aquí para ayudarte
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight text-textPrimary mt-4 mb-6">
            Contáctanos
          </h2>
          <p className="text-lg leading-relaxed text-textSecondary font-body">
            ¿Quieres adoptar, ser voluntario o colaborar? Escríbenos y te responderemos 
            lo antes posible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-warmSubtle rounded-2xl p-8 border border-warmSubtle">
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-textPrimary mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4"
                    data-testid={`contact-info-${index}`}
                  >
                    <div className="bg-terracotta/10 p-3 rounded-xl flex-shrink-0">
                      <item.icon className="w-6 h-6 text-terracotta" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-sm text-textMuted font-body font-semibold uppercase tracking-wider mb-1">
                        {item.title}
                      </div>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-base text-textPrimary font-body hover:text-terracotta transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-base text-textPrimary font-body">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-sage/5 rounded-2xl p-8 border border-sage/20">
              <h4 className="text-xl font-heading font-semibold text-textPrimary mb-4">
                Horarios de Atención
              </h4>
              <div className="space-y-3 font-body text-textSecondary">
                <div className="flex justify-between">
                  <span>Lunes a Viernes:</span>
                  <span className="font-semibold text-textPrimary">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="font-semibold text-textPrimary">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span className="font-semibold text-textPrimary">Cerrado</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-warmSubtle rounded-2xl p-8 border border-warmSubtle">
              <h4 className="text-xl font-heading font-semibold text-textPrimary mb-4">
                Síguenos en Redes
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex-1 text-center bg-white hover:bg-terracotta hover:text-white border border-warmSubtle text-textPrimary rounded-xl px-4 py-3 font-body font-medium transition-all duration-300"
                  data-testid="contact-social-facebook"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="flex-1 text-center bg-white hover:bg-terracotta hover:text-white border border-warmSubtle text-textPrimary rounded-xl px-4 py-3 font-body font-medium transition-all duration-300"
                  data-testid="contact-social-instagram"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-warmSubtle rounded-2xl p-8 border border-warmSubtle">
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-textPrimary mb-6">
              Envíanos un Mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div>
                <label htmlFor="name" className="block text-sm font-body font-semibold text-textPrimary mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 bg-white font-body text-textPrimary transition-colors outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Tu nombre"
                  data-testid="contact-form-name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-body font-semibold text-textPrimary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 bg-white font-body text-textPrimary transition-colors outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="tu@email.com"
                  data-testid="contact-form-email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-body font-semibold text-textPrimary mb-2">
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 bg-white font-body text-textPrimary transition-colors outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="+54 11 1234-5678"
                  data-testid="contact-form-phone"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-body font-semibold text-textPrimary mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 bg-white font-body text-textPrimary transition-colors outline-none resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  data-testid="contact-form-message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-terracotta hover:bg-terracotta-dark text-white rounded-full px-8 py-4 font-body font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                data-testid="contact-form-submit"
              >
                {isSubmitting ? (
                  <>Enviando...</>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </>
                )}
              </button>

              {submitStatus && (
                <div
                  className={`p-4 rounded-lg flex items-start gap-3 ${
                    submitStatus.type === 'success'
                      ? 'bg-sage/10 border border-sage/20'
                      : 'bg-red-50 border border-red-200'
                  }`}
                  data-testid={`contact-form-${submitStatus.type}`}
                >
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  )}
                  <p className={`text-sm font-body ${
                    submitStatus.type === 'success' ? 'text-sage-dark' : 'text-red-700'
                  }`}>
                    {submitStatus.message}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
