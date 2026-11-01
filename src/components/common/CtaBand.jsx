import Button from './Button';
import site from '../../config/site';

export default function CtaBand({ title = 'Tell us what you are building.', text = 'Send the board type, thickness and quantity you need and we will come back with a quote.' }) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-band__actions">
          <Button to="/contact">Request a quote</Button>
          <Button href={site.phones[0].href} variant="ghost">Call {site.phones[0].label}</Button>
        </div>
      </div>
    </section>
  );
}
