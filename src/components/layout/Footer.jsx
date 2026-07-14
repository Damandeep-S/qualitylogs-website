import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import {
  TbBrandFacebook,
  TbBrandLinkedin,
  TbBrandX,
  TbBrandYoutube,
  TbMail,
  TbMapPin,
  TbPhone,
} from 'react-icons/tb';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../common/Logo';

const COLUMNS = [
  {
    title: 'Services',
    links: [
      { label: 'ELD & Fleet Tracking', to: '/eld' },
      { label: 'AI Dashcam', to: '/dashcam' },
      { label: 'Safety & Compliance', to: '/safety' },
      { label: 'Fuel Card', to: '/fuel-card' },
    ],
  },
  {
    title: 'Platform',
    links: [
      { label: 'GPS Fleet Tracking', to: '/eld#platform' },
      { label: 'Solutions', to: '/eld#solutions' },
      { label: 'Devices', to: '/eld#devices' },
      { label: 'Dashcam Pricing', to: '/dashcam#dashcam-plans' },
      { label: 'Permits & Filings', to: '/safety#filings' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'FAQ', to: '/#faq' },
      { label: 'Get a demo', to: '/#demo' },
      { label: 'Portal', to: '/portal' },
    ],
  },
];

const CONTACT = [
  { icon: TbMapPin, text: '535 Mission St, Fl 14, San Francisco, CA 94105' },
  { icon: TbPhone, text: '+1 (814) 414-0132', href: 'tel:+18144140132' },
  { icon: TbMail, text: 'support@qualitylogs.us', href: 'mailto:support@qualitylogs.us' },
];

const SOCIALS = [
  { icon: TbBrandLinkedin, label: 'LinkedIn' },
  { icon: TbBrandX, label: 'X' },
  { icon: TbBrandFacebook, label: 'Facebook' },
  { icon: TbBrandYoutube, label: 'YouTube' },
];

const linkSx = {
  display: 'block',
  fontSize: '0.9rem',
  color: 'var(--ink-2)',
  textDecoration: 'none',
  py: 0.6,
  width: 'fit-content',
  position: 'relative',
  transition: 'color 0.2s ease',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 2,
    height: '1px',
    width: '100%',
    background: 'var(--accent)',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.25s ease',
  },
  '&:hover': { color: 'var(--ink-1)', '&::after': { transform: 'scaleX(1)' } },
};

export default function Footer() {
  return (
    <Box component="footer" id="company" sx={{ borderTop: '1px solid var(--stroke)', background: 'var(--bg-1)' }}>
      <Container sx={{ pt: { xs: 7, md: 9 }, pb: 4 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1.4fr repeat(3, 1fr) 1.3fr' },
            gap: { xs: 5, lg: 4 },
          }}
        >
          {/* Brand */}
          <Box sx={{ gridColumn: { xs: '1 / -1', sm: 'span 2', lg: 'span 1' } }}>
            <Logo size={40} tagline />
            <Box sx={{ mt: 2.5, fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--ink-2)', maxWidth: 280 }}>
              Fleet intelligence for trucking companies that refuse to run blind.
            </Box>
            <Box sx={{ mt: 3, display: 'flex', gap: 1 }}>
              {SOCIALS.map((s) => (
                <IconButton
                  key={s.label}
                  aria-label={s.label}
                  size="small"
                  sx={{
                    color: 'var(--ink-2)',
                    border: '1px solid var(--stroke)',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      color: '#04121C',
                      background: 'var(--cyan)',
                      borderColor: 'var(--cyan)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <s.icon size={17} />
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <Box key={col.title}>
              <Box
                sx={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-3)',
                  mb: 1.5,
                }}
              >
                {col.title}
              </Box>
              {col.links.map((link) => (
                <Box key={link.label} component={RouterLink} to={link.to} sx={linkSx}>
                  {link.label}
                </Box>
              ))}
            </Box>
          ))}

          {/* Contact */}
          <Box>
            <Box
              sx={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--ink-3)',
                mb: 1.5,
              }}
            >
              Contact
            </Box>
            {CONTACT.map((item) => (
              <Box
                key={item.text}
                component={item.href ? 'a' : 'div'}
                href={item.href}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 1.25,
                  py: 0.8,
                  fontSize: '0.88rem',
                  lineHeight: 1.5,
                  color: 'var(--ink-2)',
                  textDecoration: 'none',
                  ...(item.href && { '&:hover': { color: 'var(--ink-1)' } }),
                }}
              >
                <item.icon size={17} style={{ flexShrink: 0, marginTop: 2, color: 'var(--accent)' }} />
                {item.text}
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            pt: 3,
            borderTop: '1px solid var(--stroke)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            fontSize: '0.8rem',
            color: 'var(--ink-3)',
          }}
        >
          <span>© {new Date().getFullYear()} Quality Logs. All rights reserved.</span>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Box component="a" href="#" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'var(--ink-1)' } }}>
              Privacy
            </Box>
            <Box component="a" href="#" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'var(--ink-1)' } }}>
              Terms
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
