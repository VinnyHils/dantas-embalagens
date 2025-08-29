import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/Hero';
import Products from '../components/Products';
import UseCases from '../components/UseCases';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage = ({ setSection }) => {
  // Menor threshold para detectar seção mais cedo em telas menores (mobile)
  const options = { threshold: 0.25 };
  // Threshold mais sensível para depoimentos (entra em foco com menos área visível)
  const depoimentosOptions = { threshold: 0.12 };
  const { ref: inicioRef, inView: inicioInView } = useInView(options);
  const { ref: produtoRef, inView: produtoInView } = useInView(options);
  const { ref: usosRef, inView: usosInView } = useInView(options);
  const { ref: depoimentosRef, inView: depoimentosInView } = useInView(depoimentosOptions);
  // Contato só deve ativar quando bem mais dentro da viewport (evita roubar foco de depoimentos)
  const { ref: contatoRef, inView: contatoInView } = useInView({ threshold: 0.55 });

  useEffect(() => {
    // Ordem invertida para que a seção mais "profunda" tenha prioridade quando múltiplas estiverem visíveis (ex: contato vs depoimentos)
  // Só troca para contato se depoimentos já não estiver mais visível
  if (contatoInView && !depoimentosInView) setSection('contato');
  else if (depoimentosInView) setSection('depoimentos');
    else if (usosInView) setSection('usos');
    else if (produtoInView) setSection('produto');
    else if (inicioInView) setSection('inicio');
  }, [inicioInView, produtoInView, usosInView, depoimentosInView, contatoInView, setSection]);

  return (
    <>
  <div id="inicio" ref={inicioRef} className="scroll-mt-24"><Hero /></div>
  {/* data-scroll-offset compensa o padding-top interno da seção de produto para que o título fique visível */}
  <div id="produto" ref={produtoRef} className="scroll-mt-24" data-scroll-offset="80"><Products /></div>
  <div id="usos" ref={usosRef} className="scroll-mt-24"><UseCases /></div>
  <div id="depoimentos" ref={depoimentosRef} className="scroll-mt-24" data-scroll-offset="40"><Testimonials /></div>
  <div id="contato" ref={contatoRef} className="scroll-mt-24"><Contact /></div>
    </>
  );
};

export default HomePage;
