export default function ProductSection({ product, reverse = false }) {
  const { id, name, summary, grades, image, imageAlt, sizes } = product;
  return (
    <article className={`product-section${reverse ? ' product-section--reverse' : ''}`} aria-labelledby={`${id}-title`} id={id}>
      <img src={image} alt={imageAlt} loading="lazy" width="800" height="600" />
      <div>
        <h2 id={`${id}-title`}>{name}</h2>
        <p>{summary}</p>
        {grades.length > 0 && (
          <p className="grade-row">
            Grades available:
            {grades.map((g) => <span key={g} className="grade">{g}</span>)}
          </p>
        )}
        <table className="data-table data-table--small">
          <caption className="sr-only">{name} sizes</caption>
          <thead>
            <tr><th scope="col">Thickness</th><th scope="col">Size</th></tr>
          </thead>
          <tbody>
            {sizes.map((s) => (
              <tr key={s.thickness}><th scope="row">{s.thickness}</th><td>{s.size}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
