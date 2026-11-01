import useInView from '../../hooks/useInView';
import { capacity } from '../../data/company';
import StatItem from './StatItem';

export default function StatsBar() {
  const [ref, inView] = useInView({ threshold: 0.4 });
  return (
    <section className="stats" aria-label="Zohaland in numbers">
      <div className="container">
        <div className="stats__grid" ref={ref}>
          {capacity.map((item) => (
            <StatItem key={item.label} {...item} active={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
