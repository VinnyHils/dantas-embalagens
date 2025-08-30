import React, { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { track } from '../lib/analytics';

// Barra fixa de CTA para mobile quando usuário rola até seção de produto
export default function MobileProductCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // Exibe após usuário descer 400px para não ser intrusivo
      setShow(y > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Adiciona classe no body para permitir esconder botão flutuante global em mobile
  useEffect(() => {
    if (show) {
      document.body.classList.add('has-mobile-product-cta');
    } else {
      document.body.classList.remove('has-mobile-product-cta');
    }
    return () => document.body.classList.remove('has-mobile-product-cta');
  }, [show]);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 md:hidden pointer-events-none transition-transform duration-500 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="mx-auto max-w-md px-3 pb-3">
        <div className="backdrop-blur-md bg-white/90 border border-orange-200 shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3 pointer-events-auto">
          <div className="flex flex-col leading-tight flex-grow">
            <span className="text-[11px] tracking-wide font-semibold text-orange-600 uppercase">Saco 20cm</span>
            <span className="text-base font-bold text-slate-800">R$ 49,90 <span className="text-xs font-normal text-slate-500">/ milheiro</span></span>
          </div>
          <button
            onClick={() => {
              track('sticky_cta_click', { cta: 'mercado_livre' });
              const btn = document.querySelector('[data-cta=mercado_livre]');
              btn?.click();
            }}
            className="h-11 px-4 rounded-xl bg-gradient-to-r from-orange-600 to-orange-700 text-white text-sm font-semibold flex items-center gap-2 shadow hover:from-orange-700 hover:to-orange-800 active:scale-95 transition-all"
          >
            <ShoppingCart className="w-4 h-4" /> Comprar
          </button>
          <a
            href="https://wa.me/5599999999999?text=Ol%C3%A1%20quero%20um%20or%C3%A7amento%20dos%20sacos%20de%20papel"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('sticky_cta_click', { cta: 'whatsapp' })}
            className="h-11 w-11 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow text-white hover:from-green-600 hover:to-green-700 active:scale-95 transition-all"
            aria-label="Chamar no WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5" role="img" aria-hidden="true"><path fill="#E6F9EE" d="M16.04 3.2c-7.09 0-12.84 5.65-12.84 12.61 0 2.22.6 4.31 1.66 6.11L3 29l7.36-1.93a13.1 13.1 0 005.68 1.32c7.09 0 12.84-5.65 12.84-12.61S23.13 3.2 16.04 3.2z"/><path fill="#25D366" d="M16.04 5.2c5.99 0 10.84 4.77 10.84 10.61 0 5.85-4.85 10.61-10.84 10.61-1.9 0-3.73-.49-5.36-1.42l-.38-.22-4.37 1.14 1.18-4.31-.25-.39a10.37 10.37 0 01-1.72-5.41c0-5.84 4.85-10.61 10.84-10.61z"/><path fill="#FFF" d="M11.59 10.84c-.25-.56-.52-.57-.76-.58l-.65-.01c-.23 0-.6.09-.91.43-.31.34-1.19 1.16-1.19 2.83 0 1.66 1.22 3.27 1.39 3.49.17.23 2.35 3.62 5.82 4.94 2.88 1.15 3.46.92 4.08.86.62-.06 2.01-.82 2.29-1.61.28-.79.28-1.48.2-1.61-.08-.13-.28-.21-.59-.37-.31-.16-1.83-.9-2.12-1-.28-.11-.49-.16-.69.16-.2.32-.8 1-.98 1.2-.18.2-.36.22-.66.08-.3-.14-1.26-.46-2.4-1.47-.89-.8-1.48-1.78-1.65-2.08-.17-.3-.02-.46.13-.61.14-.14.31-.36.45-.54.15-.18.2-.31.29-.5.09-.2.05-.37-.01-.51-.06-.14-.57-1.38-.78-1.89z"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
