import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import {
  TbHeadset,
  TbHeartHandshake,
  TbMail,
  TbRoad,
  TbSchool,
  TbActivityHeartbeat,
  TbUserHeart,
} from 'react-icons/tb';
import CountUp from '../components/common/CountUp';
import Reveal from '../components/common/Reveal';
import SectionHeading from '../components/common/SectionHeading';
import CtaBanner from '../components/sections/CtaBanner';

const easeOut = [0.22, 1, 0.36, 1];

/* ---------- Hero ---------- */

const HEADLINE_WORDS = ['We', 'keep', 'American', 'freight'];
const HEADLINE_GRADIENT = ['visible.'];

function AboutHero() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: { xs: '68vh', md: '76vh' },
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}
    >
      <Box
        component={motion.img}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: easeOut }}
        src="/images/about-hero.jpg"
        alt="Semi truck on an open highway"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 62%',
          filter: 'saturate(0.72)',
        }}
      />
      {/* Theme-aware wash (navy in dark, paper in light) + fade into page background */}
      <Box sx={{ position: 'absolute', inset: 0, background: 'var(--hero-photo-wash-a)' }} />
      <Box sx={{ position: 'absolute', inset: 0, background: 'var(--hero-photo-wash-b)' }} />

      <Container sx={{ position: 'relative', pb: { xs: 8, md: 11 }, pt: 20 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: easeOut }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.2,
              px: 1.9,
              py: 0.8,
              borderRadius: 999,
              border: '1px solid var(--stroke-strong)',
              background: 'var(--glass-strong)',
              backdropFilter: 'blur(12px)',
              fontSize: 12.5,
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--ink-2)',
            }}
          >
            <Box
              component="span"
              sx={{ width: 7, height: 7, borderRadius: '50%', background: '#18C8DB', animation: 'pulseDot 2s infinite' }}
            />
            About Quality Logs
          </Box>
        </motion.div>

        <Typography
          variant="h1"
          sx={{ mt: 3, fontSize: 'clamp(2.6rem, 5.4vw, 4.4rem)', lineHeight: 1.05, color: 'var(--ink-1)', maxWidth: 760 }}
        >
          {HEADLINE_WORDS.map((word, i) => (
            <Box
              key={word}
              component={motion.span}
              initial={{ opacity: 0, y: '0.55em', filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.35 + i * 0.07, duration: 0.8, ease: easeOut }}
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
              transition={{ delay: 0.35 + (HEADLINE_WORDS.length + i) * 0.07, duration: 0.8, ease: easeOut }}
              sx={{
                display: 'inline-block',
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
          transition={{ delay: 0.85, duration: 0.8, ease: easeOut }}
        >
          <Typography sx={{ mt: 3, maxWidth: 560, fontSize: { xs: '1.02rem', md: '1.14rem' }, lineHeight: 1.65, color: 'var(--ink-2)' }}>
            ELD compliance, dashcams, permits and fuel savings — one team that keeps trucking
            companies legal, safe and profitable on every mile.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}

/* ---------- Stats band ---------- */

const STATS = [
  { static: '2019', label: 'Founded by fleet operators' },
  { value: 1200, suffix: '+', label: 'Fleets onboard' },
  { value: 12, suffix: 'K+', label: 'Vehicles reporting live' },
  { value: 98, suffix: '%', label: 'Support satisfaction' },
];

function StatsBand() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
      <Container>
        <Reveal>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              borderRadius: '20px',
              border: '1px solid var(--stroke)',
              background: 'var(--surface-2)',
              overflow: 'hidden',
            }}
          >
            {STATS.map((stat, i) => (
              <Box
                key={stat.label}
                sx={{
                  textAlign: 'center',
                  px: 2,
                  py: { xs: 3.5, md: 4.5 },
                  borderLeft: { md: i === 0 ? 'none' : '1px solid var(--stroke)' },
                  borderTop: { xs: i > 1 ? '1px solid var(--stroke)' : 'none', md: 'none' },
                }}
              >
                <Box
                  sx={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: { xs: '1.7rem', md: '2.1rem' },
                    letterSpacing: '-0.02em',
                    color: 'var(--ink-1)',
                  }}
                >
                  {stat.static ?? <CountUp to={stat.value} suffix={stat.suffix} duration={2} />}
                </Box>
                <Box sx={{ mt: 0.6, fontSize: '0.84rem', color: 'var(--ink-3)' }}>{stat.label}</Box>
              </Box>
            ))}
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}

/* ---------- Values ---------- */

