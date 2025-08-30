import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import cliente1 from '../assets/images/depoimento-cliente.jpg';

const testimonials = [
  {
    name: 'Ana Silva',
    role: 'Dona de Food Truck',
    quote: 'As embalagens da Dantas são de altíssima qualidade! Meus clientes sempre elogiam a apresentação dos lanches. A resistência ao óleo é um grande diferencial. Virou meu fornecedor oficial!',
    rating: 5,
    // image: cliente1, // Se quiser voltar a foto, descomente a linha acima e remova a linha abaixo
    image: null,
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
    <>
      {/* ID removido aqui; wrapper na HomePage possui id="depoimentos" para evitar duplicidade e calcular offset correto */}
      <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title title-accent mb-4 text-slate-800">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A satisfação de quem confia em nosso trabalho é nossa maior recompensa.
          </p>
        </motion.div>

        {/* Carousel mobile (scroll-snap) + grid desktop */}
        <div className="md:hidden -mx-4 px-4 overflow-x-auto flex gap-5 snap-x snap-mandatory scrollbar-hide pb-3">
          {testimonials.map((t, index) => (
            <div key={index} className="snap-center shrink-0 w-[85%] first:ml-0 last:mr-4">
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col hover-lift h-full"
              >
                <div className="flex-grow mb-5">
                  <Quote className="w-7 h-7 text-orange-300 mb-3" />
                  <p className="text-slate-600 italic text-sm leading-relaxed">"{t.quote}"</p>
                </div>
                <div className="flex items-center">
                  <FallbackAvatar name={t.name} image={t.image} />
                  <div className="flex-grow">
                    <h4 className="font-bold text-slate-800 text-sm">{t.name}</h4>
                    <p className="text-xs text-slate-500 mb-1">{t.role}</p>
                    <div className="flex">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                <FallbackAvatar name={testimonial.name} image={testimonial.image} />
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
    </>
  );
};

export default Testimonials;

// Componente separado para controlar fallback e erro de imagem
function FallbackAvatar({ name, image }) {
  const [failed, setFailed] = useState(false);
  const showImage = image && !failed;
  const initial = name?.charAt(0).toUpperCase() || '?';

  return (
    <Avatar className="w-14 h-14 mr-4 border-2 border-orange-200 bg-orange-50">
      {showImage && (
        <AvatarImage
          src={image}
          alt={`Foto de ${name}`}
          loading="lazy"
          decoding="async"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
      {(!showImage) && (
        <AvatarFallback className="text-orange-600 font-bold text-xl bg-orange-100">
          {initial}
        </AvatarFallback>
      )}
    </Avatar>
  );
}
