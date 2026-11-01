import useDocumentTitle from '../hooks/useDocumentTitle';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import StatsBar from '../components/home/StatsBar';
import ProcessSteps from '../components/manufacturing/ProcessSteps';
import CertificationList from '../components/home/CertificationList';
import CtaBand from '../components/common/CtaBand';
import factory from '../assets/images/factory.jpg';
import '../styles/home.css';
import '../styles/manufacturing.css';

export default function Manufacturing() {
  useDocumentTitle('Manufacturing', 'Our Perumbavoor plant: 150 CBM of mother board a day, 7000+ laminated boards a day, and a quality system certified to ISO 9001, 14001 and 45001.');
  return (
    <>
      <PageHeader
        title="Manufacturing"
        lead="One plant in Perumbavoor that makes the mother board and laminates it, so quality is controlled from wood to finished sheet."
      />
      <section className="section">
        <div className="container mfg-intro">
          <img src={factory} alt="Inside the Greenland Particle Boards factory floor" loading="lazy" />
          <div>
            <SectionHeading title="Built for volume, run to a standard" intro="The mother board line has an installed capacity of 150 CBM per day. The lamination line turns out more than 7000 boards per day. More than 200 people work across the plant." />
          </div>
        </div>
      </section>
      <StatsBar />
      <section className="section" aria-labelledby="process-title">
        <div className="container">
          <SectionHeading id="process-title" title="From wood to laminated sheet" />
          <ProcessSteps />
        </div>
      </section>
      <section className="section section--board" aria-labelledby="quality-title">
        <div className="container">
          <SectionHeading id="quality-title" title="Quality standards and certifications" intro="Our boards are made and tested to Indian Standards, and the plant is run under three ISO management systems." />
          <CertificationList />
        </div>
      </section>
      <CtaBand title="Want to see the plant or test a sample?" text="Call or write to arrange a visit or request sample boards." />
    </>
  );
}
