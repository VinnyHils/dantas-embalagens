import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductBySlug } from '../data/products';
import { Zap, Star, Shield, Package, Check } from 'lucide-react';

const iconMap = { Zap, Star, Shield, Package };

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <section className="pt-32 pb-20 container mx-auto px-4 max-w-xl">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">Produto não encontrado</h1>
        <p className="text-slate-600 mb-6">O item que você procura pode ter sido removido ou está indisponível.</p>
        <Link to="/produtos" className="text-orange-600 font-medium hover:underline">Voltar aos produtos</Link>
      </section>
    );
  }

  const { nome, descricao, images, features, specifications, benefits, price, unit, rating, freteGratisAPartir } = product;

  return (
    <section className="pt-32 pb-20 container mx-auto px-4 max-w-5xl">
      <nav className="text-xs text-slate-500 mb-6">
        <Link to="/" className="hover:text-orange-600">Início</Link> /{' '}
        <Link to="/produtos" className="hover:text-orange-600">Produtos</Link> /{' '}
        <span className="text-slate-700">{nome}</span>
      </nav>
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-slate-200/60 bg-slate-50 mb-4">
            <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover" width="800" height="600" />
          </div>
          <div className="grid grid-cols-5 gap-2">
            {images.slice(1, 6).map((img, i) => (
              <div key={i} className="overflow-hidden rounded-lg ring-1 ring-slate-200/60">
                <img src={img.src} alt={img.alt} className="w-full h-20 object-cover" loading="lazy" width="160" height="80" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-4">{nome}</h1>
          <p className="text-slate-600 leading-relaxed mb-6">{descricao}</p>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex text-orange-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < Math.round(rating.value) ? 'fill-orange-500' : 'opacity-30'}`} />
              ))}
            </div>
            <span className="text-sm text-slate-600">{rating.value.toFixed(1)} ({rating.count} avaliações)</span>
          </div>
          <div className="mb-6">
            <div className="flex items-baseline space-x-3 mb-1">
              <span className="text-4xl font-bold text-orange-600">R$ {price.toFixed(2).replace('.', ',')}</span>
              <span className="text-lg text-slate-500">/ {unit}</span>
            </div>
            {freteGratisAPartir && <div className="text-sm text-green-600 font-medium">✓ Frete grátis acima de R$ {freteGratisAPartir}</div>}
          </div>
          <h2 className="font-semibold text-slate-800 mb-3">Características</h2>
          <div className="space-y-3 mb-8">
            {features.map((f, i) => {
              const Icon = iconMap[f.icon] || Package;
              return (
                <div key={i} className="flex gap-3 p-3 rounded-xl bg-slate-50 ring-1 ring-slate-200/60">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center"><Icon className="w-5 h-5 text-orange-600" /></div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm">{f.title}</h4>
                    <p className="text-slate-600 text-xs leading-snug">{f.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <h2 className="font-semibold text-slate-800 mb-3">Especificações</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm mb-8">
            {specifications.map(s => (
              <li key={s.label} className="flex justify-between border-b border-dashed border-slate-200 py-1 last:border-0">
                <span className="text-slate-600">{s.label}</span>
                <span className="font-medium text-slate-800">{s.value}</span>
              </li>
            ))}
          </ul>
          <h2 className="font-semibold text-slate-800 mb-3">Benefícios</h2>
          <ul className="grid grid-cols-2 gap-2 text-xs mb-10">
            {benefits.map(b => (
              <li key={b} className="flex items-center gap-1.5 text-slate-700"><Check className="w-4 h-4 text-green-500" /> {b}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4">
            <Link to="/orcamento" className="bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-orange-700 transition-colors">Solicitar Orçamento</Link>
            <Link to="/produtos" className="text-slate-600 hover:text-orange-600 text-sm font-medium">Voltar</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
