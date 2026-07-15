import { useCallback, useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { TbArrowRight, TbHeadset } from 'react-icons/tb';
import { Link as RouterLink } from 'react-router-dom';
import CountUp from '../../common/CountUp';
import FleetMapVisual from './FleetMapVisual';
import HeroBackground from './HeroBackground';

const easeOut = [0.22, 1, 0.36, 1];

/* Headline lines; the last one carries the gradient. */
const HEADLINE = [
  { words: ['The', 'operating', 'system'] },
  { words: ['for'], gradientWords: ['modern', 'fleets.'] },
];

function fadeUp(delay) {
  return {
    initial: { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.85, ease: easeOut },
  };
}

function HeadlineWord({ children, index, gradient }) {
  return (
    <Box
      component={motion.span}
      initial={{ opacity: 0, y: '0.55em', filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ delay: 0.3 + index * 0.055, duration: 0.8, ease: easeOut }}
      sx={{
        display: 'inline-block',
        mr: '0.24em',
        ...(gradient && {
          background: 'var(--headline-grad)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
        }),
      }}
    >
      {children}
    </Box>
  );
}

const STATS = [
  { value: 99.9, decimals: 1, suffix: '%', label: 'Platform uptime' },
  { value: 12, suffix: 'K+', label: 'Vehicles tracked' },
  { value: 35, suffix: '%', label: 'Fewer HOS violations' },
  { static: '24/7', label: 'Human support' },
];

export default function Hero() {
  const sectionRef = useRef(null);

  /* Scroll-away fade */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  /* Mouse parallax feeding the background blobs */
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const smx = useSpring(px, { stiffness: 40, damping: 18 });
  const smy = useSpring(py, { stiffness: 40, damping: 18 });

  const handlePointerMove = useCallback(
    (e) => {
      px.set(e.clientX / window.innerWidth - 0.5);
      py.set(e.clientY / window.innerHeight - 0.5);
    },
    [px, py]
  );

  let wordIndex = -1;

  return (
    <Box
      component="section"
      id="home"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        pt: { xs: 13, sm: 15, lg: 12 },
        pb: { xs: 10, lg: 10 },
      }}
    >
      <HeroBackground mx={smx} my={smy} />

      <Container sx={{ position: 'relative', zIndex: 1, maxWidth: 1240 }} maxWidth={false}>
        <motion.div style={{ y: contentY, opacity: contentOpacity }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '1.05fr 0.95fr' },
              gap: { xs: 8, lg: 6 },
              alignItems: 'center',
              maxWidth: { xs: 640, lg: 'none' },
              mx: 'auto',
            }}
          >
            {/* ---- Copy column ---- */}
            <Box>
              <motion.div {...fadeUp(0.15)}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1.2,
                    px: { xs: 1.6, md: 1.9 },
                    py: 0.8,
                    borderRadius: 999,
                    border: '1px solid var(--stroke)',
                    background: 'var(--glass)',
                    backdropFilter: 'blur(12px)',
                    fontSize: { xs: 11.5, md: 12.5 },
                    fontWeight: 600,
                    letterSpacing: { xs: '0.1em', md: '0.14em' },
                    textTransform: 'uppercase',
                    color: 'var(--ink-2)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      background: 'var(--cyan)',
                      animation: 'pulseDot 2s infinite',
                      flexShrink: 0,
                    }}
                  />
                  Know every mile
                  <Box component="span" sx={{ color: 'var(--ink-3)', display: { xs: 'none', sm: 'inline' } }}>
                    · FMCSA-registered ELD
                  </Box>
                </Box>
              </motion.div>

              <Typography
                variant="h1"
                sx={{
                  mt: 3,
                  fontSize: 'clamp(2.35rem, 5.6vw + 0.6rem, 4.6rem)',
                  lineHeight: 1.05,
                }}
              >
                {HEADLINE.map((line, li) => (
                  <Box key={li} component="span" sx={{ display: 'block' }}>
                    {line.words.map((word) => {
                      wordIndex += 1;
                      return (
                        <HeadlineWord key={word} index={wordIndex}>
                          {word}
                        </HeadlineWord>
                      );
                    })}
                    {line.gradientWords?.map((word) => {
                      wordIndex += 1;
                      return (
                        <HeadlineWord key={word} index={wordIndex} gradient>
                          {word}
                        </HeadlineWord>
                      );
                    })}
                  </Box>
                ))}
              </Typography>

              <motion.div {...fadeUp(0.75)}>
                <Typography
                  sx={{
                    mt: 3,
                    maxWidth: 540,
                    fontSize: { xs: '1.05rem', md: '1.16rem' },
                    lineHeight: 1.65,
                    color: 'text.secondary',
                  }}
                >
                  Quality Logs unifies GPS tracking, ELD compliance, AI dash cams and fuel
                  intelligence in one real-time command center — so you know every truck, every
                  driver, every mile.
                </Typography>
              </motion.div>

              <motion.div {...fadeUp(0.9)}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.75} sx={{ mt: 4.5 }}>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    size="large"
                    endIcon={
                      <Box
                        component="span"
                        className="cta-arrow"
                        sx={{ display: 'inline-flex', transition: 'transform 0.25s ease' }}
                      >
                        <TbArrowRight size={19} />
                      </Box>
                    }
                    sx={{
                      px: 3.75,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 700,
                      width: { xs: '100%', sm: 'auto' },
                      color: '#04121C',
                      background: 'linear-gradient(135deg, #18C8DB 0%, #5EDDEE 100%)',
                      boxShadow: '0 10px 40px rgba(24, 200, 219, 0.35)',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #2BD3E5 0%, #74E4F2 100%)',
                        boxShadow: '0 14px 52px rgba(24, 200, 219, 0.5)',
                        transform: 'translateY(-2px)',
                        '& .cta-arrow': { transform: 'translateX(4px)' },
                      },
                    }}
                  >
                    Get a demo
                  </Button>
                  <Button
                    href="tel:+18144140132"
                    size="large"
                    startIcon={<TbHeadset size={19} />}
                    sx={{
                      px: 3.25,
                      py: 1.5,
                      fontSize: '1rem',
                      width: { xs: '100%', sm: 'auto' },
                      color: 'var(--ink-1)',
                      border: '1px solid var(--stroke-strong)',
                      background: 'var(--glass)',
                      backdropFilter: 'blur(12px)',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        background: 'rgba(255,255,255,0.07)',
                        borderColor: 'rgba(255,255,255,0.28)',
                      },
                    }}
                  >
                    Talk to sales
                  </Button>
                </Stack>
              </motion.div>

              <motion.div {...fadeUp(1.0)}>
                <Typography sx={{ mt: 2.5, fontSize: '0.85rem', color: 'var(--ink-3)' }}>
                  White-glove onboarding · No long-term contracts · 24/7 human support
                </Typography>
              </motion.div>

              <motion.div {...fadeUp(1.1)}>
                <Box
                  sx={{
                    mt: { xs: 4.5, md: 5.5 },
                    display: 'grid',
                    gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, auto)' },
                    justifyContent: { md: 'start' },
                    columnGap: { xs: 2.5, md: 4.5 },
                    rowGap: 2.5,
                  }}
                >
                  {STATS.map((stat, i) => (
                    <Box
                      key={stat.label}
                      sx={{
                        pl: { xs: 0, md: i === 0 ? 0 : 4.5 },
                        borderLeft: {
                          xs: 'none',
                          md: i === 0 ? 'none' : '1px solid var(--stroke)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 700,
                          fontSize: { xs: '1.55rem', md: '1.8rem' },
                          letterSpacing: '-0.02em',
                          color: 'var(--ink-1)',
                        }}
                      >
                        {stat.static ?? (
                          <CountUp
                            to={stat.value}
                            decimals={stat.decimals ?? 0}
                            suffix={stat.suffix ?? ''}
                            delay={1.2 + i * 0.15}
                          />
                        )}
                      </Box>
                      <Box sx={{ mt: 0.4, fontSize: '0.82rem', color: 'var(--ink-3)' }}>
                        {stat.label}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Box>

            {/* ---- Visual column ---- */}
            <FleetMapVisual />
          </Box>
        </motion.div>
      </Container>

      {/* Scroll cue */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        style={{ opacity: contentOpacity }}
        sx={{
          position: 'absolute',
          bottom: 26,
          left: '50%',
          transform: 'translateX(-50%)',
          display: { xs: 'none', lg: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            fontSize: 10.5,
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--ink-3)',
          }}
        >
          Scroll
        </Box>
        <Box
          sx={{
            width: 22,
            height: 34,
            borderRadius: 12,
            border: '1.5px solid var(--stroke-strong)',
            display: 'flex',
            justifyContent: 'center',
            pt: '5px',
          }}
        >
          <Box
            component={motion.span}
            animate={{ y: [0, 9, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
            sx={{ width: 3.5, height: 7, borderRadius: 99, background: 'var(--cyan)' }}
          />
        </Box>
      </Box>
    </Box>
  );
}
