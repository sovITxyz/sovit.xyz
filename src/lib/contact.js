export const CONTACT_PREFILL_EVENT = 'sovtech:contact-prefill';
export const CONTACT_EMAIL = 'services@sovtech.pro';

/**
 * Dispatch a prefill request for the contact form without scrolling.
 * @param {string} topic - Short human-readable topic, e.g. 'the "AI Deployment" service'.
 */
export function prefillContact(topic) {
  window.dispatchEvent(new CustomEvent(CONTACT_PREFILL_EVENT, { detail: { topic } }));
}

/**
 * Prefill the contact form with a topic and scroll to the contact section.
 * @param {string} topic
 */
export function goToContact(topic) {
  prefillContact(topic);
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}
