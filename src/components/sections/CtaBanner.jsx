import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { TbArrowRight, TbPhone } from 'react-icons/tb';
import Reveal from '../common/Reveal';
import { LogoMark } from '../common/Logo';

export default function CtaBanner() {
  return (
    <Box component="section" id="demo" sx={{ py: { xs: 10, md: 14 } }}>
      <Container>
        <Reveal>
          <Box
            sx={{
              position: 'relative',
              borderRadius: '28px',
              overflow: 'hidden',
              /* Midnight in both themes — brand moment */
              background:
                'radial-gradient(900px 420px at 82% 18%, rgba(24,200,219,0.28), transparent 60%), linear-gradient(160deg, #0A2B40 0%, #04121C 100%)',
              border: '1px solid rgba(94, 221, 238, 0.2)',
              px: { xs: 3.5, md: 8 },
              py: { xs: 6, md: 9 },
            }}
          >
            {/* Watermark pin with live pulse */}
            <Box
              aria-hidden
              sx={{
                position: 'absolute',
                right: { xs: -60, md: 40 },
                top: '50%',
                transform: 'translateY(-50%)',
                opacity: { xs: 0.12, md: 0.2 },
                pointerEvents: 'none',
              }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              >
                <LogoMark size={280} pinColor="#18C8DB" dotColor="#04121C" />
              </motion.div>
            </Box>

            <Box sx={{ position: 'relative', maxWidth: 560 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: 'clamp(2rem, 4.2vw, 3.2rem)',
                  lineHeight: 1.08,
                  color: '#ECF4F7',
                }}
              >
                Ready to know{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(95deg, #18C8DB, #7DEBF7)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  every mile?
                </Box>
              </Typography>
              <Typography sx={{ mt: 2.5, fontSize: '1.05rem', lineHeight: 1.65, color: '#96ADBA' }}>
                See your own trucks on the platform in a 20-minute live demo. Bring your hardest
                compliance question — we like those.
              </Typography>
              <Box sx={{ mt: 4.5, display: 'flex', flexWrap: 'wrap', gap: 1.75 }}>
                <Button
                  href="mailto:support@qualitylogs.us?subject=Demo%20request"
                  size="large"
                  endIcon={<TbArrowRight size={19} />}
                  sx={{
                    px: 3.75,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#04121C',
                    background: 'linear-gradient(135deg, #18C8DB 0%, #5EDDEE 100%)',
                    boxShadow: '0 10px 40px rgba(24, 200, 219, 0.4)',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 14px 52px rgba(24, 200, 219, 0.55)',
                    },
                  }}
                >
                  Get a demo
                </Button>
                <Button
                  href="tel:+18144140132"
                  size="large"
                  startIcon={<TbPhone size={18} />}
                  sx={{
                    px: 3.25,
                    py: 1.5,
                    fontSize: '1rem',
                    color: '#ECF4F7',
                    border: '1px solid rgba(255,255,255,0.2)',
                    '&:hover': { background: 'rgba(255,255,255,0.07)' },
                  }}
                >
                  +1 (814) 414-0132
                </Button>
              </Box>
              <Typography sx={{ mt: 2.5, fontSize: '0.82rem', color: 'rgba(150,173,186,0.75)' }}>
                Free 7-days pilot on your own trucks · no credit card
              </Typography>
            </Box>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
