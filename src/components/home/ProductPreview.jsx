import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import { productCategories } from '../../data/products';

export default function ProductPreview() {
  return (
    <section className="section" aria-labelledby="range-title">
      <div className="container">
        <SectionHeading
          id="range-title"
          title="Strong, Precise, Superior"
          intro="Every boaState-of-the-art production line combined with use of single species (Rubber wood) raw material helps us manufacture boards with unmatched density and strength. 
          Back-to-back two head and four head sanding machines ensure precise thickness of mother boards which results in flawless pre-lamination."
        />
      </div>
    </section>
  );
}
