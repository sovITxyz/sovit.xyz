import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, Globe } from 'lucide-react';

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
            <span className="text-white">About </span>
            <span className="text-bitcoin">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            // the person behind the terminal
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto glass rounded-lg p-8 md:p-12 border-l-4 border-bitcoin hover:shadow-bitcoin transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-bitcoin/10 border border-bitcoin rounded-lg flex items-center justify-center flex-shrink-0">
              <User className="text-bitcoin" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white font-mono">
              <span className="text-bitcoin">&gt;</span> Cameron
            </h3>
          </div>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Cameron began gaming on PCs at a very young age. In elementary school, he made videos and simple animations in Microsoft Movie Maker with his brother. By 6th grade, at age 11, he started making websites using Zoomshare templates — simple game sites built by copying and pasting his favorite Flash games from other websites into the template. Around the same time, he got into competitive FPS gaming and built his first computer.
            </p>
            <p>
              At 13, he received a netbook from Santa and began experimenting with Kali Linux and an Alfa AWUS036NHA adapter, exploring wireless security and learning how WEP networks could be tested and cracked. Around the same time, he started coding in VB.NET and piecing together open-source code in C++. Cameron has always been passionate about all aspects of computing.
            </p>
            <p>
              In high school, he became the go-to person for computer help — repairing and imaging systems for family members, friends from church, classmates, and even teachers. These experiences helped him develop strong technical and troubleshooting skills.
            </p>
            <p>
              He later built the most powerful workstation/gaming computer possible (2017) and worked as an IT professional at Health First, gaining valuable experience in enterprise IT environments. Today, Cameron has left Health First to focus on his own projects and pursue his passion for finding efficient technical solutions, deploying and implementing open-source solutions, and serving others through sovereign, open-source technologies.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="text-bitcoin" size={18} />
              <h4 className="text-white font-mono font-semibold text-sm">2026 Portfolio</h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'gcs.sv', url: 'https://gcs.sv' },
                { name: 'whatarush.org', url: 'https://whatarush.org' },
                { name: 'SovIT.xyz', url: 'https://sovit.xyz' },
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
    </section>
  );
};

export default About;
