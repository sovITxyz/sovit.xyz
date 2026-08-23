import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';
import { CONTACT_EMAIL } from '@/lib/contact';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { label: 'AI Development', href: '#services' },
        { label: 'AI Deployment', href: '#services' },
        { label: 'AI Operations', href: '#services' },
        { label: 'Sovereign Infrastructure', href: '#services' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Full Service Catalog', href: '/services/' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'Platform', href: '#platform' },
        { label: 'Process', href: '#process' },
        { label: 'About', href: '#about' },
        { label: 'Licensing', href: '#licensing' },
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
              <div className="w-10 h-10 bg-bitcoin rounded flex items-center justify-center font-mono font-bold text-black text-xl" aria-hidden="true">
                ◆
              </div>
              <div>
                <p className="font-mono font-bold text-white">Sovereign Technology SAS</p>
                <p className="text-xs text-gray-500 font-mono">AI OPERATING EXPERTS — SOVTECH.PRO</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Develop. Deploy. Run. Sovereign AI systems you own.
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
              <motion.a
                href={`mailto:${CONTACT_EMAIL}`}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-gray-900 border border-bitcoin/30 rounded-lg flex items-center justify-center hover:bg-bitcoin/10 hover:border-bitcoin transition-all"
                aria-label={`Email ${CONTACT_EMAIL}`}
              >
                <Mail size={18} className="text-bitcoin" />
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
              © {currentYear} Sovereign Technology SAS. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs font-mono">
              Formerly sovIT.xyz
            </p>
          </div>

          {/* Code decoration */}
          <div className="mt-6 text-center font-mono text-xs text-gray-700">
            <span className="text-bitcoin">while</span>
            <span className="text-gray-600">(</span>
            <span className="text-accent-green">true</span>
            <span className="text-gray-600">) &#123; </span>
            <span className="text-accent-blue">deploy</span>
            <span className="text-gray-600">(</span>
            <span className="text-accent-green">"sovereign ai"</span>
            <span className="text-gray-600">); &#125;</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
