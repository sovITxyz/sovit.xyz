import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Bundles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const bundles = [
    {
      name: 'Sovereign Starter',
      tag: 'ESSENTIALS',
      description: 'Begin your journey to technological sovereignty',
      services: [
        'Technical Support',
        'Hardware Imaging',
        'Sovereign Hardware Recs',
        'Open Source Integration'
      ],
      highlighted: false
    },
    {
      name: 'Digital Fortress',
      tag: 'RECOMMENDED',
      description: 'Complete personal sovereignty with cloud and security',
      services: [
        'Everything in Starter',
        'Home Cloud & Sovereign AI',
        'OpSec & Bitcoin Operations',
        'Web Security Testing'
      ],
      highlighted: true
    },
    {
      name: 'Full Sovereignty',
      tag: 'COMPLETE',
      description: 'Run your entire digital life on sovereign infrastructure',
      services: [
        'Everything in Fortress',
        'Cloud Administration',
        'Website Creation',
        'Software Development',
        'ERP, ITSM & Collaboration'
      ],
      highlighted: false
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="bundles" className="py-24 bg-gray-800 relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 border-2 border-bitcoin transform rotate-12"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 border-2 border-bitcoin transform -rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Service </span>
            <span className="text-bitcoin">Bundles</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            // Curated packages for individual sovereignty
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {bundles.map((bundle, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group"
            >
              <div className={`glass-strong rounded-lg p-8 transition-all duration-300 relative overflow-hidden h-full flex flex-col ${
                bundle.highlighted
                  ? 'border-2 border-bitcoin shadow-bitcoin hover:shadow-bitcoin-strong'
                  : 'hover:shadow-bitcoin-strong'
              }`}>
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 w-full h-1 ${
                  bundle.highlighted ? 'bg-gradient-orange' : 'bg-gradient-to-r from-bitcoin/50 to-transparent'
                }`}></div>

                {/* Tag badge */}
                <div className="mb-4">
                  <span className={`font-mono text-xs px-3 py-1 rounded-full border ${
                    bundle.highlighted
                      ? 'bg-bitcoin/20 text-bitcoin border-bitcoin'
                      : 'bg-bitcoin/10 text-bitcoin border-bitcoin/30'
                  }`}>
                    {bundle.tag}
                  </span>
                </div>

                {/* Bundle name */}
                <h3 className="text-2xl font-bold text-white mb-3 font-mono">
                  {bundle.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {bundle.description}
                </p>

                {/* Service list */}
                <ul className="space-y-3 mb-8 flex-1">
                  {bundle.services.map((service, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-bitcoin flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-300 text-sm">{service}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`block text-center font-mono font-bold py-3 px-6 rounded-lg transition-all duration-300 ${
                    bundle.highlighted
                      ? 'bg-bitcoin text-black hover:bg-bitcoin-light shadow-bitcoin'
                      : 'bg-bitcoin/10 text-bitcoin border border-bitcoin/50 hover:bg-bitcoin/20'
                  }`}
                >
                  Contact for Pricing
                </a>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-bitcoin/20 group-hover:border-bitcoin/50 transition-colors"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Code Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center font-mono text-sm text-gray-600"
        >
          <span className="text-bitcoin">const</span> plan = bundles.
          <span className="text-accent-blue">select</span>
          <span className="text-gray-500">(</span>
          <span className="text-accent-green">"sovereignty_level"</span>
          <span className="text-gray-500">)</span>;
        </motion.div>
      </div>
    </section>
  );
};

export default Bundles;
