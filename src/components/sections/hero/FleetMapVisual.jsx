import { useCallback } from 'react';
import Box from '@mui/material/Box';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  TbCircleCheckFilled,
  TbGasStation,
  TbShieldCheckFilled,
  TbSteeringWheel,
  TbTrendingUp,
} from 'react-icons/tb';

const easeOut = [0.22, 1, 0.36, 1];

const ROUTE_D = 'M 48 348 C 120 330 140 250 230 236 C 320 222 330 150 420 130 C 470 118 500 96 516 64';

const glassCardSx = {
  background: 'var(--card-bg)',
  backdropFilter: 'blur(20px)',
  border: '1px solid var(--card-border)',
  borderRadius: '16px',
  boxShadow: 'var(--shadow-card)',
};

/** Entrance + endless gentle float, layered so the two transforms compose. */
function FloatCard({ delay = 1, float = 7, sx, children }) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.9, ease: easeOut }}
      sx={{ position: 'absolute', zIndex: 3, ...sx }}
    >
      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: float, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.9 }}
      >
        <Box sx={glassCardSx}>{children}</Box>
      </motion.div>
    </Box>
  );
}

function SafetyRing() {
  const R = 19;
  const C = 2 * Math.PI * R;
  return (
    <Box sx={{ position: 'relative', width: 48, height: 48, flexShrink: 0 }}>
      <svg width="48" height="48" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r={R} fill="none" style={{ stroke: 'var(--track-bg)' }} strokeWidth="4" />
        <motion.circle
          cx="24"
          cy="24"
          r={R}
          fill="none"
          stroke="#18C8DB"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={C}
          initial={{ strokeDashoffset: C }}
          animate={{ strokeDashoffset: C * (1 - 0.98) }}
          transition={{ delay: 1.6, duration: 1.6, ease: easeOut }}
          transform="rotate(-90 24 24)"
        />
      </svg>
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          placeItems: 'center',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 13.5,
          color: 'var(--ink-1)',
        }}
      >
        98
      </Box>
    </Box>
  );
}

function MapSvg() {
  return (
    <svg viewBox="0 0 560 400" width="100%" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="routeGrad" x1="48" y1="348" x2="516" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0C8A9B" />
          <stop offset="0.6" stopColor="#18C8DB" />
          <stop offset="1" stopColor="#7DEBF7" />
        </linearGradient>
        <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* City blocks */}
      <g style={{ fill: 'var(--map-block)' }}>
        <rect x="70" y="60" width="120" height="80" rx="10" />
        <rect x="230" y="40" width="90" height="60" rx="10" />
        <rect x="90" y="180" width="80" height="100" rx="10" />
        <rect x="250" y="290" width="130" height="70" rx="10" />
        <rect x="400" y="200" width="110" height="90" rx="10" />
        <rect x="360" y="20" width="70" height="70" rx="10" />
      </g>

      {/* Streets */}
      <g style={{ stroke: 'var(--map-line)' }} strokeWidth="1.5" fill="none">
        <path d="M 0 160 C 140 150 300 170 560 148" />
        <path d="M 0 300 C 180 288 340 310 560 292" />
        <path d="M 210 0 C 214 140 206 260 212 400" />
        <path d="M 390 0 C 386 130 396 280 388 400" />
        <path d="M 60 0 C 64 120 58 300 66 400" />
      </g>
      <g style={{ stroke: 'var(--map-line-strong)' }} strokeWidth="3" fill="none">
        <path d="M 0 226 C 160 214 380 240 560 218" />
        <path d="M 300 0 C 296 150 306 260 298 400" />
      </g>

      {/* Route: glow underlay, draw-in stroke, flowing particles */}
      <path d={ROUTE_D} stroke="rgba(24,200,219,0.35)" strokeWidth="8" fill="none" strokeLinecap="round" filter="url(#routeGlow)" />
      <motion.path
        id="heroRoutePath"
        d={ROUTE_D}
        stroke="url(#routeGrad)"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.9, duration: 2.2, ease: 'easeInOut' }}
      />
      <path className="route-flow" d={ROUTE_D} style={{ stroke: 'var(--ink-1)' }} strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.8" />

      {/* Origin */}
      <circle cx="48" cy="348" r="5" fill="#0C8A9B" style={{ stroke: 'var(--panel-solid)' }} strokeWidth="2" />
      <text x="62" y="368" style={{ fill: 'var(--map-label)' }} fontSize="11" fontFamily="var(--font-body)">
        Chicago Yard
      </text>

      {/* Destination with GPS pulse */}
      <g>
        <circle className="svg-ping" cx="516" cy="64" r="9" fill="none" stroke="#18C8DB" strokeWidth="1.5" />
        <circle className="svg-ping" cx="516" cy="64" r="9" fill="none" stroke="#18C8DB" strokeWidth="1.5" style={{ animationDelay: '1.3s' }} />
        <circle cx="516" cy="64" r="6" fill="#18C8DB" style={{ stroke: 'var(--panel-solid)' }} strokeWidth="2.5" />
      </g>
      <text x="432" y="46" style={{ fill: 'var(--map-label)' }} fontSize="11" fontFamily="var(--font-body)">
        Detroit Hub
      </text>

      {/* Other fleet vehicles */}
      <g>
        <circle className="svg-ping" cx="140" cy="120" r="7" fill="none" stroke="rgba(24,200,219,0.6)" strokeWidth="1.2" style={{ animationDelay: '0.6s' }} />
        <circle cx="140" cy="120" r="4" fill="#18C8DB" opacity="0.85" />
        <circle className="svg-ping" cx="452" cy="256" r="7" fill="none" stroke="rgba(24,200,219,0.6)" strokeWidth="1.2" style={{ animationDelay: '1.8s' }} />
        <circle cx="452" cy="256" r="4" fill="#18C8DB" opacity="0.85" />
        <circle cx="330" cy="330" r="4" fill="rgba(24,200,219,0.5)" />
      </g>

      {/* Truck marker travelling the route (SMIL keeps it glued to the path) */}
      <g>
        <animateMotion dur="14s" repeatCount="indefinite" rotate="auto" begin="3s" keyPoints="0;1" keyTimes="0;1">
          <mpath href="#heroRoutePath" />
        </animateMotion>
        <circle r="11" fill="rgba(24,200,219,0.22)" />
        <circle r="6" fill="#18C8DB" style={{ stroke: 'var(--panel-solid)' }} strokeWidth="2" />
        <path d="M 8 0 L 3 -3.4 L 3 3.4 Z" style={{ fill: 'var(--panel-solid)' }} />
      </g>
    </svg>
  );
}

