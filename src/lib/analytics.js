// Analytics util simples: envia para dataLayer (GA4) ou console.
export function track(event, params = {}) {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params, timestamp: Date.now() });
  } catch (e) {
    // ignore
  }
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log('[track]', event, params);
  }
}

// Inicializa GA4 se VITE_GA_ID definido
export function initAnalytics() {
  const gaId = import.meta.env.VITE_GA_ID;
  if (!gaId || document.getElementById('ga-script')) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  script.id = 'ga-script';
  document.head.appendChild(script);
  const inline = document.createElement('script');
  inline.text = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${gaId}');`;
  document.head.appendChild(inline);
}
