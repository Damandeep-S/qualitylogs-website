import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import getTheme from './theme';

const ColorModeContext = createContext({ mode: 'dark', toggle: () => {} });

export function useColorMode() {
  return useContext(ColorModeContext);
}

export function ColorModeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    const stored = localStorage.getItem('ql-theme');
    return stored === 'light' || stored === 'dark' ? stored : 'dark';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    localStorage.setItem('ql-theme', mode);
  }, [mode]);

  const value = useMemo(
    () => ({ mode, toggle: () => setMode((m) => (m === 'dark' ? 'light' : 'dark')) }),
    [mode]
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
