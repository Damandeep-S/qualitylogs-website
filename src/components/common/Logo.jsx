import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';

/**
 * Brand "Signal Pin" mark — GPS pin with radio arcs, drawn inline so it can
 * adapt to theme and animate (arcs pulse via .sig-arc classes in index.css).
 */
export function LogoMark({
  size = 34,
  pinColor = 'var(--pin-fill)',
  dotColor = 'var(--pin-dot)',
  arcColor = 'var(--cyan)',
  animated = true,
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="16 8 68 70"
      fill="none"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <path
        className={animated ? 'sig-arc sig-arc-1' : undefined}
        d="M56 26 a8 8 0 0 1 6 8"
        style={{ stroke: arcColor }}
        strokeWidth="4"
        strokeLinecap="round"
        opacity=".9"
      />
      <path
        className={animated ? 'sig-arc sig-arc-2' : undefined}
        d="M61 20 a15 15 0 0 1 10 13"
        style={{ stroke: arcColor }}
        strokeWidth="4"
        strokeLinecap="round"
        opacity=".55"
      />
      <path
        className={animated ? 'sig-arc sig-arc-3' : undefined}
        d="M66 15 a22 22 0 0 1 13 18"
        style={{ stroke: arcColor }}
        strokeWidth="4"
        strokeLinecap="round"
        opacity=".3"
      />
      <path
        d="M42 22 C31 22 23 30.5 23 41 C23 52 38 66 42 74 C46 66 61 52 61 41 C61 30.5 53 22 42 22 Z"
        style={{ fill: pinColor }}
      />
      <circle cx="42" cy="40" r="7.5" style={{ fill: dotColor }} />
    </svg>
  );
}

/**
 * Full lockup: signal pin + "QUALITY LOGS" wordmark (Space Grotesk Bold,
 * per brand spec) with optional "KNOW EVERY MILE" tagline.
 */
export default function Logo({ size = 34, tagline = false, sx }) {
  return (
    <Box
      component={RouterLink}
      to="/"
      aria-label="Quality Logs — home"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1.25,
        textDecoration: 'none',
        ...sx,
      }}
    >
      <LogoMark size={size} />
      <Box sx={{ lineHeight: 1 }}>
        <Box
          sx={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: size * 0.52,
            letterSpacing: '0.015em',
            whiteSpace: 'nowrap',
            color: 'var(--ink-1)',
          }}
        >
          QUALITY <Box component="span" sx={{ color: 'var(--accent)' }}>LOGS</Box>
        </Box>
        {tagline && (
          <Box
            sx={{
              mt: 0.5,
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: size * 0.24,
              letterSpacing: '0.34em',
              textTransform: 'uppercase',
              color: 'var(--ink-3)',
            }}
          >
            Know Every Mile
          </Box>
        )}
      </Box>
    </Box>
  );
}
