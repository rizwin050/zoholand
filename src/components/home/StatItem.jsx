import useCountUp from '../../hooks/useCountUp';

export default function StatItem({ value, suffix = '', label, active }) {
  const n = useCountUp(value, { active });
  return (
    <div className="stat">
      <p className="stat__value">{n.toLocaleString('en-IN')}{suffix}</p>
      <p className="stat__label">{label}</p>
    </div>
  );
}
