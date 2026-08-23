import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers } from 'lucide-react';

const Platform = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const layers = [
    {
      number: '04',
      label: 'Application Layer',
      tech: ['Multi-Agent Orchestrator', 'RAG Engine', 'API Gateway', 'Web UI']
    },
    {
      number: '03',
      label: 'Inference Layer',
      tech: ['vLLM / TGI', 'Model Router', 'Batch Scheduler', 'Cache Layer']
    },
    {
      number: '02',
      label: 'Orchestration Layer',
      tech: ['Kubernetes', 'Helm Charts', 'GPU Scheduler', 'Istio']
    },
    {
      number: '01',
      label: 'Infrastructure Layer',
      tech: ['NVIDIA A100/H100', 'Private Cloud', 'Bare Metal', 'Terraform']
    }
  ];

  return (
    <section id="platform" className="py-24 bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern-large opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 bg-bitcoin/10 border border-bitcoin rounded-lg flex items-center justify-center">
              <Layers className="text-bitcoin" size={28} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">The Sovereign </span>
            <span className="text-bitcoin">AI Stack</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            // Battle-tested infrastructure designed for sovereignty, performance, and reliability
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {layers.map((layer, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-strong rounded-lg p-6 md:p-8 border-l-4 border-bitcoin hover:shadow-bitcoin transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-4 md:w-64 flex-shrink-0">
                    <span className="font-mono text-bitcoin text-sm font-bold" aria-hidden="true">{layer.number}</span>
                    <h3 className="text-lg md:text-xl font-bold text-white font-mono">
                      {layer.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {layer.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono bg-bitcoin/10 text-bitcoin px-3 py-1.5 rounded border border-bitcoin/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
              {index < layers.length - 1 && (
                <div className="flex justify-center py-1" aria-hidden="true">
                  <div className="w-px h-6 bg-gradient-to-b from-bitcoin/50 to-bitcoin/20"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom Code Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center font-mono text-sm text-gray-600"
        >
          <span className="text-bitcoin">stack</span>.
          <span className="text-accent-blue">deploy</span>
          <span className="text-gray-500">(</span>
          <span className="text-accent-green">--sovereign --owned</span>
          <span className="text-gray-500">)</span>;
        </motion.div>
      </div>
    </section>
  );
};

export default Platform;
