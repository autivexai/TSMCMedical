/**
 * useSEO – lightweight hook to set per-route <title> and meta description.
 *
 * Usage:
 *   useSEO({ title: 'Products | TSMC Medical Supply', description: '...' });
 *
 * Falls back gracefully if called on the server or before document is ready.
 */
import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
}

const SITE_SUFFIX = 'TSMC Medical Supply';

export function useSEO({ title, description }: SEOProps): void {
  useEffect(() => {
    // ── Title ──────────────────────────────────────────────────────────
    const fullTitle = title.includes(SITE_SUFFIX) ? title : `${title} | ${SITE_SUFFIX}`;
    document.title = fullTitle;

    // ── Meta description ───────────────────────────────────────────────
    if (description) {
      let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
    }

    // Restore to site default on unmount
    return () => {
      document.title = `${SITE_SUFFIX} — Medical Equipment & Supplies`;
    };
  }, [title, description]);
}
