import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Heart, Target, Users, Award, Leaf } from 'lucide-react';
import elegantBag from '../assets/images/elegant-bag.webp';

const About = () => {
  const timeline = [
    {
      year: '2008',
      title: 'Fundação da Empresa',
      description: 'Iniciamos nossa jornada em Atibaia-SP com o sonho de oferecer embalagens de qualidade.'
    },
    {
      year: '2012',
      title: 'Expansão da Produção',
      description: 'Investimos em novos equipamentos e ampliamos nossa capacidade produtiva.'
    },
    {
      year: '2018',
      title: 'Certificação de Qualidade',
      description: 'Obtivemos certificações importantes que garantem a qualidade dos nossos produtos.'
    },
    {
      year: '2024',
      title: 'Liderança no Mercado',
      description: 'Hoje somos referência em embalagens de papel na região de Atibaia e Grande São Paulo.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Paixão',
      description: 'Fazemos o que amamos com dedicação e entusiasmo em cada produto.'
    },
    {
      icon: Target,
      title: 'Qualidade',
      description: 'Comprometidos em entregar sempre o melhor para nossos clientes.'
    },
    {
      icon: Users,
      title: 'Relacionamento',
      description: 'Construímos parcerias duradouras baseadas na confiança mútua.'
    },
    {
      icon: Leaf,
      title: 'Sustentabilidade',
      description: 'Produzimos com responsabilidade ambiental e materiais eco-friendly.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-white to-slate-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-section-title mb-4 text-slate-800 tracking-tight">
            <span className="block text-[2.15rem] sm:text-4xl md:text-[2.75rem] leading-tight">Nossa História</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Conheça a Dantas Embalagens, uma empresa familiar dedicada a oferecer 
            as melhores soluções em embalagens descartáveis
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Factory className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Da Tradição à Inovação</h3>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Fundada em Atibaia, a Dantas Embalagens nasceu do sonho de uma família 
              empreendedora que acreditava no poder das pequenas empresas de fazer a diferença. 
              Começamos com uma pequena produção artesanal e, ao longo dos anos, crescemos 
              sem perder nossa essência familiar.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Hoje, somos uma referência na fabricação de sacos de papel e embalagens 
              descartáveis, atendendo desde pequenos comerciantes até grandes empresas. 
              Nossa missão é simples: oferecer produtos de qualidade que valorizem 
              o trabalho dos nossos clientes.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Acreditamos que cada embalagem conta uma história, e queremos fazer parte 
              da sua. Por isso, investimos constantemente em tecnologia, qualidade e 
              atendimento personalizado, mantendo sempre os valores familiares que nos trouxeram até aqui.
            </p>

            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-medium text-slate-700">Certificado ISO 9001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-slate-700">Eco-Friendly</span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={elegantBag}
                alt="Produtos Dantas Embalagens"
                className="w-full h-96 object-cover hover-scale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl"
            >
              <div className="text-3xl font-bold text-orange-600 mb-1">15+</div>
              <div className="text-sm text-slate-600">Anos de Experiência</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -top-6 -right-6 bg-orange-600 text-white rounded-2xl p-6 shadow-xl"
            >
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-sm opacity-90">Clientes Satisfeitos</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center text-slate-800 mb-12">
            Nossa Jornada
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-600 rounded-full" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift">
                      <div className="text-orange-600 font-bold text-lg mb-2">{item.year}</div>
                      <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-orange-600 rounded-full border-4 border-white shadow-lg" />
                  </div>
                  
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-slate-800 mb-12">
            Nossos Valores
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">{value.title}</h4>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

