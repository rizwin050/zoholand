/**
 * Test report for plain particle board, 2440 x 1220 x 17 mm,
 * compared with IS 3087:2005 Grade II (from the company brochure).
 *
 * `compareRows` feed the "tested vs the standard" bars on the home page.
 */
export const specTitle = 'Plain particle board, 2440 mm × 1220 mm × 17 mm';
export const specStandard = 'IS 3087:2005 Grade II';

export const specRows = [
  { property: 'Density (kg/m³, variation ±10%)', standard: '500–900', actual: '707' },
  { property: 'Moisture content (%)', standard: '5–15', actual: '6.49' },
  { property: 'Modulus of rupture, average (N/mm²)', standard: '11', actual: '30.75' },
  { property: 'Modulus of rupture, minimum individual (N/mm²)', standard: '10', actual: '30.29' },
  { property: 'Modulus of elasticity, average (N/mm²)', standard: '2000', actual: '3787' },
  { property: 'Modulus of elasticity, minimum individual (N/mm²)', standard: '1800', actual: '3758' },
  { property: 'Linear expansion, length (% max)', standard: '0.50', actual: '0.05' },
  { property: 'Linear expansion, width (% max)', standard: '0.50', actual: '0.05' },
  { property: 'Thickness swelling (% max)', standard: '12.00', actual: '5.62' },
  { property: 'Swelling due to surface absorption (% max)', standard: '9.00', actual: '0.3' },
  { property: 'Screw withdrawal, face (N min)', standard: '1250', actual: '3125' },
  { property: 'Screw withdrawal, edge, thickness over 12 mm (N min)', standard: '700', actual: '2500' },
  { property: 'Internal bond strength (N/mm²)', standard: '0.3', actual: '0.69' },
];

export const compareRows = [
  { label: 'Bending strength (modulus of rupture)', unit: 'N/mm²', standard: 11, actual: 30.75, better: 'higher' },
  { label: 'Screw holding, face', unit: 'N', standard: 1250, actual: 3125, better: 'higher' },
  { label: 'Internal bond strength', unit: 'N/mm²', standard: 0.3, actual: 0.69, better: 'higher' },
  { label: 'Thickness swelling', unit: '%', standard: 12, actual: 5.62, better: 'lower' },
];
