import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { TbBolt, TbBroadcast, TbCpu } from 'react-icons/tb';
import SectionHeading from '../common/SectionHeading';
import { LogoMark } from '../common/Logo';

const easeOut = [0.22, 1, 0.36, 1];

/* Stylized device illustrations (CSS/SVG — no photography needed) */

function EldDevice() {
  return (
    <Box sx={{ position: 'relative', width: 150, height: 96 }}>
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          borderRadius: '16px',
          background: 'linear-gradient(150deg, #123448, #0A2233)',
          border: '1px solid rgba(94, 221, 238, 0.25)',
          boxShadow: '0 20px 44px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}
      />
      <Box sx={{ position: 'absolute', top: 14, left: 16, display: 'flex', gap: 0.75 }}>
        {[0, 1, 2].map((i) => (
          <Box
            key={i}
            component={motion.span}
            animate={{ opacity: [0.25, 1, 0.25] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            sx={{ width: 7, height: 7, borderRadius: '50%', background: '#18C8DB' }}
          />
        ))}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 14,
          left: 16,
          right: 16,
          height: 26,
          borderRadius: '8px',
          background: 'rgba(24, 200, 219, 0.1)',
          border: '1px solid rgba(24, 200, 219, 0.2)',
          display: 'flex',
          alignItems: 'center',
          px: 1.25,
          fontSize: 9.5,
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          letterSpacing: '0.08em',
          color: '#5EDDEE',
        }}
      >
        HOS · 6:24 REMAINING
      </Box>
      {/* Cable */}
      <svg width="70" height="60" viewBox="0 0 70 60" style={{ position: 'absolute', right: -56, bottom: -18 }}>
        <path d="M 4 6 C 30 10 44 28 50 52" stroke="rgba(94,221,238,0.5)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <rect x="44" y="48" width="14" height="10" rx="3" fill="#123448" stroke="rgba(94,221,238,0.4)" />
      </svg>
    </Box>
  );
}

function DashCam() {
  return (
    <Box sx={{ position: 'relative', width: 130, height: 100 }}>
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          borderRadius: '20px',
          background: 'linear-gradient(150deg, #123448, #0A2233)',
          border: '1px solid rgba(94, 221, 238, 0.25)',
          boxShadow: '0 20px 44px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}
      />
      {/* Lens */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 58,
          height: 58,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 36% 32%, #2A5A74, #05121C 70%)',
          border: '3px solid rgba(94, 221, 238, 0.35)',
          boxShadow: 'inset 0 0 18px rgba(0,0,0,0.7)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            left: 14,
            width: 12,
            height: 12,
            borderRadius: '50%',
            background: 'rgba(167, 239, 248, 0.5)',
            filter: 'blur(1px)',
          }}
        />
      </Box>
      <Box
        component={motion.span}
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        sx={{ position: 'absolute', top: 12, right: 14, width: 8, height: 8, borderRadius: '50%', background: '#F87171' }}
      />
    </Box>
  );
}

function AssetTag() {
  return (
    <Box sx={{ position: 'relative', width: 104, height: 104 }}>
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          borderRadius: '24px',
          background: 'linear-gradient(150deg, #123448, #0A2233)',
          border: '1px solid rgba(94, 221, 238, 0.25)',
          boxShadow: '0 20px 44px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <LogoMark size={52} pinColor="#18C8DB" dotColor="#0A2233" />
      </Box>
    </Box>
  );
}

const DEVICES = [
  {
    name: 'QL Link ELD',
    kind: 'Electronic logging device',
    desc: 'Plugs into the diagnostic port and starts logging in minutes. Engine data, HOS and location in one rugged unit.',
    specs: ['Plug & play', '4G LTE', 'BYOD driver app'],
    visual: <EldDevice />,
    icon: TbCpu,
  },
  {
    name: 'Dual Lens Dashcam',
    kind: 'Dual-facing dash camera',
    desc: 'Road- and driver-facing HD with on-device AI. Incident clips upload themselves before the truck stops rolling.',
    specs: ['1080p HD', 'On-device AI', 'Night vision'],
    visual: <DashCam />,
    icon: TbBolt,
  },
  {
    name: 'QL Tag',
    kind: 'Asset & trailer tracker',
    desc: 'Weatherproof tracker for trailers, containers and equipment. Install once and forget it for years.',
    specs: ['5-yr battery', 'IP67 rated', 'No wiring'],
    visual: <AssetTag />,
    icon: TbBroadcast,
  },
];

export default function Devices() {
  return (
    <Box component="section" id="devices" sx={{ py: { xs: 10, md: 14 } }}>
      <Container>
        <SectionHeading
          eyebrow="Hardware"
          title="Devices that disappear"
          gradientWord="into the workflow"
          sub="Pre-configured before shipping, self-installed in minutes, replaced free if they ever fail. Hardware should be the easy part."
        />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {DEVICES.map((device, i) => (
            <Box
              key={device.name}
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
                /* Devices stay midnight in both themes — hardware showcase */
                background: 'linear-gradient(165deg, #0B2C41 0%, #071B29 100%)',
                border: '1px solid rgba(94, 221, 238, 0.16)',
                p: 3.5,
                transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                '&:hover': {
                  borderColor: 'rgba(24, 200, 219, 0.45)',
                  boxShadow: '0 30px 70px rgba(4, 16, 26, 0.5), 0 0 60px rgba(24, 200, 219, 0.08)',
                },
              }}
            >
              {/* Glow */}
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  top: '-30%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 260,
                  height: 260,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(24,200,219,0.14), transparent 65%)',
                  pointerEvents: 'none',
                }}
              />
              <Box
                sx={{
                  height: 150,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                {device.visual}
              </Box>

              <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 1, fontSize: 11.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#5EDDEE' }}>
                <device.icon size={15} />
                {device.kind}
              </Box>
              <Typography variant="h6" sx={{ mt: 1, fontSize: '1.3rem', color: '#ECF4F7' }}>
                {device.name}
              </Typography>
              <Typography sx={{ mt: 1.25, fontSize: '0.91rem', lineHeight: 1.6, color: '#96ADBA' }}>
                {device.desc}
              </Typography>

              <Box sx={{ mt: 2.5, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {device.specs.map((spec) => (
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
      </Container>
    </Box>
  );
}
