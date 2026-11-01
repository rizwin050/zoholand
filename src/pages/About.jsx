import useDocumentTitle from '../hooks/useDocumentTitle';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import StatsBar from '../components/home/StatsBar';
import CertificationList from '../components/home/CertificationList';
import CtaBand from '../components/common/CtaBand';
import { sisterConcerns } from '../data/company';
import site from '../config/site';
import factory from '../assets/images/factory.jpg';
import '../styles/home.css'; // stats bar + certification chips live here
import '../styles/about.css';

const values = [
  {
    title: 'Uncompromising quality',
    text: 'Our 17 mm board is tested against IS 3087:2005 and sits well inside every limit. Bending strength is 30.75 N/mm² where the standard asks for 11.',
  },
  {
    title: 'Breadth of range',
    text: 'Particle, premium plus and filler boards in 8 × 4 ft sheets, plus more than 270 decors in glossy, matte and suede finishes.',
  },
  {
    title: 'Reliable supply',
    text: 'A mother board line of 150 CBM a day and a lamination line of 7000+ boards a day, so large orders are planned, not hoped for.',
  },
  {
    title: 'Technical expertise',
    text: 'Our high-density premium plus E1 board has set a benchmark for technical parameters that even the biggest names in the market find hard to match.',
  },
];

const highlights = [
  {
    title: 'ISO certified',
    text: 'Quality (ISO 9001:2015), environment (ISO 14001:2015) and occupational health and safety (ISO 45001:2018) systems, with 5S on the shop floor.',
  },
  {
    title: 'BIS compliant',
    text: 'Boards conform to Bureau of Indian Standards specifications IS 3087:2005 for particle boards and IS 12823:2015 for pre-laminated boards.',
  },
  {
    title: 'E1 grade available',
    text: 'E1 and E2 grades are available on particle and premium plus boards. E1 is the lower-emission grade, suited to homes and offices. Wood sourcing is FSC certified.',
  },
];

export default function About() {
  const years = new Date().getFullYear() - site.commercialProductionSince;
  useDocumentTitle('About', 'Greenland Particle Boards Pvt. Ltd. makes Zohaland pre-laminated particle boards in Perumbavoor, Kerala. Incorporated 2010, in commercial production since 2015.');

  return (
    <>
      <PageHeader
        title="Over a decade of precision manufacturing"
        lead="Zohaland boards are made by Greenland Particle Boards Pvt. Ltd. in Perumbavoor, Kerala, for furniture makers, contractors and interior designers."
      />

      <StatsBar />

      <section className="section" aria-labelledby="story-title">
        <div className="container story">
          <div className="story__copy">
            <SectionHeading id="story-title" title="Built from the ground up" />
            <p>
              Greenland Particle Boards was incorporated in 2010 and began commercial production in 2015. Since then,
              steady work on the product and the plant has kept our name in a crowded, competitive wood industry.
            </p>
            <p>
              Today the mother board line has an installed capacity of 150 CBM per day and the lamination line
              produces 7000+ boards per day. Our high-density premium plus grade and a library of 270+ pre-lam shades
              have made us a favourite with furniture manufacturers.
            </p>
            <p>More than 200 people work together at our factory. Only a great team can achieve great heights.</p>
          </div>
          <figure className="story__media">
            <img src={factory} alt="Inside the Greenland Particle Boards factory" loading="lazy" />
            <figcaption className="story__badge">
              <strong>{years}+ years</strong>
              <span>in commercial production</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--board" aria-labelledby="values-title">
        <div className="container">
          <SectionHeading id="values-title" title="What we stand for" />
          <ul className="values">
            {values.map((v) => (
              <li key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="certified-title">
        <div className="container">
          <SectionHeading
            id="certified-title"
            title="Certified manufacturing"
            intro="Our processes and products meet recognised quality and safety standards."
          />
          <ul className="highlights">
            {highlights.map((h) => (
              <li key={h.title}>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </li>
            ))}
          </ul>
          <CertificationList compact />
        </div>
      </section>

      <CtaBand
        title="Ready to work together?"
        text="Speak to our team about your project. We supply contractors, furniture manufacturers and interior fit-out companies."
      />
    </>
  );
}