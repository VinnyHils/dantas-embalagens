import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { track } from '../lib/analytics';

// Botão flutuante para voltar ao topo (exibido em mobile)
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;
  return (
    <button
      aria-label="Voltar ao topo"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        track('back_to_top_click');
      }}
      className="fixed bottom-24 left-4 z-40 md:hidden group transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60"
    >
      <div className="w-12 h-12 rounded-full bg-white shadow-lg ring-1 ring-slate-200 flex items-center justify-center text-orange-600 group-hover:scale-110 group-active:scale-95 transition-all">
        <ArrowUp className="w-6 h-6" />
      </div>
    </button>
  );
}
