import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { goToContact } from '@/lib/contact';
import {
  Terminal,
  Layers,
  ServerCog,
  RefreshCw,
  Cloud,
  ArrowRight
} from 'lucide-react';

const Infrastructure = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Terminal,
      title: 'Custom Linux Deployments',
      description: 'Desktops, laptops, and servers configured for your actual workflow. No bloat, no vendor lock-in, no telemetry you didn\u2019t ask for.'
    },
    {
      icon: Layers,
      title: 'OS Customization & Provisioning',
      description: 'Custom Linux images, preconfigured environments, and automated provisioning \u2014 every machine you deploy is ready on day one.'
    },
    {
      icon: ServerCog,
      title: 'Server Setup & Migration',
      description: 'From a single VPS to a full self-hosted stack: email, file sync, VPN, ERP. Move off rented cloud onto infrastructure you own.'
    },
    {
      icon: RefreshCw,
      title: 'Managed Updates & Deployments',
      description: 'Patching, updates, and rollout management across your fleet \u2014 tested and reversible, so updates never take down your business.'
    },
    {
      icon: Cloud,
      title: 'VPS Management',
      description: 'Security patching, monitoring, verified backups, and incident response on any provider. You keep root, the account, and ownership.'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section id="infrastructure" className="py-24 bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Infrastructure &amp; </span>
            <span className="text-bitcoin">Linux</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            From end-user workstations to production servers &mdash; open-source infrastructure
            built around you, not the other way around.{' '}
            <span className="text-bitcoin font-semibold">Auditable. Reversible. Yours.</span>
          </p>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="max-w-4xl mx-auto divide-y divide-gray-700 border-y border-gray-700"
        >
          {services.map((service, index) => (
            <motion.li key={index} variants={item}>
              <button
                type="button"
                onClick={() => goToContact(`the "${service.title}" service`)}
                aria-label={`Ask about ${service.title} — jumps to the contact form`}
                className="w-full text-left flex items-start gap-5 py-6 px-4 group hover:bg-bitcoin/5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#F7931A]"
              >
                <span className="w-11 h-11 bg-bitcoin/10 border border-bitcoin/40 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-bitcoin/20 group-hover:border-bitcoin transition-colors">
                  <service.icon className="text-bitcoin" size={20} aria-hidden="true" />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-lg font-bold text-white font-mono mb-1">
                    {service.title}
                  </span>
                  <span className="block text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </span>
                </span>
                <ArrowRight
                  className="text-gray-600 group-hover:text-bitcoin group-hover:translate-x-1 transition-all flex-shrink-0 mt-1 hidden sm:block"
                  size={20}
                  aria-hidden="true"
                />
              </button>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 text-center text-sm font-mono"
        >
          <a
            href="/services/#infrastructure"
            className="text-bitcoin hover:text-bitcoin-light transition-colors underline underline-offset-4"
          >
            Published infrastructure rates &amp; full catalog &rarr;
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default Infrastructure;
