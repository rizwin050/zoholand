import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { decorDetails } from '../../data/products';
import interior from '../../assets/images/interior.jpg';
import decors from '../../assets/images/decors.jpg';

export default function DecorShowcase() {
  return (
    <section className="section section--board" aria-labelledby="decor-title">
      <div className="container decor">
        <div className="decor__media">
          <img className="decor__interior" src={interior} alt="Dining room with walnut-finish laminate wall panels" loading="lazy" />
          <img className="decor__swatches" src={decors} alt="Sample of wood-grain laminate decors" loading="lazy" />
        </div>
        <div className="decor__copy">
          <SectionHeading
            id="decor-title"
            title={`${decorDetails.count} decors to choose from`}
            intro="Pre-laminated boards in woodgrains, solid colours and marbles, so one supplier can cover a whole project."
          />
          <dl className="facts">
            <div><dt>Designs</dt><dd>{decorDetails.designs.join(', ')} and many more</dd></div>
            <div><dt>Finishes</dt><dd>{decorDetails.finishes.join(', ')}</dd></div>
            <div><dt>Textures</dt><dd>{decorDetails.textures.join(', ')} and more</dd></div>
          </dl>
          <Button to="/contact" variant="dark">Ask for the shade card</Button>
        </div>
      </div>
    </section>
  );
}
