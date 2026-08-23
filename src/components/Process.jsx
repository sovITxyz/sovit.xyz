import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, DraftingCompass, Code2, Rocket, Activity } from 'lucide-react';

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery & Audit',
      description: 'We analyze your data, infrastructure, and business objectives. We identify the highest-impact AI use cases and build the business case.'
    },
    {
      number: '02',
      icon: DraftingCompass,
      title: 'Architecture & Design',
      description: 'We design the sovereign AI architecture — model selection, infrastructure sizing, security model, and integration points. You review and approve.'
    },
    {
      number: '03',
      icon: Code2,
      title: 'Build & Train',
      description: 'We develop, fine-tune, and test. Every component is built for your domain. We iterate with your team until the quality bar is met.'
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Deploy & Harden',
      description: 'Production deployment with monitoring, alerting, and auto-scaling. Security hardening, load testing, and compliance checks. Go-live ready.'
    },
    {
      number: '05',
      icon: Activity,
      title: 'Operate & Optimize',
      description: 'We run it. 24/7 monitoring, incident response, performance tuning, and continuous improvement. Your AI gets better every month.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 border-2 border-bitcoin transform rotate-12"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border-2 border-bitcoin transform -rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">From Idea to Production </span>
            <span className="text-bitcoin">in Weeks</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            // A proven methodology that de-risks AI adoption and delivers measurable results fast
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-bitcoin/60 via-bitcoin/30 to-transparent" aria-hidden="true"></div>

          <div className="space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline node */}
                <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 glass-strong rounded-lg border border-bitcoin flex items-center justify-center shadow-bitcoin">
                  <span className="font-mono text-bitcoin font-bold text-sm md:text-base">{step.number}</span>
                </div>

                <div className="glass rounded-lg p-6 border-technical hover:shadow-bitcoin-strong transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="text-bitcoin flex-shrink-0" size={20} />
                    <h3 className="text-xl md:text-2xl font-bold text-white font-mono">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Code Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center font-mono text-sm text-gray-600"
        >
          <span className="text-bitcoin">for</span>
          <span className="text-gray-500">(</span>
          <span className="text-accent-green">phase</span>
          <span className="text-gray-500"> of </span>
          <span className="text-accent-green">roadmap</span>
          <span className="text-gray-500">) </span>
          <span className="text-accent-blue">ship</span>
          <span className="text-gray-500">(</span>
          <span className="text-accent-green">phase</span>
          <span className="text-gray-500">)</span>;
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
