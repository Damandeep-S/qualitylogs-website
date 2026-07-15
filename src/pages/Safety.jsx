import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import {
  TbArrowRight,
  TbCalendarTime,
  TbCheck,
  TbCircleCheck,
  TbClipboardList,
  TbLicense,
  TbPhone,
  TbRefresh,
  TbShieldCheck,
} from 'react-icons/tb';
import { Link as RouterLink } from 'react-router-dom';
import CtaBanner from '../components/sections/CtaBanner';
import Reveal from '../components/common/Reveal';
import SectionHeading from '../components/common/SectionHeading';

const easeOut = [0.22, 1, 0.36, 1];

/* ---------- Hero ---------- */

const CHECKLIST_PREVIEW = [
  { label: 'USDOT / MC number issued', status: 'Done' },
  { label: '2290 tax filing submitted', status: 'Filed' },
  { label: 'IFTA CA quarterly fuel tax', status: 'Filed' },
  { label: 'CARB certificate renewal', status: 'Renewed' },
  { label: 'New York HUT permit', status: 'Active' },
];

function ComplianceChecklistCard() {
  return (
    <Box
      sx={{
        maxWidth: 430,
        mx: { xs: 'auto', md: 0 },
        ml: { md: 'auto' },
        borderRadius: '22px',
        border: '1px solid var(--card-border)',
        background: 'var(--panel-bg)',
        boxShadow: 'var(--panel-shadow)',
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
        <TbClipboardList size={18} color="#18C8DB" />
        Compliance file · your fleet
        <Box sx={{ ml: 'auto', width: 7, height: 7, borderRadius: '50%', background: 'var(--cyan)', animation: 'pulseDot 2s infinite' }} />
      </Box>
      <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
        {CHECKLIST_PREVIEW.map((item, i) => (
          <Box
            key={item.label}
            component={motion.div}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + i * 0.14, duration: 0.55, ease: easeOut }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              px: 2,
              py: 1.4,
              borderRadius: '14px',
              border: '1px solid var(--stroke)',
              background: 'var(--glass)',
            }}
          >
            <Box
              component={motion.div}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.85 + i * 0.14, type: 'spring', bounce: 0.5, duration: 0.6 }}
              sx={{
                width: 26,
                height: 26,
                borderRadius: '50%',
                display: 'grid',
                placeItems: 'center',
                color: '#04121C',
                background: 'linear-gradient(135deg, #18C8DB, #5EDDEE)',
                flexShrink: 0,
              }}
            >
              <TbCheck size={15} />
            </Box>
            <Box sx={{ fontSize: 13.5, color: 'var(--ink-1)', flex: 1 }}>{item.label}</Box>
            <Box
              sx={{
                px: 1.1,
                py: 0.35,
                borderRadius: 99,
                fontSize: 10.5,
                fontWeight: 700,
                color: 'var(--good)',
                background: 'var(--good-bg)',
                border: '1px solid var(--good-border)',
              }}
            >
              {item.status}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function SafetyHero() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 16, md: 21 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Box
        component={motion.img}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: easeOut }}
        src="/images/safety-hero.jpg"
        alt="Driver walking between parked semi trucks at sunset"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 40%',
          filter: 'saturate(0.7)',
        }}
      />
      <Box sx={{ position: 'absolute', inset: 0, background: 'var(--hero-photo-wash-a)' }} />
      <Box sx={{ position: 'absolute', inset: 0, background: 'var(--hero-photo-wash-b)' }} />
      {/* Top strip keeps the navbar readable over the photo's bright sky */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, var(--bg-0) 0%, transparent 24%)',
          opacity: 0.8,
        }}
      />

      <Container sx={{ position: 'relative' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' },
            gap: { xs: 6, md: 8 },
            alignItems: 'center',
          }}
        >
          <Box>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: easeOut }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 1.9,
                  py: 0.8,
                  borderRadius: 999,
                  border: '1px solid var(--stroke-strong)',
                  background: 'var(--glass-strong)',
                  fontSize: 12.5,
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-2)',
                }}
              >
                <TbShieldCheck size={15} color="#18C8DB" />
                Safety & Compliance
              </Box>
            </motion.div>

            <Typography
              variant="h1"
              sx={{ mt: 3, fontSize: 'clamp(2.4rem, 4.8vw, 3.9rem)', lineHeight: 1.07, color: 'var(--ink-1)' }}
            >
              <Box component={motion.span} initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ delay: 0.3, duration: 0.8, ease: easeOut }} sx={{ display: 'inline-block', mr: '0.24em' }}>
                Permits, filings, renewals —
              </Box>
              <Box
                component={motion.span}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.45, duration: 0.8, ease: easeOut }}
                sx={{
                  display: 'inline-block',
                  background: 'var(--headline-grad)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                off your desk.
              </Box>
            </Typography>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8, ease: easeOut }}
            >
              <Typography sx={{ mt: 3, maxWidth: 520, fontSize: { xs: '1rem', md: '1.12rem' }, lineHeight: 1.65, color: 'var(--ink-2)' }}>
                From your first USDOT number to every quarterly fuel tax after it, our compliance
                team files it, tracks it and renews it — so nothing lapses while you're on the road.
              </Typography>

              <Box sx={{ mt: 3.5, display: 'flex', alignItems: 'baseline', gap: 1.25 }}>
                <Box sx={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink-3)' }}>Starting from</Box>
                <Box sx={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '2.4rem', letterSpacing: '-0.02em', color: 'var(--accent)' }}>
                  $50
                </Box>
                <Box sx={{ fontSize: '0.9rem', color: 'var(--ink-3)' }}>/ mo</Box>
              </Box>

              <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2 }}>
                <Button
                  component={RouterLink}
                  to="/contact"
                  endIcon={<TbArrowRight size={18} />}
                  sx={{
                    px: 3.25,
                    py: 1.4,
                    fontWeight: 700,
                    fontSize: '0.98rem',
                    color: '#04121C',
                    background: 'linear-gradient(135deg, #18C8DB 0%, #5EDDEE 100%)',
                    boxShadow: '0 8px 32px rgba(24, 200, 219, 0.35)',
                    '&:hover': { background: 'linear-gradient(135deg, #2BD3E5 0%, #74E4F2 100%)' },
                  }}
                >
                  Talk to compliance
                </Button>
                <Box
                  component="a"
                  href="tel:+18144140132"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--ink-2)',
                    textDecoration: 'none',
                    '&:hover': { color: 'var(--ink-1)' },
                  }}
                >
                  <TbPhone size={18} color="#18C8DB" />
                  +1 (814) 414-0132
                </Box>
              </Box>
            </motion.div>
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: easeOut }}
          >
            <ComplianceChecklistCard />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

