import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AnimatePresence, motion } from 'framer-motion';
import {
  TbArrowRight,
  TbBuildingBank,
  TbCalendarTime,
  TbCamera,
  TbCircleCheck,
  TbVideo,
} from 'react-icons/tb';
import { Link as RouterLink } from 'react-router-dom';
import CtaBanner from '../components/sections/CtaBanner';
import Reveal from '../components/common/Reveal';
import SectionHeading from '../components/common/SectionHeading';

const easeOut = [0.22, 1, 0.36, 1];

/* ---------- Hero ---------- */

function DashcamHero() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 16, md: 22 },
        pb: { xs: 10, md: 14 },
        textAlign: 'center',
      }}
    >
      <Box
        component={motion.img}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: easeOut }}
        src="/images/dashcam-hero.jpg"
        alt="Semi truck on the road under a stormy sky"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 58%',
          filter: 'saturate(0.75)',
        }}
      />
      <Box sx={{ position: 'absolute', inset: 0, background: 'var(--hero-photo-wash-c)' }} />

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
            <TbCamera size={15} color="#18C8DB" />
            AI Dashcam
          </Box>
        </motion.div>

        <Typography
          variant="h1"
          sx={{ mt: 3, mx: 'auto', maxWidth: 780, fontSize: 'clamp(2.4rem, 4.8vw, 3.9rem)', lineHeight: 1.08, color: 'var(--ink-1)' }}
        >
          <Box component={motion.span} initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ delay: 0.3, duration: 0.8, ease: easeOut }} sx={{ display: 'inline-block', mr: '0.24em' }}>
            Eyes on the road.
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
            Proof in the cloud.
          </Box>
        </Typography>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8, ease: easeOut }}
        >
          <Typography sx={{ mt: 2.5, mx: 'auto', maxWidth: 560, fontSize: { xs: '1rem', md: '1.12rem' }, lineHeight: 1.65, color: 'var(--ink-2)' }}>
            Dual-lens HD cameras that protect your drivers, shut down false claims and keep
            insurance honest — from $22 a month.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}

/* ---------- Plans: two ways to start ---------- */

const PLANS = [
  {
    icon: TbCalendarTime,
    name: '3-Year Contract',
    price: 22,
    badge: 'Camera included — $0 upfront',
    tagline: 'Sign for three years and the dashcam itself costs you nothing.',
    features: [
      'Dashcam hardware included free',
      'No upfront equipment cost',
      'Convenient ACH auto-pay',
      'Locked-in rate for 3 years',
    ],
    highlight: true,
  },
  {
    icon: TbBuildingBank,
    name: 'Buy Your Camera',
    price: 20,
    badge: 'Lowest monthly',
    tagline: 'Own the hardware from day one and pay less every month.',
    features: [
      'You own the camera outright',
      'Dual Lens $299 or Mini Dashcam $149',
      'No long-term commitment',
      'Same AI platform & support',
    ],
  },
];

function DashcamPlans() {
  return (
    <Box component="section" id="dashcam-plans" sx={{ py: { xs: 10, md: 14 } }}>
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Two ways"
          gradientWord="to start"
          sub="Get the camera free on a 3-year contract, or buy it once and keep the lowest monthly rate."
        />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 3,
            maxWidth: 900,
            mx: 'auto',
            alignItems: 'stretch',
          }}
        >
          {PLANS.map((plan, i) => (
            <Box
              key={plan.name}
              component={motion.div}
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ delay: i * 0.14, duration: 0.75, ease: easeOut }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '24px',
                p: '1px',
                background: plan.highlight
                  ? 'linear-gradient(170deg, rgba(24,200,219,0.7), rgba(24,200,219,0.08) 55%, rgba(94,221,238,0.4))'
                  : 'var(--stroke)',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'translateY(-6px)' },
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '23px',
                  background: plan.highlight ? 'linear-gradient(170deg, var(--bg-1), var(--bg-0))' : 'var(--surface-2)',
                  p: { xs: 3, md: 4 },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
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
                    <plan.icon size={24} />
                  </Box>
                  <Typography variant="h6" sx={{ fontSize: '1.25rem', color: 'var(--ink-1)' }}>
                    {plan.name}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    mt: 2.5,
                    alignSelf: 'flex-start',
                    px: 1.5,
                    py: 0.55,
                    borderRadius: 999,
                    fontSize: 11.5,
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: plan.highlight ? '#04121C' : 'var(--accent)',
                    background: plan.highlight ? 'linear-gradient(135deg, #18C8DB, #5EDDEE)' : 'var(--tint-cyan)',
                    border: plan.highlight ? 'none' : '1px solid rgba(24,200,219,0.3)',
                  }}
                >
                  {plan.badge}
                </Box>

                <Box sx={{ mt: 2.5, display: 'flex', alignItems: 'baseline', gap: 1 }}>
                  <Box sx={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '2.7rem', letterSpacing: '-0.02em', color: 'var(--ink-1)' }}>
                    ${plan.price}
                  </Box>
                  <Box sx={{ fontSize: '0.85rem', color: 'var(--ink-3)' }}>/ mo</Box>
                </Box>
                <Typography sx={{ mt: 1, fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--ink-2)' }}>
                  {plan.tagline}
                </Typography>

                <Box sx={{ mt: 2.75, pt: 2.75, borderTop: '1px solid var(--stroke)', display: 'flex', flexDirection: 'column', gap: 1.4, flex: 1 }}>
                  {plan.features.map((feature) => (
                    <Box key={feature} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25, fontSize: '0.92rem', color: 'var(--ink-2)' }}>
                      <TbCircleCheck size={18} color="#18C8DB" style={{ flexShrink: 0, marginTop: 2 }} />
                      {feature}
                    </Box>
                  ))}
                </Box>

                <Button
                  component={RouterLink}
                  to="/#demo"
                  fullWidth
                  endIcon={<TbArrowRight size={17} />}
                  sx={{
                    mt: 3.5,
                    py: 1.25,
                    fontWeight: 700,
                    ...(plan.highlight
                      ? {
                          color: '#04121C',
                          background: 'linear-gradient(135deg, #18C8DB, #5EDDEE)',
                          boxShadow: '0 8px 28px rgba(24,200,219,0.35)',
                          '&:hover': { background: 'linear-gradient(135deg, #2BD3E5, #74E4F2)' },
                        }
                      : {
                          color: 'var(--ink-1)',
                          border: '1px solid var(--stroke-strong)',
                          background: 'var(--glass)',
                          '&:hover': { background: 'var(--glass-strong)' },
                        }),
                  }}
                >
                  Get this plan
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

