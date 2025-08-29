import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { seoMap, SITE_BASE_URL, DEFAULT_OG_IMAGE, buildProductSeo, productData } from '../lib/seoConfig';

// Componente que injeta metas básicas. Para OG/Twitter usa mesma base.
export default function Seo() {
  const location = useLocation();
  const params = useParams();

  const path = location.pathname;
  let meta = seoMap[path];

  // Produto dinâmico
  if (!meta && path.startsWith('/produto/') && params.slug) {
    meta = buildProductSeo(params.slug);
  }

  // Fallback home
  if (!meta) meta = seoMap['/'];

  useEffect(() => {
    const { title, description } = meta;
    if (title) document.title = title;

    const ensureTag = (selector, attrs) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        Object.keys(attrs).forEach(k => {
          if (k !== 'content' && k !== 'property' && k !== 'name') return;
        });
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      return el;
    };

    // Description
    if (description) ensureTag('meta[name="description"]', { name: 'description', content: description });

    // Canonical
    let linkCanonical = document.head.querySelector('link[rel="canonical"]');
    const canonicalUrl = SITE_BASE_URL.replace(/\/$/, '') + path;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // Robots (noindex somente para 404)
    const isNotFound = path === '/404' || path === '/nao-encontrado' || (path !== '/' && !seoMap[path] && !path.startsWith('/produto/'));
    let robotsTag = document.head.querySelector('meta[name="robots"]');
    if (!robotsTag) {
      robotsTag = document.createElement('meta');
      robotsTag.setAttribute('name', 'robots');
      document.head.appendChild(robotsTag);
    }
    robotsTag.setAttribute('content', isNotFound ? 'noindex, nofollow' : 'index, follow');

    // OG basics
    const ogPairs = {
      'og:title': title,
      'og:description': description,
      'og:type': path.startsWith('/produto/') ? 'product' : 'website',
      'og:url': canonicalUrl,
      'og:image': DEFAULT_OG_IMAGE
    };
    Object.entries(ogPairs).forEach(([property, content]) => {
      let tag = document.head.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Twitter
    const twitterPairs = {
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': DEFAULT_OG_IMAGE
    };
    Object.entries(twitterPairs).forEach(([name, content]) => {
      let tag = document.head.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // JSON-LD
    const removeOld = () => {
      document.querySelectorAll('script[data-seo-jsonld="true"]').forEach(n => n.remove());
    };
    removeOld();

    const pushJsonLd = (data) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoJsonld = 'true';
      script.text = JSON.stringify(data);
      document.head.appendChild(script);
    };

    // Organization
    pushJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Dantas Embalagens',
      url: SITE_BASE_URL,
      logo: SITE_BASE_URL + '/favicon.ico',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Atibaia',
        addressRegion: 'SP',
        addressCountry: 'BR'
      },
      contactPoint: [{
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: '+55-11-4411-2233'
      }]
    });

    // WebSite + SearchAction (placeholder)
    pushJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: SITE_BASE_URL,
      name: 'Dantas Embalagens',
      potentialAction: {
        '@type': 'SearchAction',
        target: SITE_BASE_URL + '/?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    });

    // Product (se rota de produto)
    if (path.startsWith('/produto/') && params.slug) {
      const p = productData;
      pushJsonLd({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: p.name,
        description: p.description,
        sku: p.sku,
        brand: { '@type': 'Brand', name: p.brand },
        image: p.images.map(img => img.startsWith('http') ? img : SITE_BASE_URL + img.replace(/^\/src/, '')), // ajusta path build
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: p.ratingValue,
          reviewCount: p.reviewCount
        },
        offers: {
          '@type': 'Offer',
          availability: p.availability,
          priceCurrency: p.priceCurrency,
          price: p.price,
          priceValidUntil: p.priceValidUntil,
          url: SITE_BASE_URL + '/produto/' + p.slug,
          itemCondition: p.condition
        }
      });
    }

  }, [meta, path]);

  return null;
}
