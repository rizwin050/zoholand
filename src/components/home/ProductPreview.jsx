import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import { productCategories } from '../../data/products';

export default function ProductPreview() {
  const intro="State-of-the-art production line combined with use of single species (Rubber wood) raw material helps us manufacture boards with unmatched density and strength. Back-to-back two head and four head sanding machines ensure precise thickness of mother boards which results in flawless pre-lamination.  "
  return (
    <section className="section" aria-labelledby="range-title">
      <div className="container">
        <SectionHeading
          id="range-title"
          title="Strong, Precise, Superior"
        />
        <ul className="product-grid">
          {productCategories.map((p) => (
            <li key={p.id} className="product-card">
              <img src={p.image} alt={p.imageAlt} loading="lazy" width="600" height="400" />
              
            </li>
          ))}
        </ul>
        <p className="section-heading__intro"style={{ marginTop: "2rem" }}>{intro}</p>
      </div>
    </section>
  );
}
