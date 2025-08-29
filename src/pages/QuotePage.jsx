import React, { useState } from 'react';

export default function QuotePage() {
  const [enviado, setEnviado] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Futuro: integrar com backend / Netlify Forms
    setEnviado(true);
    setTimeout(() => {
      window.location.href = '/obrigado';
    }, 600);
  };

  return (
    <section className="pt-32 pb-20 container mx-auto px-4 max-w-2xl">
      <h1 className="text-section-title text-slate-800 mb-6">Solicitar Orçamento</h1>
      <p className="text-slate-600 mb-10">Informe detalhes do pedido para retornarmos rapidamente.</p>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-2xl shadow">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Nome</label>
            <input required name="nome" className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input required type="email" name="email" className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Telefone / WhatsApp</label>
            <input name="telefone" className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Produto</label>
            <select name="produto" className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none">
              <option>Sacos de Papel 20cm</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Quantidade Estimada</label>
            <input name="quantidade" className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Ex: 5.000" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Prazo Desejado</label>
            <input name="prazo" className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Ex: 15 dias" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Observações</label>
          <textarea name="obs" rows={4} className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Informações adicionais, personalização, etc." />
        </div>
        <button type="submit" disabled={enviado} className="bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-orange-700 transition-colors disabled:opacity-60">
          {enviado ? 'Enviando...' : 'Enviar Pedido'}
        </button>
      </form>
    </section>
  );
}
