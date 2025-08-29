import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { seoMap, SITE_BASE_URL, DEFAULT_OG_IMAGE, buildProductSeo } from '../lib/seoConfig';

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

  }, [meta, path]);

  return null;
}
