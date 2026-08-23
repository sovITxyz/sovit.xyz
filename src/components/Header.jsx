import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const LEGACY_HOSTS = ['sovit.xyz', 'www.sovit.xyz'];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showRebrandBanner, setShowRebrandBanner] = useState(false);

  useEffect(() => {
    const host = window.location.hostname;
    let dismissed = false;
    try {
      dismissed = window.sessionStorage.getItem('rebrand-banner-dismissed') === '1';
    } catch {
      // storage unavailable (e.g. hardened Tor Browser) — show the banner
    }
    if ((LEGACY_HOSTS.includes(host) || host.endsWith('.onion')) && !dismissed) {
      setShowRebrandBanner(true);
    }
  }, []);

  const dismissBanner = () => {
    setShowRebrandBanner(false);
    try {
      window.sessionStorage.setItem('rebrand-banner-dismissed', '1');
    } catch {
      // storage unavailable — banner simply reappears next load
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Bundles', href: '#bundles' },
    { label: 'Values', href: '#values' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-strong shadow-bitcoin' : 'bg-transparent'
      }`}
    >
      {showRebrandBanner && (
        <div className="bg-bitcoin text-black" role="status">
          <div className="container mx-auto px-4 py-2 flex items-center justify-center gap-2 text-center">
            <p className="font-mono text-xs md:text-sm font-semibold">
              sovIT.xyz is now <span className="font-bold">sovtech.pro</span> — same company, same people, new domain.
              <a
                href="https://www.sovtech.pro"
                className="inline-flex items-center gap-1 ml-2 underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                Visit sovtech.pro
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </p>
            <button
              onClick={dismissBanner}
              aria-label="Dismiss rebrand notice"
              className="flex-shrink-0 p-1 hover:opacity-70 transition-opacity"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
      <nav aria-label="Main navigation" className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.a
          href="#home"
          aria-label="sovIT.xyz — back to top"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-bitcoin rounded flex items-center justify-center font-mono font-bold text-black" aria-hidden="true">
            ₿
          </div>
          <span className="font-mono text-xl font-bold">
            <span className="text-white">sov</span>
            <span className="text-bitcoin">IT</span>
            <span className="text-white">.xyz</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{ scale: 1.1 }}
              className="font-mono text-sm text-gray-300 hover:text-bitcoin transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bitcoin transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass-strong border-t border-bitcoin/30"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-mono text-sm text-gray-300 hover:text-bitcoin transition-colors py-2 border-l-2 border-transparent hover:border-bitcoin pl-4"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;