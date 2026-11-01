import { processSteps } from '../../data/company';

/** A real sequence, so an ordered list with numbers is appropriate here. */
export default function ProcessSteps() {
  return (
    <ol className="process">
      {processSteps.map((step) => (
        <li key={step.title}>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
