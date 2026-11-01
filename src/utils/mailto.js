import site from '../config/site';

export function buildMailtoUrl(values) {
  const lines = [
    `Name: ${values.name}`,
    `Company: ${values.company || '-'}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone}`,
    `Product of interest: ${values.product || '-'}`,
    `Quantity / requirement: ${values.quantity || '-'}`,
    '',
    values.message || '',
  ];
  const subject = `Website enquiry from ${values.name}`;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
}
