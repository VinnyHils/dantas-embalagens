import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: "Por favor, selecione um assunto." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log(data);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      reset();
      
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
      info: 'contato@dantasembalagens.com.br',
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
          <h2 className="text-section-title mb-4 text-slate-800">
            Entre em Contato
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Estamos prontos para atender você. Solicite seu orçamento ou tire suas dúvidas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover-lift group"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                  <p className="text-orange-600 font-medium mb-1">{item.info}</p>
                  <p className="text-slate-500 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white"
            >
              <h4 className="font-bold text-lg mb-2">Atendimento via WhatsApp</h4>
              <p className="mb-4 opacity-90">
                Para um atendimento mais rápido, fale conosco pelo WhatsApp
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 font-bold py-3 px-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              >
                Chamar no WhatsApp
              </motion.button>
            </motion.div>
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
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
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
