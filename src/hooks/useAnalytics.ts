import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const GA_ID = 'G-2795FJPPW5';

/** Fire a page_view event on every route change */
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
      page_title: document.title,
      send_to: GA_ID,
    });
  }, [location]);
};

/** Track a custom GA4 event */
export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>
) => {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, { ...params, send_to: GA_ID });
};

/** Track a conversion (e.g. form submit) */
export const trackConversion = (conversionLabel: string) => {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', 'conversion', {
    send_to: `${GA_ID}/${conversionLabel}`,
  });
};

/** Track consultation booking click */
export const trackBookConsultation = (source: string) => {
  trackEvent('book_consultation_click', { source, event_category: 'Lead Generation' });
};

/** Track WhatsApp click */
export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', { event_category: 'Contact', event_label: 'Floating Button' });
};

/** Track theme view */
export const trackThemeView = (themeName: string) => {
  trackEvent('theme_view', { theme_name: themeName, event_category: 'Engagement' });
};
