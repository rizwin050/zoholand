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
        <p className="hero__kicker">Zohaland Particle Boards, Perumbavoor, Kerala</p>
        <h1>Particle boards, engineered to hold.</h1>
        <p className="hero__lead">
          India's trusted manufacturer of 8’x4’ sized Plain and Pre-laminated Particle Boards compliant with IS standards; engineered for strength, consistency, and superior surface quality. 
          More than 270 decors and multiple textures to choose from.
        </p>
        <div className="hero__actions">
          <Button to="/products">View products</Button>
          <Button to="/contact" variant="light">Request a quote</Button>
        </div>
      </div>
    </section>
  );
}
