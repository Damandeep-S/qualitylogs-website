import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { TbArrowRight, TbMenu2, TbMoonStars, TbPhone, TbSunHigh, TbX } from 'react-icons/tb';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useColorMode } from '../../theme/ColorModeContext';
import Logo from '../common/Logo';

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'ELD', href: '/eld' },
  { label: 'Dashcam', href: '/dashcam' },
  { label: 'Safety', href: '/safety' },
  { label: 'Fuel Card', href: '/fuel-card' },
  { label: 'About', href: '/about' },
];

const PHONE = '+1 (814) 414-0132';

const easeOut = [0.22, 1, 0.36, 1];

function ThemeToggle({ sx }) {
  const { mode, toggle } = useColorMode();

  return (
    <IconButton
      onClick={toggle}
      aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} theme`}
      sx={{
        color: 'var(--ink-2)',
        border: '1px solid var(--stroke)',
        width: 38,
        height: 38,
        '&:hover': { color: 'var(--ink-1)', background: 'var(--glass-strong)' },
        ...sx,
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={mode}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.3, ease: easeOut }}
          style={{ display: 'inline-flex' }}
        >
          {mode === 'dark' ? <TbSunHigh size={19} /> : <TbMoonStars size={19} />}
        </motion.span>
      </AnimatePresence>
    </IconButton>
  );
}

function DesktopLinks() {
  const [hovered, setHovered] = useState(null);
  const { pathname } = useLocation();

  return (
    <Box
      component="nav"
      onMouseLeave={() => setHovered(null)}
      sx={{
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {LINKS.map((link) => {
        const active = pathname === link.href;
        return (
          <Box
            key={link.label}
            component={RouterLink}
            to={link.href}
            onMouseEnter={() => setHovered(link.label)}
            sx={{
              position: 'relative',
              px: 1.75,
              py: 1,
              borderRadius: 999,
              fontSize: '0.905rem',
              fontWeight: active ? 700 : 500,
              textDecoration: 'none',
              color: active
                ? 'var(--accent)'
                : hovered === link.label
                  ? 'var(--ink-1)'
                  : 'var(--ink-2)',
              transition: 'color 0.2s ease',
            }}
          >
            {hovered === link.label && !active && (
              <motion.span
                layoutId="nav-hover-pill"
                transition={{ type: 'spring', bounce: 0.22, duration: 0.5 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 999,
                  background: 'var(--glass-strong)',
                }}
              />
            )}
            {active && (
              <motion.span
                layoutId="nav-active-pill"
                transition={{ type: 'spring', bounce: 0.25, duration: 0.6 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 999,
                  background: 'var(--tint-cyan)',
                  border: '1px solid rgba(24, 200, 219, 0.3)',
                }}
              />
            )}
            <Box component="span" sx={{ position: 'relative' }}>
              {link.label}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

function MobileMenu({ open, onClose }) {
  const { pathname } = useLocation();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: '100%',
            maxWidth: { xs: '100%', sm: 420 },
            background: 'var(--drawer-bg)',
            backdropFilter: 'blur(28px)',
            borderLeft: '1px solid var(--stroke)',
            backgroundImage: 'none',
          },
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo size={30} />
          <Stack direction="row" spacing={1}>
            <ThemeToggle />
            <IconButton onClick={onClose} aria-label="Close menu" sx={{ color: 'var(--ink-1)' }}>
              <TbX size={26} />
            </IconButton>
          </Stack>
        </Box>

        <Stack component="nav" spacing={0.5} sx={{ mt: 6, flex: 1 }}>
          {[...LINKS, { label: 'Portal', href: '/portal' }].map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.12 + i * 0.06, duration: 0.55, ease: easeOut }}
            >
              <Box
                component={RouterLink}
                to={link.href}
                onClick={onClose}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  py: 1.5,
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: pathname === link.href ? 'var(--accent)' : 'var(--ink-1)',
                  textDecoration: 'none',
                  '&:hover': { color: 'var(--accent)' },
                  transition: 'color 0.2s ease',
                }}
              >
                {link.label}
                {pathname === link.href && (
                  <Box
                    component="span"
                    sx={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }}
                  />
                )}
              </Box>
            </motion.div>
          ))}
        </Stack>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6, ease: easeOut }}
        >
          <Stack spacing={2}>
            <Box
              component="a"
              href={`tel:${PHONE.replace(/[^+\d]/g, '')}`}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                color: 'var(--ink-2)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                '&:hover': { color: 'var(--ink-1)' },
              }}
            >
              <TbPhone size={18} />
              {PHONE}
            </Box>
            <Button
              fullWidth
              size="large"
              component={RouterLink}
              to="/contact"
              onClick={onClose}
              endIcon={<TbArrowRight />}
              sx={{
                py: 1.5,
                fontWeight: 700,
                color: '#04121C',
                background: 'linear-gradient(135deg, #18C8DB 0%, #5EDDEE 100%)',
                '&:hover': { background: 'linear-gradient(135deg, #2BD3E5 0%, #74E4F2 100%)' },
              }}
            >
              Get a demo
            </Button>
          </Stack>
        </motion.div>
      </Box>
    </Drawer>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24));

  return (
    <>
      <Box
        component={motion.header}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: easeOut, delay: 0.15 }}
        sx={{
          position: 'fixed',
          top: { xs: 10, md: 16 },
          left: 0,
          right: 0,
          zIndex: (t) => t.zIndex.appBar,
          display: 'flex',
          justifyContent: 'center',
          px: { xs: 1.5, md: 3 },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: 1140,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            pl: { xs: 2, md: 2.5 },
            pr: { xs: 1, md: 1 },
            py: 1,
            borderRadius: 999,
            border: '1px solid',
            borderColor: scrolled ? 'var(--stroke)' : 'transparent',
            background: scrolled ? 'var(--nav-bg)' : 'transparent',
            backdropFilter: scrolled ? 'blur(18px)' : 'none',
            boxShadow: scrolled ? '0 16px 48px rgba(0, 0, 0, 0.25)' : 'none',
            transition:
              'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease',
          }}
        >
          <Logo size={32} />

          <DesktopLinks />

          <Stack direction="row" spacing={1} alignItems="center">
            <ThemeToggle sx={{ display: { xs: 'none', md: 'inline-flex' } }} />
            <Button
              component={RouterLink}
              to="/portal"
              sx={{
                display: { xs: 'none', md: 'inline-flex' },
                color: 'var(--ink-2)',
                px: 2,
                '&:hover': { color: 'var(--ink-1)', background: 'var(--glass)' },
              }}
            >
              Portal
            </Button>
            <Button
              component={RouterLink}
              to="/contact"
              endIcon={
                <Box
                  component="span"
                  className="cta-arrow"
                  sx={{ display: 'inline-flex', transition: 'transform 0.25s ease' }}
                >
                  <TbArrowRight size={17} />
                </Box>
              }
              sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                px: 2.5,
                py: 1,
                fontWeight: 700,
                color: '#04121C',
                background: 'linear-gradient(135deg, #18C8DB 0%, #5EDDEE 100%)',
                boxShadow: '0 4px 24px rgba(24, 200, 219, 0.35)',
                transition: 'all 0.25s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, #2BD3E5 0%, #74E4F2 100%)',
                  boxShadow: '0 6px 32px rgba(24, 200, 219, 0.5)',
                  transform: 'translateY(-1px)',
                  '& .cta-arrow': { transform: 'translateX(3px)' },
                },
              }}
            >
              Get a demo
            </Button>
            <IconButton
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              sx={{ display: { md: 'none' }, color: 'var(--ink-1)' }}
            >
              <TbMenu2 size={24} />
            </IconButton>
          </Stack>
        </Box>
      </Box>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
