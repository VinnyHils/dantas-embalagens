import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Award, Truck, Users, Clock, Shield } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Preço de Atacado',
      description: 'Elimine intermediários e garanta o melhor preço comprando diretamente de quem produz.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Controlamos todo o processo de produção para entregar um produto final de alta qualidade e resistência.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Truck,
      title: 'Agilidade e Confiança',
      description: 'Somos uma empresa de Atibaia-SP, prontos para atender seu pedido com rapidez e a confiança de um negócio local.',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Nossa equipe especializada está pronta para ajudar você a encontrar a solução ideal para seu negócio.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Clock,
      title: 'Entrega Rápida',
      description: 'Processamos e enviamos seu pedido rapidamente, garantindo que você receba seus produtos no prazo.',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'Garantia Total',
      description: 'Oferecemos garantia completa em todos os nossos produtos. Sua satisfação é nossa prioridade.',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #EA580C 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #FB923C 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title mb-4 text-white">
            Vantagens de Comprar Direto da Fábrica
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubra por que milhares de clientes confiam na Dantas Embalagens
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 h-full border border-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-2xl">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`absolute -inset-2 bg-gradient-to-br ${benefit.color} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {benefit.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '15+', label: 'Anos no Mercado' },
              { number: '500+', label: 'Clientes Ativos' },
              { number: '1M+', label: 'Produtos Vendidos' },
              { number: '99%', label: 'Satisfação' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;

