import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Placeholder de página de produto dinâmico
export default function ProductDetailPage() {
  const { slug } = useParams();

  // Simples mapeamento inicial (substituir por fonte de dados real depois)
  const productMap = {
    'sacos-papel-20cm': {
      nome: 'Sacos de Papel 20cm',
      descricao: 'Fabricados em papel de alta qualidade, ideais para lanches, porções e snacks. Resistentes e sustentáveis.',
      especificacoes: [
        'Altura ~20cm',
        'Papel branco ou kraft',
        'Opção de personalização futura',
      ],
    },
  };

  const produto = productMap[slug];

  if (!produto) {
    return (
      <section className="pt-32 pb-20 container mx-auto px-4">
        <h1 className="text-section-title mb-4">Produto não encontrado</h1>
        <p className="text-slate-600 mb-6">Verifique o link ou volte ao catálogo.</p>
        <Link to="/produtos" className="text-orange-600 font-medium hover:underline">Voltar aos produtos</Link>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-20 container mx-auto px-4 max-w-3xl">
      <nav className="text-xs text-slate-500 mb-6">
        <Link to="/" className="hover:text-orange-600">Início</Link> /{' '}
        <Link to="/produtos" className="hover:text-orange-600">Produtos</Link> /{' '}
        <span className="text-slate-700">{produto.nome}</span>
      </nav>
      <h1 className="text-section-title text-slate-800 mb-4">{produto.nome}</h1>
      <p className="text-slate-600 mb-8 leading-relaxed">{produto.descricao}</p>
      <h2 className="font-semibold text-slate-700 mb-3">Características</h2>
      <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-8">
        {produto.especificacoes.map(item => <li key={item}>{item}</li>)}
      </ul>
      <div className="flex flex-wrap gap-4">
        <Link to="/orcamento" className="bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-orange-700 transition-colors">Solicitar Orçamento</Link>
        <Link to="/produtos" className="text-slate-600 hover:text-orange-600 text-sm font-medium">Voltar</Link>
      </div>
    </section>
  );
}
