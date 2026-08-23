import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, User, Globe } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern-large opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Built by Operators, </span>
            <span className="text-bitcoin">for Operators</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            // the team behind the terminal
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-lg p-8 md:p-12 border-l-4 border-bitcoin hover:shadow-bitcoin transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-bitcoin/10 border border-bitcoin rounded-lg flex items-center justify-center flex-shrink-0">
                <Building2 className="text-bitcoin" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white font-mono">
                <span className="text-bitcoin">&gt;</span> Sovereign Technology SAS
              </h3>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Sovereign Technology SAS is an AI operations company registered in El Salvador. We are AI infrastructure
                engineers, ML practitioners, and systems architects who believe AI should serve its owners — not the
                other way around.
              </p>
              <p>
                The company grew out of <span className="text-bitcoin font-semibold">sovIT.xyz</span>, a Bitcoin-native
                IT consultancy known for sovereign, open-source infrastructure. That engineering DNA runs through
                everything we build: self-hosted, auditable, and free of lock-in. Today we develop, deploy, and operate
                sovereign AI systems for organizations across Latin America and beyond.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'Sovereignty First', desc: 'Your data. Your models. Your rules.' },
                { title: 'Production Grade', desc: 'Not prototypes — production systems.' },
                { title: 'Open Standards', desc: 'No lock-in. Open source at the core.' }
              ].map((value, i) => (
                <div key={i} className="glass rounded-lg p-4 border border-bitcoin/20">
                  <p className="text-bitcoin font-mono font-bold text-sm mb-1">{value.title}</p>
                  <p className="text-gray-400 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Founder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass rounded-lg p-8 md:p-12 border-l-4 border-bitcoin hover:shadow-bitcoin transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-bitcoin/10 border border-bitcoin rounded-lg flex items-center justify-center flex-shrink-0">
                <User className="text-bitcoin" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white font-mono">
                <span className="text-bitcoin">&gt;</span> Cameron — Founder
              </h3>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Cameron began gaming on PCs at a very young age. In elementary school, he made videos and simple
                animations in Microsoft Movie Maker with his brother. By 6th grade, at age 11, he started making
                websites using Zoomshare templates — simple game sites built by copying and pasting his favorite
                Flash games from other websites into the template. Around the same time, he got into competitive
                FPS gaming and built his first computer.
              </p>
              <p>
                At 13, he received a netbook from Santa and began experimenting with Kali Linux and an Alfa
                AWUS036NHA adapter, exploring wireless security and learning how WEP networks could be tested and
                cracked. Around the same time, he started coding in VB.NET and piecing together open-source code
                in C++. Cameron has always been passionate about all aspects of computing.
              </p>
              <p>
                In high school, he became the go-to person for computer help — repairing and imaging systems for
                family members, friends from church, classmates, and even teachers. These experiences helped him
                develop strong technical and troubleshooting skills.
              </p>
              <p>
                He later built the most powerful workstation/gaming computer possible (2017) and worked as an IT
                professional at Health First, gaining valuable experience in enterprise IT environments. Today,
                Cameron leads Sovereign Technology — deploying and operating sovereign, open-source AI systems
                and serving others through technology they truly own.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-bitcoin" size={18} />
                <h4 className="text-white font-mono font-semibold text-sm">2026 Portfolio</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'sovtech.pro', url: 'https://sovtech.pro' },
                  { name: 'gcs.sv', url: 'https://gcs.sv' },
                  { name: 'whatarush.org', url: 'https://whatarush.org' },
                  { name: 'bitcoinbarbell.com', url: 'https://bitcoinbarbell.com' }
                ].map((site, i) => (
                  <a
                    key={i}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono bg-bitcoin/10 text-bitcoin px-3 py-1.5 rounded border border-bitcoin/50 hover:bg-bitcoin/20 transition-colors"
                  >
                    {site.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-700 font-mono text-xs text-gray-600">
              <span className="text-bitcoin">const</span> journey =
              <span className="text-gray-500"> [</span>
              <span className="text-accent-green">"curiosity"</span>
              <span className="text-gray-500">, </span>
              <span className="text-accent-green">"experience"</span>
              <span className="text-gray-500">, </span>
              <span className="text-accent-green">"sovereignty"</span>
              <span className="text-gray-500">];</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
