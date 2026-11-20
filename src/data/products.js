import plain from '../assets/images/plain_board.jpeg';
import filler from '../assets/images/Plain_Particle_Board_Filler_Board.jpg';
import hdhmr  from '../assets/images/HDHMR_Board.jpg';
import prelaminated from '../assets/images/Pre-Laminated_Particle_Board.jpg';
import uvHighGloss from '../assets/images/uv_high_gloss_board.jpg';
import boardsstack from '../assets/images/boards-stack.jpg';
import boardsedge1 from '../assets/images/boards-edge-1.jpg';
import boardsedge2 from '../assets/images/boards-edge-2.jpg';




const SIZE = '8 × 4 ft';
// const thicknessList = (sizes) => sizes.map((s) => s.thickness.replace(' mm', '')).join(', ') + ' mm';
const sheet = (list) => list.map((t) => ({ thickness: t, size: SIZE }));
const DECORS = '270+ (Wood-grain, Solid, Digital and More) ';
const FURNITURE_USES = ['Modular furniture', 'Kitchen cabinets', 'Wardrobes', 'Office furniture', 'Interior panelling'];
const PLAIN_BOARD_USES = ['Furniture substrate', 'Shelving', 'Flooring underlayment', 'Partitioning', 'Packaging'];
const HDHMR_USES = ['Kitchens', 'Bathrooms', 'Laundry areas', 'Commercial interiors', 'Coastal construction '];
const FILLER_USES = ['Flush door cores', 'Door frames', 'Thick panel applications', 'Decorative elements '];
const UV_HIGH_GLOSS_USES = ['Modular furniture', 'Kitchen cabinets', 'Wardrobes', 'Interior panelling '];

const particleSizes = '9 mm - 25 mm'

export const productCategories = [
  {
    id: 'prelaminated-particle-boards',
    name: 'Prelaminated Particle Board',
    summary: '',
    tagline: 'Ready-to-use surface finish. No secondary lamination required.',
    description:
      'Our prelaminated particle boards are produced by bonding decorative melamine impregnated paper to both faces of a precision-engineered particle board under heat and pressure. The result is a board with a hard, scratch-resistant surface that is ready for use in furniture, cabinetry, and interior fit-out without any secondary lamination process.',
    image: prelaminated,
    imageAlt: 'Stack of three plain particle boards of different thickness',
    specs: [
      { label: 'Thickness', value: particleSizes },
      { label: 'Standard size', value: SIZE },
      { label: 'Surface', value: ' Melamine Faced (both sides) ' },
      { label: 'Finish variants', value: DECORS },
      { label: 'Density Grades', value: 'Premium /Premium Plus' },
      { label: 'Emission Grade', value: ' E2/E1/E0  ' },
      { label: 'Standard', value: ' IS 12823:2025 ' },
    ],
    applications: FURNITURE_USES,
  },
  {
    id: 'plain-particle-board',
    name: 'Plain Particle Board ',
    summary: '',
    tagline: 'Consistent core. Reliable substrate for downstream processing.',
    description:
      'Plain particle boards provide a stable, uniform substrate for furniture manufacturers, fabricators, and contractors who apply their own laminate, veneer, or paint finish. Produced from a blend of wood particles and resin, they offer consistent density and flatness across the board area. ',
    image: filler,
    imageAlt: 'Close-up of a premium plus board edge showing dense core',
    specs: [
      { label: 'Thickness', value: particleSizes },
      { label: 'Standard size', value: SIZE },
      { label: 'Density', value: '650 – 750 kg/m³ ' },
      { label: 'Emission Grade', value: 'E2/E1 ' },
      { label: 'Standard', value: 'IS 3087:2025' },
    ],
    applications: PLAIN_BOARD_USES,
  },
  {
    id: 'hdhmr-board',
    name: 'HDHMR Board ',
    summary: '',
    tagline: 'High Density. High Moisture Resistance. Built for demanding environments. ',
    description: 'HDHMR (High Density High Moisture Resistant) boards are engineered for applications where standard particle board would be vulnerable to moisture ingress. A higher resin content and denser particle structure give these boards significantly improved resistance to swelling and delamination in humid conditions. ',
    image: hdhmr,
    imageAlt: 'Stacked filler boards showing the thick core',
    specs: [
      { label: 'Thickness', value: '15 mm & 17 mm'},
      { label: 'Standard size', value: SIZE },
      { label: 'Moisture Resistance', value: 'Superior — suitable for humid environments' },
      { label: 'Emission Grade', value: 'E2 / E1 / E0 ' },
    ],
    applications: HDHMR_USES,
  },
   {
    id: 'filler-board',
    name: 'Filler Board  ',
    summary: '',
    tagline: 'High thickness. Low density. The preferred core for door manufacturing. ',
    description: 'Filler boards are low-density boards produced in thicknesses beyond the standard particle board range. Their combination of high thickness and manageable weight makes them the preferred core material for flush door manufacturing and other applications where a thick, lightweight panel is required. ',
    image: filler,
    imageAlt: 'Stacked filler boards showing the thick core',
    specs: [
      { label: 'Thickness', value: '25 mm – 34 mm'},
      { label: 'Size', value: SIZE },
      { label: 'Density', value: 'Low density — lightweight construction ' },
      { label: 'Primary Use', value: 'Door manufacturing ' },
    ],
    applications: FILLER_USES,
  },
   {
    id: 'uv-high-gloss-boards',
    name: 'UV High Gloss Boards ',
    summary: '',
    tagline: 'Surface that Reflects. Best for premium Furniture. Countless aesthetic Possibilities. ',
    description: 'Premium plus boards are pre-laminated with high GSM imported paper and then coated with 2 layers of premium High Gloss UV paint which is dried using UV light. The wide range of soothing colours and mirror like finish makes it one of the most aesthetic products to choose for premium furniture making. ',
    image: uvHighGloss,
    imageAlt: 'Stacked filler boards showing the thick core',
    specs: [
      { label: 'Thickness', value: '15 mm & 17 mm'},
      { label: 'Standard size', value: SIZE },
      { label: 'Surface', value: 'Impregnated Paper lamination with UV High Gloss Coating' },
      { label: 'Decors', value: ' 45+ (Wood-grain, Solid, Pastel,Marble,Sparkle) ' },
      { label: 'Density Grade', value: 'Premium /Premium Plus ' },
      { label: 'Emission Grade', value: 'E2/E1/E0 ' },
    ],
    applications: UV_HIGH_GLOSS_USES,
  },
];

export const productCategoriesHome = [
  {
    image: boardsstack,
    imageAlt: 'Stack of three plain particle boards of different thickness',
    
  },
  {
    image: boardsedge1,
    imageAlt: 'Close-up of a premium plus board edge showing dense core',
  },
  {
    image: boardsedge2,
    imageAlt: 'Close-up of a UV high gloss board edge showing glossy finish',
  },
];
export const decorDetails = {
  count: '270+',
  designs: ['Wood Grains', 'Solids', 'pastels', 'Digital','Marble'],
  finishes: ['Glossy', 'Matte', 'Suede','UV High Gloss'],
  textures: ['Magic leaves', 'Naagin', 'Magic bricks'],
};
