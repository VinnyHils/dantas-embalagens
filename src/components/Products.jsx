import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Check, ShoppingCart, Star, Zap, Shield, Package } from 'lucide-react';
import productBag from '../assets/images/product-bag.webp';
import galleryBags from '../assets/images/gallery-bags.webp';
import elegantBag from '../assets/images/elegant-bag.webp';
import heroBag from '../assets/images/hero-bag.webp';
import { track } from '../lib/analytics';

const Thumb = ({ selected, onClick, imgSrc, altText }) => (
  <div
    className={`embla-thumbs__slide ${selected ? 'embla-thumbs__slide--selected' : ''}`}
  >
    <button
      onClick={onClick}
      className="embla-thumbs__slide__button"
      type="button"
    >
      <img
        className="embla-thumbs__slide__img"
        src={imgSrc}
        alt={altText}
      />
    </button>
  </div>
);

const Products = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const onThumbClick = useCallback((index) => {
    if (!emblaApi || !emblaThumbsApi) return;
    emblaApi.scrollTo(index);
  }, [emblaApi, emblaThumbsApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap());
  }, [emblaApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const images = [
    { src: productBag, alt: 'Saco de papel kraft - vista principal' },
    { src: heroBag, alt: 'Saco de papel para delivery' },
    { src: elegantBag, alt: 'Saco de papel elegante' },
    { src: galleryBags, alt: 'Variedade de sacos de papel' }
  ];

  const features = [
    { icon: Zap, title: 'Super Versátil', description: 'Perfeito para pipoca, churros, batata frita, doces, lanches e lembrancinhas.' },
    { icon: Package, title: 'Tamanho Ideal', description: '20cm de altura para porções generosas e apresentação profissional.' },
    { icon: Shield, title: 'Alta Resistência', description: 'Material resistente que suporta alimentos oleosos e mantém a forma.' }
  ];

  const specifications = [
    { label: 'Altura', value: '20cm' },
    { label: 'Material', value: 'Papel Kraft' },
    { label: 'Cor', value: 'Natural' },
    { label: 'Quantidade', value: '1.000 unidades' },
    { label: 'Peso', value: '80g/m²' },
    { label: 'Formato', value: 'Fundo reto selado' }
  ];

  const benefits = [
    'Material de primeira qualidade',
    'Resistente a gordura',
    'Ideal para alimentos',
    'Fácil armazenamento',
    'Preço de fábrica',
    'Entrega rápida'
  ];

  return (
    <section id="produto" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center">
            <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-wide uppercase text-orange-700 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full mb-4 shadow-sm">
              Produto em Destaque
            </span>
          </div>
          <h2 className="text-section-title mb-4 text-slate-800 leading-tight">
            Saco de Papel Multiuso 20cm
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            A solução perfeita para seu negócio com qualidade garantida
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Image Gallery */}
            <div className="lg:col-span-6 space-y-4 lg:sticky lg:top-24">
              <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                  {images.map((image, index) => (
                    <div className="embla__slide" key={index}>
                      <img
                        src={image.src}
                        srcSet={`${image.src} 1x`}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        alt={image.alt}
                        className="embla__slide__img"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="embla-thumbs" ref={emblaThumbsRef}>
                <div className="embla-thumbs__container">
                  {images.map((image, index) => (
                    <Thumb
                      key={index}
                      onClick={() => onThumbClick(index)}
                      selected={index === selectedIndex}
                      imgSrc={image.src}
                      altText={image.alt}
                    />
                  ))}
                </div>
              </div>
            </div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Price and Rating */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 mb-4"
              >
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-slate-600">(4.9/5 - 127 avaliações)</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="flex items-baseline space-x-4 mb-2">
                  <span className="text-4xl font-bold text-orange-600">R$ 49,90</span>
                  <span className="text-lg text-slate-500">/ milheiro</span>
                </div>
                <div className="text-sm text-green-600 font-medium">✓ Frete grátis para pedidos acima de R$ 200</div>
              </motion.div>
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-slate-800">Principais Características:</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-slate-50 rounded-xl hover-lift"
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">{feature.title}</h4>
                      <p className="text-slate-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-xl p-6"
            >
              <h3 className="text-lg font-bold text-slate-800 mb-4">Especificações Técnicas:</h3>
              <div className="grid grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-slate-600 text-sm">{spec.label}:</span>
                    <span className="font-medium text-slate-800 text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2"
                >
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 pt-6"
            >
                  <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                    onClick={() => track('cta_click', { cta: 'mercado_livre' })}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Comprar no Mercado Livre</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/5599999999999?text=Ol%C3%A1%20quero%20um%20or%C3%A7amento%20dos%20sacos%20de%20papel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                aria-label="Chamar no WhatsApp"
                onClick={() => track('cta_click', { cta: 'whatsapp_produto' })}
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/15">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-6 h-6"
                    role="img"
                    aria-hidden="true"
                  >
                    <path fill="#E6F9EE" d="M16.04 3.2c-7.09 0-12.84 5.65-12.84 12.61 0 2.22.6 4.31 1.66 6.11L3 29l7.36-1.93a13.1 13.1 0 005.68 1.32c7.09 0 12.84-5.65 12.84-12.61S23.13 3.2 16.04 3.2z"/>
                    <path fill="#25D366" d="M16.04 5.2c5.99 0 10.84 4.77 10.84 10.61 0 5.85-4.85 10.61-10.84 10.61-1.9 0-3.73-.49-5.36-1.42l-.38-.22-4.37 1.14 1.18-4.31-.25-.39a10.37 10.37 0 01-1.72-5.41c0-5.84 4.85-10.61 10.84-10.61z"/>
                    <path fill="#FFF" d="M11.59 10.84c-.25-.56-.52-.57-.76-.58l-.65-.01c-.23 0-.6.09-.91.43-.31.34-1.19 1.16-1.19 2.83 0 1.66 1.22 3.27 1.39 3.49.17.23 2.35 3.62 5.82 4.94 2.88 1.15 3.46.92 4.08.86.62-.06 2.01-.82 2.29-1.61.28-.79.28-1.48.2-1.61-.08-.13-.28-.21-.59-.37-.31-.16-1.83-.9-2.12-1-.28-.11-.49-.16-.69.16-.2.32-.8 1-.98 1.2-.18.2-.36.22-.66.08-.3-.14-1.26-.46-2.4-1.47-.89-.8-1.48-1.78-1.65-2.08-.17-.3-.02-.46.13-.61.14-.14.31-.36.45-.54.15-.18.2-.31.29-.5.09-.2.05-.37-.01-.51-.06-.14-.57-1.38-.78-1.89z"/>
                  </svg>
                </span>
                <span>Chamar no WhatsApp</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;

