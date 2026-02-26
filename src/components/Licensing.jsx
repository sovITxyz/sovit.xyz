import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Scale, Github } from 'lucide-react';

const Licensing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="licensing" className="py-24 bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern-large opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Open Source </span>
            <span className="text-bitcoin">Licensing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            // Our code is free as in freedom
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-lg p-8 md:p-12 border-l-4 border-bitcoin relative overflow-hidden">
            {/* Icon */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-bitcoin/10 border-2 border-bitcoin rounded-lg flex items-center justify-center">
                <Scale className="text-bitcoin" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-mono">
                  <span className="text-bitcoin">&gt;</span> AGPL-3.0 License
                </h3>
                <p className="text-gray-400 text-sm font-mono">GNU Affero General Public License v3</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 mb-8">
              <p className="text-gray-300 leading-relaxed">
                By default, sovIT.xyz <span className="text-bitcoin font-semibold">open-sources everything we create</span> under
                the AGPL-3.0 license. All non-confidential code, configurations, and tools we build for you are released
                openly — giving you full transparency and control.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This means you have the <span className="text-bitcoin font-semibold">freedom to use, modify, and deploy</span> your
                own updates to the code we write. You own what you pay for. Any modifications must also remain open-source,
                ensuring the community benefits and the code stays auditable.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Need a different arrangement? <span className="text-bitcoin font-semibold">Custom license releases</span> are
                available for an additional fee — allowing proprietary use or alternative licensing terms when required.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {['FREEDOM', 'TRANSPARENCY', 'COPYLEFT'].map((badge) => (
                <span
                  key={badge}
                  className="font-mono text-xs bg-bitcoin/10 text-bitcoin px-3 py-1 rounded-full border border-bitcoin/30"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* GitHub link */}
            <a
              href="https://github.com/sovitxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm bg-bitcoin/10 text-bitcoin px-4 py-2 rounded-lg border border-bitcoin/50 hover:bg-bitcoin/20 transition-colors"
            >
              <Github size={18} />
              View Source on GitHub
            </a>

            {/* Decorative corner */}
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-bitcoin/20"></div>
          </div>
        </motion.div>

        {/* Bottom Code Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center font-mono text-sm text-gray-600"
        >
          <span className="text-bitcoin">return</span> license.
          <span className="text-accent-blue">verify</span>
          <span className="text-gray-500">(</span>
          <span className="text-accent-green">"AGPL-3.0"</span>
          <span className="text-gray-500">)</span> === <span className="text-accent-green">true</span>;
        </motion.div>
      </div>
    </section>
  );
};

export default Licensing;