/* ---------- New authority setup ---------- */

const SETUP_SERVICES = [
  'INC & LLC Filing',
  'BOC3 Filing',
  'Federal Tax ID',
  'UCR',
  'S Corp Filing',
  'CA Number',
  'USDOT / MC Number',
  'IFTA CA',
  'Statement of Information',
  'New Mexico WDT',
  'Oregon Permit (Bond by Client)',
  'NYC HUT Permit',
  'KYU Number',
];

function SetupServices() {
  return (
    <Box component="section" id="authority" sx={{ py: { xs: 10, md: 14 } }}>
      <Container>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '0.85fr 1.15fr' },
            gap: { xs: 5, md: 9 },
            alignItems: 'start',
          }}
        >
          <Box sx={{ position: { md: 'sticky' }, top: { md: 120 } }}>
            <SectionHeading
              align="left"
              eyebrow="New authority"
              title="Starting a trucking company?"
              gradientWord="We file everything."
              sx={{ mb: 3 }}
            />
            <Reveal delay={0.15}>
              <Typography sx={{ color: 'var(--ink-2)', lineHeight: 1.75, fontSize: '1rem' }}>
                Company formation, federal authority, state permits and tax accounts — one package,
                one point of contact. You pick the truck; we make it legal to run.
              </Typography>
            </Reveal>
            <Reveal delay={0.25}>
              <Box
                sx={{
                  mt: 3.5,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.25,
                  px: 2,
                  py: 1.25,
                  borderRadius: '14px',
                  border: '1px solid rgba(24,200,219,0.3)',
                  background: 'var(--tint-cyan)',
                }}
              >
                <TbLicense size={22} color="#18C8DB" />
                <Box>
                  <Box sx={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink-1)' }}>
                    13 filings in one package
                  </Box>
                  <Box sx={{ fontSize: 12, color: 'var(--ink-3)' }}>From LLC to KYU — done for you</Box>
                </Box>
              </Box>
            </Reveal>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignContent: 'flex-start' }}>
            {SETUP_SERVICES.map((service, i) => (
              <Box
                key={service}
                component={motion.div}
                initial={{ opacity: 0, y: 18, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: easeOut }}
                whileHover={{ y: -3 }}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.1,
                  px: 2.25,
                  py: 1.4,
                  borderRadius: 999,
                  border: '1px solid var(--stroke)',
                  background: 'var(--surface-2)',
                  fontSize: '0.93rem',
                  fontWeight: 600,
                  color: 'var(--ink-1)',
                  transition: 'border-color 0.25s ease, background 0.25s ease',
                  '&:hover': { borderColor: 'rgba(24,200,219,0.45)', background: 'var(--tint-cyan)' },
                }}
              >
                <TbCircleCheck size={18} color="#18C8DB" style={{ flexShrink: 0 }} />
                {service}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

/* ---------- Year-round compliance ---------- */

const ONGOING_GROUPS = [
  {
    icon: TbRefresh,
    title: 'Renewals',
    desc: 'Permits and plates renewed before they expire — we track every date.',
    items: [
      'IRP License Plate Renewal',
      'IFTA CA Permit Renewal',
      'Connecticut Permit Renewal',
      'Kentucky Permit Renewal',
      'New York HUT Permit Renewal',
      'Oregon Permit Renewal',
      'CARB Certificate Renewal',
    ],
  },
  {
    icon: TbCalendarTime,
    title: 'Quarterly & periodic filings',
    desc: 'Fuel taxes and reports filed on time, every quarter, in every state you run.',
    items: [
      '2290 Tax Filing',
      'IFTA CA Quarterly Fuel Tax Filing',
      'New Mexico Quarterly Fuel Tax Filing',
      'Kentucky Quarterly Fuel Tax Filing',
      'New York HUT Quarterly Fuel Tax Filing',
      'Connecticut Quarterly Tax Filing',
      'Oregon Monthly Tax Filing',
      'Arkansas Carrier Annual Report',
    ],
  },
  {
    icon: TbClipboardList,
    title: 'Updates & registrations',
    desc: 'Federal records kept current so audits and brokers never find a mismatch.',
    items: ['USDOT Update', 'MC Number Update', 'UCR Registration'],
  },
];

function OngoingCompliance() {
  return (
    <Box
      component="section"
      id="filings"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'radial-gradient(900px 520px at 90% 0%, var(--cyan-soft), transparent 60%)',
      }}
    >
      <Container>
        <SectionHeading
          eyebrow="Year-round"
          title="Stay compliant"
          gradientWord="every quarter"
          sub="One team watching every deadline — renewals, quarterly fuel taxes and federal updates across all the states you run."
        />

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3, alignItems: 'stretch' }}>
          {ONGOING_GROUPS.map((group, i) => (
            <Box
              key={group.title}
              component={motion.div}
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ delay: i * 0.13, duration: 0.75, ease: easeOut }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '22px',
                border: '1px solid var(--stroke)',
                background: 'var(--surface-2)',
                p: { xs: 3, md: 3.5 },
                transition: 'border-color 0.3s ease, transform 0.3s ease',
                '&:hover': { borderColor: 'rgba(24,200,219,0.4)', transform: 'translateY(-4px)' },
              }}
            >
              <Box
                sx={{
                  width: 46,
                  height: 46,
                  borderRadius: '14px',
                  display: 'grid',
                  placeItems: 'center',
                  color: 'var(--accent)',
                  background: 'var(--tint-cyan)',
                }}
              >
                <group.icon size={24} />
              </Box>
              <Typography variant="h6" sx={{ mt: 2.25, fontSize: '1.15rem', color: 'var(--ink-1)' }}>
                {group.title}
              </Typography>
              <Typography sx={{ mt: 1, fontSize: '0.89rem', lineHeight: 1.6, color: 'var(--ink-2)' }}>
                {group.desc}
              </Typography>

              <Box sx={{ mt: 2.5, pt: 2.5, borderTop: '1px solid var(--stroke)', display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                {group.items.map((item) => (
                  <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.1, fontSize: '0.88rem', color: 'var(--ink-2)' }}>
                    <TbCheck size={15} color="#18C8DB" style={{ flexShrink: 0, marginTop: 3 }} />
                    {item}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        <Reveal delay={0.2}>
          <Typography sx={{ mt: 5, textAlign: 'center', fontSize: '0.88rem', color: 'var(--ink-3)' }}>
            Plans start at $50/month and scale with your fleet and the states you operate in — call
            for an exact quote.
          </Typography>
        </Reveal>
      </Container>
    </Box>
  );
}

export default function Safety() {
  return (
    <>
      <SafetyHero />
      <SetupServices />
      <OngoingCompliance />
      <CtaBanner />
    </>
  );
}
