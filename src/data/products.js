import heroBag from '../assets/images/hero-bag.webp';
import productBag from '../assets/images/product-bag.webp';
import galleryBags from '../assets/images/gallery-bags.webp';
import elegantBag from '../assets/images/elegant-bag.webp';
import sacoCinemas from '../assets/images/saquinho-cinemas.png';
import sacoFesta from '../assets/images/saco-festa.webp';

// Catálogo central de produtos
export const products = [
  {
    id: 'saco-20cm',
    slug: 'sacos-papel-20cm',
  nome: 'Saco de Papel Mono Viagem 1 40 gramas (pacote 500 unidades)',
  resumo: 'Saco kraft mono viagem 40g – pacote com 500 unidades, ideal para alimentos, festas e comércio.',
  descricao: 'Nosso saco de papel mono viagem de 40 gramas (pacote com 500 unidades) combina resistência, apresentação profissional e versatilidade para diferentes nichos: food service, eventos, varejo e mais.',
    price: 49.90,
    currency: 'BRL',
    unit: 'milheiro',
    minOrder: 1000,
    stock: 'in_stock',
    rating: { value: 4.9, count: 127 },
    freteGratisAPartir: 200,
    images: [
  { src: heroBag, alt: 'Saco de papel mono viagem 1 40 gramas pacote 500 unidades' },
      { src: sacoFesta, alt: 'Saco de papel 20cm tema festa' },
      { src: galleryBags, alt: 'Aplicações diversas do saco 20cm' },
      { src: elegantBag, alt: 'Saco de papel 20cm em uso elegante' },
      { src: sacoCinemas, alt: 'Saco 20cm usado em cinema' }
    ],
    features: [
      { icon: 'Zap', title: 'Super Versátil', description: 'Perfeito para pipoca, churros, batata frita, doces, lanches e lembrancinhas.' },
      { icon: 'Package', title: 'Tamanho Ideal', description: '20cm de altura para porções generosas e apresentação profissional.' },
      { icon: 'Shield', title: 'Alta Resistência', description: 'Material resistente que suporta alimentos oleosos e mantém a forma.' }
    ],
    specifications: [
      { label: 'Altura', value: '20cm' },
      { label: 'Material', value: 'Papel Kraft' },
      { label: 'Cor', value: 'Natural' },
  { label: 'Quantidade', value: '500 unidades (pacote)' },
      { label: 'Peso', value: '80g/m²' },
      { label: 'Formato', value: 'Fundo reto selado' }
    ],
    benefits: [
      'Material de primeira qualidade',
      'Resistente a gordura',
      'Ideal para alimentos',
      'Fácil armazenamento',
      'Preço de fábrica',
      'Entrega rápida'
    ],
    seo: {
      title: 'Saco de Papel Mono Viagem 40g (500 unid) | Dantas Embalagens',
      description: 'Compre saco de papel mono viagem 40 gramas pacote com 500 unidades direto da fábrica. Resistência, qualidade e ótimo custo para seu negócio.',
      ogImage: heroBag
    },
    schema: { sku: 'SACO-20CM', gtin13: '000000000020' }
  },
  {
    id: 'saco-25cm',
    slug: 'sacos-papel-25cm',
    nome: 'Saco de Papel Multiuso 25cm',
    resumo: 'Versão 25cm para porções maiores e aplicações especiais.',
    descricao: 'A versão 25cm oferece maior capacidade mantendo a resistência e acabamento profissional.',
    price: 59.90,
    currency: 'BRL',
    unit: 'milheiro',
    minOrder: 1000,
    stock: 'preorder',
    rating: { value: 4.8, count: 54 },
    freteGratisAPartir: 250,
    images: [
      { src: productBag, alt: 'Saco de papel 25cm' },
      { src: galleryBags, alt: 'Aplicações do saco 25cm' }
    ],
    features: [
      { icon: 'Package', title: 'Maior Capacidade', description: 'Ideal para produtos volumosos.' },
      { icon: 'Star', title: 'Acabamento Superior', description: 'Mesma qualidade da linha 20cm.' }
    ],
    specifications: [
      { label: 'Altura', value: '25cm' },
      { label: 'Material', value: 'Papel Kraft' },
      { label: 'Cor', value: 'Natural' },
  { label: 'Quantidade', value: '500 unidades' },
      { label: 'Peso', value: '80g/m²' }
    ],
    benefits: [
      'Mais espaço interno',
      'Versátil para embalagens maiores',
      'Mantém custo competitivo'
    ],
    seo: {
      title: 'Saco de Papel Multiuso 25cm | Dantas Embalagens',
      description: 'Saco de papel kraft 25cm para maiores porções. Ideal para food service e varejo.',
      ogImage: productBag
    },
    schema: { sku: 'SACO-25CM', gtin13: '000000000025' }
  }
];

export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug);
}
