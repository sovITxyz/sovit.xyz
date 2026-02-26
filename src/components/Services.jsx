import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Zap,
  FlaskConical,
  Blocks,
  Server,
  Cloud,
  ShieldCheck,
  Globe,
  Database,
  CloudCog,
  Cpu,
  HardDrive,
  Headset,
  ScanSearch,
  Code,
  Megaphone
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const serviceCategories = [
    {
      name: 'Support & Consulting',
      categoryIcon: Headset,
      services: [
        {
          icon: Headset,
          title: 'Technical Support',
          description: 'Responsive support for all your sovereign technology needs',
          tech: 'Remote, On-site, Consulting'
        },
        {
          icon: HardDrive,
          title: 'Hardware Imaging',
          description: 'Secure device imaging with open-source software for laptops and phones',
          tech: 'PXE Boot, Linux, GrapheneOS'
        },
        {
          icon: Cpu,
          title: 'Sovereign Hardware Recommendations',
          description: 'Curated hardware guidance for networking, computing, phones, and security',
          tech: 'Networking, Devices, Security'
        },
        {
          icon: Megaphone,
          title: 'Advertisement Consulting',
          description: 'Privacy-respecting advertising strategies and sovereign marketing solutions',
          tech: 'Strategy, Analytics, Privacy'
        }
      ]
    },
    {
      name: 'Infrastructure & Administration',
      categoryIcon: Server,
      services: [
        {
          icon: Server,
          title: 'System Administration',
          description: 'Reliable management and maintenance of your server infrastructure',
          tech: 'Linux, Ansible, Automation'
        },
        {
          icon: Cloud,
          title: 'Cloud Administration',
          description: 'Sovereign cloud deployment, monitoring, and management',
          tech: 'Kubernetes, Docker, Self-hosted'
        },
        {
          icon: Blocks,
          title: 'Open Source System Integration',
          description: 'Seamless integration of open-source tools into your workflow',
          tech: 'Linux, FOSS, APIs'
        },
        {
          icon: Database,
          title: 'ERP, ITSM & Collaboration',
          description: 'Business management, asset tracking, and team collaboration platforms',
          tech: 'ERPNext, GLPI, Nextcloud'
        }
      ]
    },
    {
      name: 'Security & Bitcoin',
      categoryIcon: ShieldCheck,
      services: [
        {
          icon: ShieldCheck,
          title: 'OpSec & Bitcoin Operations',
          description: 'Operational security hardening and secure Bitcoin infrastructure',
          tech: 'Node Ops, Cold Storage, OpSec'
        },
        {
          icon: ScanSearch,
          title: 'Web Security Testing',
          description: 'Penetration testing and vulnerability assessments for web applications and APIs',
          tech: 'OWASP, Burp Suite, Reporting'
        },
        {
          icon: Zap,
          title: 'Lightning Channel Recovery',
          description: 'Expert recovery services for Lightning Network channels and funds',
          tech: 'Lightning Network, LND, CLN'
        }
      ]
    },
    {
      name: 'Development & Innovation',
      categoryIcon: Code,
      services: [
        {
          icon: Globe,
          title: 'Open Source Website Creation',
          description: 'Modern, performant websites built entirely on open-source stacks',
          tech: 'React, Hugo, Static Sites',
          portfolio: [
            { name: 'gcs.sv', url: 'https://gcs.sv' },
            { name: 'whatarush.org', url: 'https://whatarush.org' },
            { name: 'SovIT.xyz', url: 'https://sovit.xyz' },
            { name: 'bitcoinbarbell.com', url: 'https://bitcoinbarbell.com' }
          ]
        },
        {
          icon: Code,
          title: 'Software Development',
          description: 'Custom application development with open-source frameworks and sovereign principles',
          tech: 'Python, JavaScript, Go'
        },
        {
          icon: CloudCog,
          title: 'Home Cloud & Sovereign AI',
          description: 'Self-hosted cloud and local AI deployment for full data sovereignty',
          tech: 'Ollama, Nextcloud, Home Lab'
        },
        {
          icon: FlaskConical,
          title: 'Technology R&D',
          description: 'Research and development of emerging open-source technologies',
          tech: 'Prototyping, Testing, Innovation'
        }
      ]
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="text-bitcoin">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            // Comprehensive technology solutions for the sovereign enterprise
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-12">
          {serviceCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.15 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-bitcoin/10 border border-bitcoin rounded-lg flex items-center justify-center flex-shrink-0">
                  <category.categoryIcon className="text-bitcoin" size={20} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white font-mono whitespace-nowrap">
                  <span className="text-bitcoin">// </span>{category.name}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-bitcoin/30 to-transparent"></div>
              </div>

              {/* Service Cards Grid */}
              <motion.div
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {category.services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass rounded-lg p-6 border-technical hover:shadow-bitcoin-strong transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-bitcoin/10 border border-bitcoin rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-bitcoin/20 transition-colors">
                        <service.icon className="text-bitcoin" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2 font-mono">
                          {service.title}
                        </h4>
                        <p className="text-gray-400 text-sm mb-3">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.tech.split(', ').map((tech, i) => (
                            <span
                              key={i}
                              className="text-xs font-mono bg-gray-800 text-bitcoin px-2 py-1 rounded border border-bitcoin/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        {service.portfolio && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {service.portfolio.map((site, i) => (
                              <a
                                key={i}
                                href={site.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-mono bg-bitcoin/10 text-bitcoin px-2 py-1 rounded border border-bitcoin/50 hover:bg-bitcoin/20 transition-colors"
                              >
                                {site.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Code decoration */}
                    <div className="mt-4 pt-4 border-t border-gray-700 font-mono text-xs text-gray-600">
                      <span className="text-bitcoin">execute</span>
                      <span className="text-gray-500">(</span>
                      <span className="text-accent-green">"{service.title.toLowerCase().replace(/ /g, '_')}"</span>
                      <span className="text-gray-500">)</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
