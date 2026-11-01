/**
 * Growth-ring motif taken from the Zohaland logo.
 * Three open arcs that draw themselves once on load (CSS, respects reduced motion).
 */
export default function RingsMark({ className = '' }) {
  const rings = [
    { r: 190, dash: 0.78, rotate: 20 },
    { r: 130, dash: 0.72, rotate: 20 },
    { r: 70, dash: 0.66, rotate: 20 },
  ];
  return (
    <svg className={`rings ${className}`.trim()} viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      {rings.map((ring, i) => (
        <circle
          key={ring.r}
          cx="200"
          cy="200"
          r={ring.r}
          pathLength="1"
          style={{ '--dash': ring.dash, animationDelay: `${i * 160}ms` }}
          transform={`rotate(${ring.rotate} 200 200)`}
        />
      ))}
    </svg>
  );
}
