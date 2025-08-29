import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logo.png';

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (path, sectionId) => {
    const performScroll = () => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const customInnerOffset = parseInt(element.getAttribute('data-scroll-offset') || '0', 10);

      const computeTarget = () => {
        const headerEl = document.querySelector('header');
        const headerHeight = headerEl ? headerEl.offsetHeight : 80;
        const rawTop = element.getBoundingClientRect().top + window.scrollY;
        // Aplica offset interno para alinhar heading real no topo
        return Math.max(rawTop - headerHeight - 4 + customInnerOffset, 0);
      };

      const target = computeTarget();
      window.scrollTo({ top: target, behavior: 'smooth' });

      let attempts = 0;
      const maxAttempts = 10;
      const tolerance = 4;
      const align = () => {
        attempts += 1;
        const headerEl = document.querySelector('header');
        const headerHeight = headerEl ? headerEl.offsetHeight : 80;
        const rectTop = element.getBoundingClientRect().top;
        // Queremos que a área interna (após padding) alinhe - então medimos diferença invertendo offset
        const desired = headerHeight + 4 - customInnerOffset;
        const delta = rectTop - desired;
        if (Math.abs(delta) <= tolerance || attempts >= maxAttempts) {
          if (Math.abs(delta) > tolerance) {
            window.scrollBy({ top: delta, behavior: 'auto' });
          }
          setIsMenuOpen(false);
          return;
        }
        window.scrollBy({ top: delta, behavior: 'auto' });
        setTimeout(align, 90);
      };
      setTimeout(align, 320);
    };

    if (location.pathname !== '/') {
      navigate('/');
      // Delay suficiente para montar DOM e calcular alturas corretas
      setTimeout(performScroll, 340);
    } else {
      performScroll();
    }
  };

  const menuItems = [
    { id: 'inicio', label: 'Início', path: '/', section: 'inicio' },
    { id: 'produto', label: 'Produto', path: '/', section: 'produto' },
    { id: 'usos', label: 'Como Usar', path: '/', section: 'usos' },
    { id: 'depoimentos', label: 'Depoimentos', path: '/', section: 'depoimentos' },
    { id: 'contato', label: 'Contato', path: '/', section: 'contato' },
    { id: 'sobre', label: 'Sobre & FAQ', path: '/sobre' }
  ];

  const currentPath = location.pathname;
  const getActiveStatus = (item) => {
    if (item.path === '/sobre' && currentPath === '/sobre') {
      return true;
    }
    if (item.path === '/' && currentPath === '/') {
      return activeSection === item.section;
    }
    return false;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <img src={logo} alt="Dantas Embalagens Logo" className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-slate-800 leading-tight">
                  Dantas Embalagens
                </span>
                <span className="text-xs text-orange-600 font-medium">
                  Direto da Fábrica
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 relative">
            {menuItems.map((item) => {
              const isActive = getActiveStatus(item);
              if (item.path === '/sobre') {
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`relative text-slate-700 hover:text-orange-600 font-medium transition-colors duration-200 text-sm pb-1 ${
                      isActive ? 'text-orange-600' : ''
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="active-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      />
                    )}
                  </Link>
                );
              }
              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavigate(item.path, item.section)}
                  className={`relative text-slate-700 hover:text-orange-600 font-medium transition-colors duration-200 text-sm pb-1 ${
                    isActive ? 'text-orange-600' : ''
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="active-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigate('/', 'contato')}
            className="hidden md:block bg-gradient-to-r from-orange-600 to-orange-700 text-white font-bold py-2.5 px-6 rounded-full hover:from-orange-700 hover:to-orange-800 transition-all duration-300 text-sm shadow-lg"
          >
            Comprar Agora
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-orange-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 py-4 border-t border-slate-200"
            >
              <div className="flex flex-col space-y-4">
                {menuItems.map((item, index) => {
                  const isActive = getActiveStatus(item);
                   if (item.path === '/sobre') {
                     return (
                       <Link
                         key={item.id}
                         to={item.path}
                         onClick={() => setIsMenuOpen(false)}
                         className={`text-left font-medium py-2 transition-colors duration-200 ${
                           isActive ? 'text-orange-600' : 'text-slate-700'
                         }`}
                       >
                         {item.label}
                       </Link>
                     )
                   }
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavigate(item.path, item.section)}
                      className={`text-left font-medium py-2 transition-colors duration-200 ${
                        isActive ? 'text-orange-600' : 'text-slate-700'
                      }`}
                    >
                      {item.label}
                    </motion.button>
                  )
                })}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                  onClick={() => handleNavigate('/', 'contato')}
                  className="bg-gradient-to-r from-orange-600 to-orange-700 text-white font-bold py-3 px-6 rounded-full hover:from-orange-700 hover:to-orange-800 transition-all duration-300 text-center mt-4"
                >
                  Comprar Agora
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;

