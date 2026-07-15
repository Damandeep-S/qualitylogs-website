import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { TbHeadset, TbLockOpen, TbPlugConnected, TbQuote, TbShieldCheck } from 'react-icons/tb';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';

const easeOut = [0.22, 1, 0.36, 1];

const COMMITMENTS = [
  {
    icon: TbHeadset,
    title: '24×7 human support',
    desc: 'Phone or WhatsApp, any hour. Roadside inspection at 2 AM? A real person picks up and walks you through the data transfer.',
  },
  {
    icon: TbPlugConnected,
    title: 'Running in 15 minutes',
    desc: 'Every unit ships pre-configured. Plug into the diagnostic port, scan the QR code — we stay on the line until your first log syncs.',
  },
  {
    icon: TbLockOpen,
    title: 'No lock-in, ever',
    desc: 'ELD plans are month-to-month and your data export is one click. Your data stays yours — we earn the renewal every month.',
  },
  {
    icon: TbShieldCheck,
    title: 'Audit-ready from day one',
    desc: 'FMCSA-registered hardware with roadside transfer built in — logs, DVIRs and IFTA miles are always inspection-ready.',
  },
];

export default function Commitments() {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, position: 'relative' }}>
      <Container>
        <SectionHeading
          eyebrow="Our promise"
          title="Promises we"
          gradientWord="actually keep"
          sub="No borrowed testimonials — just the standard every Quality Logs fleet gets from day one. Hold us to it."
        />

        {/* Featured statement */}
        <Reveal>
          <Box
            sx={{
              position: 'relative',
              maxWidth: 800,
              mx: 'auto',
              textAlign: 'center',
              pt: 5,
            }}
          >
            <Box
              aria-hidden
              sx={{
                position: 'absolute',
                top: -22,
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'var(--tint-cyan)',
                opacity: 0.9,
              }}
            >
              <TbQuote size={72} />
            </Box>

            <Typography
              component="blockquote"
              sx={{
                m: 0,
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                fontSize: 'clamp(1.2rem, 2.4vw, 1.65rem)',
                lineHeight: 1.45,
                letterSpacing: '-0.01em',
                color: 'var(--ink-1)',
                px: { xs: 1, md: 4 },
              }}
            >
              “Every truck we set up gets tested before we hang up. If something breaks at 2 AM,
              you call and a human answers. That’s the whole pitch.”
            </Typography>
            <Box sx={{ mt: 3, fontWeight: 700, fontSize: '0.98rem', color: 'var(--ink-1)' }}>
              The Quality Logs team
            </Box>
          </Box>
        </Reveal>

        {/* Commitment cards */}
        <Box
          sx={{
            mt: { xs: 8, md: 10 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 3,
          }}
        >
          {COMMITMENTS.map((item, i) => (
            <Box
              key={item.title}
              component={motion.div}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: easeOut }}
              sx={{
                px: 3,
                py: 4,
                borderRadius: '20px',
                border: '1px solid var(--stroke)',
                background: 'var(--surface-2)',
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
                  border: '1px solid rgba(24, 200, 219, 0.25)',
                }}
              >
                <item.icon size={24} />
              </Box>
              <Typography
                variant="h3"
                sx={{ mt: 2.25, fontSize: '1.1rem', color: 'var(--ink-1)' }}
              >
                {item.title}
              </Typography>
              <Box sx={{ mt: 1, fontSize: '0.9rem', color: 'var(--ink-2)', lineHeight: 1.6 }}>
                {item.desc}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
