export const SITE_BASE_URL = 'https://www.dantasembalagens.com.br'; // ajustar quando confirmar domínio
export const DEFAULT_OG_IMAGE = '/og-image.jpg'; // 1200x630 recomendado

// Importa catálogo central (evita duplicação de dados de produto)
import { products, getProductBySlug } from '../data/products';

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

/**
 * Gera título/descrição dinâmicos para páginas de produto a partir do catálogo central.
 * Fallback genérico se slug não encontrado.
 */
export function buildProductSeo(slug) {
  const p = getProductBySlug(slug);
  if (p) {
    // Título preferencial vindo de p.seo.title senão gera padrão
    return {
      title: p.seo?.title || `${p.nome} | Dantas Embalagens`,
      description: p.seo?.description || p.descricao?.slice(0, 155)
    };
  }
  return {
    title: 'Produto | Dantas Embalagens',
    description: 'Detalhes do produto selecionado da Dantas Embalagens.'
  };
}

/**
 * Retorna dados brutos do produto para JSON-LD.
 */
export function getProductSchemaData(slug) {
  const p = getProductBySlug(slug);
  if (!p) return null;
  return p;
}

// Export utilitário para possível uso futuro (lista de slugs)
export const productSlugs = products.map(p => p.slug);
