import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const [terminalText, setTerminalText] = useState('');
  const fullText = '> Sovereignty through technology_';

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTerminalText(fullText);
      return;
    }

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTerminalText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-server-room-1920.webp"
          srcSet="/images/hero-server-room-960.webp 960w, /images/hero-server-room-1920.webp 1920w"
          sizes="100vw"
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1077}
          loading="eager"
          // React 18 requires the lowercase DOM attribute; camelCase fetchPriority is React 19+
          // eslint-disable-next-line react/no-unknown-property
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 grid-pattern-large opacity-50"></div>
      </div>

      {/* Animated Geometric Elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-20 w-64 h-64 border border-bitcoin/20 rotate-45 hidden lg:block"
      />

      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-20 w-48 h-48 border border-bitcoin/10 hidden lg:block"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Brand Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="flex justify-center mb-8"
          >
            <div className="glass rounded-full px-5 py-2 border border-bitcoin/30 flex items-center gap-3">
              <span className="relative flex h-3 w-3" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bitcoin opacity-60"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-bitcoin"></span>
              </span>
              <span className="font-mono text-sm text-gray-200">Sovereign Technology SAS — AI &amp; Linux Infrastructure</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Develop. Deploy. Run.</span>
            <br />
            <span className="text-bitcoin text-4xl md:text-6xl lg:text-7xl">Sovereign AI &amp; Infrastructure.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            We build and operate AI systems and Linux infrastructure that you own — on
            <span className="text-bitcoin font-semibold"> your hardware</span>,
            under <span className="text-bitcoin font-semibold">your control</span>, with
            <span className="text-bitcoin font-semibold"> your data</span>. No lock-in. No compromise.
          </motion.p>

          {/* Terminal Text Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="glass max-w-2xl mx-auto p-6 mb-12 rounded-lg border border-bitcoin/30"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p className="font-mono text-accent-green text-left text-sm md:text-base">
              {terminalText}
              <span className="animate-blink">|</span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-bitcoin text-black font-mono font-bold px-8 py-4 rounded-lg text-lg hover:bg-bitcoin-light transition-all shadow-bitcoin-strong inline-flex items-center gap-2 group"
            >
              Start a Project
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              onClick={scrollToServices}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-bitcoin/10 text-bitcoin border border-bitcoin/50 font-mono font-bold px-8 py-4 rounded-lg text-lg hover:bg-bitcoin/20 transition-all inline-flex items-center gap-2"
            >
              Explore Services
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 font-mono"
          >
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-bitcoin">99.9%</p>
              <p className="text-xs text-gray-400 mt-1">Uptime SLA</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-bitcoin/30" aria-hidden="true"></div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-bitcoin">100%</p>
              <p className="text-xs text-gray-400 mt-1">Open Source</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-bitcoin/30" aria-hidden="true"></div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-bitcoin">Zero</p>
              <p className="text-xs text-gray-400 mt-1">Data Leakage</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-bitcoin rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-bitcoin rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
