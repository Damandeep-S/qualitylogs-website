import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Reveal from './Reveal';

/**
 * Standard section intro: tracked eyebrow, display title (optionally with a
 * gradient phrase), and supporting copy. `align` = 'center' | 'left'.
 */
export default function SectionHeading({ eyebrow, title, gradientWord, sub, align = 'center', sx }) {
  const center = align === 'center';

  return (
    <Box
      sx={{
        maxWidth: 720,
        mx: center ? 'auto' : 0,
        textAlign: center ? 'center' : 'left',
        mb: { xs: 6, md: 8 },
        ...sx,
      }}
    >
      {eyebrow && (
        <Reveal>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            <Box sx={{ width: 22, height: 2, borderRadius: 2, background: 'var(--accent)' }} />
            {eyebrow}
            {center && (
              <Box sx={{ width: 22, height: 2, borderRadius: 2, background: 'var(--accent)' }} />
            )}
          </Box>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <Typography
          variant="h2"
          sx={{ mt: 2, fontSize: 'clamp(1.9rem, 3.6vw, 2.9rem)', lineHeight: 1.12 }}
        >
          {title}
          {gradientWord && (
            <>
              {' '}
              <Box
                component="span"
                sx={{
                  background: 'var(--headline-grad)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                }}
              >
                {gradientWord}
              </Box>
            </>
          )}
        </Typography>
      </Reveal>
      {sub && (
        <Reveal delay={0.2}>
          <Typography sx={{ mt: 2.5, color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.65 }}>
            {sub}
          </Typography>
        </Reveal>
      )}
    </Box>
  );
}
