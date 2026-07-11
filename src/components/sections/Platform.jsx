import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import {
  TbArrowUpRight,
  TbBattery3,
  TbCamera,
  TbChartAreaLine,
  TbClipboardCheck,
  TbMapPin,
  TbRoute,
  TbUsers,
} from 'react-icons/tb';
import SectionHeading from '../common/SectionHeading';

const easeOut = [0.22, 1, 0.36, 1];

function BentoCard({ span, icon: Icon, title, desc, visual, row, index }) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ delay: (index % 3) * 0.12, duration: 0.8, ease: easeOut }}
      sx={{
        gridColumn: { xs: 'span 12', md: `span ${span}` },
        position: 'relative',
        borderRadius: '20px',
        border: '1px solid var(--stroke)',
        background: 'var(--surface-2)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: row ? { xs: 'column', lg: 'row' } : 'column',
        transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
        '&:hover': {
          transform: 'translateY(-5px)',
          borderColor: 'rgba(24, 200, 219, 0.4)',
          boxShadow: '0 24px 60px rgba(24, 200, 219, 0.1)',
          '& .bento-arrow': { opacity: 1, transform: 'translate(0, 0)' },
          '& .bento-icon': { background: 'var(--cyan)', color: '#04121C' },
        },
      }}
    >
      {visual && (
        <Box
          sx={{
            flex: row ? { lg: '0 0 46%' } : 'none',
            minHeight: row ? 180 : 150,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2.5,
            order: row ? { lg: 2 } : 0,
          }}
        >
          {visual}
        </Box>
      )}
      <Box sx={{ p: 3, pt: visual && !row ? 0 : 3, flex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box
            className="bento-icon"
            sx={{
              width: 40,
              height: 40,
              borderRadius: '12px',
              display: 'grid',
              placeItems: 'center',
              color: 'var(--accent)',
              background: 'var(--tint-cyan)',
              transition: 'all 0.3s ease',
            }}
          >
            <Icon size={21} />
          </Box>
          <Box
            className="bento-arrow"
            sx={{
              color: 'var(--accent)',
              opacity: 0,
              transform: 'translate(-6px, 6px)',
              transition: 'all 0.3s ease',
            }}
          >
            <TbArrowUpRight size={20} />
          </Box>
        </Box>
        <Typography variant="h6" sx={{ mt: 2, fontSize: '1.12rem', color: 'var(--ink-1)' }}>
          {title}
        </Typography>
        <Typography sx={{ mt: 1, fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--ink-2)' }}>
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}

/* ---- Mini visuals ---- */

function TrackingVisual() {
  return (
    <svg viewBox="0 0 240 130" width="100%" style={{ maxWidth: 280 }}>
      <g style={{ stroke: 'var(--map-line-strong)' }} strokeWidth="1.5" fill="none">
        <path d="M 0 40 C 60 36 180 46 240 38" />
        <path d="M 0 92 C 80 86 160 98 240 90" />
        <path d="M 70 0 C 72 50 68 90 71 130" />
        <path d="M 170 0 C 168 40 173 100 169 130" />
      </g>
      <motion.path
        d="M 18 112 C 60 100 90 64 130 58 C 170 52 196 34 224 22"
        stroke="#18C8DB"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.4 }}
      />
      <circle cx="18" cy="112" r="4" fill="#0C8A9B" />
      <g>
        <circle className="svg-ping" cx="224" cy="22" r="7" fill="none" stroke="#18C8DB" strokeWidth="1.4" />
        <circle cx="224" cy="22" r="4.5" fill="#18C8DB" />
      </g>
      <circle className="svg-ping" cx="130" cy="58" r="6" fill="none" stroke="rgba(24,200,219,0.5)" strokeWidth="1.2" style={{ animationDelay: '1s' }} />
      <circle cx="130" cy="58" r="3.5" fill="#18C8DB" opacity="0.8" />
    </svg>
  );
}

