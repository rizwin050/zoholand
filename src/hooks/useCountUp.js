import { useEffect, useState } from 'react';

/** Animates 0 -> target once `active` is true. Skips animation for reduced-motion users. */
export default function useCountUp(target, { active = true, duration = 1400 } = {}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return undefined;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setValue(target);
      return undefined;
    }
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return value;
}
