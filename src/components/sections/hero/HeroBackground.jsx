import Box from '@mui/material/Box';
import { motion, useTransform } from 'framer-motion';

const NOISE_URI =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")";

function Blob({ drift, duration, parallaxX, parallaxY, sx }) {
  return (
    <motion.div style={{ x: parallaxX, y: parallaxY, position: 'absolute', ...sx.wrapper }}>
      <Box
        component={motion.div}
        animate={{ x: drift.x, y: drift.y }}
        transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
        sx={{
          width: sx.size,
          height: sx.size,
          borderRadius: '50%',
          background: sx.background,
          filter: `blur(${sx.blur}px)`,
        }}
      />
    </motion.div>
  );
}

/**
 * Ambient hero backdrop: navy gradient wash, perspective dot-grid,
 * slow-drifting glow blobs with mouse parallax, and a film-grain overlay.
 * `mx`/`my` are springed motion values in [-0.5, 0.5].
 */
export default function HeroBackground({ mx, my }) {
  const blob1X = useTransform(mx, (v) => v * -46);
  const blob1Y = useTransform(my, (v) => v * -30);
  const blob2X = useTransform(mx, (v) => v * 34);
  const blob2Y = useTransform(my, (v) => v * 26);
  const blob3X = useTransform(mx, (v) => v * -20);
  const blob3Y = useTransform(my, (v) => v * 16);

  return (
    <Box aria-hidden sx={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
      {/* Base gradient wash */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(1100px 720px at 78% -12%, rgba(24, 200, 219, 0.14), transparent 62%),
            radial-gradient(900px 640px at 4% 24%, rgba(12, 138, 155, 0.12), transparent 58%),
            var(--hero-wash)
          `,
        }}
      />

      {/* Dot grid, faded at the edges */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(var(--grid-dot) 1px, transparent 1.4px)',
          backgroundSize: '34px 34px',
          maskImage:
            'radial-gradient(ellipse 85% 65% at 50% 32%, black 25%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 85% 65% at 50% 32%, black 25%, transparent 78%)',
        }}
      />

      {/* Drifting glow blobs */}
      <Blob
        parallaxX={blob1X}
        parallaxY={blob1Y}
        drift={{ x: [0, 40, -24, 0], y: [0, -30, 22, 0] }}
        duration={26}
        sx={{
          wrapper: { top: '-14%', right: '2%' },
          size: 560,
          blur: 95,
          background:
            'radial-gradient(circle at 40% 40%, rgba(24, 200, 219, 0.30), transparent 68%)',
        }}
      />
      <Blob
        parallaxX={blob2X}
        parallaxY={blob2Y}
        drift={{ x: [0, -32, 20, 0], y: [0, 26, -18, 0] }}
        duration={32}
        sx={{
          wrapper: { bottom: '-24%', left: '-8%' },
          size: 520,
          blur: 105,
          background:
            'radial-gradient(circle at 55% 45%, rgba(12, 138, 155, 0.30), transparent 66%)',
        }}
      />
      <Blob
        parallaxX={blob3X}
        parallaxY={blob3Y}
        drift={{ x: [0, 24, -16, 0], y: [0, -18, 14, 0] }}
        duration={22}
        sx={{
          wrapper: { top: '30%', left: '32%' },
          size: 380,
          blur: 110,
          background:
            'radial-gradient(circle at 50% 50%, rgba(94, 221, 238, 0.13), transparent 65%)',
        }}
      />

      {/* Film grain */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: NOISE_URI,
          opacity: 0.04,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Fade into the next section */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 180,
          background: 'linear-gradient(180deg, transparent, var(--bg-0))',
        }}
      />
    </Box>
  );
}