/* ---------- Hardware ---------- */

const CAMERAS = [
  {
    name: 'Dual Lens',
    price: 299,
    kind: 'Road + driver facing',
    desc: 'Full HD on both lenses with onboard AI event detection. Side-camera installation available for complete coverage around the truck.',
    specs: ['1080p dual HD', 'Night vision', 'GPS built in'],
    alt: 'Dual-lens dashcam with road and driver facing cameras',
    images: [
      '/images/products/dual-lens-1.jpg',
      '/images/products/dual-lens-2.jpg',
      '/images/products/dual-lens-3.jpg',
    ],
  },
  {
    name: 'Mini Dashcam',
    price: 149,
    kind: 'Compact single lens',
    desc: 'A discreet, windshield-friendly mini dashcam for owner-operators who want protection without the footprint.',
    specs: ['Compact build', 'HD recording', 'Quick self-install'],
    alt: 'Compact mini dashcam with single lens',
    images: [
      '/images/products/mini-dashcam-1.jpg',
      '/images/products/mini-dashcam-2.jpg',
      '/images/products/mini-dashcam-3.jpg',
    ],
  },
];

function CameraGallery({ camera }) {
  const [active, setActive] = useState(0);

  return (
    <Box>
      {/* Main image on a light tile */}
      <Box
        sx={{
          position: 'relative',
          borderRadius: '18px',
          background: 'linear-gradient(160deg, #FFFFFF, #E9EFF2)',
          border: '1px solid rgba(255,255,255,0.2)',
          height: 250,
          overflow: 'hidden',
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <Box
            key={camera.images[active]}
            component={motion.img}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.3, ease: easeOut }}
            src={camera.images[active]}
            alt={camera.alt}
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              p: 2.5,
            }}
          />
        </AnimatePresence>
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            right: 14,
            px: 1.4,
            py: 0.5,
            borderRadius: 999,
            fontSize: 13,
            fontWeight: 700,
            color: '#04121C',
            background: 'linear-gradient(135deg, #18C8DB, #5EDDEE)',
            boxShadow: '0 6px 20px rgba(24,200,219,0.35)',
          }}
        >
          ${camera.price} one-time
        </Box>
      </Box>

      {/* Thumbnails */}
      <Box sx={{ mt: 1.5, display: 'flex', gap: 1.25 }}>
        {camera.images.map((image, i) => (
          <Box
            key={image}
            component="button"
            onClick={() => setActive(i)}
            aria-label={`View ${camera.name} photo ${i + 1}`}
            sx={{
              width: 64,
              height: 48,
              p: 0.5,
              borderRadius: '10px',
              cursor: 'pointer',
              background: 'linear-gradient(160deg, #FFFFFF, #E9EFF2)',
              border: '2px solid',
              borderColor: active === i ? 'var(--cyan)' : 'rgba(255,255,255,0.15)',
              opacity: active === i ? 1 : 0.65,
              transition: 'border-color 0.25s ease, opacity 0.25s ease, transform 0.25s ease',
              overflow: 'hidden',
              '&:hover': { opacity: 1, transform: 'translateY(-2px)' },
            }}
          >
            <Box
              component="img"
              src={image}
              alt=""
              sx={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function DashcamHardware() {
  return (
    <Box
      component="section"
      id="dashcam-hardware"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'radial-gradient(900px 500px at 10% 0%, var(--cyan-soft), transparent 60%)',
      }}
    >
      <Container>
        <SectionHeading
          align="left"
          eyebrow="Hardware"
          title="Pick your"
          gradientWord="camera"
          sub="Both run on the same AI platform — the difference is coverage and footprint."
        />

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
          {CAMERAS.map((camera, i) => (
            <Box
              key={camera.name}
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ delay: i * 0.14, duration: 0.8, ease: easeOut }}
              whileHover={{ y: -8 }}
              sx={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                /* Hardware showcase stays midnight in both themes */
                background: 'linear-gradient(165deg, #0B2C41 0%, #071B29 100%)',
                border: '1px solid rgba(94, 221, 238, 0.16)',
                p: { xs: 3, md: 4 },
                transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                '&:hover': {
                  borderColor: 'rgba(24, 200, 219, 0.45)',
                  boxShadow: '0 30px 70px rgba(4, 16, 26, 0.5), 0 0 60px rgba(24, 200, 219, 0.08)',
                },
              }}
            >
              <CameraGallery camera={camera} />

              <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 1, fontSize: 11.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#5EDDEE' }}>
                <TbVideo size={15} />
                {camera.kind}
              </Box>
              <Typography variant="h6" sx={{ mt: 1, fontSize: '1.35rem', color: '#ECF4F7' }}>
                {camera.name}
              </Typography>
              <Typography sx={{ mt: 1.25, fontSize: '0.92rem', lineHeight: 1.65, color: '#96ADBA' }}>
                {camera.desc}
              </Typography>

              <Box sx={{ mt: 2.5, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {camera.specs.map((spec) => (
                  <Box
                    key={spec}
                    sx={{
                      px: 1.4,
                      py: 0.5,
                      borderRadius: 999,
                      fontSize: 11.5,
                      fontWeight: 600,
                      color: '#96ADBA',
                      border: '1px solid rgba(255,255,255,0.12)',
                      background: 'rgba(255,255,255,0.04)',
                    }}
                  >
                    {spec}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Side camera add-on */}
        <Reveal delay={0.15}>
          <Box
            sx={{
              mt: 3,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: { xs: 2.5, md: 4 },
              borderRadius: '24px',
              border: '1px dashed var(--stroke-strong)',
              background: 'var(--surface-2)',
              p: { xs: 3, md: 4 },
            }}
          >
            <Box
              sx={{
                width: { xs: '100%', sm: 190 },
                height: 140,
                borderRadius: '16px',
                background: 'linear-gradient(160deg, #FFFFFF, #E9EFF2)',
                display: 'grid',
                placeItems: 'center',
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src="/images/products/side-camera.jpg"
                alt="Weatherproof side view camera"
                sx={{ maxWidth: '80%', maxHeight: '84%', objectFit: 'contain' }}
              />
            </Box>
            <Box sx={{ flex: 1, minWidth: 240 }}>
              <Box
                sx={{
                  display: 'inline-flex',
                  px: 1.4,
                  py: 0.45,
                  borderRadius: 999,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  background: 'var(--tint-cyan)',
                  border: '1px solid rgba(24,200,219,0.3)',
                }}
              >
                Add-on
              </Box>
              <Typography variant="h6" sx={{ mt: 1.25, fontSize: '1.2rem', color: 'var(--ink-1)' }}>
                Side View Camera
              </Typography>
              <Typography sx={{ mt: 0.75, fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--ink-2)', maxWidth: 560 }}>
                Pair the Dual Lens with a weatherproof side camera and cover the blind spots
                brokers and insurers ask about. We install it — ask us for a quote.
              </Typography>
            </Box>
            <Button
              component={RouterLink}
              to="/#demo"
              endIcon={<TbArrowRight size={16} />}
              sx={{
                px: 2.75,
                py: 1.1,
                fontWeight: 700,
                color: 'var(--ink-1)',
                border: '1px solid var(--stroke-strong)',
                background: 'var(--glass)',
                '&:hover': { background: 'var(--glass-strong)' },
              }}
            >
              Ask about install
            </Button>
          </Box>
        </Reveal>

        <Reveal delay={0.2}>
          <Typography sx={{ mt: 5, textAlign: 'center', fontSize: '0.88rem', color: 'var(--ink-3)' }}>
            On the 3-year contract, the camera is included at no cost — you only pay $22/month.
          </Typography>
        </Reveal>
      </Container>
    </Box>
  );
}

export default function Dashcam() {
  return (
    <>
      <DashcamHero />
      <DashcamPlans />
      <DashcamHardware />
      <CtaBanner />
    </>
  );
}