function HosVisual() {
  const segments = [
    { x: 0, w: 34, label: 'OFF', dim: true },
    { x: 36, w: 26, label: 'SB', dim: true },
    { x: 64, w: 88, label: 'D' },
    { x: 154, w: 36, label: 'ON', dim: true },
    { x: 192, w: 48, label: 'D' },
  ];
  return (
    <Box sx={{ width: '100%', maxWidth: 280 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--ink-3)', mb: 1 }}>
        <span>12 AM</span>
        <span>6 AM</span>
        <span>12 PM</span>
        <span>6 PM</span>
      </Box>
      <svg viewBox="0 0 240 46" width="100%">
        {segments.map((s, i) => (
          <motion.rect
            key={i}
            x={s.x}
            y={s.dim ? 16 : 8}
            height={s.dim ? 14 : 30}
            rx="5"
            initial={{ width: 0 }}
            whileInView={{ width: s.w }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.14, duration: 0.6, ease: easeOut }}
            style={{ fill: s.dim ? 'var(--track-bg)' : '#18C8DB' }}
          />
        ))}
      </svg>
      <Box sx={{ display: 'flex', gap: 1, mt: 1.25, alignItems: 'center' }}>
        <Box sx={{ px: 1.1, py: 0.35, borderRadius: 99, fontSize: 10.5, fontWeight: 700, color: 'var(--good)', background: 'var(--good-bg)', border: '1px solid var(--good-border)' }}>
          Compliant
        </Box>
        <Box sx={{ fontSize: 11, color: 'var(--ink-3)' }}>Auto duty-status · audit-ready</Box>
      </Box>
    </Box>
  );
}

function CameraVisual() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: 250,
        aspectRatio: '16/9',
        borderRadius: '12px',
        border: '1px solid var(--stroke-strong)',
        background:
          'linear-gradient(180deg, rgba(24,200,219,0.08), transparent 55%), var(--glass)',
        overflow: 'hidden',
      }}
    >
      {[
        { pos: { top: 6, left: 6 }, b: '2px 0 0 2px' },
        { pos: { top: 6, right: 6 }, b: '2px 2px 0 0' },
        { pos: { bottom: 6, left: 6 }, b: '0 0 2px 2px' },
        { pos: { bottom: 6, right: 6 }, b: '0 2px 2px 0' },
      ].map((c, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            ...c.pos,
            width: 14,
            height: 14,
            borderStyle: 'solid',
            borderColor: 'var(--accent)',
            borderWidth: c.b,
            opacity: 0.8,
          }}
        />
      ))}
      <Box
        component={motion.div}
        animate={{ y: [0, 108, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 8,
          height: 2,
          background: 'linear-gradient(90deg, transparent, rgba(24,200,219,0.7), transparent)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 10,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: 0.6,
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '0.12em',
          color: 'var(--ink-2)',
        }}
      >
        <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#F87171', animation: 'pulseDot 1.6s infinite' }} />
        REC
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 10,
          left: '50%',
          transform: 'translateX(-50%)',
          px: 1.2,
          py: 0.4,
          borderRadius: 99,
          fontSize: 10.5,
          fontWeight: 600,
          whiteSpace: 'nowrap',
          color: 'var(--warn)',
          background: 'var(--warn-bg)',
          border: '1px solid var(--stroke)',
        }}
      >
        Following distance · clip saved
      </Box>
    </Box>
  );
}

function FuelVisual() {
  return (
    <svg viewBox="0 0 240 110" width="100%" style={{ maxWidth: 260 }}>
      <defs>
        <linearGradient id="fuelFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(24,200,219,0.35)" />
          <stop offset="1" stopColor="rgba(24,200,219,0)" />
        </linearGradient>
      </defs>
      {[28, 56, 84].map((y) => (
        <line key={y} x1="0" x2="240" y1={y} y2={y} style={{ stroke: 'var(--map-line)' }} strokeWidth="1" />
      ))}
      <motion.path
        d="M 0 84 C 30 78 48 60 78 62 C 108 64 122 42 152 40 C 182 38 200 28 240 22 L 240 110 L 0 110 Z"
        fill="url(#fuelFill)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 1 }}
      />
      <motion.path
        d="M 0 84 C 30 78 48 60 78 62 C 108 64 122 42 152 40 C 182 38 200 28 240 22"
        stroke="#18C8DB"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
      />
      <circle cx="152" cy="40" r="4" fill="#18C8DB" style={{ stroke: 'var(--panel-solid)' }} strokeWidth="2" />
    </svg>
  );
}

