export default function ProductSection({ product, reverse = false }) {
  const { id, name, tagline, description, specs, applications = [], image, imageAlt } = product;
  return (
    <article
      className={`product-section${reverse ? ' product-section--reverse' : ''}`}
      aria-labelledby={`${id}-title`}
      id={id}
    >
      <img src={image} alt={imageAlt} loading="lazy" width="800" height="900" />

      <div className="product-info">
        {tagline && <p className="product-info__tagline">{tagline}</p>}
        <h2 id={`${id}-title`}>{name}</h2>
        <p className="product-info__desc">{description}</p>

        <section className="spec-panel" aria-label={`${name} specifications`}>
          <h3 className="spec-panel__title">Specifications</h3>
          <dl className="spec-list">
            {specs.map((row) => (
              <div key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {applications.length > 0 && (
          <>
            <h3 className="chips-title">Typical applications</h3>
            <ul className="chips">
              {applications.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </>
        )}
      </div>
    </article>
  );
}