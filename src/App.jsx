import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Bundles from '@/components/Bundles';
import Values from '@/components/Values';
import Licensing from '@/components/Licensing';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>sovIT.xyz - Sovereign IT Services | Bitcoin-Native IT Consulting</title>
        <meta
          name="description"
          content="sovIT.xyz offers sovereign IT consulting: Bitcoin node operations, self-hosted cloud, Linux administration, open-source integration, web security testing, and hardware imaging. Data ownership and technological independence for individuals and organizations."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-900 text-white">
        <a href="#main-content" className="skip-nav">Skip to main content</a>
        <Header />
        <main id="main-content">
          <Hero />
          <Services />
          <Bundles />
          <Values />
          <Licensing />
          <About />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;