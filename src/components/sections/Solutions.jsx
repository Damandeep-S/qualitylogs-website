import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AnimatePresence, motion } from 'framer-motion';
import {
  TbAlertTriangle,
  TbCamera,
  TbChartBar,
  TbCircleCheck,
  TbClock,
  TbCoin,
  TbEye,
  TbFileCertificate,
  TbFlame,
  TbGauge,
  TbMap2,
  TbReportAnalytics,
  TbShare,
  TbShieldCheck,
  TbTargetArrow,
} from 'react-icons/tb';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';

const easeOut = [0.22, 1, 0.36, 1];

const TABS = [
  {
    key: 'compliance',
    label: 'Compliance',
    icon: TbFileCertificate,
    heading: 'ELD & HOS made effortless',
    copy: 'Logs write themselves, violations get flagged before they happen, and audits stop being a fire drill.',
    bullets: [
      'Automatic duty-status and HOS logs',
      'Pre-violation alerts to drivers and dispatch',
      'IFTA mileage calculated per jurisdiction',
      'One-tap roadside inspection mode',
    ],
    rows: [
      { icon: TbClock, label: 'Drive time remaining', value: '6h 24m', chip: 'OK', good: true },
      { icon: TbAlertTriangle, label: 'Violations this month', value: '0', chip: '-35%', good: true },
      { icon: TbFileCertificate, label: 'IFTA Q2 report', value: 'Ready', chip: 'Auto', good: true },
    ],
  },
  {
    key: 'safety',
    label: 'Safety',
    icon: TbShieldCheck,
    heading: 'AI that coaches before the incident',
    copy: 'Cameras and AI watch the road so your safety team can watch the trends — and your drivers get credit for good driving.',
    bullets: [
      'Real-time distraction and tailgating detection',
      'Auto-generated coaching queue with clips',
      'Exoneration evidence in minutes, not days',
      'Driver safety scores and leaderboards',
    ],
    rows: [
      { icon: TbCamera, label: 'Events reviewed by AI', value: '1,284', chip: '98% auto', good: true },
      { icon: TbTargetArrow, label: 'Fleet safety score', value: '94', chip: '+6 pts', good: true },
      { icon: TbEye, label: 'Coachable events open', value: '3', chip: 'Low', good: true },
    ],
  },
  {
    key: 'efficiency',
    label: 'Efficiency',
    icon: TbGauge,
    heading: 'Cut fuel and idle costs',
    copy: 'See exactly where fuel goes, stop theft the day it happens, and turn idle hours back into margin.',
    bullets: [
      'Live fuel levels with theft alerts',
      'Idle-time and MPG trends per driver',
      'Fuel-card purchases matched to tank data',
      'Route-vs-plan variance reports',
    ],
    rows: [
      { icon: TbFlame, label: 'Idle cost this week', value: '$412', chip: '-18%', good: true },
      { icon: TbGauge, label: 'Fleet average MPG', value: '7.2', chip: '+4%', good: true },
      { icon: TbCoin, label: 'Unmatched fuel purchases', value: '1', chip: 'Review', good: false },
    ],
  },
  {
    key: 'visibility',
    label: 'Visibility',
    icon: TbMap2,
    heading: 'Every asset on one map',
    copy: 'Trucks, trailers and equipment in one live view — with share links your customers can actually use.',
    bullets: [
      'Live map with 1-second GPS refresh',
      'Geofence entry and exit notifications',
      'Shareable customer ETA links',
      'Utilization reports for every asset',
    ],
    rows: [
      { icon: TbMap2, label: 'Assets reporting now', value: '142/142', chip: 'Live', good: true },
      { icon: TbShare, label: 'Customer ETA links active', value: '17', chip: 'Shared', good: true },
      { icon: TbChartBar, label: 'Trailer utilization', value: '87%', chip: '+9%', good: true },
    ],
  },
];

