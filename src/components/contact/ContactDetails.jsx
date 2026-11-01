import site from '../../config/site';

export default function ContactDetails() {
  return (
    <div className="contact-details">
      <section aria-labelledby="cd-phone">
        <h2 id="cd-phone">Phone</h2>
        {site.phones.map((p) => <p key={p.href}><a href={p.href}>{p.label}</a></p>)}
      </section>
      <section aria-labelledby="cd-wa">
        <h2 id="cd-wa">WhatsApp</h2>
        {site.whatsapp.map((p) => <p key={p.href}><a href={p.href} target="_blank" rel="noopener noreferrer">{p.label}</a></p>)}
      </section>
      <section aria-labelledby="cd-mail">
        <h2 id="cd-mail">Email</h2>
        <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
      </section>
      <section aria-labelledby="cd-addr">
        <h2 id="cd-addr">Factory address</h2>
        <address>{site.address.lines.map((l) => <span key={l}>{l}<br /></span>)}</address>
      </section>
      <section aria-labelledby="cd-hours">
        <h2 id="cd-hours">Business hours</h2>
        <dl className="hours">
          {site.hours.map((h) => (
            <div key={h.days}><dt>{h.days}</dt><dd>{h.time}</dd></div>
          ))}
        </dl>
      </section>
    </div>
  );
}
