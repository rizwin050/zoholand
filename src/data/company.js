export const certifications = [
  { name: 'FSC', detail: 'Forest Stewardship Council certified wood sourcing.' },
  { name: 'IS 3087:2005', detail: 'Bureau of Indian Standards: particle boards for general purpose.' },
  { name: 'IS 12823:2015', detail: 'Bureau of Indian Standards: pre-laminated particle boards.' },
  { name: 'ISO 9001:2015', detail: 'Quality management system.' },
  { name: 'ISO 14001:2015', detail: 'Environmental management system.' },
  { name: 'ISO 45001:2018', detail: 'Occupational health and safety management system.' },
  { name: '5S', detail: 'Kaizen workplace organisation and standardisation.' },
];

export const capacity = [
  { value: 150, suffix: ' CBM', label: 'mother board capacity, per day' },
  { value: 7000, suffix: '+', label: 'laminated boards, per day' },
  { value: 270, suffix: '+', label: 'pre-lam decors in the library' },
  { value: 200, suffix: '+', label: 'people working at the factory' },
];

// General description of how particle board is made. Review against the actual plant process.
export const processSteps = [
  { title: 'Wood preparation', text: 'Wood is chipped and screened into the particle sizes the core and the surface layers need.' },
  { title: 'Drying and blending', text: 'Particles are dried to a controlled moisture level, then blended with resin.' },
  { title: 'Mat forming and pressing', text: 'The blended furnish is formed into a mat and pressed under heat into a mother board.' },
  { title: 'Sizing and sanding', text: 'Mother boards are cooled, trimmed to size and sanded to a flat, uniform surface.' },
  { title: 'Lamination', text: 'Decor papers are pressed onto the board in glossy, matte or suede finishes, with optional textures.' },
  { title: 'Testing and dispatch', text: 'Boards are checked against IS 3087 and IS 12823 parameters before they are stacked and sent out.' },
];

export const sisterConcerns = ['Nailah', 'Gee Dee'];
