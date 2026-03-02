import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { label: 'Cloud Solutions', href: '#services' },
        { label: 'Open-Source', href: '#services' },
        { label: 'Bitcoin Ops', href: '#services' },
        { label: 'Security', href: '#services' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Values', href: '#values' },
        { label: 'Contact', href: '#contact' }
      ]
    }
  ];

  return (
    <footer className="bg-black border-t border-bitcoin/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern-large opacity-10"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-bitcoin rounded flex items-center justify-center font-mono font-bold text-black text-xl">
                ₿
              </div>
              <div>
                <p className="font-mono font-bold text-white">Sovereign IT Services</p>
                <p className="text-xs text-gray-500 font-mono">SUPPORT, ADMINISTRATION & CONSULTING</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Building sovereign technology solutions for a decentralized future.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="https://github.com/sovitxyz"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-gray-900 border border-bitcoin/30 rounded-lg flex items-center justify-center hover:bg-bitcoin/10 hover:border-bitcoin transition-all"
                aria-label="GitHub"
              >
                <Github size={18} className="text-bitcoin" />
              </motion.a>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <p className="font-mono font-bold text-white mb-4 text-sm">
                <span className="text-bitcoin">&gt;</span> {column.title}
              </p>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-bitcoin transition-colors inline-block hover:translate-x-1 duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm font-mono">
              © {currentYear} Sovereign IT Services. All rights reserved.
            </p>
          </div>

          {/* Code decoration */}
          <div className="mt-6 text-center font-mono text-xs text-gray-700">
            <span className="text-bitcoin">while</span>
            <span className="text-gray-600">(</span>
            <span className="text-accent-green">true</span>
            <span className="text-gray-600">) &#123; </span>
            <span className="text-accent-blue">build</span>
            <span className="text-gray-600">(</span>
            <span className="text-accent-green">"sovereign systems"</span>
            <span className="text-gray-600">); &#125;</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
