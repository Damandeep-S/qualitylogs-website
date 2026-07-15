import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { TbArrowRight, TbCamera, TbCheck, TbCpu, TbGasStation, TbShieldCheck } from 'react-icons/tb';
import { Link as RouterLink } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';

const easeOut = [0.22, 1, 0.36, 1];

const SERVICES = [
  {
    icon: TbCpu,
    kind: 'Compliance & tracking',
    title: 'ELD & Fleet Tracking',
    desc: 'FMCSA-registered ELD with live GPS, automatic logs and audit-ready reports — everything a compliant truck needs in one plan.',
    points: [
      'HOS tracking',
      'IFTA mileage report',
      'DVIR reports',
      'Live tracking',
      'Share tracking with broker',
      '24×7 support',
    ],
    price: '$25',
    priceUnit: '/ truck / mo',
    priceNote: 'Starting from',
    to: '/eld',
    cta: 'Explore ELD',
    flagship: true,
  },
  {
    icon: TbCamera,
    kind: 'Video safety',
    title: 'AI Dashcam',
    desc: 'Dual-lens HD cameras that protect your drivers and shut down false claims.',
    points: ['Dual Lens · $299', 'Mini Dashcam · $149', 'Free cam on 3-yr plan'],
    price: '$20',
    priceUnit: '/ mo',
    priceNote: 'Starting from',
    to: '/dashcam',
    cta: 'Explore Dashcam',
  },
  {
    icon: TbShieldCheck,
    kind: 'Permits & filings',
    title: 'Safety & Compliance',
    desc: 'New authority, permits, renewals and quarterly filings — handled by our team.',
    points: ['USDOT / MC number', 'IFTA & 2290 filings', 'Permit renewals'],
    price: '$50',
    priceUnit: '/ mo',
    priceNote: 'Starting from',
    to: '/safety',
    cta: 'Explore Safety',
  },
  {
    icon: TbGasStation,
    kind: 'Fuel program',
    title: 'Fuel Card',
    desc: 'Prepaid, cardless fueling at TA, Petro and Love’s — real savings on every gallon.',
    points: ['Cardless fueling', 'TA · Petro · Love’s', 'Prepaid spend control'],
    price: '70¢',
    priceUnit: '/ gal',
    priceNote: 'Avg. savings',
    to: '/fuel-card',
    cta: 'Explore Fuel Card',
  },
];

function PriceTag({ service }) {
  return (
    <Box sx={{ textAlign: 'right', flexShrink: 0 }}>
      <Box sx={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
        {service.priceNote}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'flex-end', gap: 0.6 }}>
        <Box
          sx={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: service.flagship ? '2.3rem' : '1.7rem',
            letterSpacing: '-0.02em',
            color: 'var(--accent)',
          }}
        >
          {service.price}
        </Box>
        <Box sx={{ fontSize: '0.8rem', color: 'var(--ink-3)' }}>{service.priceUnit}</Box>
      </Box>
    </Box>
  );
}

function ServiceCard({ service, index }) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ delay: service.flagship ? 0 : 0.1 + index * 0.11, duration: 0.75, ease: easeOut }}
      sx={{ gridColumn: { xs: 'auto', md: service.flagship ? 'span 6' : 'span 2' }, display: 'flex' }}
    >
      <Box
        component={RouterLink}
        to={service.to}
        sx={{
          position: 'relative',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '24px',
          border: '1px solid var(--stroke)',
          background: 'var(--surface-2)',
          p: { xs: 3, md: service.flagship ? 4.5 : 3.5 },
          textDecoration: 'none',
          overflow: 'hidden',
          transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.35s ease, box-shadow 0.35s ease',
          '&:hover': {
            transform: 'translateY(-6px)',
            borderColor: 'rgba(24, 200, 219, 0.45)',
            boxShadow: '0 30px 70px rgba(4, 16, 26, 0.35), 0 0 50px rgba(24, 200, 219, 0.06)',
            '& .svc-arrow': { transform: 'translateX(4px)', color: 'var(--accent)' },
            '& .svc-glow': { opacity: 1 },
          },
        }}
      >
        {/* Corner glow on hover */}
        <Box
          aria-hidden
          className="svc-glow"
          sx={{
            position: 'absolute',
            top: '-40%',
            right: '-15%',
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'radial-gradient(circle, var(--cyan-soft), transparent 65%)',
            opacity: 0,
            transition: 'opacity 0.45s ease',
            pointerEvents: 'none',
          }}
        />

        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: service.flagship ? { xs: 'column', md: 'row' } : 'column',
            gap: service.flagship ? { xs: 3, md: 6 } : 0,
            flex: 1,
          }}
        >
          {/* Head */}
          <Box sx={{ flex: service.flagship ? '0 0 44%' : 'initial', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 2 }}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '15px',
                  display: 'grid',
                  placeItems: 'center',
                  color: 'var(--accent)',
                  background: 'var(--tint-cyan)',
                  border: '1px solid rgba(24, 200, 219, 0.25)',
                }}
              >
                <service.icon size={26} />
              </Box>
              <PriceTag service={service} />
            </Box>

            <Box
              sx={{
                mt: 2.5,
                fontSize: 11.5,
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
              }}
            >
              {service.kind}
            </Box>
            <Typography variant="h3" sx={{ mt: 0.75, fontSize: service.flagship ? { xs: '1.6rem', md: '1.9rem' } : '1.35rem', color: 'var(--ink-1)' }}>
              {service.title}
            </Typography>
            <Typography sx={{ mt: 1.25, fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--ink-2)' }}>
              {service.desc}
            </Typography>

            <Box
              className="svc-cta"
              sx={{
                mt: 'auto',
                pt: 3,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.75,
                fontSize: '0.92rem',
                fontWeight: 700,
                color: 'var(--ink-1)',
              }}
            >
              {service.cta}
              <Box component="span" className="svc-arrow" sx={{ display: 'inline-flex', transition: 'transform 0.3s ease, color 0.3s ease' }}>
                <TbArrowRight size={17} />
              </Box>
            </Box>
          </Box>

          {/* Included points */}
          <Box
            sx={{
              flex: 1,
              display: service.flagship ? 'grid' : 'flex',
              gridTemplateColumns: service.flagship ? { xs: '1fr', sm: 'repeat(2, 1fr)' } : undefined,
              flexDirection: 'column',
              alignContent: 'center',
              gap: service.flagship ? 1.5 : 1.1,
              mt: service.flagship ? 0 : 2.75,
              pt: service.flagship ? 0 : 2.5,
              borderTop: service.flagship ? 'none' : '1px solid var(--stroke)',
            }}
          >
            {service.points.map((point) => (
              <Box
                key={point}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.1,
                  fontSize: '0.89rem',
                  color: 'var(--ink-2)',
                  ...(service.flagship && {
                    px: 1.75,
                    py: 1.25,
                    borderRadius: '12px',
                    border: '1px solid var(--stroke)',
                    background: 'var(--glass)',
                  }),
                }}
              >
                <TbCheck size={16} color="#18C8DB" style={{ flexShrink: 0 }} />
                {point}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function Services() {
  return (
    <Box
      component="section"
      id="services"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'radial-gradient(1000px 560px at 50% -10%, var(--cyan-soft), transparent 62%)',
      }}
    >
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Four services."
          gradientWord="One partner."
          sub="ELD compliance, dashcams, permits and fuel savings — run the whole operation with one team on call."
        />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(6, 1fr)' },
            gap: 3,
            alignItems: 'stretch',
          }}
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
