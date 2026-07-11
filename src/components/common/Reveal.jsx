import { motion } from 'framer-motion';

const easeOut = [0.22, 1, 0.36, 1];

/** Scroll-triggered fade-up wrapper used across sections. */
export default function Reveal({ delay = 0, y = 30, once = true, style, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-90px' }}
      transition={{ delay, duration: 0.85, ease: easeOut }}
      style={style}
    >
      {children}
    </motion.div>
  );
}