function PanelCard({ tab }) {
  return (
    <Box
      sx={{
        borderRadius: '20px',
        border: '1px solid var(--card-border)',
        background: 'var(--panel-bg)',
        boxShadow: 'var(--shadow-card)',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.25,
          px: 2.5,
          py: 1.75,
          borderBottom: '1px solid var(--stroke)',
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 14,
          color: 'var(--ink-1)',
        }}
      >
        <tab.icon size={18} color="#18C8DB" />
        {tab.label} snapshot
        <Box
          sx={{
            ml: 'auto',
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: 'var(--cyan)',
            animation: 'pulseDot 2s infinite',
          }}
        />
      </Box>
      <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {tab.rows.map((row, i) => (
          <Box
            key={row.label}
            component={motion.div}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.55, ease: easeOut }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              px: 2,
              py: 1.5,
              borderRadius: '14px',
              border: '1px solid var(--stroke)',
              background: 'var(--glass)',
            }}
          >
            <Box
              sx={{
                width: 34,
                height: 34,
                borderRadius: '10px',
                display: 'grid',
                placeItems: 'center',
                color: 'var(--accent)',
                background: 'var(--tint-cyan)',
                flexShrink: 0,
              }}
            >
              <row.icon size={18} />
            </Box>
            <Box sx={{ fontSize: 13, color: 'var(--ink-2)', flex: 1 }}>{row.label}</Box>
            <Box sx={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15.5, color: 'var(--ink-1)' }}>
              {row.value}
            </Box>
            <Box
              sx={{
                px: 1.1,
                py: 0.35,
                borderRadius: 99,
                fontSize: 10.5,
                fontWeight: 700,
                color: row.good ? 'var(--good)' : 'var(--warn)',
                background: row.good ? 'var(--good-bg)' : 'var(--warn-bg)',
                border: '1px solid',
                borderColor: row.good ? 'var(--good-border)' : 'var(--stroke)',
              }}
            >
              {row.chip}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default function Solutions() {
  const [active, setActive] = useState(TABS[0].key);
  const tab = TABS.find((t) => t.key === active);

  return (
    <Box
      component="section"
      id="solutions"
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
        background:
          'radial-gradient(900px 500px at 10% 0%, var(--cyan-soft), transparent 60%)',
      }}
    >
      <Container>
        <SectionHeading
          align="left"
          eyebrow="Solutions"
          title="Built around the problems"
          gradientWord="fleets actually have"
          sub="Pick the fight — compliance, safety, cost or visibility — and see how the platform takes it on."
        />

        <Reveal>
          <Box
            sx={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              gap: 0.5,
              p: 0.5,
              borderRadius: 999,
              border: '1px solid var(--stroke)',
              background: 'var(--glass)',
              mb: { xs: 5, md: 7 },
            }}
          >
            {TABS.map((t) => (
              <Box
                key={t.key}
                component="button"
                onClick={() => setActive(t.key)}
                sx={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.9,
                  px: { xs: 1.75, md: 2.5 },
                  py: 1.1,
                  border: 'none',
                  borderRadius: 999,
                  background: 'transparent',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: active === t.key ? '#04121C' : 'var(--ink-2)',
                  transition: 'color 0.25s ease',
                }}
              >
                {active === t.key && (
                  <motion.span
                    layoutId="solutions-tab-pill"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.55 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: 999,
                      background: 'linear-gradient(135deg, #18C8DB, #5EDDEE)',
                    }}
                  />
                )}
                <Box component="span" sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 0.9 }}>
                  <t.icon size={17} />
                  {t.label}
                </Box>
              </Box>
            ))}
          </Box>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab.key}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.45, ease: easeOut }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: { xs: 5, md: 8 },
                alignItems: 'center',
              }}
            >
              <Box>
                <Typography variant="h3" sx={{ fontSize: 'clamp(1.5rem, 2.6vw, 2.1rem)', color: 'var(--ink-1)' }}>
                  {tab.heading}
                </Typography>
                <Typography sx={{ mt: 1.75, color: 'var(--ink-2)', lineHeight: 1.65 }}>
                  {tab.copy}
                </Typography>
                <Box sx={{ mt: 3.5, display: 'flex', flexDirection: 'column', gap: 1.75 }}>
                  {tab.bullets.map((b, i) => (
                    <Box
                      key={b}
                      component={motion.div}
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.09, duration: 0.5, ease: easeOut }}
                      sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: 'var(--ink-1)', fontSize: '0.98rem' }}
                    >
                      <TbCircleCheck size={20} color="#18C8DB" style={{ flexShrink: 0 }} />
                      {b}
                    </Box>
                  ))}
                </Box>
              </Box>
              <PanelCard tab={tab} />
            </Box>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
}
