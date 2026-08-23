import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { goToContact } from '@/lib/contact';
import {
  BrainCircuit,
  Rocket,
  Gauge,
  ShieldCheck,
  Network,
  ScanSearch
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: BrainCircuit,
      title: 'AI Development',
      description: 'Custom model training, fine-tuning, and prompt engineering — AI built for your domain, not generic chatbots.',
      tech: 'Fine-Tuning, RAG Pipelines, Multi-Agent Systems, Domain Training',
      featured: false
    },
    {
      icon: Rocket,
      title: 'AI Deployment',
      description: 'Production-grade deployment on your infrastructure — bare metal, cloud, or hybrid. Containerized, orchestrated, and monitored from day one.',
      tech: 'Kubernetes-Native, GPU Optimization, Auto-Scaling, Zero-Downtime Rollouts',
      featured: true
    },
    {
      icon: Gauge,
      title: 'AI Operations',
      description: '24/7 monitoring, incident response, and continuous optimization. Your AI runs at peak performance — always.',
      tech: 'Real-Time Monitoring, Incident Response, Cost Optimization, Drift Detection',
      featured: false
    },
    {
      icon: ShieldCheck,
      title: 'Sovereign Infrastructure',
      description: 'Your data never leaves your perimeter. On-premises or private cloud — with full encryption, audit logging, and compliance built in.',
      tech: 'On-Prem & Private Cloud, E2E Encryption, Audit Trails, GDPR & SOC 2',
      featured: false
    },
    {
      icon: Network,
      title: 'AI Integration',
      description: 'Connect AI to your existing systems — ERP, CRM, databases, APIs. Seamless integration without disrupting workflows.',
      tech: 'API-First, ERP/CRM Connectors, Legacy Bridging, Event Pipelines',
      featured: false
    },
    {
      icon: ScanSearch,
      title: 'AI Strategy & Audit',
      description: 'We audit your operations, identify the highest-impact AI opportunities, and build the roadmap from pilot to production.',
      tech: 'Readiness Assessment, ROI Modeling, Technology Selection, Roadmap',
      featured: false
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
            <span className="text-white">Full-Spectrum </span>
            <span className="text-bitcoin">AI Operations</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            // From model selection to production operations — every layer of the AI stack
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.03, y: -5 }}
              role="button"
              tabIndex={0}
              aria-label={`Ask about ${service.title} — jumps to the contact form`}
              onClick={() => goToContact(`the "${service.title}" service`)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  goToContact(`the "${service.title}" service`);
                }
              }}
              className={`glass rounded-lg p-6 border-technical hover:shadow-bitcoin-strong transition-all duration-300 group cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7931A] relative ${
                service.featured ? 'border-2 border-bitcoin shadow-bitcoin' : ''
              }`}
            >
              {service.featured && (
                <span className="absolute top-4 right-4 font-mono text-xs bg-bitcoin text-black font-bold px-3 py-1 rounded-full">
                  CORE
                </span>
              )}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-bitcoin/10 border border-bitcoin rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-bitcoin/20 transition-colors">
                  <service.icon className="text-bitcoin" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 font-mono">
                    {service.title}
                  </h3>
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
                </div>
              </div>

              {/* Code decoration */}
              <div className="mt-4 pt-4 border-t border-gray-700 font-mono text-xs text-gray-600 truncate">
                <span className="text-bitcoin">execute</span>
                <span className="text-gray-500">(</span>
                <span className="text-accent-green">"{service.title.toLowerCase().replace(/ /g, '_').replace(/&/g, 'and')}"</span>
                <span className="text-gray-500">)</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
