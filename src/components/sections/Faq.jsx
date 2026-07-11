import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AnimatePresence, motion } from 'framer-motion';
import { TbPlus } from 'react-icons/tb';
import SectionHeading from '../common/SectionHeading';

const easeOut = [0.22, 1, 0.36, 1];

const FAQS = [
  {
    q: 'Is the ELD FMCSA-registered?',
    a: 'Yes. Quality Logs is on the FMCSA registered devices list and fully compliant with the ELD mandate, including data transfer for roadside inspections via web services and email.',
  },
  {
    q: 'How long does installation take?',
    a: 'Most drivers self-install in under 15 minutes: plug the device into the diagnostic port, open the app, scan the QR code. We pre-configure every unit before it ships, and our team stays on the phone with you if you want the company.',
  },
  {
    q: 'Am I locked into a contract?',
    a: 'No long-term contracts. Monthly plans cancel anytime; annual plans simply price in the hardware. If you leave, the data export is one click — your data is yours.',
  },
  {
    q: 'Does it work with mixed fleets?',
    a: 'Yes — heavy trucks, box trucks, vans and passenger vehicles on one dashboard. The QL Tag covers unpowered assets like trailers and generators.',
  },
  {
    q: 'What happens in dead zones?',
    a: 'Devices buffer everything locally and sync the moment coverage returns. Logs, GPS breadcrumbs and camera events are never lost to a coverage gap.',
  },
  {
    q: 'Can I bring hardware I already own?',
    a: 'In many cases, yes. We support a range of common ELD and camera hardware — send us your current setup and we will confirm compatibility before you spend anything.',
  },
];

function FaqItem({ item, open, onToggle, index }) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.07, duration: 0.6, ease: easeOut }}
      sx={{
        borderRadius: '16px',
        border: '1px solid',
        borderColor: open ? 'rgba(24,200,219,0.4)' : 'var(--stroke)',
        background: 'var(--surface-2)',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease',
      }}
    >
      <Box
        component="button"
        onClick={onToggle}
        aria-expanded={open}
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          px: 3,
          py: 2.5,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <Typography sx={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.02rem', color: 'var(--ink-1)' }}>
          {item.q}
        </Typography>
        <Box
          component={motion.span}
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: easeOut }}
          sx={{
            display: 'grid',
            placeItems: 'center',
            width: 30,
            height: 30,
            borderRadius: '50%',
            flexShrink: 0,
            color: open ? '#04121C' : 'var(--accent)',
            background: open ? 'var(--cyan)' : 'var(--tint-cyan)',
            transition: 'background 0.3s ease, color 0.3s ease',
          }}
        >
          <TbPlus size={17} />
        </Box>
      </Box>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
            style={{ overflow: 'hidden' }}
          >
            <Typography sx={{ px: 3, pb: 3, fontSize: '0.93rem', lineHeight: 1.7, color: 'var(--ink-2)' }}>
              {item.a}
            </Typography>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <Box component="section" id="faq" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="md">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions fleets"
          gradientWord="actually ask"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.75 }}>
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              index={i}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
