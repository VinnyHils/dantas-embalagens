import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingCart, Star, Zap, Shield, Truck, Package, Award } from 'lucide-react';
import productBag from '../assets/images/product-bag.jpg';
import galleryBags from '../assets/images/gallery-bags.jpg';
import elegantBag from '../assets/images/elegant-bag.jpg';
import heroBag from '../assets/images/hero-bag.jpg';
import comercioImage from '../assets/images/saco-fundo-branco.png';

const Products = () => {
  const [selectedImage, setSelectedImage] = useState(0);

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
          <h2 className="text-section-title mb-4 text-slate-800">
            Saco de Papel Multiuso 20cm
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A solução perfeita para seu negócio com qualidade garantida
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-4 lg:sticky lg:top-24"
          >
            {/* Main Image */}
            <div className="relative group">
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-140 md:h-[900px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              
              {/* Badges */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                className="absolute top-4 right-0 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg"
              >
                <Check className="w-4 h-4 mr-2" /> Frete Grátis
              </motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                className="absolute bottom-4 left-0 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                Alta Qualidade
              </motion.div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                    selectedImage === index 
                      ? 'ring-4 ring-orange-500 shadow-lg' 
                      : 'hover:ring-2 hover:ring-orange-300'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-24 object-cover"
                  />
                  {selectedImage === index && (
                    <motion.div
                      layoutId="selected-indicator"
                      className="absolute inset-0 bg-orange-500/20"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

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
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Comprar no Mercado Livre</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>💬 Chamar no WhatsApp</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;

