export const SITE_BASE_URL = 'https://www.dantasembalagens.com.br'; // ajustar quando confirmar domínio
export const DEFAULT_OG_IMAGE = '/og-image.jpg'; // 1200x630 recomendado

// Dados do produto principal (centralizados para reutilização em JSON-LD e futuras páginas)
export const productData = {
  slug: 'sacos-papel-20cm',
  name: 'Sacos de Papel Multiuso 20cm',
  description: 'Sacos de papel 20cm resistentes, ideais para porções, lanches e pipoca. Direto da fábrica em Atibaia-SP.',
  sku: 'SP20-1000',
  brand: 'Dantas Embalagens',
  price: '49.90',
  priceCurrency: 'BRL',
  priceValidUntil: '2026-01-31', // revisar periodicamente
  availability: 'https://schema.org/InStock',
  condition: 'https://schema.org/NewCondition',
  ratingValue: '4.9',
  reviewCount: 127,
  images: [
    '/src/assets/images/hero-bag.webp',
    '/src/assets/images/product-bag.webp',
    '/src/assets/images/saquinho-cinemas.png'
  ]
};

// Configuração central de SEO por rota
export const seoMap = {
  '/': {
    title: 'Sacos de Papel Direto da Fábrica em Atibaia | Dantas Embalagens',
    description: 'Fabricante de sacos de papel para lanches, pipoca e food service. Qualidade de fábrica em Atibaia-SP com atendimento rápido e preço competitivo.',
  },
  '/sobre': {
    title: 'Sobre a Dantas Embalagens | Qualidade em Sacos de Papel',
    description: 'Conheça a história, missão e compromisso da Dantas Embalagens na produção de sacos de papel e embalagens para múltiplos segmentos.'
  },
  '/produtos': {
    title: 'Catálogo de Sacos de Papel | Dantas Embalagens',
    description: 'Veja nosso catálogo inicial de sacos de papel multiuso. Resistentes, práticos e ideais para lanches, pipoca e porções.'
  },
  '/orcamento': {
    title: 'Solicitar Orçamento de Sacos de Papel | Dantas Embalagens',
    description: 'Peça um orçamento rápido de sacos de papel direto da fábrica. Atendimento ágil e personalizado.'
  },
  '/privacidade': {
    title: 'Política de Privacidade | Dantas Embalagens',
    description: 'Entenda como tratamos e protegemos seus dados ao utilizar nossos serviços e formularios.'
  },
  '/termos': {
    title: 'Termos de Uso | Dantas Embalagens',
    description: 'Veja os termos e condições de uso do site e serviços da Dantas Embalagens.'
  },
  '/obrigado': {
    title: 'Obrigado pelo Contato | Dantas Embalagens',
    description: 'Recebemos sua solicitação. Em breve retornaremos com seu orçamento ou resposta.'
  }
};

export function buildProductSeo(slug) {
  if (slug === 'sacos-papel-20cm') {
    return {
      title: 'Sacos de Papel 20cm para Lanches e Pipoca | Dantas Embalagens',
      description: 'Sacos de papel 20cm resistentes, ideais para porções, lanches e pipoca. Direto da fábrica em Atibaia-SP.'
    };
  }
  return {
    title: 'Produto | Dantas Embalagens',
    description: 'Detalhes do produto selecionado da Dantas Embalagens.'
  };
}
