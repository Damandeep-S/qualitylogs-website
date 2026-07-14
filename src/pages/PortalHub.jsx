import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { TbArrowUpRight, TbCamera, TbCpu, TbGasStation, TbLock } from 'react-icons/tb';

const easeOut = [0.22, 1, 0.36, 1];

const PORTALS = [
  {
    icon: TbCpu,
    name: 'ELD Portal',
    desc: 'Logs, HOS, live tracking and compliance reports.',
    href: 'https://qualitylogs.us/portal',
    domain: 'qualitylogs.us',
  },
  {
    icon: TbCamera,
    name: 'Dashcam Portal',
    desc: 'Camera footage, incident clips and safety events.',
    href: 'https://dashcam.qualitylogs.us/sign-in',
    domain: 'dashcam.qualitylogs.us',
  },
  {
    icon: TbGasStation,
    name: 'Fuel Portal',
    desc: 'Card balance, driver limits and fuel statements.',
    href: 'https://portal.cfcorps.com/',
    domain: 'portal.cfcorps.com',
  },
];

export default function PortalHub() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: '86vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 15, md: 18 },
        pb: { xs: 10, md: 12 },
        background:
          'radial-gradient(900px 520px at 50% -10%, var(--cyan-soft), transparent 62%), var(--hero-wash)',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: easeOut }}
          style={{ textAlign: 'center' }}
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
            <TbLock size={15} color="#18C8DB" />
            Portal login
          </Box>

          <Typography
            variant="h1"
            sx={{ mt: 2.5, fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, color: 'var(--ink-1)' }}
          >
            Sign in to{' '}
            <Box
              component="span"
              sx={{
                background: 'var(--headline-grad)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              your portal
            </Box>
          </Typography>

          <Typography sx={{ mt: 2, mx: 'auto', maxWidth: 460, fontSize: '1.02rem', lineHeight: 1.65, color: 'var(--ink-2)' }}>
            Each product has its own login — pick where you're headed.
          </Typography>
        </motion.div>

        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 2.5,
          }}
        >
          {PORTALS.map((portal, i) => (
            <Box
              key={portal.name}
              component={motion.a}
              href={portal.href}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.7, ease: easeOut }}
              sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '20px',
                border: '1px solid var(--stroke)',
                background: 'var(--surface-2)',
                p: 3,
                textDecoration: 'none',
                overflow: 'hidden',
                transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1), border-color 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  borderColor: 'rgba(24, 200, 219, 0.45)',
                  boxShadow: '0 24px 60px rgba(4, 16, 26, 0.3), 0 0 40px rgba(24, 200, 219, 0.06)',
                  '& .portal-arrow': { transform: 'translate(2px, -2px)', color: 'var(--accent)' },
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '14px',
                    display: 'grid',
                    placeItems: 'center',
                    color: 'var(--accent)',
                    background: 'var(--tint-cyan)',
                    border: '1px solid rgba(24, 200, 219, 0.25)',
                  }}
                >
                  <portal.icon size={25} />
                </Box>
                <Box
                  component="span"
                  className="portal-arrow"
                  sx={{ display: 'inline-flex', color: 'var(--ink-3)', transition: 'transform 0.3s ease, color 0.3s ease' }}
                >
                  <TbArrowUpRight size={22} />
                </Box>
              </Box>

              <Typography variant="h6" sx={{ mt: 2.25, fontSize: '1.12rem', color: 'var(--ink-1)' }}>
                {portal.name}
              </Typography>
              <Typography sx={{ mt: 0.75, fontSize: '0.87rem', lineHeight: 1.6, color: 'var(--ink-2)', flex: 1 }}>
                {portal.desc}
              </Typography>

              <Box
                sx={{
                  mt: 2.25,
                  pt: 1.75,
                  borderTop: '1px solid var(--stroke)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--ink-3)',
                }}
              >
                {portal.domain}
              </Box>
            </Box>
          ))}
        </Box>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: easeOut }}
        >
          <Typography sx={{ mt: 5, textAlign: 'center', fontSize: '0.87rem', color: 'var(--ink-3)' }}>
            Trouble signing in? Call{' '}
            <Box component="a" href="tel:+18144140132" sx={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>
              +1 (814) 414-0132
            </Box>{' '}
            — we answer 24×7.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}
