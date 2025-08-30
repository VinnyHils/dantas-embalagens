import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { track } from '../lib/analytics';
import { formatPhoneBR, onlyDigits } from '../lib/utils';

const contactSchema = z.object({
  name: z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  phone: z.string().optional().refine((val) => {
    if (!val) return true; // opcional
    const digits = onlyDigits(val);
    return digits.length === 10 || digits.length === 11;
  }, { message: "Telefone deve ter 10 ou 11 dígitos." }),
  subject: z.string().min(1, { message: "Por favor, selecione um assunto." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const phoneWatch = watch('phone');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log(data);
    
    // Simulate form submission
    setTimeout(() => {
  setIsSubmitting(false);
      setSubmitStatus('success');
      reset();
  track('form_submit', { form: 'contato' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(11) 4411-2233',
      description: 'Segunda a Sexta, 8h às 18h'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'dantasembalagens.com.br',
      description: 'Respondemos em até 24h'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Atibaia - SP',
      description: 'Região da Grande São Paulo'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: 'Seg - Sex: 8h às 18h',
      description: 'Sáb: 8h às 12h'
    }
  ];

  const subjects = [
    'Orçamento',
    'Dúvidas sobre produtos',
    'Suporte técnico',
    'Parcerias',
    'Outros'
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title title-accent mb-4 text-slate-800">
            Entre em Contato
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Estamos prontos para atender você. Solicite seu orçamento ou tire suas dúvidas
          </p>
        </motion.div>

  <div className="grid lg:grid-cols-2 gap-12 md:gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Fale Conosco
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Nossa equipe está sempre disponível para ajudar você a encontrar 
                a melhor solução em embalagens. Entre em contato conosco através 
                dos canais abaixo ou preencha o formulário ao lado.
              </p>
            </div>

            {/* WhatsApp CTA (movido para cima) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-2xl p-6 text-white mb-10 shadow-[0_12px_28px_-6px_rgba(0,0,0,0.30),0_8px_12px_-4px_rgba(0,0,0,0.20)] hover:shadow-[0_20px_42px_-8px_rgba(0,0,0,0.40),0_10px_20px_-6px_rgba(0,0,0,0.28)] hover-lift ring-1 ring-white/10 transition-all duration-300"
            >
              <h4 className="font-bold text-lg mb-2">Atendimento via WhatsApp</h4>
              <p className="mb-4 opacity-90">
                Para um atendimento mais rápido, fale conosco pelo WhatsApp
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/5599999999999?text=Ol%C3%A1%20quero%20um%20or%C3%A7amento" 
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-green-600 font-bold py-3 px-6 rounded-xl hover:bg-gray-50 transition-colors duration-300 shadow"
                onClick={() => track('cta_click', { cta: 'whatsapp_contato' })}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5" aria-hidden="true"><path fill="#E6F9EE" d="M16.04 3.2c-7.09 0-12.84 5.65-12.84 12.61 0 2.22.6 4.31 1.66 6.11L3 29l7.36-1.93a13.1 13.1 0 005.68 1.32c7.09 0 12.84-5.65 12.84-12.61S23.13 3.2 16.04 3.2z"/><path fill="#25D366" d="M16.04 5.2c5.99 0 10.84 4.77 10.84 10.61 0 5.85-4.85 10.61-10.84 10.61-1.9 0-3.73-.49-5.36-1.42l-.38-.22-4.37 1.14 1.18-4.31-.25-.39a10.37 10.37 0 01-1.72-5.41c0-5.84 4.85-10.61 10.84-10.61z"/><path fill="#FFF" d="M11.59 10.84c-.25-.56-.52-.57-.76-.58l-.65-.01c-.23 0-.6.09-.91.43-.31.34-1.19 1.16-1.19 2.83 0 1.66 1.22 3.27 1.39 3.49.17.23 2.35 3.62 5.82 4.94 2.88 1.15 3.46.92 4.08.86.62-.06 2.01-.82 2.29-1.61.28-.79.28-1.48.2-1.61-.08-.13-.28-.21-.59-.37-.31-.16-1.83-.9-2.12-1-.28-.11-.49-.16-.69.16-.2.32-.8 1-.98 1.2-.18.2-.36.22-.66.08-.3-.14-1.26-.46-2.4-1.47-.89-.8-1.48-1.78-1.65-2.08-.17-.3-.02-.46.13-.61.14-.14.31-.36.45-.54.15-.18.2-.31.29-.5.09-.2.05-.37-.01-.51-.06-.14-.57-1.38-.78-1.89z"/></svg>
                <span>Chamar no WhatsApp</span>
              </motion.a>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover-lift group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-1 sm:mb-2 text-base sm:text-lg leading-snug">{item.title}</h4>
                  {item.title === 'E-mail' ? (
                    (() => {
                      const emailDisplay = item.info.includes('@') ? item.info : `contato@${item.info}`;
                      const mailtoHref = `mailto:${emailDisplay}`;
                      return (
                        <a
                          href={mailtoHref}
                          className="text-orange-600 font-medium mb-0.5 sm:mb-1 break-words sm:truncate inline-block max-w-full hover:underline focus:outline-none focus:ring-2 focus:ring-orange-500/40 rounded text-sm sm:text-base"
                          aria-label={`Enviar e-mail para ${emailDisplay}`}
                        >
                          {emailDisplay}
                        </a>
                      );
                    })()
                  ) : item.title === 'Telefone' ? (
                    (() => {
                      const digits = onlyDigits(item.info);
                      // Assume Brasil; adiciona +55 se não houver código país
                      const hasCountry = digits.startsWith('55');
                      const withCountry = hasCountry ? digits : `55${digits}`;
                      const telHref = `tel:+${withCountry}`;
                      return (
                        <a
                          href={telHref}
                          onClick={() => track('contact_click', { type: 'phone' })}
                          className="text-orange-600 font-medium mb-0.5 sm:mb-1 break-words inline-block hover:underline focus:outline-none focus:ring-2 focus:ring-orange-500/40 rounded text-sm sm:text-base"
                          aria-label={`Ligar para ${item.info}`}
                        >
                          {item.info}
                        </a>
                      );
                    })()
                  ) : (
                    <p className="text-orange-600 font-medium mb-0.5 sm:mb-1 break-words text-sm sm:text-base">{item.info}</p>
                  )}
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Solicite seu Orçamento
            </h3>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-green-800">Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-orange-500'}`}
                    placeholder="Seu nome completo"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-orange-500'}`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone")}
                    value={phoneWatch || ''}
                    onChange={(e) => {
                      const masked = formatPhoneBR(e.target.value);
                      setValue('phone', masked, { shouldValidate: true });
                    }}
                    onBlur={() => {
                      if (errors.phone) {
                        track('form_field_error', { form: 'contato', field: 'phone', message: errors.phone.message });
                      }
                    }}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-300'}`}
                    placeholder="(11) 99999-9999"
                    inputMode="tel"
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    {...register("subject")}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-orange-500'}`}
                  >
                    <option value="">Selecione um assunto</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject}>{subject}</option>
                    ))}
                  </select>
                  {errors.subject && <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-orange-500'}`}
                  placeholder="Descreva sua necessidade, quantidade desejada, prazo de entrega, etc."
                />
                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </motion.button>
            </form>

            <p className="text-sm text-slate-500 mt-4 text-center">
              * Campos obrigatórios. Seus dados estão protegidos e não serão compartilhados.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
