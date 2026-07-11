import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AnimatePresence, motion } from 'framer-motion';
import { TbQuote, TbStarFilled } from 'react-icons/tb';
import SectionHeading from '../common/SectionHeading';
import CountUp from '../common/CountUp';
import Reveal from '../common/Reveal';

const easeOut = [0.22, 1, 0.36, 1];

const QUOTES = [
  {
    text: 'We went from chasing paper logs to zero HOS violations in one quarter. Dispatch finally trusts the ETAs we give customers.',
    name: 'Marcus T.',
    role: 'Operations Director · 85-truck dry van fleet',
  },
  {
    text: 'The dash cam footage cleared our driver in a claim that would have cost us six figures. The system paid for itself in one afternoon.',
    name: 'Angela R.',
    role: 'Safety Manager · regional carrier',
  },
  {
    text: 'Setup took a weekend. My drivers actually like the app — that has never happened with an ELD before.',
    name: 'Dmitri K.',
    role: 'Owner · 12-truck flatbed operation',
  },
];

const RESULTS = [
  { value: 35, suffix: '%', label: 'fewer HOS violations in the first 90 days' },
  { value: 18, suffix: '%', label: 'average reduction in idle-fuel spend' },
  { value: 4.9, decimals: 1, suffix: '★', label: 'driver app rating across app stores' },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % QUOTES.length), 7000);
    return () => clearInterval(id);
  }, [paused]);

  const quote = QUOTES[index];

  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, position: 'relative' }}>
      <Container>
        <SectionHeading
          eyebrow="Results"
          title="Fleets keep the numbers,"
          gradientWord="we keep the receipts"
          sub="What operators tell us after the first quarter on Quality Logs."
        />

        {/* Rotating featured quote */}
        <Reveal>
          <Box
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            sx={{
              position: 'relative',
              maxWidth: 800,
              mx: 'auto',
              textAlign: 'center',
              minHeight: { xs: 240, sm: 210 },
            }}
          >
            <Box
              aria-hidden
              sx={{
                position: 'absolute',
                top: -34,
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'var(--tint-cyan)',
                opacity: 0.9,
              }}
            >
              <TbQuote size={72} />
            </Box>

            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: easeOut }}
                style={{ margin: 0 }}
              >
                <Typography
                  component="blockquote"
                  sx={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 500,
                    fontSize: 'clamp(1.2rem, 2.4vw, 1.65rem)',
                    lineHeight: 1.45,
                    letterSpacing: '-0.01em',
                    color: 'var(--ink-1)',
                    px: { xs: 1, md: 4 },
                  }}
                >
                  “{quote.text}”
                </Typography>
                <Box component="figcaption" sx={{ mt: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.4, color: '#FBBF24', mb: 1.25 }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <TbStarFilled key={i} size={15} />
                    ))}
                  </Box>
                  <Box sx={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--ink-1)' }}>{quote.name}</Box>
                  <Box sx={{ fontSize: '0.85rem', color: 'var(--ink-3)', mt: 0.4 }}>{quote.role}</Box>
                </Box>
              </motion.figure>
            </AnimatePresence>
          </Box>
        </Reveal>

        {/* Dots */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 4 }}>
          {QUOTES.map((_, i) => (
            <Box
              key={i}
              component="button"
              onClick={() => setIndex(i)}
              aria-label={`Show quote ${i + 1}`}
              sx={{
                width: i === index ? 26 : 8,
                height: 8,
                borderRadius: 99,
                border: 'none',
                cursor: 'pointer',
                background: i === index ? 'var(--cyan)' : 'var(--stroke-strong)',
                transition: 'all 0.35s ease',
                p: 0,
              }}
            />
          ))}
        </Box>

        {/* Outcome stats */}
        <Box
          sx={{
            mt: { xs: 8, md: 10 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {RESULTS.map((r, i) => (
            <Box
              key={r.label}
              component={motion.div}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: easeOut }}
              sx={{
                textAlign: 'center',
                px: 3,
                py: 4,
                borderRadius: '20px',
                border: '1px solid var(--stroke)',
                background: 'var(--surface-2)',
              }}
            >
              <Box
                sx={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '2.5rem',
                  letterSpacing: '-0.02em',
                  background: 'var(--headline-grad)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                }}
              >
                <CountUp to={r.value} decimals={r.decimals ?? 0} suffix={r.suffix} duration={2} />
              </Box>
              <Box sx={{ mt: 1, fontSize: '0.9rem', color: 'var(--ink-2)', lineHeight: 1.5 }}>{r.label}</Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
