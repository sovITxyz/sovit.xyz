import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Bitcoin } from 'lucide-react';
import { prefillContact } from '@/lib/contact';

const aiPlans = [
  {
    name: 'Sovereign AI Hosting',
    price: '$30–100',
    period: '/mo',
    tag: 'HOSTED',
    description: 'Hosted open-source AI stack (Ollama / Open WebUI) on our infrastructure, priced by GPU allocation.',
    features: [
      'Dedicated tenancy, isolated resources',
      'Offsite encrypted backups',
      'Uptime monitoring included',
      'Quarterly vulnerability scan'
    ],
    highlighted: false
  },
  {
    name: 'Private AI Box',
    price: '$2,000–5,000',
    period: ' setup',
    tag: 'ON-PREM',
    description: 'Local LLM appliance for confidentiality-sensitive teams — law firms, clinics, finance. Your data never leaves the building.',
    features: [
      'Hardware + model stack, installed',
      'Secure remote management tunnel',
      'Care plan $50–150/mo',
      'Quarterly vulnerability scan'
    ],
    highlighted: true
  },
  {
    name: 'AI Operations Retainer',
    price: 'from $500',
    period: '/mo',
    tag: 'MANAGED',
    description: 'We run your AI production stack end to end — monitoring, incident response, and continuous optimization.',
    features: [
      '24/7 monitoring & incident response',
      'Performance & cost optimization',
      'Model drift detection',
      'Quarterly vulnerability scan'
    ],
    highlighted: false
  }
];

const infraPlans = [
  {
    name: 'Managed Workstation',
    price: 'from $45',
    period: '/mo',
    tag: 'ENDPOINT',
    description: 'Linux desktops and laptops kept patched, backed up, and working — configured for your actual workflow.',
    features: [
      'Security patching & updates',
      'Backup configuration & monitoring',
      'Remote support',
      'Setup & customization from $95/machine'
    ],
    highlighted: false
  },
  {
    name: 'Managed Server',
    price: 'from $125',
    period: '/mo',
    tag: 'ON-PREM',
    description: 'On-premises servers running your self-hosted stack — mail, file sync, VPN, ERP — maintained end to end.',
    features: [
      'Patching, monitoring, verified backups',
      'Incident response',
      'Tested, reversible deployments',
      'Single-service deployment from $600'
    ],
    highlighted: true
  },
  {
    name: 'VPS Management',
    price: '$60–125',
    period: '/mo',
    tag: 'ANY PROVIDER',
    description: 'We manage the servers that run your business, on whichever provider you choose. You keep root, the account, and ownership.',
    features: [
      'Essential $60/mo — patching, monitoring, verified backups',
      'Full $125/mo — adds incident response & tuning',
      'No hostage infrastructure, ever',
      'Monthly report'
    ],
    highlighted: false
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
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 }
};

const PlanCard = ({ plan }) => (
  <motion.div variants={item} className="relative group">
    <div className={`glass-strong rounded-lg p-8 transition-all duration-300 relative overflow-hidden h-full flex flex-col ${
      plan.highlighted
        ? 'border-2 border-bitcoin shadow-bitcoin hover:shadow-bitcoin-strong'
        : 'hover:shadow-bitcoin-strong'
    }`}>
      {/* Top gradient bar */}
      <div className={`absolute top-0 left-0 w-full h-1 ${
        plan.highlighted ? 'gradient-orange' : 'bg-gradient-to-r from-bitcoin/50 to-transparent'
      }`}></div>

      {/* Tag badge */}
      <div className="mb-4">
        <span className={`font-mono text-xs px-3 py-1 rounded-full border ${
          plan.highlighted
            ? 'bg-bitcoin/20 text-bitcoin border-bitcoin'
            : 'bg-bitcoin/10 text-bitcoin border-bitcoin/30'
        }`}>
          {plan.tag}
        </span>
      </div>

      {/* Plan name + price */}
      <h4 className="text-2xl font-bold text-white mb-2 font-mono">
        {plan.name}
      </h4>
      <p className="mb-4">
        <span className="text-3xl font-bold text-bitcoin font-mono">{plan.price}</span>
        <span className="text-gray-500 font-mono text-sm">{plan.period}</span>
      </p>

      {/* Description */}
      <p className="text-gray-400 mb-6 text-sm leading-relaxed">
        {plan.description}
      </p>

      {/* Feature list */}
      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle className="text-bitcoin flex-shrink-0 mt-0.5" size={16} aria-hidden="true" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        onClick={() => prefillContact(`the "${plan.name}" plan`)}
        aria-label={`Contact us about the ${plan.name} plan`}
        className={`block text-center font-mono font-bold py-3 px-6 rounded-lg transition-all duration-300 ${
          plan.highlighted
            ? 'bg-bitcoin text-black hover:bg-bitcoin-light shadow-bitcoin'
            : 'bg-bitcoin/10 text-bitcoin border border-bitcoin/50 hover:bg-bitcoin/20'
        }`}
      >
        Get Started
      </a>

      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-bitcoin/20 group-hover:border-bitcoin/50 transition-colors"></div>
    </div>
  </motion.div>
);

const GroupHeading = ({ id, children }) => (
  <div className="flex items-center gap-4 mb-8 max-w-6xl mx-auto">
    <h3 id={id} className="font-mono text-xl md:text-2xl font-bold text-white whitespace-nowrap">
      <span className="text-bitcoin">//</span> {children}
    </h3>
    <div className="h-px flex-1 bg-gradient-to-r from-bitcoin/40 to-transparent"></div>
  </div>
);

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 bg-gray-800 relative overflow-hidden">
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
            <span className="text-white">Transparent </span>
            <span className="text-bitcoin">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            // Published rates — no &quot;contact us for a quote&quot; games
          </p>
        </motion.div>

        {/* ---- AI Operations ---- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <GroupHeading id="pricing-ai">AI Operations</GroupHeading>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {aiPlans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 max-w-6xl mx-auto text-gray-500 text-sm font-mono text-center"
        >
          AI project engagements (development, deployment, integration) are scoped individually —
          AI Strategy &amp; Audit starts at $2,500.
        </motion.p>

        {/* ---- Infrastructure & Linux ---- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-20"
        >
          <GroupHeading id="pricing-infrastructure">Infrastructure &amp; Linux</GroupHeading>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {infraPlans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 max-w-6xl mx-auto text-gray-500 text-sm font-mono text-center"
        >
          Hourly consulting from $65/hr · $250/mo minimum engagement · one-time onboarding fee
          equal to one month&apos;s service on managed plans.
        </motion.p>

        {/* Footnotes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-14 max-w-3xl mx-auto space-y-3 text-center"
        >
          <p className="text-gray-500 text-sm font-mono flex items-center justify-center gap-2">
            <Bitcoin size={16} className="text-bitcoin" aria-hidden="true" />
            Pay in Bitcoin: 5% discount via BTCPay
          </p>
          <p className="text-sm font-mono">
            <a href="/services/" className="text-bitcoin hover:text-bitcoin-light transition-colors underline underline-offset-4">
              Need websites, managed IT, networks, hosting, or Bitcoin services? Full service catalog →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
