import stack from '../assets/images/boards-stack.jpg';
import edgeOne from '../assets/images/boards-edge-1.jpg';
import edgeTwo from '../assets/images/boards-edge-2.jpg';

export const productCategories = [
  {
    id: 'particle-boards',
    name: 'Particle Boards',
    summary: 'Plain and pre-laminated boards for wardrobes, kitchens, office furniture and partitions.',
    grades: ['E1', 'E2'],
    image: stack,
    imageAlt: 'Stack of three plain particle boards of different thickness',
    sizes: ['9 mm', '12 mm', '15 mm', '17 mm', '25 mm'].map((t) => ({ thickness: t, size: '8 × 4 ft' })),
  },
  {
    id: 'premium-plus',
    name: 'Premium Plus Boards',
    summary: 'Our high-density, E1 grade board. The one that sets the benchmark for technical parameters.',
    grades: ['E1', 'E2'],
    image: edgeOne,
    imageAlt: 'Close-up of a premium plus board edge showing dense core',
    sizes: ['15 mm', '17 mm'].map((t) => ({ thickness: t, size: '8 × 4 ft' })),
  },
  {
    id: 'filler-boards',
    name: 'Filler Boards',
    summary: 'Thicker boards in six sizes, for builds that need extra depth.',
    grades: [],
    image: edgeTwo,
    imageAlt: 'Stacked filler boards showing the thick core',
    sizes: ['24 mm', '24.5 mm', '25 mm', '26 mm', '29 mm', '32 mm'].map((t) => ({ thickness: t, size: '8 × 4 ft' })),
  },
];

export const decorDetails = {
  count: '270+',
  designs: ['Wood Grains', 'Solids', 'pastels', 'Digital','Marble'],
  finishes: ['Glossy', 'Matte', 'Suede','UV High Gloss'],
  textures: ['Magic leaves', 'Naagin', 'Magic bricks'],
};
