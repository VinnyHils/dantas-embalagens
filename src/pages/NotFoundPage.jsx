import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { track } from '../lib/analytics';

export default function NotFoundPage() {
  useEffect(() => {
    // Assegura meta robots noindex específica (além da lógica global)
    let robots = document.head.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, nofollow');
    track('page_404');
  }, []);

  return (
    <section className="pt-32 pb-20 container mx-auto px-4 text-center max-w-xl">
      <h1 className="text-section-title text-slate-800 mb-4">Página Não Encontrada</h1>
      <p className="text-slate-600 mb-4">O link pode estar incorreto ou o conteúdo foi movido.</p>
      <p className="text-slate-500 mb-8 text-sm">Use os atalhos abaixo para continuar navegando.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/" className="bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-orange-700 transition-colors">Início</Link>
        <Link to="/produtos" className="text-sm font-medium text-slate-600 hover:text-orange-600">Produtos</Link>
        <Link to="/orcamento" className="text-sm font-medium text-slate-600 hover:text-orange-600">Orçamento</Link>
        <Link to="/contato" className="text-sm font-medium text-slate-600 hover:text-orange-600" onClick={(e) => { e.preventDefault(); const el=document.getElementById('contato'); if(el){ el.scrollIntoView({behavior:'smooth'}); } }}>Contato</Link>
      </div>
    </section>
  );
}
