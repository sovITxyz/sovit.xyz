import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [terminalText, setTerminalText] = useState('');
  const fullText = '> Sovereignty through technology_';

  useEffect(() => {
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

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506399558188-acca6f8cbf41"
          alt="Technical background"
          className="w-full h-full object-cover"
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
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Terminal Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="flex justify-center mb-8"
          >
            <div className="w-16 h-16 bg-bitcoin/10 border border-bitcoin rounded-lg flex items-center justify-center shadow-bitcoin">
              <Terminal className="text-bitcoin" size={32} />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">sov</span>
            <span className="text-bitcoin">IT</span>
            <span className="text-white">.xyz</span>
            <br />
            <span className="text-white text-3xl md:text-5xl lg:text-6xl">Sovereign IT Services</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Empowering individuals and organizations with <span className="text-bitcoin font-semibold">data ownership</span>,
            <span className="text-bitcoin font-semibold"> security</span>,
            <span className="text-bitcoin font-semibold"> efficiency</span>, and
            <span className="text-bitcoin font-semibold"> technological independence</span>
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

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-bitcoin text-black font-mono font-bold px-8 py-4 rounded-lg text-lg hover:bg-bitcoin-light transition-all shadow-bitcoin-strong inline-flex items-center gap-2 group"
            >
              Start Your Consultation
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Code Snippet Decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 font-mono text-xs text-gray-500 text-left max-w-md mx-auto"
          >
            <span className="text-bitcoin">const</span> future = <span className="text-accent-green">await</span> sovereignty.
            <span className="text-accent-blue">deploy</span>();
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