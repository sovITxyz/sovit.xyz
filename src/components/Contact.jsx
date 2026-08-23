import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { CONTACT_PREFILL_EVENT, CONTACT_EMAIL } from '@/lib/contact';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const nameInputRef = useRef(null);
  const lastPrefill = useRef('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handlePrefill = (event) => {
      const topic = typeof event.detail?.topic === 'string' ? event.detail.topic : '';
      if (!topic) return;
      const prefillMessage = `Hi Sovereign Technology team, I'm interested in ${topic}. `;
      setFormData((prev) => {
        // Never clobber a message the visitor has typed themselves
        if (prev.message && prev.message !== lastPrefill.current) return prev;
        lastPrefill.current = prefillMessage;
        return { ...prev, message: prefillMessage };
      });
      nameInputRef.current?.focus({ preventScroll: true });
    };

    window.addEventListener(CONTACT_PREFILL_EVENT, handlePrefill);
    return () => window.removeEventListener(CONTACT_PREFILL_EVENT, handlePrefill);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    toast({
      title: 'Opening email client...',
      description: `If your email client didn't open, email us directly at ${CONTACT_EMAIL}`,
      duration: 8000
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-bitcoin/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Start Your </span>
            <span className="text-bitcoin">Project</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            // Ready to run sovereign AI?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-strong rounded-lg p-8 border-technical">
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">
                <span className="text-bitcoin">&gt;</span> Why Work With Us?
              </h3>
              <div className="space-y-4">
                {[
                  'You own the models, data, and infrastructure',
                  'No vendor lock-in, ever',
                  'Production-grade security by default',
                  'Open-source transparency (AGPL-3.0)',
                  '24/7 operations and monitoring'
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-bitcoin flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Method - Email */}
            <motion.a
              href={`mailto:${CONTACT_EMAIL}`}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-lg p-6 flex items-center gap-4 hover:shadow-bitcoin transition-all block"
            >
              <div className="w-12 h-12 bg-bitcoin/10 border border-bitcoin rounded-lg flex items-center justify-center">
                <Mail className="text-bitcoin" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-mono">Email</p>
                <p className="text-white font-semibold">{CONTACT_EMAIL}</p>
              </div>
            </motion.a>

            <p className="text-gray-500 text-sm font-mono">
              Tell us about your project — we respond within 24 hours with a technical assessment and next steps.
            </p>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-strong rounded-lg p-8 border-l-4 border-bitcoin">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-gray-400 mb-2">
                    <span className="text-bitcoin">&gt;</span> Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    ref={nameInputRef}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border border-bitcoin/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bitcoin transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-2">
                    <span className="text-bitcoin">&gt;</span> Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border border-bitcoin/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bitcoin transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-mono text-gray-400 mb-2">
                    <span className="text-bitcoin">&gt;</span> Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-gray-900 border border-bitcoin/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bitcoin transition-colors resize-none"
                    placeholder="Tell us about your AI project, infrastructure, and goals..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-bitcoin text-black font-mono font-bold px-6 py-4 rounded-lg hover:bg-bitcoin-light transition-all shadow-bitcoin flex items-center justify-center gap-2 group"
                >
                  <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                  Send Request
                </motion.button>
              </div>

              {/* Code decoration */}
              <div className="mt-6 pt-6 border-t border-gray-700 font-mono text-xs text-gray-600">
                <span className="text-bitcoin">await</span> project.
                <span className="text-accent-blue">kickoff</span>
                <span className="text-gray-500">()</span>;
              </div>
            </form>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 font-mono text-sm mb-4">
            // Join organizations achieving true technological independence
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-500">
            <span><span aria-hidden="true">🔒</span> Secure</span>
            <span><span aria-hidden="true">🌐</span> Sovereign</span>
            <span><span aria-hidden="true">⚡</span> AI-Native</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
