import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import {
  TbArrowRight,
  TbCreditCard,
  TbDeviceMobile,
  TbExternalLink,
  TbGasStation,
  TbMapPin,
  TbReceipt2,
  TbWallet,
} from 'react-icons/tb';
import { Link as RouterLink } from 'react-router-dom';
import CountUp from '../components/common/CountUp';
import CtaBanner from '../components/sections/CtaBanner';
import Reveal from '../components/common/Reveal';
import SectionHeading from '../components/common/SectionHeading';

const easeOut = [0.22, 1, 0.36, 1];

/* ---------- Hero ---------- */

function FuelHero() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 16, md: 21 },
        pb: { xs: 9, md: 13 },
        textAlign: 'center',
      }}
    >
      <Box
        component={motion.img}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: easeOut }}
        src="/images/fuel-hero.jpg"
        alt="Truck refueling at a fuel station canopy"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 68%',
          filter: 'saturate(0.72)',
        }}
      />
      {/* Photo has a bright sky — uniform veil keeps centered text readable in both themes */}
      <Box sx={{ position: 'absolute', inset: 0, background: 'var(--hero-photo-wash-c)' }} />
      <Box sx={{ position: 'absolute', inset: 0, background: 'var(--hero-photo-wash-b)' }} />

      <Container sx={{ position: 'relative' }}>
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
            <TbGasStation size={15} color="#18C8DB" />
            Quality Logs Fuel Card
          </Box>
        </motion.div>

        {/* Giant savings stat */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.9, ease: easeOut }}
        >
          <Box
            sx={{
              mt: 4,
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(4.5rem, 13vw, 9rem)',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              background: 'var(--headline-grad)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            <CountUp to={70} suffix="¢" duration={2.2} delay={0.5} />
          </Box>
          <Typography
            sx={{
              mt: 1,
              fontSize: { xs: '1rem', md: '1.2rem' },
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--ink-2)',
            }}
          >
            Average savings per gallon
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: easeOut }}
        >
          <Typography sx={{ mt: 3, mx: 'auto', maxWidth: 560, fontSize: { xs: '1rem', md: '1.12rem' }, lineHeight: 1.65, color: 'var(--ink-2)' }}>
            Prepaid, cardless fueling on the Circle network — TA, Petro and Love's — with real
            discounts on every gallon, not points you'll never use.
          </Typography>

          <Box sx={{ mt: 4.5, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Button
              component={RouterLink}
              to="/#demo"
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
              Get the card
            </Button>
            <Button
              component="a"
              href="https://cfcorps.com"
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<TbExternalLink size={17} />}
              sx={{
                px: 3.25,
                py: 1.4,
                fontWeight: 700,
                fontSize: '0.98rem',
                color: 'var(--ink-1)',
                border: '1px solid var(--stroke-strong)',
                background: 'var(--glass)',
                '&:hover': { background: 'var(--glass-strong)' },
              }}
            >
              Visit cfcorps.com
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

/* ---------- How it saves ---------- */

const FEATURES = [
  {
    icon: TbWallet,
    title: 'Prepaid — you set the limit',
    desc: 'Load what you want to spend. No surprise balances, no credit checks holding up new trucks, no interest eating the discount.',
  },
  {
    icon: TbDeviceMobile,
    title: 'Cardless fueling',
    desc: 'Authorize pumps from the mobile app or a one-time PIN. Perfect for temp drivers and last-minute additions — no plastic to hand over or lose.',
  },
  {
    icon: TbMapPin,
    title: 'Circle network coverage',
    desc: 'In-network discounts at TA, Petro and Love’s locations across the country — the stops your drivers already use.',
  },
  {
    icon: TbReceipt2,
    title: 'One clean invoice',
    desc: 'Every gallon, every driver, every truck on a single consolidated statement — with per-driver and per-vehicle controls in real time.',
  },
];

function FuelFeatures() {
  return (
    <Box component="section" id="fuel-features" sx={{ py: { xs: 10, md: 14 } }}>
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Fuel savings without"
          gradientWord="the fine print"
          sub="A prepaid program built for trucking — control the spend before it happens instead of chasing it after."
        />

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 3 }}>
          {FEATURES.map((feature, i) => (
            <Box
              key={feature.title}
              component={motion.div}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ delay: (i % 2) * 0.12, duration: 0.7, ease: easeOut }}
              sx={{
                display: 'flex',
                gap: 2.5,
                borderRadius: '20px',
                border: '1px solid var(--stroke)',
                background: 'var(--surface-2)',
                p: { xs: 3, md: 4 },
                transition: 'border-color 0.3s ease, transform 0.3s ease',
                '&:hover': { borderColor: 'rgba(24,200,219,0.4)', transform: 'translateY(-4px)' },
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '15px',
                  display: 'grid',
                  placeItems: 'center',
                  flexShrink: 0,
                  color: 'var(--accent)',
                  background: 'var(--tint-cyan)',
                }}
              >
                <feature.icon size={26} />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontSize: '1.12rem', color: 'var(--ink-1)' }}>
                  {feature.title}
                </Typography>
                <Typography sx={{ mt: 1, fontSize: '0.92rem', lineHeight: 1.68, color: 'var(--ink-2)' }}>
                  {feature.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

/* ---------- CFCorps band ---------- */

function CfcorpsBand() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
      <Container>
        <Reveal>
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '24px',
              /* Stays midnight in both themes — branded band */
              background: 'linear-gradient(120deg, #0B2C41 0%, #071B29 100%)',
              border: '1px solid rgba(94, 221, 238, 0.16)',
              px: { xs: 3, md: 6 },
              py: { xs: 4, md: 5 },
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <Box
              aria-hidden
              sx={{
                position: 'absolute',
                top: '-60%',
                right: '-5%',
                width: 380,
                height: 380,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(24,200,219,0.16), transparent 65%)',
                pointerEvents: 'none',
              }}
            />
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: '16px',
                display: 'grid',
                placeItems: 'center',
                flexShrink: 0,
                background: 'rgba(24, 200, 219, 0.12)',
                border: '1px solid rgba(94, 221, 238, 0.3)',
              }}
            >
              <TbCreditCard size={28} color="#5EDDEE" />
            </Box>
            <Box sx={{ flex: 1, minWidth: 240 }}>
              <Typography variant="h6" sx={{ fontSize: '1.2rem', color: '#ECF4F7' }}>
                The fuel program runs on CFCorps
              </Typography>
              <Typography sx={{ mt: 0.75, fontSize: '0.92rem', lineHeight: 1.6, color: '#96ADBA', maxWidth: 560 }}>
                Our dedicated fuel platform — apply, load funds, set driver controls and track every
                gallon from one dashboard.
              </Typography>
            </Box>
            <Button
              component="a"
              href="https://cfcorps.com"
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<TbExternalLink size={17} />}
              sx={{
                px: 3,
                py: 1.25,
                fontWeight: 700,
                color: '#04121C',
                background: 'linear-gradient(135deg, #18C8DB, #5EDDEE)',
                boxShadow: '0 8px 28px rgba(24,200,219,0.35)',
                '&:hover': { background: 'linear-gradient(135deg, #2BD3E5, #74E4F2)' },
              }}
            >
              Open CFCorps
            </Button>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}

export default function FuelCard() {
  return (
    <>
      <FuelHero />
      <FuelFeatures />
      <CfcorpsBand />
      <CtaBanner />
    </>
  );
}
