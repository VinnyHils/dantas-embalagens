import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import sacoFundoBranco from "../assets/images/saquinho-fundo-transparente-pequeno.webp";
import sacoCinema from "../assets/images/saquinho-cinemas.png";
import sacoFesta from "../assets/images/saco-festa.webp";
import sacoChurros from "../assets/images/elegant-bag.webp";
import { track } from '../lib/analytics';

const UseCases = () => {
  const [activeCase, setActiveCase] = useState(0);

  const useCases = [
    {
      id: 'cinema',
      tabLabel: 'Cinemas',
      title: 'Perfeito para Cinemas e Lanchonetes',
      description: 'Apresente suas pipocas, batatas e outros lanches de forma profissional. Nosso saquinho é a escolha ideal para quem busca qualidade e praticidade no atendimento.',
      image: sacoCinema,
      features: ['Resistente a gordura', 'Fácil manuseio', 'Apresentação profissional']
    },
    {
      id: 'festa',
      tabLabel: 'Festas',
      title: 'A Estrela da Sua Festa',
      description: 'Use nossos saquinhos para servir doces, salgados ou como lembrancinhas criativas. Eles são perfeitos para aniversários, festas juninas e qualquer celebração.',
      image: sacoFesta,
      features: ['Ideal para doces', 'Lembrancinhas criativas', 'Festas e eventos']
    },
    {
      id: 'food-truck',
      tabLabel: 'Food Trucks',
      title: 'Ideal para Food Trucks',
      description: 'Seja para churros, pipoca ou outros alimentos, nosso saquinho é resistente e prático, valorizando seu produto e facilitando a vida de quem vende na rua.',
      image: sacoChurros,
      features: ['Resistente e durável', 'Prático para rua', 'Valoriza o produto']
    },
    {
      id: 'comercio',
      tabLabel: 'Comércio',
      title: 'Comércio em Geral',
      description: 'Versátil para qualquer tipo de negócio. Desde pequenos comércios até grandes estabelecimentos, nosso saco de papel se adapta às suas necessidades.',
      image: sacoFundoBranco,
      features: ['Versátil', 'Qualquer negócio', 'Adaptável']
    }
  ];

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % useCases.length);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  return (
    <section id="usos" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title title-accent mb-4 text-slate-800">
            Infinitas Possibilidades de Uso
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Descubra como nosso Saco de Papel Multiuso 20cm pode transformar seu negócio
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Tab Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
      className="grid grid-cols-2 gap-x-4 gap-y-2 justify-items-center mb-10 sm:mb-12 sm:flex sm:flex-wrap sm:justify-center sm:gap-8 border-slate-200 sm:border-b"
          >
            {useCases.map((useCase, index) => (
              <motion.button
                key={useCase.id}
                onClick={() => {
                  setActiveCase(index);
                  track('use_case_tab_click', { tab: useCase.id, index });
                }}
        className={`relative w-full sm:w-auto text-center px-2 py-3 text-base sm:px-3 sm:py-4 sm:text-lg font-semibold transition-colors duration-300 focus:outline-none ${
                  activeCase === index
                    ? 'text-orange-600'
                    : 'text-slate-500 hover:text-orange-500'
                }`}
              >
                {useCase.tabLabel}
                {activeCase === index && (
                  <motion.div
                    layoutId="active-use-case-underline"
          className="absolute -bottom-1 sm:bottom-0 left-1/2 -translate-x-1/2 w-10 sm:w-full h-[3px] sm:h-1 bg-orange-600 rounded-full"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Content */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-xl p-8 lg:p-12"
              >
                {/* Text Content */}
                <div className="space-y-6">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl font-bold text-slate-800"
                  >
                    {useCases[activeCase].title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-slate-600 leading-relaxed text-lg"
                  >
                    {useCases[activeCase].description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-3"
                  >
                    <h4 className="font-semibold text-slate-800 mb-4">Principais Vantagens:</h4>
                    {useCases[activeCase].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full" />
                        <span className="text-slate-700">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative group"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={useCases[activeCase].image}
                      alt={useCases[activeCase].title}
                      className="w-full h-[340px] sm:h-96 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => { prevCase(); track('use_case_prev', { from: activeCase }); }}
              aria-label="Anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-slate-600 hover:text-orange-600 transition-all duration-300 z-10 bg-white/5 backdrop-blur-[1px] border border-white/15 shadow-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-400/40 dark:bg-white/5/50 dark:border-white/10 dark:hover:bg-white/10"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => { nextCase(); track('use_case_next', { from: activeCase }); }}
              aria-label="Próximo"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-slate-600 hover:text-orange-600 transition-all duration-300 z-10 bg-white/5 backdrop-blur-[1px] border border-white/15 shadow-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-400/40 dark:bg-white/5/50 dark:border-white/10 dark:hover:bg-white/10"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-2 mt-8"
          >
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCase(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeCase === index
                    ? 'bg-orange-600 scale-125'
                    : 'bg-slate-300 hover:bg-orange-300'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;

