import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Package, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (sectionId === 'sobre') {
      if (location.pathname !== '/sobre') navigate('/sobre');
      return;
    }
    // Se não estiver na home, vai para home e depois tenta scroll
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Mesmos itens do header para consistência
  const quickLinks = [
    { id: 'inicio', label: 'Início' },
    { id: 'produto', label: 'Produto' },
    { id: 'usos', label: 'Como Usar' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'contato', label: 'Contato' },
    { id: 'sobre', label: 'Sobre & FAQ' }
  ];

  const products = [
    { nome: 'Saco de Papel Mono Viagem 1 <span class="block leading-snug text-[11px] text-gray-400 font-medium mt-0.5">40G • PACOTE COM 500 UNIDADES</span>', slug: 'sacos-papel-20cm', rich: true }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">Dantas Embalagens</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Fabricante de sacos de papel e embalagens descartáveis em Atibaia-SP. 
              Qualidade e tradição há mais de 15 anos.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-sm">(11) 4411-2233</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="text-sm">dantasembalagens.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-sm">Atibaia - SP</span>
              </div>
              {/* Dados Legais */}
              <div className="pt-2 text-[11px] leading-relaxed text-gray-400 border-t border-slate-700/50 mt-4">
                <p className="font-semibold text-gray-300">DANTAS EMBALAGENS</p>
                <p>CNPJ: 37.566.147/0001-53</p>
                <p>ATRAVESSA DAS ROSAS, 21<br/>Atibaia - SP • CEP 12945-713 • Brasil</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-6">Navegação</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.id === 'sobre' ? (
                    <Link
                      to="/sobre"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('sobre');
                      }}
                      className="footer-nav-link text-gray-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="footer-nav-link text-gray-300 text-sm"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-6">Produtos</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    to={`/produto/${product.slug}`}
                    className="footer-nav-link text-gray-300 text-sm leading-tight"
                    dangerouslySetInnerHTML={{ __html: product.nome }}
                  />
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal / Recursos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-6">Informações</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/orcamento" className="footer-nav-link text-gray-300 text-sm">
                  Solicitar Orçamento
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="footer-nav-link text-gray-300 text-sm">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos" className="footer-nav-link text-gray-300 text-sm">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-6">Siga-nos</h3>
            <p className="text-gray-300 text-sm mb-6">
              Acompanhe nossas novidades e dicas sobre embalagens
            </p>
            
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-slate-700 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <div className="bg-slate-800 rounded-xl p-4">
              <h4 className="font-semibold mb-2 text-sm">Horário de Atendimento</h4>
              <div className="text-xs text-gray-300 space-y-1">
                <div>Segunda a Sexta: 8h às 18h</div>
                <div>Sábado: 8h às 12h</div>
                <div>Domingo: Fechado</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Dantas Embalagens. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Feito com</span>
              <span role="img" aria-label="morango" className="text-lg leading-none">🍓</span>
              <span>em Atibaia-SP</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

