import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import { productCategories } from '../../data/products';

export default function ProductPreview() {
  return (
    <section className="section" aria-labelledby="range-title">
      <div className="container">
        <SectionHeading
          id="range-title"
          title="Three boards, cut to the 8 × 4 ft sheet"
          intro="Every board is made in 8 × 4 ft sheets and available in E1 and E2 grades where marked."
        />
        <ul className="product-grid">
          {productCategories.map((p) => (
            <li key={p.id} className="product-card">
              <img src={p.image} alt={p.imageAlt} loading="lazy" width="600" height="400" />
              <div className="product-card__body">
                <h3>{p.name}</h3>
                <p>{p.summary}</p>
                <p className="product-card__meta">
                  {p.sizes[0].thickness} to {p.sizes[p.sizes.length - 1].thickness}
                  {p.grades.length > 0 && `, ${p.grades.join(' and ')} grade`}
                </p>
                <Link to="/products" className="text-link">See sizes</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
