import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

/**
 * Animates a number from 0 to `to` when it scrolls into view.
 * Renders plain text so it can sit inside any Typography element.
 */
export default function CountUp({
  to,
  decimals = 0,
  duration = 1.8,
  delay = 0,
  prefix = '',
  suffix = '',
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!inView || !ref.current) return undefined;
    const controls = animate(0, to, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`;
        }
      },
    });
    return () => controls.stop();
  }, [inView, to, decimals, duration, delay, prefix, suffix]);

  return <span ref={ref}>{`${prefix}${(0).toFixed(decimals)}${suffix}`}</span>;
}
