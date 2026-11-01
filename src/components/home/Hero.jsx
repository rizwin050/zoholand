import Button from '../common/Button';
import RingsMark from '../common/RingsMark';
import forest from '../../assets/images/forest.jpg';

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero__bg" src={forest} alt="" fetchPriority="high" />
      <div className="hero__shade" />
      <RingsMark className="hero__rings" />
      <div className="container hero__inner">
        <p className="hero__kicker">Greenland Particle Boards, Perumbavoor, Kerala</p>
        <h1>Particle boards, engineered to hold.</h1>
        <p className="hero__lead">
          Plain and pre-laminated boards made to IS 3087 and IS 12823, finished in more than 270 decors for
          furniture makers, contractors and interior designers.
        </p>
        <div className="hero__actions">
          <Button to="/products">View products</Button>
          <Button to="/contact" variant="light">Request a quote</Button>
        </div>
      </div>
    </section>
  );
}
