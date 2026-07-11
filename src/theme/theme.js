import { createTheme } from '@mui/material/styles';

const DISPLAY_FONT = "'Space Grotesk', 'Inter', ui-sans-serif, system-ui, sans-serif";
const BODY_FONT = "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif";

export default function getTheme(mode) {
  const dark = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: dark
        ? { main: '#18C8DB', light: '#5EDDEE', dark: '#0C8A9B', contrastText: '#04121C' }
        : { main: '#0C8A9B', light: '#18C8DB', dark: '#08616D', contrastText: '#FFFFFF' },
      secondary: { main: dark ? '#0C8A9B' : '#082635' },
      background: dark
        ? { default: '#04101A', paper: '#082032' }
        : { default: '#F4F6F8', paper: '#FFFFFF' },
      text: dark
        ? { primary: '#ECF4F7', secondary: '#96ADBA' }
        : { primary: '#082635', secondary: '#46626F' },
      divider: dark ? 'rgba(255,255,255,0.08)' : 'rgba(8,38,53,0.12)',
    },
    typography: {
      fontFamily: BODY_FONT,
      h1: { fontFamily: DISPLAY_FONT, fontWeight: 600, letterSpacing: '-0.03em' },
      h2: { fontFamily: DISPLAY_FONT, fontWeight: 600, letterSpacing: '-0.025em' },
      h3: { fontFamily: DISPLAY_FONT, fontWeight: 600, letterSpacing: '-0.02em' },
      h4: { fontFamily: DISPLAY_FONT, fontWeight: 600, letterSpacing: '-0.015em' },
      h5: { fontFamily: DISPLAY_FONT, fontWeight: 600 },
      h6: { fontFamily: DISPLAY_FONT, fontWeight: 600 },
      button: { textTransform: 'none', fontWeight: 600 },
    },
    shape: { borderRadius: 14 },
    components: {
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: { borderRadius: 999, fontSize: '0.95rem' },
        },
      },
      MuiContainer: {
        defaultProps: { maxWidth: 'lg' },
      },
    },
  });
}
