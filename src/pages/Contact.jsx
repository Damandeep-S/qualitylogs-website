import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { TbCircleCheck, TbSend } from 'react-icons/tb';

const easeOut = [0.22, 1, 0.36, 1];

const FLEET_SIZES = ['1–5 trucks', '6–20 trucks', '21–100 trucks', '100+ trucks'];

const SERVICES = ['ELD & Tracking', 'AI Dashcam', 'Safety & Compliance', 'Fuel Card'];

const EMPTY_FORM = {
  name: '',
  email: '',
  phone: '',
  company: '',
  fleetSize: '',
  services: [],
  message: '',
};

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '14px',
    background: 'var(--glass)',
    color: 'var(--ink-1)',
    '& fieldset': { borderColor: 'var(--stroke)' },
    '&:hover fieldset': { borderColor: 'var(--stroke-strong)' },
    '&.Mui-focused fieldset': { borderColor: 'var(--accent)' },
  },
  '& .MuiInputLabel-root': { color: 'var(--ink-3)' },
  '& .MuiInputLabel-root.Mui-focused': { color: 'var(--accent)' },
  '& .MuiSelect-icon': { color: 'var(--ink-3)' },
};

function SuccessPanel({ name, onReset }) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: easeOut }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: 420,
        px: { xs: 3, md: 6 },
        py: 6,
      }}
    >
      <Box sx={{ color: 'var(--accent)', lineHeight: 0 }}>
        <TbCircleCheck size={64} />
      </Box>
      <Typography variant="h4" sx={{ mt: 2.5, color: 'var(--ink-1)' }}>
        Request sent{name ? `, ${name.split(' ')[0]}` : ''}!
      </Typography>
      <Typography sx={{ mt: 1.5, maxWidth: 420, fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--ink-2)' }}>
        Our team will reach out within one business day to schedule your live demo. Need us
        sooner? Call{' '}
        <Box component="a" href="tel:+18144140132" sx={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none' }}>
          +1 (814) 414-0132
        </Box>{' '}
        — we answer 24/7.
      </Typography>
      <Button
        onClick={onReset}
        sx={{
          mt: 4,
          px: 3,
          py: 1.1,
          color: 'var(--ink-1)',
          border: '1px solid var(--stroke-strong)',
          background: 'var(--glass)',
          '&:hover': { background: 'var(--glass-strong)' },
        }}
      >
        Send another request
      </Button>
    </Box>
  );
}

function DemoForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (field) => (event) =>
    setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const toggleService = (service) =>
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/support@qualitylogs.us', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Demo request — ${form.name}`,
          _template: 'table',
          _captcha: 'false',
          Name: form.name,
          Email: form.email,
          Phone: form.phone || '—',
          'Company / fleet': form.company || '—',
          'Fleet size': form.fleetSize || '—',
          'Interested in': form.services.join(', ') || '—',
          Message: form.message || '—',
        }),
      });
      if (!res.ok) throw new Error(`FormSubmit responded ${res.status}`);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <SuccessPanel
        name={form.name}
        onReset={() => {
          setForm(EMPTY_FORM);
          setStatus('idle');
        }}
      />
    );
  }

  const mailtoFallback = `mailto:support@qualitylogs.us?subject=${encodeURIComponent(
    `Demo request — ${form.name}`
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany: ${form.company}\nFleet size: ${form.fleetSize}\nInterested in: ${form.services.join(', ')}\n\n${form.message}`
  )}`;

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: { xs: 3, md: 4.5 } }}>
      <Typography variant="h4" sx={{ color: 'var(--ink-1)', fontSize: { xs: '1.6rem', md: '1.9rem' } }}>
        Get a{' '}
        <Box
          component="span"
          sx={{
            background: 'var(--headline-grad)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          demo
        </Box>
      </Typography>
      <Typography sx={{ mt: 1, fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--ink-2)' }}>
        Fill this out and we&rsquo;ll reach out within one business day. Takes under a minute.
      </Typography>

      <Box
        sx={{
          mt: 3.5,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 2.25,
        }}
      >
        <TextField
          label="Full name"
          value={form.name}
          onChange={handleChange('name')}
          required
          autoComplete="name"
          sx={fieldSx}
        />
        <TextField
          label="Work email"
          type="email"
          value={form.email}
          onChange={handleChange('email')}
          required
          autoComplete="email"
          sx={fieldSx}
        />
        <TextField
          label="Phone"
          type="tel"
          value={form.phone}
          onChange={handleChange('phone')}
          autoComplete="tel"
          sx={fieldSx}
        />
        <TextField
          label="Company / fleet name"
          value={form.company}
          onChange={handleChange('company')}
          autoComplete="organization"
          sx={fieldSx}
        />
        <TextField
          select
          label="Fleet size"
          value={form.fleetSize}
          onChange={handleChange('fleetSize')}
          sx={{ ...fieldSx, gridColumn: { sm: '1 / -1' } }}
        >
          {FLEET_SIZES.map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ gridColumn: { sm: '1 / -1' } }}>
          <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink-3)' }}>
            What are you interested in?
          </Typography>
          <Box sx={{ mt: 1.25, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {SERVICES.map((service) => {
              const selected = form.services.includes(service);
              return (
                <Box
                  key={service}
                  component="button"
                  type="button"
                  onClick={() => toggleService(service)}
                  aria-pressed={selected}
                  sx={{
                    px: 1.9,
                    py: 0.9,
                    borderRadius: 999,
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    fontFamily: 'inherit',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    color: selected ? 'var(--accent)' : 'var(--ink-2)',
                    border: '1px solid',
                    borderColor: selected ? 'rgba(24,200,219,0.5)' : 'var(--stroke)',
                    background: selected ? 'var(--tint-cyan)' : 'var(--glass)',
                    '&:hover': {
                      borderColor: selected ? 'rgba(24,200,219,0.65)' : 'var(--stroke-strong)',
                      color: selected ? 'var(--accent)' : 'var(--ink-1)',
                    },
                  }}
                >
                  {service}
                </Box>
              );
            })}
          </Box>
        </Box>
        <TextField
          label="Anything else we should know?"
          value={form.message}
          onChange={handleChange('message')}
          multiline
          minRows={4}
          placeholder="Current setup, timelines, compliance questions…"
          sx={{ ...fieldSx, gridColumn: { sm: '1 / -1' } }}
        />
      </Box>

      {status === 'error' && (
        <Box
          sx={{
            mt: 2.5,
            px: 2,
            py: 1.5,
            borderRadius: '12px',
            border: '1px solid var(--warn)',
            background: 'var(--warn-bg)',
            fontSize: '0.88rem',
            lineHeight: 1.6,
            color: 'var(--ink-1)',
          }}
        >
          Something went wrong sending your request. Please try again, call{' '}
          <Box component="a" href="tel:+18144140132" sx={{ color: 'var(--accent)', fontWeight: 700 }}>
            +1 (814) 414-0132
          </Box>{' '}
          or{' '}
          <Box component="a" href={mailtoFallback} sx={{ color: 'var(--accent)', fontWeight: 700 }}>
            email us directly
          </Box>
          .
        </Box>
      )}

      <Button
        type="submit"
        size="large"
        disabled={status === 'sending'}
        endIcon={<TbSend size={18} />}
        sx={{
          mt: 3.5,
          width: '100%',
          py: 1.4,
          fontSize: '1rem',
          fontWeight: 700,
          color: '#04121C',
          background: 'linear-gradient(135deg, #18C8DB 0%, #5EDDEE 100%)',
          boxShadow: '0 10px 40px rgba(24, 200, 219, 0.35)',
          transition: 'all 0.25s ease',
          '&:hover': {
            background: 'linear-gradient(135deg, #2BD3E5 0%, #74E4F2 100%)',
            boxShadow: '0 14px 52px rgba(24, 200, 219, 0.5)',
            transform: 'translateY(-2px)',
          },
          '&.Mui-disabled': { color: 'rgba(4,18,28,0.6)', background: 'var(--track-bg)' },
        }}
      >
        {status === 'sending' ? 'Sending…' : 'Send request'}
      </Button>
      <Typography sx={{ mt: 2, textAlign: 'center', fontSize: '0.8rem', color: 'var(--ink-3)' }}>
        Free 7-day pilot on your own trucks · no credit card
      </Typography>
    </Box>
  );
}

export default function Contact() {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 14, md: 18 },
        pb: { xs: 10, md: 14 },
        background: 'radial-gradient(900px 480px at 80% -10%, var(--cyan-soft), transparent 62%)',
      }}
    >
      <Container maxWidth="sm">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          sx={{
            borderRadius: '24px',
            border: '1px solid var(--card-border)',
            background: 'var(--surface-2)',
            boxShadow: 'var(--shadow-card)',
            overflow: 'hidden',
          }}
        >
          <DemoForm />
        </Box>
      </Container>
    </Box>
  );
}