/**
 * Hero visual: a "live fleet" glass dashboard with an animated map,
 * subtle 3D pointer tilt, and floating telemetry cards.
 */
export default function FleetMapVisual() {
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 16 });
  const sy = useSpring(py, { stiffness: 60, damping: 16 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [4.5, -4.5]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-6, 6]);

  const handlePointerMove = useCallback(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      px.set((e.clientX - rect.left) / rect.width - 0.5);
      py.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [px, py]
  );

  const handlePointerLeave = useCallback(() => {
    px.set(0);
    py.set(0);
  }, [px, py]);

  return (
    <Box
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      sx={{
        position: 'relative',
        maxWidth: 600,
        mx: 'auto',
        width: '100%',
        perspective: '1400px',
        px: { xs: 1, md: 0 },
      }}
    >
      {/* Ambient glow behind the panel */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: '-8%',
          background: 'radial-gradient(circle at 55% 45%, rgba(24,200,219,0.16), transparent 65%)',
          filter: 'blur(30px)',
          zIndex: 0,
        }}
      />

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 44, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.55, duration: 1.1, ease: easeOut }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d', position: 'relative', zIndex: 1 }}
      >
        <Box
          sx={{
            borderRadius: '24px',
            border: '1px solid var(--card-border)',
            background: 'var(--panel-bg)',
            backdropFilter: 'blur(24px)',
            boxShadow: 'var(--panel-shadow)',
            overflow: 'hidden',
          }}
        >
          {/* Panel header */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 2.5,
              py: 1.75,
              borderBottom: '1px solid var(--stroke)',
            }}
          >
            <Box
              sx={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 14,
                color: 'var(--ink-1)',
              }}
            >
              Live fleet
              <Box component="span" sx={{ color: 'var(--ink-3)', fontWeight: 500 }}>
                {' '}
                · Midwest region
              </Box>
            </Box>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.9,
                px: 1.4,
                py: 0.5,
                borderRadius: 999,
                fontSize: 11.5,
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: 'var(--accent)',
                background: 'var(--tint-cyan)',
                border: '1px solid rgba(24, 200, 219, 0.25)',
              }}
            >
              <Box
                component="span"
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: 'var(--cyan)',
                  animation: 'pulseDot 2s infinite',
                }}
              />
              LIVE
            </Box>
          </Box>

          <MapSvg />

          {/* Footer strip */}
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              px: 2.5,
              py: 1.5,
              borderTop: '1px solid var(--stroke)',
              fontSize: 12.5,
              color: 'var(--ink-2)',
              '& b': { color: 'var(--ink-1)' },
            }}
          >
            <span>
              Active <b>8</b>
            </span>
            <span>
              On-time <b>96%</b>
            </span>
            <span>
              Alerts <b style={{ color: 'var(--accent)' }}>1</b>
            </span>
          </Box>
        </Box>
      </Box>

      {/* Floating card — AI safety score */}
      <FloatCard delay={1.15} float={6.5} sx={{ top: -26, right: { xs: 4, md: -30 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 2, py: 1.5 }}>
          <SafetyRing />
          <Box>
            <Box sx={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-1)' }}>Safety score</Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                fontSize: 11.5,
                color: 'var(--ink-2)',
                mt: 0.25,
              }}
            >
              <TbShieldCheckFilled color="#18C8DB" size={13} />
              AI dash cam · no events
            </Box>
          </Box>
        </Box>
      </FloatCard>

      {/* Floating card — HOS compliance */}
      <FloatCard delay={1.3} float={7.5} sx={{ top: '34%', left: { xs: 4, md: -44 }, width: 200 }}>
        <Box sx={{ px: 2, py: 1.5 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ fontSize: 12.5, fontWeight: 600, color: 'var(--ink-1)' }}>HOS · Driving</Box>
            <TbCircleCheckFilled color="#18C8DB" size={15} />
          </Box>
          <Box
            sx={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 21,
              color: 'var(--ink-1)',
              mt: 0.5,
            }}
          >
            6h 24m
            <Box component="span" sx={{ fontSize: 12, color: 'var(--ink-3)', fontWeight: 500 }}>
              {' '}
              left
            </Box>
          </Box>
          <Box sx={{ mt: 1, height: 5, borderRadius: 99, background: 'var(--track-bg)' }}>
            <Box
              component={motion.div}
              initial={{ width: 0 }}
              animate={{ width: '58%' }}
              transition={{ delay: 1.9, duration: 1.4, ease: easeOut }}
              sx={{
                height: '100%',
                borderRadius: 99,
                background: 'linear-gradient(90deg, #0C8A9B, #18C8DB)',
              }}
            />
          </Box>
        </Box>
      </FloatCard>

      {/* Floating card — active unit */}
      <FloatCard delay={1.45} float={8} sx={{ bottom: -26, left: { xs: 8, md: 26 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 2, py: 1.5 }}>
          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: '12px',
              display: 'grid',
              placeItems: 'center',
              color: '#04121C',
              background: 'linear-gradient(135deg, #18C8DB, #5EDDEE)',
              flexShrink: 0,
            }}
          >
            <TbSteeringWheel size={21} />
          </Box>
          <Box>
            <Box sx={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-1)' }}>
              Unit 214 · Sarah M.
            </Box>
            <Box sx={{ fontSize: 11.5, color: 'var(--ink-2)', mt: 0.25 }}>62 mph · ETA 2:45 PM</Box>
          </Box>
          <Box
            sx={{
              ml: 1,
              px: 1.2,
              py: 0.4,
              borderRadius: 999,
              fontSize: 11,
              fontWeight: 700,
              color: 'var(--good)',
              background: 'var(--good-bg)',
              border: '1px solid var(--good-border)',
              whiteSpace: 'nowrap',
            }}
          >
            On time
          </Box>
        </Box>
      </FloatCard>

      {/* Floating chip — fuel trend */}
      <FloatCard
        delay={1.6}
        float={6}
        sx={{ bottom: '30%', right: { md: -18 }, display: { xs: 'none', md: 'block' } }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 1.75, py: 1.1 }}>
          <TbGasStation color="#18C8DB" size={17} />
          <Box sx={{ fontSize: 12.5, fontWeight: 600, color: 'var(--ink-1)' }}>7.2 MPG</Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3, fontSize: 11.5, fontWeight: 700, color: 'var(--good)' }}>
            <TbTrendingUp size={13} />
            4%
          </Box>
        </Box>
      </FloatCard>
    </Box>
  );
}