const VALUES = [
  {
    icon: TbHeartHandshake,
    title: 'Drivers first',
    desc: 'Drivers are the customer, not the surveillance target. Anything that adds friction to their day gets redesigned until it doesn’t.',
  },
  {
    icon: TbActivityHeartbeat,
    title: 'Radical reliability',
    desc: 'Logs that survive dead zones, uptime we publish, and hardware we replace free — because compliance can’t have an off day.',
  },
  {
    icon: TbHeadset,
    title: 'Humans on the line',
    desc: 'No chatbots guarding the phone number. Real people, around the clock, who know trucking and know our product.',
  },
  {
    icon: TbRoad,
    title: 'Built for the long haul',
    desc: 'No lock-in contracts and one-click data export. We plan to earn every renewal the honest way.',
  },
];

function Values() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'radial-gradient(800px 480px at 90% 0%, var(--cyan-soft), transparent 62%)',
      }}
    >
      <Container>
        <SectionHeading
          eyebrow="Values"
          title="What we"
          gradientWord="run on"
          sub="Four rules that decide what we build, who we hire and how we answer the phone."
        />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: 3,
          }}
        >
          {VALUES.map((value, i) => (
            <Box
              key={value.title}
              component={motion.div}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ delay: (i % 2) * 0.12, duration: 0.7, ease: easeOut }}
              sx={{
                position: 'relative',
                borderRadius: '20px',
                border: '1px solid var(--stroke)',
                background: 'var(--surface-2)',
                p: { xs: 3, md: 4 },
                overflow: 'hidden',
                transition: 'border-color 0.3s ease, transform 0.3s ease',
                '&:hover': {
                  borderColor: 'rgba(24,200,219,0.4)',
                  transform: 'translateY(-4px)',
                  '& .value-num': { opacity: 'var(--ghost-num-hover)', transform: 'translateY(-4px)' },
                },
              }}
            >
              <Box
                className="value-num"
                aria-hidden
                sx={{
                  position: 'absolute',
                  top: 6,
                  right: 18,
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '5rem',
                  color: 'var(--accent)',
                  opacity: 'var(--ghost-num)',
                  transition: 'all 0.4s ease',
                  userSelect: 'none',
                }}
              >
                0{i + 1}
              </Box>
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
                <value.icon size={24} />
              </Box>
              <Typography variant="h6" sx={{ mt: 2.25, fontSize: '1.18rem', color: 'var(--ink-1)' }}>
                {value.title}
              </Typography>
              <Typography sx={{ mt: 1.25, fontSize: '0.93rem', lineHeight: 1.68, color: 'var(--ink-2)' }}>
                {value.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

/* ---------- Support promise (copy from qualitylogs.us) ---------- */

const SUPPORT_POINTS = [
  {
    icon: TbUserHeart,
    title: 'Personalized, friction-free help',
    body: 'Our user-friendly solutions are designed to make it easy for drivers to get the help they need without unnecessary complications. We offer personalized support options to cater to the specific needs of each driver, ensuring a tailored and effective experience.',
  },
  {
    icon: TbSchool,
    title: 'Learn it once, fix it fast',
    body: 'In addition to our expert assistance, we provide educational resources and tutorials, empowering drivers to troubleshoot common issues independently. This not only saves time but also enhances their overall experience.',
  },
  {
    icon: TbHeartHandshake,
    title: 'A partner for the long road',
    body: 'Whether it’s remote assistance capabilities or a commitment to quick and effective solutions, our technical support is dedicated to keeping drivers on the road and ensuring a seamless journey. Trust us to be your reliable partner in addressing any technical challenges that may arise.',
  },
];

function SupportPromise() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
            gap: { xs: 5, md: 9 },
            alignItems: 'start',
          }}
        >
          <Box sx={{ position: { md: 'sticky' }, top: { md: 120 } }}>
            <SectionHeading
              align="left"
              eyebrow="We are Quality Logs"
              title="Support that keeps you"
              gradientWord="on the road"
              sx={{ mb: 3 }}
            />
            <Reveal delay={0.15}>
              <Typography sx={{ color: 'var(--ink-2)', lineHeight: 1.75, fontSize: '1rem' }}>
                We take pride in offering top-notch technical support, ensuring that drivers can
                make the most of their time on the road. Our support is available 24/7, providing
                drivers with round-the-clock assistance. With a commitment to a swift response
                time, our team of knowledgeable experts is ready to diagnose and resolve issues
                promptly, minimizing any potential downtime.
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
                <TbHeadset size={22} color="#18C8DB" />
                <Box>
                  <Box sx={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink-1)' }}>
                    24/7 · round-the-clock assistance
                  </Box>
                  <Box sx={{ fontSize: 12, color: 'var(--ink-3)' }}>+1 (814) 414-0132 · support@qualitylogs.us</Box>
                </Box>
              </Box>
            </Reveal>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {SUPPORT_POINTS.map((point, i) => (
              <Box
                key={point.title}
                component={motion.div}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: easeOut }}
                sx={{
                  display: 'flex',
                  gap: 2.5,
                  py: 3.5,
                  borderTop: i === 0 ? 'none' : '1px solid var(--stroke)',
                }}
              >
                <Box
                  sx={{
                    width: 46,
                    height: 46,
                    borderRadius: '14px',
                    display: 'grid',
                    placeItems: 'center',
                    flexShrink: 0,
                    color: 'var(--accent)',
                    background: 'var(--tint-cyan)',
                  }}
                >
                  <point.icon size={24} />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontSize: '1.1rem', color: 'var(--ink-1)' }}>
                    {point.title}
                  </Typography>
                  <Typography sx={{ mt: 1, fontSize: '0.93rem', lineHeight: 1.7, color: 'var(--ink-2)' }}>
                    {point.body}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

