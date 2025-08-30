import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ProductsPage() {
  return (
    <section className="pt-32 pb-20 container mx-auto px-4">
      <h1 className="text-section-title text-slate-800 mb-6">Produtos</h1>
      <p className="text-slate-600 max-w-2xl mb-12">
        Escolha a opção ideal para seu negócio. Produção direta, qualidade e custo competitivo.
      </p>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
