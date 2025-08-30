import React, { useEffect, useState } from 'react';
import { SITE_BASE_URL } from '../lib/seoConfig';

// Página de Termos de Uso com layout alinhado à Política de Privacidade
export default function TermsPage() {
  const sections = [
    { id: 'aceitacao', label: '1. Aceitação' },
    { id: 'uso', label: '2. Uso do Site' },
    { id: 'propriedade', label: '3. Propriedade Intelectual' },
    { id: 'orcamentos', label: '4. Orçamentos' },
    { id: 'limitacao', label: '5. Limitação' },
    { id: 'links', label: '6. Links Terceiros' },
    { id: 'alteracoes', label: '7. Alterações' },
    { id: 'legislacao', label: '8. Legislação' },
    { id: 'contato', label: '9. Contato' }
  ];

  const [active, setActive] = useState(sections[0].id);

  // Scrollspy estável via cálculo de posição
  useEffect(() => {
    let ticking = false;
    const headerOffset = 140;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        let current = sections[0].id;
        for (const s of sections) {
          const el = document.getElementById(s.id);
          if (!el) continue;
          const top = el.getBoundingClientRect().top;
          if (top - headerOffset <= 0) current = s.id; else break;
        }
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

  const termsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TermsOfService',
    name: 'Termos de Uso - Dantas Embalagens',
    url: `${SITE_BASE_URL}/termos`,
    inLanguage: 'pt-BR',
    dateModified: '2025-08-29',
    publisher: {
      '@type': 'Organization',
      name: 'Dantas Embalagens',
      url: SITE_BASE_URL
    },
    hasPart: [
      { '@type': 'WebPageElement', name: 'Aceitação dos Termos', url: `${SITE_BASE_URL}/termos#aceitacao` },
      { '@type': 'WebPageElement', name: 'Uso do Site', url: `${SITE_BASE_URL}/termos#uso` },
      { '@type': 'WebPageElement', name: 'Propriedade Intelectual', url: `${SITE_BASE_URL}/termos#propriedade` },
      { '@type': 'WebPageElement', name: 'Orçamentos e Informações de Produtos', url: `${SITE_BASE_URL}/termos#orcamentos` },
      { '@type': 'WebPageElement', name: 'Limitação de Responsabilidade', url: `${SITE_BASE_URL}/termos#limitacao` },
      { '@type': 'WebPageElement', name: 'Links para Sites de Terceiros', url: `${SITE_BASE_URL}/termos#links` },
      { '@type': 'WebPageElement', name: 'Alterações nos Termos de Uso', url: `${SITE_BASE_URL}/termos#alteracoes` },
      { '@type': 'WebPageElement', name: 'Legislação Aplicável', url: `${SITE_BASE_URL}/termos#legislacao` },
      { '@type': 'WebPageElement', name: 'Contato', url: `${SITE_BASE_URL}/termos#contato` }
    ]
  };

  return (
    <div className="relative pt-32 pb-24 bg-gradient-to-br from-orange-50/50 via-white to-white min-h-screen">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(circle_at_40%_30%,black,transparent_70%)]" />
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-[1fr_260px] gap-12">
          <main className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8 sm:p-12 ring-1 ring-orange-100">
            <header className="border-b pb-6 mb-10">
              <h1 className="text-4xl font-bold text-slate-800 tracking-tight">Termos de Uso</h1>
              <p className="text-lg text-slate-600 mt-2 font-medium">Dantas Embalagens</p>
              <p className="text-xs text-slate-500 mt-2">Última atualização: <time dateTime="2025-08-29">29 de agosto de 2025</time></p>
              <script
                type="application/ld+json"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: JSON.stringify(termsJsonLd) }}
              />
            </header>

            <article className="prose prose-slate max-w-none">
              <p className="mb-14">Bem-vindo ao site da <strong>Dantas Embalagens</strong>! Ao acessar e utilizar o nosso site <span className="font-medium text-orange-600">dantasembalagens.com.br</span>, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Leia com atenção. Se você não concordar com estes termos, não deverá utilizar nosso site.</p>

              {/* 1 Aceitação */}
              <section id="aceitacao" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-semibold text-slate-800 border-b pb-3 mb-4">1. Aceitação dos Termos</h2>
                <p>Ao utilizar este site, você confirma que leu, entendeu e concorda em estar legalmente vinculado a estes Termos de Uso e à nossa Política de Privacidade. Estes termos aplicam-se a todos os visitantes, usuários e outros que acessam ou usam o serviço.</p>
              </section>

              {/* 2 Uso do Site */}
              <section id="uso" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-semibold text-slate-800 border-b pb-3 mb-4">2. Uso do Site</h2>
                <p>Você concorda em usar o site apenas para fins lícitos. É proibido:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Usar o site de forma que possa danificar, desabilitar ou sobrecarregar serviços ou redes.</li>
                  <li>Tentar obter acesso não autorizado a partes do site, contas, sistemas ou redes.</li>
                  <li>Publicar ou transmitir material difamatório, ofensivo, obsceno, ameaçador ou que infrinja direitos de terceiros.</li>
                  <li>Utilizar conteúdo do site para fins comerciais sem consentimento prévio e escrito.</li>
                </ul>
              </section>

              {/* 3 Propriedade Intelectual */}
              <section id="propriedade" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-semibold text-slate-800 border-b pb-3 mb-4">3. Propriedade Intelectual</h2>
                <p>Todo o conteúdo do site (textos, gráficos, logotipos, ícones, imagens, áudios, downloads e compilações de dados) é propriedade da Dantas Embalagens ou de seus fornecedores, protegido por leis de direitos autorais brasileiras e internacionais.</p>
                <p>A marca "Dantas Embalagens" e seu logotipo são marcas registradas e não podem ser utilizadas de forma que cause confusão ou deprecie a marca.</p>
              </section>

              {/* 4 Orçamentos */}
              <section id="orcamentos" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-semibold text-slate-800 border-b pb-3 mb-4">4. Orçamentos e Informações de Produtos</h2>
                <p>As informações sobre produtos e serviços são fornecidas para fins informativos. Buscamos precisão e atualização, mas não garantimos exatidão ou completude.</p>
                <p>Solicitações de orçamento não constituem contrato até emissão de proposta formal e aceitação.</p>
              </section>

              {/* 5 Limitação */}
              <section id="limitacao" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-semibold text-slate-800 border-b pb-3 mb-4">5. Limitação de Responsabilidade</h2>
                <p>Em nenhuma circunstância a Dantas Embalagens, seus diretores, funcionários ou afiliados serão responsáveis por danos diretos, indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou incapacidade de uso do site.</p>
                <p>O site é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo, expressas ou implícitas.</p>
              </section>

              {/* 6 Links */}
              <section id="links" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-semibold text-slate-800 border-b pb-3 mb-4">6. Links para Sites de Terceiros</h2>
                <p>Podemos conter links para sites de terceiros não operados por nós. Não nos responsabilizamos por conteúdo ou práticas de privacidade desses sites.</p>
              </section>

              {/* 7 Alterações */}
              <section id="alteracoes" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-semibold text-slate-800 border-b pb-3 mb-4">7. Alterações nos Termos de Uso</h2>
                <p>Podemos modificar estes Termos a qualquer momento. A versão vigente estará sempre disponível nesta página. Revise periodicamente.</p>
              </section>

              {/* 8 Legislação */}
              <section id="legislacao" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-semibold text-slate-800 border-b pb-3 mb-4">8. Legislação Aplicável</h2>
                <p>Estes Termos são regidos pelas leis da República Federativa do Brasil. Você se submete à jurisdição dos tribunais do estado de <span className="text-slate-500">[Inserir Estado da Sede]</span>.</p>
              </section>

              {/* 9 Contato */}
              <section id="contato" className="mb-4 scroll-mt-28">
                <h2 className="text-2xl font-semibold text-slate-800 border-b pb-3 mb-4">9. Contato</h2>
                <p>Dúvidas sobre estes Termos:</p>
                <div className="mt-2 text-slate-700 leading-relaxed">
                  <p><strong>Dantas Embalagens</strong></p>
                  <p>Email: <a href="mailto:contato@dantasembalagens.com.br" className="text-orange-600 hover:underline">contato@dantasembalagens.com.br</a></p>
                  <p>Endereço: <span className="text-slate-500">[Inserir Endereço Completo da Empresa Aqui]</span></p>
                </div>
              </section>

              <div className="mt-10 border-t pt-6 text-xs text-slate-500 italic">
                <strong>Aviso Legal:</strong> Este é um modelo de Termos de Uso e não constitui aconselhamento jurídico. Consulte profissional especializado para assegurar conformidade.
              </div>
            </article>
          </main>

          {/* Navegação lateral */}
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
                        <span
                          aria-hidden="true"
                          className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-full origin-top transition-[transform,background,opacity] duration-500 ease-[cubic-bezier(.65,.05,.36,1)] ${
                            isActive
                              ? 'h-5 scale-y-100 opacity-100 bg-gradient-to-b from-orange-500 to-orange-600 shadow-[0_0_0_1px_rgba(255,146,43,0.25),0_4px_8px_-2px_rgba(255,140,0,0.35)]'
                              : 'h-5 scale-y-40 opacity-40 bg-slate-300/60 group-hover:scale-y-60 group-hover:opacity-70'
                          }`}
                        />
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
