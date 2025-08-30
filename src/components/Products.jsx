import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Check, ShoppingCart, Star, Zap, Shield, Package } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import MobileProductCTA from './MobileProductCTA';
import { products } from '../data/products';
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
    track('product_gallery_thumb_click', { index, image: images[index]?.alt });
  }, [emblaApi, emblaThumbsApi, images]);

  const onSelect = useCallback(() => {
    if (!emblaApi || !emblaThumbsApi) return;
  const snap = emblaApi.selectedScrollSnap();
  setSelectedIndex(snap);
  emblaThumbsApi.scrollTo(snap);
  track('product_gallery_change', { index: snap, image: images[snap]?.alt });
  }, [emblaApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const featured = products[0];
  const images = featured.images;
  const features = featured.features.map(f => ({
    icon: { Zap, Package, Shield }[f.icon] || Zap,
    title: f.title,
    description: f.description
  }));
  const specifications = featured.specifications;
  const benefits = featured.benefits;

  return (
    <section id="produto" className="pt-16 pb-10 md:pt-20 md:pb-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-section-title title-accent mb-4 text-slate-800 leading-tight">
            Saco de Papel Multiuso 20cm
          </h2>
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto">
            A solução perfeita para seu negócio com qualidade garantida
          </p>
          {/* Links de âncora removidos conforme solicitação */}
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
            className="lg:col-span-6 space-y-6 md:space-y-8"
          >
            {/* Price and Rating */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 mb-3"
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
                className="mb-5"
              >
                <div className="flex items-baseline space-x-4 mb-2">
                  <span className="text-4xl font-bold text-orange-600">R$ 49,90</span>
                  <span className="text-lg text-slate-500">/ milheiro</span>
                </div>
                <div className="text-sm text-green-600 font-medium">✓ Frete grátis para pedidos acima de R$ 200</div>
              </motion.div>
            </div>

            {/* Features (desktop) */}
            <motion.div id="caracteristicas"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-3 hidden md:block"
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

            {/* Specifications (desktop) */}
            <motion.div id="especificacoes"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-xl p-5 hidden md:block"
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

            {/* Benefits List (desktop) */}
            <motion.div id="beneficios"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-2 hidden md:grid"
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

            {/* Accordion (mobile) - versão refinada */}
            <div className="md:hidden" aria-label="Detalhes do produto expansíveis">
              <Accordion type="multiple" defaultValue={["carac"]} className="w-full flex flex-col gap-3">
                {/* Características */}
                <AccordionItem value="carac" className="group rounded-2xl bg-white ring-1 ring-slate-200/70 shadow-sm transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)] hover:shadow-md hover:ring-slate-300 data-[state=open]:shadow-lg data-[state=open]:ring-orange-500/40">
                  <AccordionTrigger className="group flex items-center gap-4 px-4 py-3 text-[15px] font-semibold !no-underline text-slate-800 data-[state=open]:pt-4 data-[state=open]:pb-3 focus-visible:ring-orange-500/40 focus-visible:ring-2 rounded-2xl">
                    <span className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-orange-50 text-orange-600 ring-1 ring-orange-100 transition-all group-data-[state=open]:bg-gradient-to-br group-data-[state=open]:from-orange-600 group-data-[state=open]:to-orange-500 group-data-[state=open]:text-white group-data-[state=open]:ring-orange-500/60">
                        <Zap className="w-5 h-5" />
                      </span>
                      <span>Principais Características</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-0 data-[state=open]:animate-fade-in-up">
                    <div className="space-y-4 pt-2">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4 p-3 bg-slate-50/70 rounded-xl ring-1 ring-slate-100 hover:bg-slate-50 transition-colors">
                          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <feature.icon className="w-5 h-5 text-orange-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800 text-sm mb-0.5">{feature.title}</h4>
                            <p className="text-slate-600 text-xs leading-snug">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                {/* Especificações */}
                <AccordionItem value="specs" className="group rounded-2xl bg-white ring-1 ring-slate-200/70 shadow-sm transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)] hover:shadow-md hover:ring-slate-300 data-[state=open]:shadow-lg data-[state=open]:ring-orange-500/40">
                  <AccordionTrigger className="group flex items-center gap-4 px-4 py-3 text-[15px] font-semibold !no-underline text-slate-800 focus-visible:ring-orange-500/40 focus-visible:ring-2 rounded-2xl">
                    <span className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-orange-50 text-orange-600 ring-1 ring-orange-100 transition-all group-data-[state=open]:bg-gradient-to-br group-data-[state=open]:from-orange-600 group-data-[state=open]:to-orange-500 group-data-[state=open]:text-white group-data-[state=open]:ring-orange-500/60">
                        <Package className="w-5 h-5" />
                      </span>
                      <span>Especificações Técnicas</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-0 data-[state=open]:animate-fade-in-up">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs pt-2">
                      {specifications.map((spec, i) => (
                        <li key={i} className="flex justify-between border-b border-dashed border-slate-200 py-1 last:border-0">
                          <span className="text-slate-600">{spec.label}</span>
                          <span className="font-medium text-slate-800">{spec.value}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                {/* Benefícios */}
                <AccordionItem value="benef" className="group rounded-2xl bg-white ring-1 ring-slate-200/70 shadow-sm transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)] hover:shadow-md hover:ring-slate-300 data-[state=open]:shadow-lg data-[state=open]:ring-orange-500/40">
                  <AccordionTrigger className="group flex items-center gap-4 px-4 py-3 text-[15px] font-semibold !no-underline text-slate-800 focus-visible:ring-orange-500/40 focus-visible:ring-2 rounded-2xl">
                    <span className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-orange-50 text-orange-600 ring-1 ring-orange-100 transition-all group-data-[state=open]:bg-gradient-to-br group-data-[state=open]:from-orange-600 group-data-[state=open]:to-orange-500 group-data-[state=open]:text-white group-data-[state=open]:ring-orange-500/60">
                        <Check className="w-5 h-5" />
                      </span>
                      <span>Benefícios</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-0 data-[state=open]:animate-fade-in-up">
                    <ul className="grid grid-cols-2 gap-2 pt-2">
                      {benefits.map((b, i) => (
                        <li key={i} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                          <Check className="w-3.5 h-3.5 text-green-500" /> {b}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* CTA Buttons (desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 pt-6 hidden md:block"
            >
                  <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-cta="mercado_livre"
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
  {/* Sticky CTA mobile */}
  <MobileProductCTA />
      {/* Breadcrumb JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://www.dantasembalagens.com.br/' },
          { '@type': 'ListItem', position: 2, name: 'Produto', item: 'https://www.dantasembalagens.com.br/#produto' }
        ]
      }) }} />
    </section>
  );
};

export default Products;

