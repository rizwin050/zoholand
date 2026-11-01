import useDocumentTitle from '../hooks/useDocumentTitle';
import Hero from '../components/home/Hero';
import StatsBar from '../components/home/StatsBar';
import ProductPreview from '../components/home/ProductPreview';
import DecorShowcase from '../components/home/DecorShowcase';
import TestedVsStandard from '../components/home/TestedVsStandard';
import CertificationList from '../components/home/CertificationList';
import SectionHeading from '../components/common/SectionHeading';
import CtaBand from '../components/common/CtaBand';
import '../styles/home.css';

export default function Home() {
  useDocumentTitle(null);
  return (
    <>
      <Hero />
      <StatsBar />
      <ProductPreview />
      <DecorShowcase />
      <TestedVsStandard />
      <section className="section" aria-labelledby="cert-title">
        <div className="container">
          <SectionHeading id="cert-title" title="Certified for quality, safety and the forest" />
          <CertificationList compact />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
