import React from 'react';
import { Link } from 'react-router-dom';

export default function ThankYouPage() {
  return (
    <section className="pt-32 pb-20 container mx-auto px-4 text-center max-w-xl">
      <h1 className="text-section-title text-slate-800 mb-4">Obrigado! 🍊</h1>
      <p className="text-slate-600 mb-8">Recebemos sua solicitação. Em breve entraremos em contato.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/" className="bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-orange-700 transition-colors">Voltar ao Início</Link>
        <Link to="/produtos" className="text-sm font-medium text-slate-600 hover:text-orange-600">Ver Produtos</Link>
      </div>
    </section>
  );
}
