import React from 'react';
import { MotionConfig } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Platform from '@/components/Platform';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import Values from '@/components/Values';
import Licensing from '@/components/Licensing';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-gray-900 text-white">
        <a href="#main-content" className="skip-nav">Skip to main content</a>
        <Header />
        <main id="main-content">
          <Hero />
          <Services />
          <Platform />
          <Process />
          <Pricing />
          <Values />
          <Licensing />
          <About />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </MotionConfig>
  );
}

export default App;
