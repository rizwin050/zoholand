import RingsMark from './RingsMark';

export default function PageHeader({ title, lead }) {
  return (
    <section className="page-header">
      <RingsMark className="page-header__rings" />
      <div className="container">
        <h1>{title}</h1>
        {lead && <p className="page-header__lead">{lead}</p>}
      </div>
    </section>
  );
}
