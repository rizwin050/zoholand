/**
 * Single source of truth for company details.
 * Update phone numbers, email or address here and every page follows.
 */
const address = {
  lines: [
    '#XIX/4, A12, Kareyeli Vallam Road',
    'Perumbavoor Post Office',
    'Perumbavoor – 683542',
    'Ernakulam Dist., Kerala, India',
  ],
  mapQuery: 'Greenland Particle Boards Pvt Ltd, Kareyeli Vallam Road, Perumbavoor, Kerala 683542',
};

const site = {
  name: 'Zohaland',
  legalName: 'Greenland Particle Boards Pvt. Ltd.',
  tagline: 'Create, experiment and adapt to a new world',
  email: 'greenlandparticleboard@gmail.com',
  phones: [
    { label: '+91 96332 78063', href: 'tel:+919633278063' },
    { label: '+91 99959 82190', href: 'tel:+919995982190' },
  ],
  whatsapp: [
    { label: '+91 92880 07734', href: 'https://wa.me/919288007734' },
    { label: '+91 81379 71555', href: 'https://wa.me/918137971555' },
  ],
  address,
  hours: [
    { days: 'Monday to Saturday', time: '9:00 AM – 5:00 PM' },
    { days: 'Sunday', time: 'Closed' },
  ],
  map: {
    embedUrl: `https://www.google.com/maps?q=${encodeURIComponent(address.mapQuery)}&output=embed`,
    linkUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.mapQuery)}`,
  },
  // Enquiry email delivery via EmailJS. Missing values => mailto fallback. See README.
  web3forms: {
     accessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '',
   },
  commercialProductionSince: 2015,
  nav: [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/manufacturing', label: 'Manufacturing' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ],
};

export default site;
