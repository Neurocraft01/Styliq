import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  keywords?: string;
  schema?: object | object[];
}

const BASE_URL = 'https://www.styliqinteriors.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;
const SITE_NAME = 'STYLIQ INTERIORS';

function setMeta(selector: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    const attr = selector.startsWith('meta[property')
      ? 'property'
      : 'name';
    const value = selector.match(/["']([^"']+)["']/)?.[1] ?? '';
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

const SEO = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noindex = false,
  keywords,
  schema,
}: SEOProps) => {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Primary meta
    setMeta('meta[name="description"]', description);
    setMeta('meta[name="robots"]', noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large');
    if (keywords) setMeta('meta[name="keywords"]', keywords);

    // Canonical
    if (canonicalUrl) setLink('canonical', canonicalUrl);

    // Open Graph
    setMeta('meta[property="og:type"]', ogType);
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:image"]', ogImage);
    setMeta('meta[property="og:image:width"]', '1200');
    setMeta('meta[property="og:image:height"]', '630');
    setMeta('meta[property="og:image:alt"]', fullTitle);
    if (canonicalUrl) setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[property="og:site_name"]', SITE_NAME);
    setMeta('meta[property="og:locale"]', 'en_IN');

    // Twitter Card
    setMeta('meta[name="twitter:card"]', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', ogImage);
    setMeta('meta[name="twitter:image:alt"]', fullTitle);
    setMeta('meta[name="twitter:site"]', '@styliqinteriors');

    // JSON-LD
    const schemaId = 'page-jsonld';
    let scriptEl = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = schemaId;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(Array.isArray(schema) ? schema : [schema]);
    } else if (scriptEl) {
      scriptEl.remove();
    }
  }, [fullTitle, description, canonicalUrl, ogImage, ogType, noindex, keywords, schema]);

  return null;
};

export default SEO;
