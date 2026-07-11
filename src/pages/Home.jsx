import Hero from '../components/sections/hero/Hero';
import TrustMarquee from '../components/sections/TrustMarquee';
import Platform from '../components/sections/Platform';
import Solutions from '../components/sections/Solutions';
import HowItWorks from '../components/sections/HowItWorks';
import Devices from '../components/sections/Devices';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';
import Faq from '../components/sections/Faq';
import CtaBanner from '../components/sections/CtaBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <Platform />
      <Solutions />
      <HowItWorks />
      <Devices />
      <Testimonials />
      <Pricing />
      <Faq />
      <CtaBanner />
    </>
  );
}
