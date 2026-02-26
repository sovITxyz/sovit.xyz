import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Key, Unlock, Award } from 'lucide-react';

const Values = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Key,
      title: 'Data Ownership',
      description: 'Your data belongs to you. We build systems that ensure complete control and sovereignty over your digital assets.',
      highlight: 'OWNERSHIP'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security built on proven cryptographic principles and zero-trust architecture.',
      highlight: 'SECURITY'
    },
    {
      icon: Unlock,
      title: 'Open-Source Principles',
      description: 'Transparency, auditability, and freedom from vendor lock-in through open-source technologies.',
      highlight: 'FREEDOM'
    },
    {
      icon: Award,
      title: 'Sovereignty',
      description: 'True technological independence. Build systems that serve you, not external interests.',
      highlight: 'SOVEREIGNTY'
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
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="values" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border-2 border-bitcoin transform rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border-2 border-bitcoin transform -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Core </span>
            <span className="text-bitcoin">Values</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            // The principles that guide everything we build
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group"
            >
              {/* Hexagonal Shape */}
              <div className="glass-strong rounded-lg p-8 hover:shadow-bitcoin-strong transition-all duration-300 relative overflow-hidden">
                {/* Orange Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-orange"></div>
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-orange opacity-30"></div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-bitcoin/10 border-2 border-bitcoin rounded-lg flex items-center justify-center mb-6 group-hover:bg-bitcoin/20 transition-colors"
                >
                  <value.icon className="text-bitcoin" size={32} />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 font-mono">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {value.description}
                </p>

                {/* Highlight Badge */}
                <div className="inline-block">
                  <span className="font-mono text-xs bg-bitcoin/10 text-bitcoin px-3 py-1 rounded-full border border-bitcoin/30">
                    {value.highlight}
                  </span>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-bitcoin/20 group-hover:border-bitcoin/50 transition-colors"></div>
              </div>

              {/* Animated glow effect */}
              <motion.div
                animate={{
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
                className="absolute inset-0 gradient-orange-radial opacity-0 group-hover:opacity-20 transition-opacity -z-10 blur-xl"
              />
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
          <span className="text-bitcoin">return</span> values.
          <span className="text-accent-blue">filter</span>
          <span className="text-gray-500">(</span>
          <span className="text-accent-green">v</span> 
          <span className="text-gray-500"> =&gt; </span>
          <span className="text-accent-green">v.integrity === true</span>
          <span className="text-gray-500">)</span>;
        </motion.div>
      </div>
    </section>
  );
};

export default Values;