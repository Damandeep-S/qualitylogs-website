import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { TbArrowRight, TbCircleCheck, TbHeadset, TbPhone, TbShieldCheckFilled } from 'react-icons/tb';
import { Link as RouterLink } from 'react-router-dom';
import CtaBanner from '../components/sections/CtaBanner';
import Devices from '../components/sections/Devices';
import HowItWorks from '../components/sections/HowItWorks';
import Platform from '../components/sections/Platform';
import Solutions from '../components/sections/Solutions';

const easeOut = [0.22, 1, 0.36, 1];

const HEADLINE_WORDS = ['Compliance', 'that'];
const HEADLINE_GRADIENT = ['runs', 'itself.'];

const PLAN_FEATURES = [
  'HOS tracking',
  'IFTA mileage report',
  'DVIR report',
  'Live tracking',
  'Share tracking with broker',
  '24×7 support',
];

function EldHero() {
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
        src="/images/mission-truck.jpg"
        alt="Semi truck under a dramatic sky"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 55%',
          filter: 'saturate(0.72)',
        }}
      />
      <Box sx={{ position: 'absolute', inset: 0, background: 'var(--hero-photo-wash-a)' }} />
      <Box sx={{ position: 'absolute', inset: 0, background: 'var(--hero-photo-wash-b)' }} />

      <Container sx={{ position: 'relative' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' },
            gap: { xs: 6, md: 8 },
            alignItems: 'center',
          }}
        >
          {/* Copy */}
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
                <TbShieldCheckFilled size={15} color="#18C8DB" />
                FMCSA-registered ELD
              </Box>
            </motion.div>

            <Typography
              variant="h1"
              sx={{ mt: 3, fontSize: 'clamp(2.5rem, 5vw, 4.1rem)', lineHeight: 1.06, color: 'var(--ink-1)' }}
            >
              {HEADLINE_WORDS.map((word, i) => (
                <Box
                  key={word}
                  component={motion.span}
                  initial={{ opacity: 0, y: '0.55em', filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.8, ease: easeOut }}
                  sx={{ display: 'inline-block', mr: '0.24em' }}
                >
                  {word}
                </Box>
              ))}
              {HEADLINE_GRADIENT.map((word, i) => (
                <Box
                  key={word}
                  component={motion.span}
                  initial={{ opacity: 0, y: '0.55em', filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.3 + (HEADLINE_WORDS.length + i) * 0.07, duration: 0.8, ease: easeOut }}
                  sx={{
                    display: 'inline-block',
                    mr: '0.24em',
                    background: 'var(--headline-grad)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {word}
                </Box>
              ))}
            </Typography>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: easeOut }}
            >
              <Typography sx={{ mt: 3, maxWidth: 520, fontSize: { xs: '1rem', md: '1.12rem' }, lineHeight: 1.65, color: 'var(--ink-2)' }}>
                Logs that write themselves, IFTA that files itself, and live tracking your brokers
                can actually see. One device, one app, one honest price.
              </Typography>

              <Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2 }}>
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
                  Get started
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

          {/* Plan card */}
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: easeOut }}
          >
            <Box
              sx={{
                maxWidth: 440,
                mx: { xs: 'auto', md: '0 0 0 auto' },
                ml: { md: 'auto' },
                borderRadius: '26px',
                p: '1px',
                background: 'linear-gradient(170deg, rgba(24,200,219,0.7), rgba(24,200,219,0.08) 55%, rgba(94,221,238,0.4))',
                boxShadow: 'var(--panel-shadow)',
              }}
            >
              <Box sx={{ borderRadius: '25px', background: 'var(--panel-bg)', p: { xs: 3, md: 4 } }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 2 }}>
                  <Box>
                    <Box sx={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                      ELD plan
                    </Box>
                    <Box sx={{ mt: 1.5, display: 'flex', alignItems: 'baseline', gap: 1 }}>
                      <Box sx={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '3rem', letterSpacing: '-0.02em', color: 'var(--ink-1)' }}>
                        $25
                      </Box>
                      <Box sx={{ fontSize: '0.88rem', color: 'var(--ink-3)' }}>/ truck / mo</Box>
                    </Box>
                    <Box sx={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)' }}>Starting from</Box>
                  </Box>
                  <Box
                    sx={{
                      px: 1.5,
                      py: 0.6,
                      borderRadius: 999,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#04121C',
                      background: 'linear-gradient(135deg, #18C8DB, #5EDDEE)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    All-inclusive
                  </Box>
                </Box>

                <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid var(--stroke)', display: 'flex', flexDirection: 'column', gap: 1.6 }}>
                  {PLAN_FEATURES.map((feature, i) => (
                    <Box
                      key={feature}
                      component={motion.div}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.75 + i * 0.08, duration: 0.55, ease: easeOut }}
                      sx={{ display: 'flex', alignItems: 'center', gap: 1.4, fontSize: '0.95rem', color: 'var(--ink-1)' }}
                    >
                      <TbCircleCheck size={19} color="#18C8DB" style={{ flexShrink: 0 }} />
                      {feature}
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    mt: 3.5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.25,
                    px: 2,
                    py: 1.5,
                    borderRadius: '14px',
                    border: '1px solid rgba(24,200,219,0.3)',
                    background: 'var(--tint-cyan)',
                    fontSize: '0.85rem',
                    color: 'var(--ink-2)',
                  }}
                >
                  <TbHeadset size={20} color="#18C8DB" style={{ flexShrink: 0 }} />
                  Real humans, 24×7 — setup help, roadside inspections, audits.
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

export default function Eld() {
  return (
    <>
      <EldHero />
      <Platform />
      <Solutions />
      <HowItWorks />
      <Devices />
      <CtaBanner />
    </>
  );
}
