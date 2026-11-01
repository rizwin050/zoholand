import { certifications } from '../../data/company';

export default function CertificationList({ compact = false }) {
  return (
    <ul className={`certs${compact ? ' certs--compact' : ''}`}>
      {certifications.map((c) => (
        <li key={c.name}>
          <strong>{c.name}</strong>
          {!compact && <span>{c.detail}</span>}
        </li>
      ))}
    </ul>
  );
}
