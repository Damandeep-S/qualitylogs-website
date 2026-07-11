import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion, useInView } from 'framer-motion';
import { TbCheck, TbLayoutDashboard, TbPlugConnected, TbSatellite } from 'react-icons/tb';
import SectionHeading from '../common/SectionHeading';

const easeOut = [0.22, 1, 0.36, 1];

const STEP_SECONDS = 3.6;

const STEPS = [
  {
    icon: TbPlugConnected,
    title: 'Plug in the hardware',
    desc: 'Every device ships pre-configured. Snap it into the diagnostic port and the truck introduces itself.',
    chip: '≈ 12 min per truck',
    points: ['No mechanic needed', 'Works on mixed fleets'],
  },
  {
    icon: TbSatellite,
    title: 'Trucks come online',
    desc: 'Vehicles, drivers and assets sync automatically. Your history starts building from the very first mile.',
    chip: 'Auto-sync',
    points: ['Drivers import themselves', 'Zero data entry'],
  },
  {
    icon: TbLayoutDashboard,
    title: 'Command your fleet',
    desc: 'Dispatch, safety and compliance share one live picture — on the desktop and in the driver app.',
    chip: 'One login',
    points: ['Desktop + driver app', 'Alerts where you work'],
  },
];

const JOURNEY_D = 'M 30 96 C 200 20 320 128 600 74 C 880 20 1000 130 1170 44';

function JourneyPath() {
  return (
    <Box
      aria-hidden
      sx={{
        display: { xs: 'none', md: 'block' },
        position: 'absolute',
        top: { md: 108 },
        left: '2%',
        right: '2%',
        zIndex: 0,
        opacity: 0.9,
      }}
    >
      <svg viewBox="0 0 1200 150" width="100%" style={{ display: 'block', overflow: 'visible' }}>
        <defs>
          <linearGradient id="journeyGrad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#0C8A9B" />
            <stop offset="0.5" stopColor="#18C8DB" />
            <stop offset="1" stopColor="#7DEBF7" />
          </linearGradient>
        </defs>
        <motion.path
          id="journeyPath"
          d={JOURNEY_D}
          stroke="url(#journeyGrad)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.55 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.3 }}
        />
        <path
          className="route-flow"
          d={JOURNEY_D}
          stroke="var(--accent)"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
          opacity="0.8"
        />
        {/* Waypoint dots under each card */}
        {[
          { x: 190, y: 62 },
          { x: 600, y: 74 },
          { x: 1010, y: 68 },
        ].map((p, i) => (
          <g key={i}>
            <circle className="svg-ping" cx={p.x} cy={p.y} r="8" fill="none" stroke="#18C8DB" strokeWidth="1.4" style={{ animationDelay: `${i * 0.8}s` }} />
            <circle cx={p.x} cy={p.y} r="4.5" fill="#18C8DB" style={{ stroke: 'var(--bg-0)' }} strokeWidth="2" />
          </g>
        ))}
        {/* Truck travelling the journey */}
        <g>
          <animateMotion dur="12s" repeatCount="indefinite" rotate="auto" begin="1.5s">
            <mpath href="#journeyPath" />
          </animateMotion>
          <circle r="12" fill="rgba(24,200,219,0.2)" />
          <circle r="6.5" fill="#18C8DB" style={{ stroke: 'var(--bg-0)' }} strokeWidth="2" />
          <path d="M 9 0 L 3.5 -3.6 L 3.5 3.6 Z" style={{ fill: 'var(--bg-0)' }} />
        </g>
      </svg>
    </Box>
  );
}

