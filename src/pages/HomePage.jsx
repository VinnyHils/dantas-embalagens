import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/Hero';
import Products from '../components/Products';
import UseCases from '../components/UseCases';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage = ({ setSection }) => {
  const options = { threshold: 0.4 };
  const { ref: inicioRef, inView: inicioInView } = useInView(options);
  const { ref: produtoRef, inView: produtoInView } = useInView(options);
  const { ref: usosRef, inView: usosInView } = useInView(options);
  const { ref: depoimentosRef, inView: depoimentosInView } = useInView(options);
  const { ref: contatoRef, inView: contatoInView } = useInView(options);

  useEffect(() => {
    if (inicioInView) setSection('inicio');
    else if (produtoInView) setSection('produto');
    else if (usosInView) setSection('usos');
    else if (depoimentosInView) setSection('depoimentos');
    else if (contatoInView) setSection('contato');
  }, [inicioInView, produtoInView, usosInView, depoimentosInView, contatoInView, setSection]);

  return (
    <>
      <div id="inicio" ref={inicioRef}><Hero /></div>
      <div id="produto" ref={produtoRef}><Products /></div>
      <div id="usos" ref={usosRef}><UseCases /></div>
      <div id="depoimentos" ref={depoimentosRef}><Testimonials /></div>
      <div id="contato" ref={contatoRef}><Contact /></div>
    </>
  );
};

export default HomePage;