function AssetVisual() {
  return (
    <svg viewBox="0 0 240 120" width="100%" style={{ maxWidth: 240 }}>
      <motion.path
        d="M 20 100 C 60 96 90 70 120 62 C 150 54 180 40 216 26"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeDasharray="3 7"
        fill="none"
        strokeLinecap="round"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
      />
      <circle cx="20" cy="100" r="4" style={{ fill: 'var(--ink-3)' }} />
      <circle cx="120" cy="62" r="4" style={{ fill: 'var(--ink-3)' }} />
      <g>
        <circle className="svg-ping" cx="216" cy="26" r="9" fill="none" stroke="#18C8DB" strokeWidth="1.4" />
        <path
          d="M216 12 C208 12 202 18 202 26 C202 34 213 44 216 50 C219 44 230 34 230 26 C230 18 224 12 216 12 Z"
          fill="#18C8DB"
        />
        <circle cx="216" cy="25" r="4.5" style={{ fill: 'var(--panel-solid)' }} />
      </g>
    </svg>
  );
}

function DriversVisual() {
  const drivers = [
    { name: 'Sarah M.', score: 98 },
    { name: 'Devon K.', score: 94 },
    { name: 'Luis R.', score: 91 },
  ];
  return (
    <Box sx={{ width: '100%', maxWidth: 260, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
      {drivers.map((d, i) => (
        <Box key={d.name} sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
          <Box
            sx={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              display: 'grid',
              placeItems: 'center',
              fontSize: 10.5,
              fontWeight: 700,
              color: 'var(--accent)',
              background: 'var(--tint-cyan)',
              flexShrink: 0,
            }}
          >
            {d.name.split(' ')[0][0]}
            {d.name.split(' ')[1][0]}
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, color: 'var(--ink-2)', mb: 0.5 }}>
              <span>{d.name}</span>
              <b style={{ color: 'var(--ink-1)' }}>{d.score}</b>
            </Box>
            <Box sx={{ height: 5, borderRadius: 99, background: 'var(--track-bg)' }}>
              <Box
                component={motion.div}
                initial={{ width: 0 }}
                whileInView={{ width: `${d.score}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.15, duration: 1, ease: easeOut }}
                sx={{
                  height: '100%',
                  borderRadius: 99,
                  background: 'linear-gradient(90deg, #0C8A9B, #18C8DB)',
                }}
              />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

function BatteryChip() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6, fontSize: 11, color: 'var(--ink-2)' }}>
      <TbBattery3 size={15} color="#18C8DB" />
      5-year battery
    </Box>
  );
}

const CARDS = [
  {
    span: 7,
    row: true,
    icon: TbRoute,
    title: 'GPS Fleet Tracking',
    desc: 'Second-by-second location, breadcrumb history, geofences and live ETAs for every vehicle — refreshed in real time, not minutes.',
    visual: <TrackingVisual />,
  },
  {
    span: 5,
    icon: TbClipboardCheck,
    title: 'ELD Compliance',
    desc: 'Automatic hours-of-service logs, DVIRs and violation alerts before they happen. FMCSA-registered and roadside-inspection ready.',
    visual: <HosVisual />,
  },
  {
    span: 4,
    icon: TbCamera,
    title: 'AI Dash Cameras',
    desc: 'Dual-facing HD cameras detect risk in real time and save incident clips that protect your drivers.',
    visual: <CameraVisual />,
  },
  {
    span: 4,
    icon: TbChartAreaLine,
    title: 'Fuel Monitoring',
    desc: 'Live fuel levels, theft alerts, idle-cost tracking and MPG trends across the whole fleet.',
    visual: <FuelVisual />,
  },
  {
    span: 4,
    icon: TbMapPin,
    title: 'Asset Tracking',
    desc: 'Trailers, containers and equipment stay on the map for years on a single battery.',
    visual: <AssetVisual />,
    extra: <BatteryChip />,
  },
  {
    span: 12,
    row: true,
    icon: TbUsers,
    title: 'Driver Management',
    desc: 'Safety scorecards, coaching workflows, document management and payroll-ready reports — everything your back office needs to keep great drivers happy and improving.',
    visual: <DriversVisual />,
  },
];

export default function Platform() {
  return (
    <Box component="section" id="platform" sx={{ py: { xs: 10, md: 14 } }}>
      <Container>
        <SectionHeading
          eyebrow="Platform"
          title="Everything your fleet runs on,"
          gradientWord="in one place"
          sub="Nine tools glued together means nine logins and nine invoices. Quality Logs replaces the pile with a single connected platform."
        />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 2.5,
          }}
        >
          {CARDS.map((card, i) => (
            <BentoCard key={card.title} index={i} {...card} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
