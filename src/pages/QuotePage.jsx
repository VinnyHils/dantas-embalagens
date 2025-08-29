import React, { useState } from 'react';

const initial = {
  nome: '',
  email: '',
  telefone: '',
  produto: 'Sacos de Papel 20cm',
  quantidade: '',
  prazo: '',
  obs: ''
};

export default function QuotePage() {
  const [dados, setDados] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setDados((d) => ({ ...d, [name]: name === 'telefone' ? maskPhone(value) : value }));
  };

  const maskPhone = (v) => {
    return v
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4,5})(\d{4})$/, '$1-$2')
      .slice(0, 16);
  };

  const validate = () => {
    const errs = {};
    if (!dados.nome.trim()) errs.nome = 'Informe seu nome';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(dados.email)) errs.email = 'Email inválido';
    if (dados.quantidade && !/^\d+(\.|,)?\d*$/.test(dados.quantidade)) errs.quantidade = 'Somente números';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    if (!validate()) return;
    setSending(true);
    // Netlify Forms fallback: poste para formspree-like (Netlify captura porque tem data-netlify)
    try {
      const formData = new FormData(e.target);
      const res = await fetch('/', { method: 'POST', body: formData });
      if (!res.ok) throw new Error('Falha ao enviar');
      window.location.href = '/obrigado';
    } catch (err) {
      setServerError('Não foi possível enviar. Tente novamente.');
      setSending(false);
    }
  };

  return (
    <section className="pt-32 pb-20 container mx-auto px-4 max-w-2xl">
      <h1 className="text-section-title text-slate-800 mb-6">Solicitar Orçamento</h1>
      <p className="text-slate-600 mb-10">Informe detalhes do pedido para retornarmos rapidamente.</p>
      <form
        onSubmit={handleSubmit}
        name="orcamento"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="space-y-6 bg-white p-6 rounded-2xl shadow"
      >
        <input type="hidden" name="form-name" value="orcamento" />
        <p className="hidden">
          <label>
            Não preencher: <input name="bot-field" onChange={onChange} />
          </label>
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Field label="Nome" name="nome" required error={errors.nome}>
            <input
              name="nome"
              value={dados.nome}
              onChange={onChange}
              required
              className={inputCls(errors.nome)}
            />
          </Field>
          <Field label="Email" name="email" required error={errors.email}>
            <input
              type="email"
              name="email"
              value={dados.email}
              onChange={onChange}
              required
              className={inputCls(errors.email)}
            />
          </Field>
          <Field label="Telefone / WhatsApp" name="telefone">
            <input
              name="telefone"
              value={dados.telefone}
              onChange={onChange}
              placeholder="(11) 99999-9999"
              className={inputCls()}
            />
          </Field>
          <Field label="Produto" name="produto">
            <select
              name="produto"
              value={dados.produto}
              onChange={onChange}
              className={inputCls()}
            >
              <option value="Sacos de Papel 20cm">Sacos de Papel 20cm</option>
            </select>
          </Field>
          <Field label="Quantidade Estimada" name="quantidade" error={errors.quantidade}>
            <input
              name="quantidade"
              value={dados.quantidade}
              onChange={onChange}
              placeholder="Ex: 5000"
              className={inputCls(errors.quantidade)}
            />
          </Field>
          <Field label="Prazo Desejado" name="prazo">
            <input
              name="prazo"
              value={dados.prazo}
              onChange={onChange}
              placeholder="Ex: 15 dias"
              className={inputCls()}
            />
          </Field>
        </div>
        <Field label="Observações" name="obs">
          <textarea
            name="obs"
            rows={4}
            value={dados.obs}
            onChange={onChange}
            placeholder="Informações adicionais, personalização, etc."
            className={inputCls() + ' resize-y'}
          />
        </Field>
        {serverError && (
          <div className="text-sm text-red-600 bg-red-50 border border-red-200 px-3 py-2 rounded-md">
            {serverError}
          </div>
        )}
        <div className="flex items-center gap-4 flex-wrap">
          <button
            type="submit"
            disabled={sending}
            className="bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-orange-700 transition-colors disabled:opacity-60"
          >
            {sending ? 'Enviando...' : 'Enviar Pedido'}
          </button>
          <p className="text-xs text-slate-500">Seus dados não serão compartilhados.</p>
        </div>
      </form>
    </section>
  );
}

function Field({ label, name, children, required, error }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1" htmlFor={name}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function inputCls(hasError) {
  return `w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-colors ${hasError ? 'border-red-500 focus:ring-red-500' : 'border-slate-300'}`;
}
