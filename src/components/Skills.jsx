import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: 'Infrastructure',
      skills: [
        { name: 'Kubernetes', level: 95 },
        { name: 'Docker', level: 98 },
        { name: 'Linux/Unix', level: 99 },
        { name: 'AWS/Azure/GCP', level: 90 }
      ]
    },
    {
      category: 'Security',
      skills: [
        { name: 'Cryptography', level: 92 },
        { name: 'Zero Trust', level: 88 },
        { name: 'Pentesting', level: 85 },
        { name: 'SIEM', level: 87 }
      ]
    },
    {
      category: 'Development',
      skills: [
        { name: 'Python', level: 96 },
        { name: 'JavaScript/Node.js', level: 94 },
        { name: 'Go', level: 89 },
        { name: 'Rust', level: 82 }
      ]
    },
    {
      category: 'Operations',
      skills: [
        { name: 'CI/CD', level: 97 },
        { name: 'GitOps', level: 93 },
        { name: 'Monitoring', level: 91 },
        { name: 'Automation', level: 98 }
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern-large opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Technical </span>
            <span className="text-bitcoin">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            // Skills matrix: comprehensive technology stack
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="glass rounded-lg p-6 border-l-4 border-bitcoin hover:shadow-bitcoin transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-mono flex items-center gap-2">
                <span className="text-bitcoin">&gt;</span> {category.category}
              </h3>

              <motion.div
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="space-y-4"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div key={skillIndex} variants={item}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-mono text-sm">{skill.name}</span>
                      <span className="text-bitcoin font-mono text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-orange relative overflow-hidden"
                      >
                        {/* Animated glow effect */}
                        <motion.div
                          animate={{
                            x: ['-100%', '200%']
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="absolute inset-0 w-1/3 bg-white/30"
                          style={{
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Tech Tags Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <h3 className="text-xl font-bold text-white mb-6 font-mono text-center">
            <span className="text-bitcoin">//</span> Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Bitcoin Core',
              'Lightning Network',
              'Ansible',
              'Terraform',
              'PostgreSQL',
              'Redis',
              'Nginx',
              'GraphQL',
              'WebAssembly',
              'Microservices',
              'gRPC',
              'Prometheus',
              'Grafana',
              'ELK Stack',
              'Vault'
            ].map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-gray-800 text-bitcoin border border-bitcoin/30 px-4 py-2 rounded-lg font-mono text-sm hover:bg-bitcoin/10 hover:shadow-bitcoin transition-all cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Matrix-style code decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 text-center font-mono text-xs text-gray-600"
        >
          <span className="text-bitcoin">const</span> expertise = skills.
          <span className="text-accent-blue">map</span>
          <span className="text-gray-500">(</span>
          <span className="text-accent-green">s</span> 
          <span className="text-gray-500"> =&gt; </span>
          <span className="text-accent-green">s.master()</span>
          <span className="text-gray-500">)</span>;
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;