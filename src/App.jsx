import Box from '@mui/material/Box';
import { MotionConfig } from 'framer-motion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ColorModeProvider } from './theme/ColorModeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollManager from './components/layout/ScrollManager';
import Home from './pages/Home';
import About from './pages/About';
import Portal from './pages/Portal';

export default function App() {
  return (
    <BrowserRouter>
      <ColorModeProvider>
        <MotionConfig reducedMotion="user">
          <ScrollManager />
          <Navbar />
          <Box component="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portal" element={<Portal />} />
            </Routes>
          </Box>
          <Footer />
        </MotionConfig>
      </ColorModeProvider>
    </BrowserRouter>
  );
}
