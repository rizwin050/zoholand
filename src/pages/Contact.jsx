import useDocumentTitle from '../hooks/useDocumentTitle';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';
import MapEmbed from '../components/contact/MapEmbed';
import site from '../config/site';
import '../styles/contact.css';

export default function Contact() {
  useDocumentTitle('Contact', 'Contact Zohaland by Greenland Particle Boards in Perumbavoor, Kerala. Send an enquiry, call, WhatsApp or find the factory on the map.');
  return (
    <>
      <PageHeader title="Contact" lead="Ask for a quote, a sample or the decor shade card." />
      <section className="section">
        <div className="container contact-layout">
          <ContactDetails />
          <ContactForm />
        </div>
      </section>
      <section className="section section--board" aria-labelledby="map-title">
        <div className="container">
          <SectionHeading id="map-title" title="Find our factory" intro={site.address.lines.join(', ')} />
          <MapEmbed />
        </div>
      </section>
    </>
  );
}
