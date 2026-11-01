import useDocumentTitle from '../hooks/useDocumentTitle';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import ProductSection from '../components/products/ProductSection';
import SpecTable from '../components/common/SpecTable';
import CtaBand from '../components/common/CtaBand';
import { productCategories, decorDetails } from '../data/products';
import decors from '../assets/images/decors.jpg';
import '../styles/home.css';
import '../styles/products.css';

export default function Products() {
  useDocumentTitle('Products', 'Particle boards, premium plus boards and filler boards in 8 × 4 ft sheets, plus 270+ pre-laminated decors. Sizes, grades and test results.');
  return (
    <>
      <PageHeader
        title="Products"
        lead="Particle boards, premium plus boards and filler boards, all in 8 × 4 ft sheets."
      />
      <section className="section">
        <div className="container product-list">
          {productCategories.map((p, i) => (
            <ProductSection key={p.id} product={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="section section--board" id="decors" aria-labelledby="decors-title">
        <div className="container decor-page">
          <img src={decors} alt="Wood-grain laminate decor samples" loading="lazy" />
          <div>
            <SectionHeading id="decors-title" title={`${decorDetails.count} pre-lam decors`} intro="Walnuts, oaks, solid colours, marbles and many more. Scan the QR code in our brochure, or ask us for the full shade card." />
            <dl className="facts">
              <div><dt>Finishes</dt><dd>{decorDetails.finishes.join(', ')}</dd></div>
              <div><dt>Textures</dt><dd>{decorDetails.textures.join(', ')} and more</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section" id="specifications" aria-labelledby="spec-title">
        <div className="container">
          <SectionHeading id="spec-title" title="Technical specification" intro="Every result below is from our own 17 mm plain particle board and sits well inside the IS 3087:2005 Grade II limits." />
          <SpecTable />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
