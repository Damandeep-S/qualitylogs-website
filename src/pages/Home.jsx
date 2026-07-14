import Hero from '../components/sections/hero/Hero';
import Services from '../components/sections/Services';
import TrustMarquee from '../components/sections/TrustMarquee';
import Testimonials from '../components/sections/Testimonials';
import Faq from '../components/sections/Faq';
import CtaBanner from '../components/sections/CtaBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <TrustMarquee />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </>
  );
}
