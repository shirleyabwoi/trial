import React from 'react';
import HeroSection from './components/HeroSection';
import AboutUsPage from './components/About-Us';
import OurServices from './components/OurServices';
import FAQSection from "./components/FAQs";
import ContactSection from './components/Contact';
import HowItWorksPage from './components/How-It-Works';



export default function Home() {
  return (
    <main className='overflow-hidden'>
      <HeroSection/>
      <AboutUsPage />
      <HowItWorksPage />
      <OurServices />
      <FAQSection />
      <ContactSection />
    </main>

  );
}