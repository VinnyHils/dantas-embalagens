import React, { useEffect, useState } from 'react';

// Página de Política de Privacidade adaptada ao layout fornecido pelo usuário
export default function PrivacyPage() {
  const sections = [
    { id: 'definicoes', label: '1. Definições' },
    { id: 'dados', label: '2. Dados Coletados' },
    { id: 'uso', label: '3. Uso dos Dados' },
    { id: 'compartilhamento', label: '4. Compartilhamento' },
    { id: 'direitos', label: '5. Seus Direitos' },
    { id: 'seguranca', label: '6. Segurança' },
    { id: 'links', label: '7. Links Terceiros' },
    { id: 'alteracoes', label: '8. Alterações' },
    { id: 'contato', label: '9. Contato' },
  ];

  const [active, setActive] = useState(sections[0].id);

  // Scrollspy baseado na posição do topo das seções (mais estável que IntersectionObserver para este layout)
  useEffect(() => {
    let ticking = false;
    const headerOffset = 140; // aproximação altura header + margem
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        let current = sections[0].id;
        for (const s of sections) {
          const el = document.getElementById(s.id);
            if (!el) continue;
          const top = el.getBoundingClientRect().top;
          if (top - headerOffset <= 0) {
            current = s.id;
          } else {
            break; // as seções estão em ordem; pode parar
          }
        }
  // Força última seção se perto do final da página
  const nearBottom = window.innerHeight + window.scrollY >= (document.documentElement.scrollHeight - 8);
  if (nearBottom) current = sections[sections.length - 1].id;
        setActive(prev => (prev === current ? prev : current));
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative pt-32 pb-24 bg-gradient-to-br from-orange-50/50 via-white to-white min-h-screen">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(circle_at_40%_30%,black,transparent_70%)]" />
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-[1fr_260px] gap-12">
          <main className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8 sm:p-12 ring-1 ring-orange-100">
            {/* Cabeçalho */}
            <header className="border-b pb-6 mb-10">
              <h1 className="text-4xl font-bold text-slate-800 tracking-tight">Política de Privacidade</h1>
              <p className="text-lg text-slate-600 mt-2 font-medium">Dantas Embalagens</p>
              <p className="text-xs text-slate-500 mt-2">Última atualização: <time dateTime="2025-08-29">29 de agosto de 2025</time></p>
            </header>

            <article className="prose prose-slate max-w-none document-body">
              <p>A <strong>Dantas Embalagens</strong>, pessoa jurídica de direito privado, leva a sua privacidade a sério e zela pela segurança e proteção de dados de todos os seus clientes, parceiros, fornecedores e usuários do site <span className="font-medium text-orange-600">dantasembalagens.com.br</span> e qualquer outro site, loja ou aplicativo operado pela empresa.</p>
              <p>Esta Política de Privacidade destina-se a informá-lo sobre o modo como nós utilizamos e divulgamos informações coletadas em suas visitas ao nosso site e em mensagens que trocamos com você.</p>
              <p className="mb-10 p-4 bg-orange-50/70 border-l-4 border-orange-300 font-semibold text-slate-800 rounded-r-xl text-sm uppercase tracking-wide">Ao acessar o site, enviar comunicações ou fornecer qualquer dado pessoal você declara estar ciente e de acordo com esta Política de Privacidade.</p>

              {/* 1 Definições */}
              <section id="definicoes" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-semibold text-slate-800 border-b pb-3 mb-4">1. Definições</h2>
                <p>Para os fins desta Política de Privacidade:</p>
                <ul className="list-disc pl-6 space-y-3 leading-relaxed">
                  <li><strong>Dados Pessoais:</strong> Informação relativa a pessoa física identificada ou identificável (ex: nome, CPF, RG, fotografia).</li>
                  <li><strong>Tratamento:</strong> Qualquer operação com dados pessoais: coleta, produção, recepção, classificação, uso, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação, controle, modificação, comunicação, transferência, difusão ou extração.</li>
                  <li><strong>Cookies:</strong> Arquivos de texto gravados no dispositivo para funcionamento, estatísticas ou personalização.</li>
                </ul>
              </section>

              {/* 2 Dados Coletados */}
              <section id="dados" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-semibold text-slate-800 border-b pb-3 mb-4">2. Dados Coletados</h2>
                <p>Coletamos os seguintes tipos de informações:</p>
                <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-2">2.1. Informações Fornecidas por Você</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Dados de Contato:</strong> Nome, telefone, cidade, estado, e-mail.</li>
                  <li><strong>Informações de Orçamento:</strong> Especificações dos produtos, empresa e CNPJ (quando aplicável).</li>
                  <li><strong>Comunicações:</strong> Mensagens enviadas via formulários ou e-mail.</li>
                </ul>
                <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-2">2.2. Informações Coletadas Automaticamente</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Dados de Log e Uso:</strong> IP, navegador, sistema operacional, páginas visitadas e tempos.</li>
                  <li><strong>Cookies:</strong> Sessão e persistentes para funcionamento, análise e eventual publicidade.</li>
                </ul>
              </section>

              {/* 3 Uso */}
              <section id="uso" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-semibold text-slate-800 border-b pb-3 mb-4">3. Uso dos Dados Coletados</h2>
                <p>Utilizamos as informações para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Prestação de Serviços:</strong> Operar site, processar pedidos e orçamentos.</li>
                  <li><strong>Comunicação:</strong> Responder solicitações e enviar informações relevantes (quando permitido).</li>
                  <li><strong>Melhoria:</strong> Entender uso e aprimorar funcionalidades.</li>
                  <li><strong>Segurança:</strong> Prevenir fraudes e abusos.</li>
                  <li><strong>Obrigações Legais:</strong> Cumprimento normativo e resposta a autoridades.</li>
                </ul>
              </section>

              {/* 4 Compartilhamento */}
              <section id="compartilhamento" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-semibold text-slate-800 border-b pb-3 mb-4">4. Compartilhamento de Dados</h2>
                <p>A Dantas Embalagens não vende ou aluga dados pessoais. Poderemos compartilhar com:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Provedores de Serviço:</strong> Hospedagem, e-mail, analytics e meios de pagamento.</li>
                  <li><strong>Requisitos Legais:</strong> Quando determinado por autoridade.</li>
                  <li><strong>Transferência de Negócios:</strong> Em fusão, aquisição ou reestruturação.</li>
                </ul>
              </section>

              {/* 5 Direitos */}
              <section id="direitos" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-semibold text-slate-800 border-b pb-3 mb-4">5. Seus Direitos (LGPD)</h2>
                <p>Você pode:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acessar seus dados.</li>
                  <li>Corrigir dados incompletos ou incorretos.</li>
                  <li>Solicitar anonimização, bloqueio ou eliminação.</li>
                  <li>Portar dados a outro fornecedor.</li>
                  <li>Revogar consentimento a qualquer tempo.</li>
                </ul>
                <p className="mt-4">Envie solicitações para <a href="mailto:privacidade@dantasembalagens.com.br" className="text-orange-600 hover:underline">privacidade@dantasembalagens.com.br</a>.</p>
              </section>

              {/* 6 Segurança */}
              <section id="seguranca" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-semibold text-slate-800 border-b pb-3 mb-4">6. Segurança da Informação</h2>
                <p>Adotamos medidas técnicas e organizacionais como criptografia (HTTPS), controle de acesso e monitoramento para proteger os dados.</p>
              </section>

              {/* 7 Links */}
              <section id="links" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-semibold text-slate-800 border-b pb-3 mb-4">7. Links para Sites de Terceiros</h2>
                <p>Links externos podem estar presentes. Não nos responsabilizamos pelas práticas de privacidade desses sites.</p>
              </section>

              {/* 8 Alterações */}
              <section id="alteracoes" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-semibold text-slate-800 border-b pb-3 mb-4">8. Alterações a esta Política</h2>
                <p>Atualizações poderão ocorrer e a data de revisão será ajustada no topo desta página.</p>
              </section>

              {/* 9 Contato */}
              <section id="contato" className="mb-4 scroll-mt-28">
                <h2 className="text-2xl font-semibold text-slate-800 border-b pb-3 mb-4">9. Contato</h2>
                <p>Fale conosco para dúvidas ou solicitações relacionadas a privacidade:</p>
                <div className="mt-2 text-slate-700 leading-relaxed">
                  <p><strong>Dantas Embalagens</strong></p>
                  <p>Email: <a href="mailto:privacidade@dantasembalagens.com.br" className="text-orange-600 hover:underline">privacidade@dantasembalagens.com.br</a></p>
                  <p>Endereço: <span className="text-slate-500">[Inserir Endereço Completo da Empresa Aqui]</span></p>
                </div>
              </section>

              <div className="mt-10 border-t pt-6 text-xs text-slate-500 italic">
                <strong>Aviso Legal:</strong> Este documento não constitui aconselhamento jurídico. Consulte um profissional para garantir conformidade integral com a LGPD.
              </div>
            </article>
          </main>

          {/* Navegação lateral (Sumário) em telas grandes */}
          <aside className="hidden lg:block self-start sticky top-32">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-orange-100 p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-700 mb-3">Nesta página</h3>
              <ul className="space-y-2 text-sm">
                {sections.map(s => {
                  const isActive = active === s.id;
                  return (
                    <li key={s.id} className="relative">
                      <a
                        href={`#${s.id}`}
                        aria-current={isActive ? 'true' : undefined}
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById(s.id);
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            window.history.replaceState(null, '', `#${s.id}`);
                          }
                        }}
                        className={`group relative pl-5 pr-3 py-1.5 inline-flex items-center gap-2 cursor-pointer text-[11px] font-medium tracking-wide transition-colors duration-300 ${
                          isActive ? 'text-orange-600' : 'text-slate-500 hover:text-orange-600'
                        }`}
                      >
                        {/* Barrinha animada */}
                        <span
                          aria-hidden="true"
                          className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-full origin-top transition-[transform,background,opacity] duration-500 ease-[cubic-bezier(.65,.05,.36,1)] ${
                            isActive
                              ? 'h-5 scale-y-100 opacity-100 bg-gradient-to-b from-orange-500 to-orange-600 shadow-[0_0_0_1px_rgba(255,146,43,0.25),0_4px_8px_-2px_rgba(255,140,0,0.35)]'
                              : 'h-5 scale-y-40 opacity-40 bg-slate-300/60 group-hover:scale-y-60 group-hover:opacity-70'
                          }`}
                        />
                        {/* Glow de fundo suave */}
                        <span
                          aria-hidden="true"
                          className={`absolute inset-y-0 left-0 right-0 rounded-lg -z-10 transition-opacity duration-500 ease-out bg-gradient-to-r from-orange-100/70 via-orange-50/20 to-transparent ${
                            isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'
                          }`}
                        />
                        {s.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