/* ---------- Crew band ---------- */

function photoCardSx(hoverZoom = true) {
  return {
    position: 'relative',
    borderRadius: '20px',
    overflow: 'hidden',
    border: '1px solid var(--card-border)',
    boxShadow: 'var(--shadow-card)',
    ...(hoverZoom && { '&:hover img': { transform: 'scale(1.05)' } }),
  };
}

function Crew() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1.15fr 1fr' },
            gap: 3,
            alignItems: 'stretch',
          }}
        >
          <Reveal style={{ height: '100%' }}>
            <Box sx={{ ...photoCardSx(), height: '100%', minHeight: 300 }}>
              <Box
                component="img"
                src="/images/ops-team.jpg"
                alt="Logistics team reviewing inventory on a tablet"
                sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'saturate(0.8)', transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1)' }}
              />
              <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 55%, rgba(4,16,26,0.7))' }} />
              <Box sx={{ position: 'absolute', left: 18, bottom: 14, fontSize: '0.8rem', fontWeight: 600, color: 'rgba(236,244,247,0.9)' }}>
                Onboarding, on site
              </Box>
            </Box>
          </Reveal>

          <Reveal delay={0.12} style={{ height: '100%' }}>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                borderRadius: '20px',
                border: '1px solid var(--stroke)',
                background: 'var(--surface-2)',
                px: { xs: 3, md: 5 },
                py: { xs: 5, md: 6 },
              }}
            >
              <Box
                sx={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}
              >
                The crew
              </Box>
              <Typography variant="h3" sx={{ mt: 1.75, fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', color: 'var(--ink-1)' }}>
                Real people behind the dashboard
              </Typography>
              <Typography sx={{ mt: 2, fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--ink-2)' }}>
                Former dispatchers, drivers and DOT auditors staff our support desk in shifts that
                cover every time zone you run in. Call at 2 AM and a human who knows HOS answers.
              </Typography>
              <Box sx={{ mt: 3.5, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1.5 }}>
                <Button
                  href="tel:+18144140132"
                  startIcon={<TbHeadset size={18} />}
                  sx={{
                    px: 2.75,
                    py: 1.1,
                    fontWeight: 700,
                    color: '#04121C',
                    background: 'linear-gradient(135deg, #18C8DB, #5EDDEE)',
                    boxShadow: '0 8px 28px rgba(24,200,219,0.35)',
                    '&:hover': { background: 'linear-gradient(135deg, #2BD3E5, #74E4F2)' },
                  }}
                >
                  Talk to us
                </Button>
                <Button
                  href="mailto:support@qualitylogs.us"
                  startIcon={<TbMail size={18} />}
                  sx={{
                    px: 2.75,
                    py: 1.1,
                    color: 'var(--ink-1)',
                    border: '1px solid var(--stroke-strong)',
                    background: 'var(--glass)',
                    '&:hover': { background: 'var(--glass-strong)' },
                  }}
                >
                  support@qualitylogs.us
                </Button>
              </Box>
            </Box>
          </Reveal>

          <Reveal delay={0.24} style={{ height: '100%' }}>
            <Box sx={{ ...photoCardSx(), height: '100%', minHeight: 300 }}>
              <Box
                component="img"
                src="/images/driver3.jpg"
                alt="Professional truck driver reviewing his checklist at the wheel"
                sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '68% center', display: 'block', filter: 'saturate(0.85)', transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1)' }}
              />
              <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 55%, rgba(4,16,26,0.7))' }} />
              <Box sx={{ position: 'absolute', left: 18, bottom: 14, fontSize: '0.8rem', fontWeight: 600, color: 'rgba(236,244,247,0.9)' }}>
                Built with drivers, daily
              </Box>
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}

export default function About() {
  return (
    <>
      <AboutHero />
      <StatsBand />
      <SupportPromise />
      <Values />
      <Crew />
      <CtaBanner />
    </>
  );
}
