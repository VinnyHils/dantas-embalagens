import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const img = product.images?.[0];
  return (
    <article className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200/60 hover:shadow-md hover:ring-slate-300 transition p-5 flex flex-col">
      {img && (
        <Link to={`/produto/${product.slug}`} className="block mb-4 overflow-hidden rounded-xl">
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-40 object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
            width="400"
            height="200"
          />
        </Link>
      )}
      <h2 className="font-semibold text-slate-800 text-lg mb-2">
        <Link to={`/produto/${product.slug}`} className="hover:text-orange-600 transition-colors">
          {product.nome}
        </Link>
      </h2>
      <p className="text-sm text-slate-600 mb-4 line-clamp-3">{product.resumo}</p>
      <div className="mt-auto flex items-center gap-3 text-sm">
        <Link to={`/produto/${product.slug}`} className="text-orange-600 font-medium hover:underline">
          Detalhes
        </Link>
        <Link to="/orcamento" className="text-slate-500 hover:text-orange-600 transition-colors">
          Solicitar orçamento
        </Link>
      </div>
    </article>
  );
}
