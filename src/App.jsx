import Box from '@mui/material/Box';
import { MotionConfig } from 'framer-motion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ColorModeProvider } from './theme/ColorModeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollManager from './components/layout/ScrollManager';
import Home from './pages/Home';
import Eld from './pages/Eld';
import Dashcam from './pages/Dashcam';
import Safety from './pages/Safety';
import FuelCard from './pages/FuelCard';
import About from './pages/About';
import Contact from './pages/Contact';
import PortalHub from './pages/PortalHub';

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
              <Route path="/eld" element={<Eld />} />
              <Route path="/dashcam" element={<Dashcam />} />
              <Route path="/safety" element={<Safety />} />
              <Route path="/fuel-card" element={<FuelCard />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portal" element={<PortalHub />} />
            </Routes>
          </Box>
          <Footer />
        </MotionConfig>
      </ColorModeProvider>
    </BrowserRouter>
  );
}
