import React from 'react';
import About from '../components/About';
import Faq from '../components/Faq';

const AboutPage = () => {
  return (
    <div className="pt-16 md:pt-24">
      <About />
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 title-accent">Dados da Empresa</h2>
          <div className="bg-slate-50 rounded-2xl p-6 md:p-8 ring-1 ring-slate-200/60 grid gap-6 md:grid-cols-2 text-sm leading-relaxed">
            <div className="space-y-2">
              <p><span className="font-semibold text-slate-700">Nome Fantasia:</span> Dantas Embalagens</p>
              <p><span className="font-semibold text-slate-700">Razão Social:</span> Dantas Embalagens</p>
              <p><span className="font-semibold text-slate-700">CNPJ:</span> 37.566.147/0001-53</p>
            </div>
            <div className="space-y-2">
              <p><span className="font-semibold text-slate-700">Endereço:</span> Atravessa das Rosas, 21</p>
              <p><span className="font-semibold text-slate-700">Cidade:</span> Atibaia - SP</p>
              <p><span className="font-semibold text-slate-700">CEP:</span> 12945-713 • Brasil</p>
            </div>
            <p className="md:col-span-2 text-slate-600 text-xs mt-4">Informações disponibilizadas para transparência ao consumidor. Última atualização automática do site.</p>
          </div>
        </div>
      </section>
      <Faq />
    </div>
  );
};

export default AboutPage;
