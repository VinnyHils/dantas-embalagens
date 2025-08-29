import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import cliente1 from '../assets/images/depoimento-cliente.jpg';

const testimonials = [
  {
    name: 'Ana Silva',
    role: 'Dona de Food Truck',
    quote: 'As embalagens da Dantas são de altíssima qualidade! Meus clientes sempre elogiam a apresentação dos lanches. A resistência ao óleo é um grande diferencial. Virou meu fornecedor oficial!',
    rating: 5,
    image: cliente1,
  },
  {
    name: 'Carlos Pereira',
    role: 'Gerente de Eventos',
    quote: 'Utilizamos os sacos para as lembrancinhas de um evento corporativo e foi um sucesso. A qualidade do papel e a impressão são impecáveis. A entrega foi super rápida, o que nos salvou!',
    rating: 5,
    image: null, // Placeholder for another image
  },
  {
    name: 'Juliana Costa',
    role: 'Proprietária de Doceria',
    quote: 'Estou muito satisfeita! Os sacos são perfeitos para meus doces e salgados. Além de bonitos, são resistentes e práticos. O preço de fábrica é um grande atrativo. Recomendo a todos!',
    rating: 5,
    image: null, // Placeholder for another image
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title mb-4 text-slate-800">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A satisfação de quem confia em nosso trabalho é nossa maior recompensa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col hover-lift"
            >
              <div className="flex-grow mb-6">
                <Quote className="w-8 h-8 text-orange-300 mb-4" />
                <p className="text-slate-600 italic">"{testimonial.quote}"</p>
              </div>
              
              <div className="flex items-center">
                {testimonial.image ? (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-orange-200"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-orange-600">{testimonial.name.charAt(0)}</span>
                  </div>
                )}
                <div className="flex-grow">
                  <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500 mb-1">{testimonial.role}</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
