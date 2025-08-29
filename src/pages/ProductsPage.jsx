import React from 'react';
import { Link } from 'react-router-dom';

// Página de listagem de produtos (por enquanto um produto)
export default function ProductsPage() {
  const products = [
    {
      slug: 'sacos-papel-20cm',
      nome: 'Sacos de Papel 20cm',
      resumo: 'Sacos de papel resistentes ideais para lanches e porções.',
    },
  ];

  return (
    <section className="pt-32 pb-20 container mx-auto px-4">
      <h1 className="text-section-title text-slate-800 mb-6">Produtos</h1>
      <p className="text-slate-600 max-w-2xl mb-10">
        Catálogo inicial. Em breve mais tamanhos e opções personalizadas.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => (
          <article key={p.slug} className="bg-white rounded-xl p-6 shadow hover-lift">
            <h2 className="font-semibold text-slate-800 text-lg mb-2">{p.nome}</h2>
            <p className="text-sm text-slate-600 mb-4">{p.resumo}</p>
            <div className="flex items-center gap-3 text-sm">
              <Link to={`/produto/${p.slug}`} className="text-orange-600 font-medium hover:underline">Detalhes</Link>
              <Link to="/orcamento" className="text-slate-500 hover:text-orange-600 transition-colors">Solicitar orçamento</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
