/**
 * Canonical contact details — single source of truth.
 * Import into Footer, Home CTA band, ProductDetail, etc.
 */
export const CONTACT = {
  phone: {
    display: '+63 2 7906 0520',
    href: 'tel:+6327906520',
  },
  email: {
    display: 'info@tsmc.ph',
    href: 'mailto:info@tsmc.ph',
  },
  address: {
    lines: [
      'TSMC GF KAVI Building,',
      '193 E. Rodriguez Jr. Ave.',
      'Bagumbayan Libis,',
      'Quezon City 1110 Philippines',
    ],
    mapsHref:
      'https://maps.google.com/?q=TSMC+GF+KAVI+Building,+193+E.+Rodriguez+Jr.+Ave.+Bagumbayan+Libis,+Quezon+City+1110+Philippines',
  },
} as const;
