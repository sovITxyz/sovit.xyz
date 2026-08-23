import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { prefillContact } from '@/lib/contact';

/*
 * NOTE ON COLOURS: this site defines .text-bitcoin / .bg-bitcoin / .border-bitcoin as
 * plain CSS utilities in index.css — `bitcoin` is NOT a registered Tailwind theme
 * colour here. Opacity modifiers (bg-bitcoin/10), bitcoin-light, and accent-* therefore
 * compile to nothing. Tinted fills below use arbitrary rgba values so they actually render.
 */
const TINT_BG = 'bg-[rgba(247,147,26,0.10)]';
const TINT_BG_HOVER = 'hover:bg-[rgba(247,147,26,0.20)]';
const TINT_BORDER = 'border-[rgba(247,147,26,0.30)]';

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
      'Essential $60/mo — patching, monitoring, backups',
      'Full $125/mo — adds incident response & tuning',
      'No hostage infrastructure, ever',
      'Monthly report'
    ],
    highlighted: false
  }
];

const rateGroups = [
  {
    title: 'Infrastructure — Projects & Consulting',
    note: 'One-time engagements. Minimum monthly engagement on managed plans is $250/mo, with a one-time onboarding fee equal to one month of service.',
    rows: [
      ['Hourly consulting / ad-hoc work', 'from $65/hr'],
      ['Linux workstation setup & customization', 'from $95/machine'],
      ['Custom OS image + automated provisioning', 'from $750'],
      ['Single-service server deployment', 'from $600', 'Mail, files, VPN…'],
      ['Full infrastructure migration', 'Custom quote']
    ]
  },
  {
    title: 'Websites',
    note: 'Open-source stacks only — you own the code (AGPL-3.0), the content, and the hosting. Every care plan includes a quarterly vulnerability scan.',
    rows: [
      ['Launch', '$1,500–3,000', 'Static site, ~5 pages'],
      ['Business', '$4,000–8,000', 'Custom design, CMS, forms'],
      ['E-commerce / Custom App', '$8,000–15,000+', 'Full custom application builds'],
      ['Care Plan — Basic', '$75/mo', 'Updates, backups, uptime monitoring'],
      ['Care Plan — Standard', '$150/mo', 'Basic + 1 hr/mo content edits'],
      ['Care Plan — Priority', '$300/mo', 'Standard + priority support, monthly report']
    ]
  },
  {
    title: 'Managed IT & Security',
    rows: [
      ['ERPNext Implementation', '$3,000–10,000+', 'Including data migration and staff training'],
      ['Web Security Testing', '$4,000–10,000', 'Fixed-price web app / API assessment with full report'],
      ['Security Review (entry)', '$1,500–2,500', 'Scan + config audit + report — not a full pentest']
    ]
  },
  {
    title: 'Networks & Smart Spaces',
    note: 'Local-first: your data never leaves the building. On-site labor priced for El Salvador; remote design worldwide. Hardware at 10–15% markup.',
    rows: [
      ['Site Survey', '$300–500 home / $500–1,500 commercial', 'Credited toward the install if you proceed'],
      ['Access Point Install', '$250–450 per AP', 'VLAN / guest / controller config included'],
      ['Cabling', '$125–175 / $175–300 per run', 'Residential / commercial runs'],
      ['Home WiFi Overhaul', '$350–750'],
      ['Network Care Plan', '$49–149/mo', 'Monitoring, firmware, config backups'],
      ['Smart Home — Starter', '$600–1,200', 'Hub + lighting/climate, plus hardware'],
      ['Smart Home — Whole-Home', '$2,500–8,000', 'Dealer-grade result without dealer pricing'],
      ['Design Consult', '$125/hr', 'Automation architecture and planning'],
      ['Managed Home Assistant — Access', '$15/mo', 'Secure remote access + offsite encrypted backups'],
      ['Managed Home Assistant — Full Care', '$49–79/mo', 'Updates, automation fixes, remote support']
    ]
  },
  {
    title: 'Sovereign Hosting',
    note: "Managed open-source applications on our infrastructure. You're paying for the human: management, support, and migration — never just compute. Setup/migration $150–500 per app.",
    rows: [
      ['Personal Cloud', '$12–18/user/mo', 'Nextcloud + Vaultwarden + Immich'],
      ['Business Stack', '$19–29/user/mo', 'Nextcloud, Vaultwarden, Jitsi or Matrix, Plane, Mautic, Cal.com, Documenso, CRM'],
      ['A La Carte Instance', '$25–100/mo', 'Dedicated instance, priced by resource weight'],
      ['Hosted BTCPay Server', '$15–30/mo', 'Non-custodial — your own wallet/node, per merchant'],
      ['Managed Lightning Node', '$25–50/mo', 'Liquidity guidance included'],
      ['Hosted AI (Ollama / Open WebUI)', '$30–100/mo', 'Priced by GPU allocation']
    ]
  },
  {
    title: 'Appliance Products',
    note: 'A box in your space plus a subscription from us — the appliance does its job locally while we handle updates, monitoring, and offsite backups.',
    rows: [
      ['Sovereign Network Box', 'setup + $15–39/mo', 'OPNsense/OpenWrt + AdGuard Home, remote-managed firewall/DNS'],
      ['Privacy Camera / NVR', 'setup + $19–49/mo', 'Frigate box, local AI detection, offsite clip backup'],
      ['Backup Appliance', '$10–30/mo', 'Local NAS + encrypted offsite — 3-2-1 backups as a service'],
      ['Bitcoin Node Box', 'custom', 'Start9 setup + monitoring'],
      ['Private AI Box', '$2,000–5,000 + $50–150/mo', 'Local LLM appliance for confidentiality-sensitive teams']
    ]
  },
  {
    title: 'Bitcoin Services',
    note: 'Bitcoin-native since day one — node operations, custody architecture, and Lightning expertise.',
    rows: [
      ['Bitcoin Sovereign Retainer', '$199–399/mo', 'Managed node + Lightning + periodic OpSec review'],
      ['Lightning Channel Recovery', '$250–500 + 5–10%', 'Diagnostic + success fee (capped)'],
      ['One-Time Setups', '$500–1,500', 'Node, cold storage, wallet architecture'],
      ['Inheritance Planning', '$750–2,500', 'Multisig + documentation + heir drills'],
      ['Merchant Onboarding', 'custom', 'BTCPay + POS + staff training (El Salvador specialists)']
    ]
  },
  {
    title: 'Productized Consults',
    rows: [
      ['De-Google Migration', '$500–1,500', 'Google/iCloud → Nextcloud/Immich'],
      ['Sovereign Phone', '$200–400', 'GrapheneOS setup (+ optional support plan)'],
      ['Family CTO Retainer', '$50–150/mo', 'All household devices and accounts covered'],
      ['Workshops', 'custom', 'Self-hosting 101, Bitcoin custody — group rates'],
      ['White-Label Hosting', 'custom', 'For other consultants and MSPs']
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 }
};

const GroupHeading = ({ children }) => (
  <div className="flex items-center gap-4 mb-8 max-w-6xl mx-auto">
    <h3 className="font-mono text-xl md:text-2xl font-bold text-white whitespace-nowrap">
      <span className="text-bitcoin">//</span> {children}
    </h3>
    <div className="h-px flex-1 bg-[rgba(247,147,26,0.35)]"></div>
  </div>
);

const PlanCard = ({ plan }) => (
  <motion.div variants={item} className="relative group">
    <div className={`glass-strong rounded-lg p-8 transition-all duration-300 relative overflow-hidden h-full flex flex-col ${
      plan.highlighted ? 'border-2 border-bitcoin shadow-bitcoin hover:shadow-bitcoin-strong' : 'hover:shadow-bitcoin-strong'
    }`}>
      <div className={`absolute top-0 left-0 w-full h-1 ${
        plan.highlighted ? 'gradient-orange' : 'bg-gradient-to-r from-[rgba(247,147,26,0.5)] to-transparent'
      }`}></div>

      <div className="mb-4">
        <span className={`font-mono text-xs px-3 py-1 rounded-full border text-bitcoin ${
          plan.highlighted ? 'bg-[rgba(247,147,26,0.20)] border-bitcoin' : `${TINT_BG} ${TINT_BORDER}`
        }`}>
          {plan.tag}
        </span>
      </div>

      <h4 className="text-2xl font-bold text-white mb-2 font-mono">{plan.name}</h4>
      <p className="mb-4">
        <span className="text-3xl font-bold text-bitcoin font-mono">{plan.price}</span>
        <span className="text-gray-500 font-mono text-sm">{plan.period}</span>
      </p>

      <p className="text-gray-400 mb-6 text-sm leading-relaxed">{plan.description}</p>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle className="text-bitcoin flex-shrink-0 mt-0.5" size={16} aria-hidden="true" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        onClick={() => prefillContact(`the "${plan.name}" plan`)}
        aria-label={`Contact us about the ${plan.name} plan`}
        className={`block text-center font-mono font-bold py-3 px-6 rounded-lg transition-all duration-300 ${
          plan.highlighted
            ? 'bg-bitcoin text-black hover:bg-[#FFA842] shadow-bitcoin'
            : `${TINT_BG} text-bitcoin border ${TINT_BORDER} ${TINT_BG_HOVER}`
        }`}
      >
        Get Started
      </a>

      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[rgba(247,147,26,0.2)] group-hover:border-[rgba(247,147,26,0.5)] transition-colors"></div>
    </div>
  </motion.div>
);

const RateGroup = ({ group }) => (
  <div className="mb-10">
    <h4 className="font-mono text-lg font-bold text-bitcoin mb-4">{group.title}</h4>
    <div className={`glass rounded-lg border ${TINT_BORDER} overflow-hidden`}>
      {group.rows.map(([name, price, desc], i) => (
        <div
          key={i}
          className={`flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 px-5 py-4 ${
            i > 0 ? 'border-t border-gray-700' : ''
          }`}
        >
          <span className="min-w-0">
            <span className="block text-white font-mono text-sm font-bold">{name}</span>
            {desc && <span className="block text-gray-500 text-xs mt-1">{desc}</span>}
          </span>
          <span className="font-mono text-sm text-bitcoin font-bold whitespace-nowrap sm:text-right flex-shrink-0">
            {price}
          </span>
        </div>
      ))}
    </div>
    {group.note && <p className="text-gray-500 text-xs mt-3 leading-relaxed">{group.note}</p>}
  </div>
);

const Bundles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            <span className="text-white">Packages &amp; </span>
            <span className="text-bitcoin">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            // Published rates — no &quot;contact us for a quote&quot; games
          </p>
        </motion.div>

        {/* ---- AI Operations ---- */}
        <GroupHeading>AI Operations</GroupHeading>
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {aiPlans.map((plan) => <PlanCard key={plan.name} plan={plan} />)}
        </motion.div>
        <p className="mt-6 max-w-6xl mx-auto text-gray-500 text-sm font-mono text-center">
          AI project engagements (development, deployment, integration) are scoped individually —
          AI Strategy &amp; Audit starts at $2,500.
        </p>

        {/* ---- Infrastructure & Linux ---- */}
        <div className="mt-20">
          <GroupHeading>Infrastructure &amp; Linux</GroupHeading>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {infraPlans.map((plan) => <PlanCard key={plan.name} plan={plan} />)}
        </motion.div>

        {/* ---- Everything else, as published rate tables ---- */}
        <div className="mt-20">
          <GroupHeading>Full Rate Card</GroupHeading>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-10">
          {rateGroups.map((group) => <RateGroup key={group.title} group={group} />)}
        </div>

        {/* Footnotes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 max-w-3xl mx-auto space-y-3 text-center"
        >
          <p className="text-gray-500 text-sm font-mono">
            All prices are starting points in USD; final quotes depend on scope.
            VPS hosting is billed directly by your provider — you always own the account and credentials.
          </p>
          <p className="text-gray-500 text-sm font-mono">
            Pay in Bitcoin: 5% discount via BTCPay · Every care plan includes a quarterly vulnerability scan
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Bundles;
