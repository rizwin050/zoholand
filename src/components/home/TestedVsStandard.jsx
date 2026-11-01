import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import useInView from '../../hooks/useInView';
import { compareRows, specStandard } from '../../data/specs';

export default function TestedVsStandard() {
  const [ref, inView] = useInView({ threshold: 0.25 });
  return (
    <section className="section section--forest" aria-labelledby="tested-title">
      <div className="container tested">
        <SectionHeading
          id="tested-title"
          title="Tested against the standard, not just matched to it"
          intro={`Results for a 17 mm plain particle board against ${specStandard}.`}
        />
        <div className={`tested__chart${inView ? ' is-visible' : ''}`} ref={ref}>
          {compareRows.map((row) => {
            const max = Math.max(row.standard, row.actual);
            return (
              <figure key={row.label} className="bars">
                <figcaption>
                  {row.label} <span>({row.unit}, {row.better} is better)</span>
                </figcaption>
                <div className="bars__row">
                  <span className="bars__name">Standard</span>
                  <span className="bars__track"><span className="bars__fill bars__fill--std" style={{ '--w': `${(row.standard / max) * 100}%` }} /></span>
                  <span className="bars__num">{row.standard}</span>
                </div>
                <div className="bars__row">
                  <span className="bars__name">Greenland</span>
                  <span className="bars__track"><span className="bars__fill bars__fill--ours" style={{ '--w': `${(row.actual / max) * 100}%` }} /></span>
                  <span className="bars__num">{row.actual}</span>
                </div>
              </figure>
            );
          })}
        </div>
        <Button to="/products#specifications" variant="light">Full test report</Button>
      </div>
    </section>
  );
}