function StepCard({ step, index, active, onActivate }) {
  const Icon = step.icon;

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.16, duration: 0.75, ease: easeOut }}
      onMouseEnter={() => onActivate(index)}
      sx={{
        position: 'relative',
        zIndex: 1,
        borderRadius: '20px',
        border: '1px solid',
        borderColor: active ? 'rgba(24,200,219,0.5)' : 'var(--stroke)',
        background: 'var(--card-bg)',
        backdropFilter: 'blur(18px)',
        boxShadow: active ? '0 26px 60px rgba(24,200,219,0.14)' : 'var(--shadow-card)',
        p: 3,
        overflow: 'hidden',
        transform: active ? 'translateY(-8px)' : 'none',
        transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1), border-color 0.4s ease, box-shadow 0.4s ease',
        /* Offset the middle card downward so the route curves through */
        mt: { md: index === 1 ? 9 : 0 },
      }}
    >
      {/* Ghost step numeral */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: 10,
          right: 16,
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '4.5rem',
          lineHeight: 1,
          color: 'var(--ink-1)',
          opacity: active ? 'var(--ghost-num-hover)' : 'var(--ghost-num)',
          transition: 'opacity 0.4s ease',
          userSelect: 'none',
        }}
      >
        0{index + 1}
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Box
          sx={{
            width: 46,
            height: 46,
            borderRadius: '14px',
            display: 'grid',
            placeItems: 'center',
            flexShrink: 0,
            color: active ? '#04121C' : 'var(--accent)',
            background: active ? 'linear-gradient(135deg, #18C8DB, #5EDDEE)' : 'var(--tint-cyan)',
            boxShadow: active ? '0 10px 26px rgba(24,200,219,0.4)' : 'none',
            transition: 'all 0.4s ease',
          }}
        >
          <Icon size={24} />
        </Box>
        <Box
          sx={{
            px: 1.3,
            py: 0.45,
            borderRadius: 999,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.06em',
            color: 'var(--accent)',
            background: 'var(--tint-cyan)',
            border: '1px solid rgba(24,200,219,0.25)',
          }}
        >
          {step.chip}
        </Box>
      </Box>

      <Typography variant="h6" sx={{ mt: 2.25, fontSize: '1.18rem', color: 'var(--ink-1)' }}>
        {step.title}
      </Typography>
      <Typography sx={{ mt: 1, fontSize: '0.91rem', lineHeight: 1.62, color: 'var(--ink-2)' }}>
        {step.desc}
      </Typography>

      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 0.8 }}>
        {step.points.map((p) => (
          <Box key={p} sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '0.83rem', color: 'var(--ink-2)' }}>
            <TbCheck size={15} color="#18C8DB" style={{ flexShrink: 0 }} />
            {p}
          </Box>
        ))}
      </Box>

      {/* Active progress bar */}
      <Box sx={{ mt: 2.5, height: 3, borderRadius: 99, background: 'var(--track-bg)', overflow: 'hidden' }}>
        {active && (
          <motion.div
            key={`progress-${index}`}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: STEP_SECONDS, ease: 'linear' }}
            style={{
              height: '100%',
              borderRadius: 99,
              background: 'linear-gradient(90deg, #0C8A9B, #18C8DB)',
            }}
          />
        )}
      </Box>
    </Box>
  );
}

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const gridRef = useRef(null);
  const inView = useInView(gridRef, { margin: '-120px' });

  useEffect(() => {
    if (!inView || paused) return undefined;
    const id = setInterval(() => setActive((a) => (a + 1) % STEPS.length), STEP_SECONDS * 1000);
    return () => clearInterval(id);
  }, [inView, paused]);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'radial-gradient(800px 460px at 50% 100%, var(--cyan-soft), transparent 65%)',
      }}
    >
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Live in days,"
          gradientWord="not quarters"
          sub="No IT project. No consultants. Watch a truck go from dark to fully visible in three moves."
        />

        <Box
          ref={gridRef}
          onMouseLeave={() => setPaused(false)}
          onMouseEnter={() => setPaused(true)}
          sx={{ position: 'relative' }}
        >
          <JourneyPath />
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: { xs: 3, md: 4 },
              alignItems: 'start',
            }}
          >
            {STEPS.map((step, i) => (
              <StepCard
                key={step.title}
                step={step}
                index={i}
                active={active === i}
                onActivate={setActive}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
