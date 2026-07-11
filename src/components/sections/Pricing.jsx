import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AnimatePresence, motion } from 'framer-motion';
import { TbArrowRight, TbCheck } from 'react-icons/tb';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';

const easeOut = [0.22, 1, 0.36, 1];

const PLANS = [
  {
    name: 'Track',
    tagline: 'GPS visibility for growing fleets',
    monthly: 25,
    features: [
      'Live GPS tracking & history',
      'FMCSA-registered ELD & HOS',
      'Geofences & instant alerts',
      'Driver mobile app',
      'Email support',
    ],
  },
  {
    name: 'Protect',
    tagline: 'Everything in Track, plus safety AI',
    monthly: 38,
    popular: true,
    features: [
      'AI dual-facing dash cameras',
      'Automatic incident clips',
      'Driver safety scorecards',
      'Fuel & idle monitoring',
      'IFTA automated reporting',
      '24/7 priority support',
    ],
  },
  {
    name: 'Command',
    tagline: 'For fleets that run on data',
    custom: true,
    features: [
      'Everything in Protect',
      'Asset & trailer tracking',
      'API access & integrations',
      'Custom reports & exports',
      'Dedicated account manager',
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <Box
      component="section"
      id="pricing"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'radial-gradient(900px 520px at 90% 10%, var(--cyan-soft), transparent 60%)',
      }}
    >
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Per vehicle, per month."
          gradientWord="No surprises"
          sub="Hardware included on annual plans. Cancel anytime — we keep customers with the product, not the paperwork."
        />

        {/* Billing toggle */}
        <Reveal>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 7 }}>
            <Box
              sx={{
                display: 'inline-flex',
                p: 0.5,
                borderRadius: 999,
                border: '1px solid var(--stroke)',
                background: 'var(--glass)',
              }}
            >
              {[
                { key: false, label: 'Monthly' },
                { key: true, label: 'Annual · save 15%' },
              ].map((opt) => (
                <Box
                  key={String(opt.key)}
                  component="button"
                  onClick={() => setAnnual(opt.key)}
                  sx={{
                    position: 'relative',
                    px: 2.5,
                    py: 1,
                    border: 'none',
                    borderRadius: 999,
                    background: 'transparent',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: annual === opt.key ? '#04121C' : 'var(--ink-2)',
                    transition: 'color 0.25s ease',
                  }}
                >
                  {annual === opt.key && (
                    <motion.span
                      layoutId="billing-pill"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: 999,
                        background: 'linear-gradient(135deg, #18C8DB, #5EDDEE)',
                      }}
                    />
                  )}
                  <Box component="span" sx={{ position: 'relative' }}>
                    {opt.label}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Reveal>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 3,
            alignItems: 'stretch',
          }}
        >
          {PLANS.map((plan, i) => {
            const price = plan.custom ? null : annual ? Math.round(plan.monthly * 0.85) : plan.monthly;
            return (
              <Box
                key={plan.name}
                component={motion.div}
                initial={{ opacity: 0, y: 38 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ delay: i * 0.13, duration: 0.75, ease: easeOut }}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '24px',
                  p: '1px',
                  background: plan.popular
                    ? 'linear-gradient(170deg, rgba(24,200,219,0.7), rgba(24,200,219,0.08) 55%, rgba(94,221,238,0.4))'
                    : 'var(--stroke)',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translateY(-6px)' },
                }}
              >
                {plan.popular && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -13,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      px: 1.75,
                      py: 0.5,
                      borderRadius: 999,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#04121C',
                      background: 'linear-gradient(135deg, #18C8DB, #5EDDEE)',
                      boxShadow: '0 8px 24px rgba(24,200,219,0.4)',
                      zIndex: 1,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Most popular
                  </Box>
                )}
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '23px',
                    background: plan.popular
                      ? 'linear-gradient(170deg, var(--bg-1), var(--bg-0))'
                      : 'var(--surface-2)',
                    p: 3.5,
                  }}
                >
                  <Typography variant="h6" sx={{ fontSize: '1.2rem', color: 'var(--ink-1)' }}>
                    {plan.name}
                  </Typography>
                  <Typography sx={{ mt: 0.5, fontSize: '0.87rem', color: 'var(--ink-3)' }}>
                    {plan.tagline}
                  </Typography>

                  <Box sx={{ mt: 3, minHeight: 74 }}>
                    {plan.custom ? (
                      <Box sx={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '2.1rem', color: 'var(--ink-1)' }}>
                        Custom
                      </Box>
                    ) : (
                      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                        <AnimatePresence mode="popLayout" initial={false}>
                          <motion.span
                            key={price}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -14 }}
                            transition={{ duration: 0.3, ease: easeOut }}
                            style={{
                              fontFamily: 'var(--font-display)',
                              fontWeight: 700,
                              fontSize: '2.6rem',
                              letterSpacing: '-0.02em',
                              color: 'var(--ink-1)',
                            }}
                          >
                            ${price}
                          </motion.span>
                        </AnimatePresence>
                        <Box sx={{ fontSize: '0.85rem', color: 'var(--ink-3)' }}>/ vehicle / mo</Box>
                      </Box>
                    )}
                    {!plan.custom && annual && (
                      <Box sx={{ mt: 0.5, fontSize: '0.78rem', color: 'var(--accent)', fontWeight: 600 }}>
                        Billed annually · hardware included
                      </Box>
                    )}
                  </Box>

                  <Box sx={{ mt: 2.5, display: 'flex', flexDirection: 'column', gap: 1.4, flex: 1 }}>
                    {plan.features.map((f) => (
                      <Box key={f} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25, fontSize: '0.9rem', color: 'var(--ink-2)' }}>
                        <TbCheck size={17} color="#18C8DB" style={{ flexShrink: 0, marginTop: 2 }} />
                        {f}
                      </Box>
                    ))}
                  </Box>

                  <Button
                    href="#demo"
                    fullWidth
                    endIcon={<TbArrowRight size={17} />}
                    sx={{
                      mt: 3.5,
                      py: 1.25,
                      fontWeight: 700,
                      ...(plan.popular
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
                    {plan.custom ? 'Talk to sales' : 'Start free pilot'}
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Box>

        <Reveal delay={0.2}>
          <Typography sx={{ mt: 5, textAlign: 'center', fontSize: '0.85rem', color: 'var(--ink-3)' }}>
            All plans include onboarding, training and free hardware replacement. Volume pricing from 25+ vehicles.
          </Typography>
        </Reveal>
      </Container>
    </Box>
  );
}
