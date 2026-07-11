import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { TbArrowRight, TbEye, TbEyeOff, TbInfoCircle, TbLock } from 'react-icons/tb';
import { Link as RouterLink } from 'react-router-dom';
import { LogoMark } from '../components/common/Logo';

const easeOut = [0.22, 1, 0.36, 1];

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    background: 'var(--glass)',
    '& fieldset': { borderColor: 'var(--stroke-strong)' },
    '&:hover fieldset': { borderColor: 'var(--ink-3)' },
    '&.Mui-focused fieldset': { borderColor: 'var(--cyan)', borderWidth: '1.5px' },
  },
};

/* Right panel: always-midnight brand visual with a live mini-map */
function PortalVisual() {
  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        p: 5,
        background:
          'radial-gradient(700px 420px at 85% 0%, rgba(24,200,219,0.22), transparent 60%), linear-gradient(165deg, #0A2B40 0%, #04121C 100%)',
      }}
    >
      {/* Dot grid */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(236,244,247,0.1) 1px, transparent 1.4px)',
          backgroundSize: '30px 30px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 20%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 20%, black 20%, transparent 75%)',
        }}
      />

      <Box sx={{ position: 'relative' }}>
        <Typography
          sx={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: '1.6rem',
            lineHeight: 1.25,
            color: '#ECF4F7',
            maxWidth: 320,
          }}
        >
          Your fleet is already{' '}
          <Box
            component="span"
            sx={{
              background: 'linear-gradient(95deg, #18C8DB, #7DEBF7)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            on the map.
          </Box>
        </Typography>
        <Typography sx={{ mt: 1.5, fontSize: '0.9rem', color: '#96ADBA', maxWidth: 320 }}>
          Sign in to pick up right where your trucks are.
        </Typography>
      </Box>

      {/* Mini live map */}
      <Box sx={{ position: 'relative', my: 3 }}>
        <svg viewBox="0 0 380 220" width="100%" style={{ display: 'block' }}>
          <g stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" fill="none">
            <path d="M 0 70 C 100 62 260 80 380 64" />
            <path d="M 0 150 C 120 142 240 158 380 146" />
            <path d="M 120 0 C 124 80 118 160 122 220" />
            <path d="M 260 0 C 256 70 264 150 258 220" />
          </g>
          <motion.path
            id="portalRoute"
            d="M 24 190 C 90 170 130 110 200 96 C 270 82 310 50 356 30"
            stroke="#18C8DB"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.6, duration: 1.8, ease: 'easeInOut' }}
          />
          <path
            className="route-flow"
            d="M 24 190 C 90 170 130 110 200 96 C 270 82 310 50 356 30"
            stroke="rgba(236,244,247,0.8)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="24" cy="190" r="4.5" fill="#0C8A9B" stroke="#04121C" strokeWidth="2" />
          <g>
            <circle className="svg-ping" cx="356" cy="30" r="8" fill="none" stroke="#18C8DB" strokeWidth="1.4" />
            <circle cx="356" cy="30" r="5" fill="#18C8DB" stroke="#04121C" strokeWidth="2" />
          </g>
          <circle className="svg-ping" cx="150" cy="60" r="6" fill="none" stroke="rgba(24,200,219,0.6)" strokeWidth="1.2" style={{ animationDelay: '0.9s' }} />
          <circle cx="150" cy="60" r="3.5" fill="#5EDDEE" opacity="0.85" />
          <circle className="svg-ping" cx="300" cy="170" r="6" fill="none" stroke="rgba(24,200,219,0.6)" strokeWidth="1.2" style={{ animationDelay: '1.7s' }} />
          <circle cx="300" cy="170" r="3.5" fill="#5EDDEE" opacity="0.85" />
          <g>
            <animateMotion dur="10s" repeatCount="indefinite" rotate="auto" begin="2.4s">
              <mpath href="#portalRoute" />
            </animateMotion>
            <circle r="9" fill="rgba(24,200,219,0.22)" />
            <circle r="5" fill="#18C8DB" stroke="#04121C" strokeWidth="1.8" />
            <path d="M 7 0 L 2.8 -2.8 L 2.8 2.8 Z" fill="#04121C" />
          </g>
        </svg>
      </Box>

      <Box sx={{ position: 'relative', display: 'flex', gap: 2 }}>
        {[
          { value: '12,480', label: 'vehicles live now' },
          { value: '99.9%', label: 'platform uptime' },
        ].map((stat) => (
          <Box
            key={stat.label}
            sx={{
              flex: 1,
              px: 2,
              py: 1.5,
              borderRadius: '14px',
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <Box sx={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: '#ECF4F7' }}>
              {stat.value}
            </Box>
            <Box sx={{ fontSize: '0.78rem', color: '#96ADBA', mt: 0.25 }}>{stat.label}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default function Portal() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        pt: { xs: 14, md: 16 },
        pb: { xs: 8, md: 10 },
        background:
          'radial-gradient(900px 560px at 80% -10%, var(--cyan-soft), transparent 60%), var(--hero-wash)',
      }}
    >
      <Container>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: easeOut }}
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' },
            maxWidth: 980,
            mx: 'auto',
            borderRadius: '26px',
            overflow: 'hidden',
            border: '1px solid var(--card-border)',
            boxShadow: 'var(--panel-shadow)',
          }}
        >
          {/* ---- Form panel ---- */}
          <Box sx={{ background: 'var(--bg-1)', p: { xs: 3.5, sm: 5, md: 6 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
              <LogoMark size={34} />
              <Box sx={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--ink-1)' }}>
                QUALITY <Box component="span" sx={{ color: 'var(--accent)' }}>LOGS</Box>
                <Box component="span" sx={{ color: 'var(--ink-3)', fontWeight: 500 }}> · Portal</Box>
              </Box>
            </Box>

            <Typography variant="h4" sx={{ mt: 4, fontSize: '1.7rem', color: 'var(--ink-1)' }}>
              Welcome back
            </Typography>
            <Typography sx={{ mt: 1, fontSize: '0.93rem', color: 'var(--ink-2)' }}>
              Sign in to your fleet command center.
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
              <TextField
                fullWidth
                required
                type="email"
                label="Work email"
                autoComplete="email"
                sx={fieldSx}
              />
              <TextField
                fullWidth
                required
                label="Password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                sx={{ ...fieldSx, mt: 2.25 }}
                slotProps={{
                  input: {
                    endAdornment: (
                      <IconButton
                        onClick={() => setShowPassword((s) => !s)}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        edge="end"
                        sx={{ color: 'var(--ink-3)' }}
                      >
                        {showPassword ? <TbEyeOff size={19} /> : <TbEye size={19} />}
                      </IconButton>
                    ),
                  },
                }}
              />

              <Box sx={{ mt: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Checkbox size="small" sx={{ p: 0.5, color: 'var(--ink-3)', '&.Mui-checked': { color: 'var(--cyan)' } }} />
                  <Box sx={{ fontSize: '0.83rem', color: 'var(--ink-2)' }}>Remember me</Box>
                </Box>
                <Box
                  component="a"
                  href="mailto:support@qualitylogs.us?subject=Password%20reset"
                  sx={{ fontSize: '0.83rem', fontWeight: 600, color: 'var(--accent)', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  Forgot password?
                </Box>
              </Box>

              {submitted && (
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: easeOut }}
                  sx={{
                    mt: 2.5,
                    display: 'flex',
                    gap: 1.25,
                    alignItems: 'flex-start',
                    px: 2,
                    py: 1.5,
                    borderRadius: '12px',
                    border: '1px solid rgba(24,200,219,0.35)',
                    background: 'var(--tint-cyan)',
                    fontSize: '0.85rem',
                    lineHeight: 1.55,
                    color: 'var(--ink-1)',
                  }}
                >
                  <TbInfoCircle size={19} color="#18C8DB" style={{ flexShrink: 0, marginTop: 1 }} />
                  <span>
                    This preview build isn’t connected to the live portal yet. For account access,
                    call <b>+1 (814) 414-0132</b> or email support@qualitylogs.us.
                  </span>
                </Box>
              )}

              <Button
                type="submit"
                fullWidth
                size="large"
                endIcon={<TbArrowRight size={18} />}
                sx={{
                  mt: 3,
                  py: 1.4,
                  fontWeight: 700,
                  fontSize: '0.98rem',
                  color: '#04121C',
                  background: 'linear-gradient(135deg, #18C8DB 0%, #5EDDEE 100%)',
                  boxShadow: '0 10px 32px rgba(24,200,219,0.35)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #2BD3E5 0%, #74E4F2 100%)',
                    boxShadow: '0 14px 40px rgba(24,200,219,0.5)',
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                Sign in
              </Button>

              <Box sx={{ mt: 3.5, textAlign: 'center', fontSize: '0.86rem', color: 'var(--ink-2)' }}>
                New to Quality Logs?{' '}
                <Box
                  component={RouterLink}
                  to="/#demo"
                  sx={{ fontWeight: 700, color: 'var(--accent)', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  Get a demo
                </Box>
              </Box>

              <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.75, fontSize: '0.75rem', color: 'var(--ink-3)' }}>
                <TbLock size={13} />
                Protected by 256-bit encryption · SOC 2 in progress
              </Box>
            </Box>
          </Box>

          <PortalVisual />
        </Box>
      </Container>
    </Box>
  );
}
