import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { VERIFIED_CONTACT } from '../data/siteData';
import { ContactForm } from './ContactForm';

export const ContactSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact-section"
      aria-labelledby="contact-heading"
      className="bg-[#F7F7F4] py-20 sm:py-24 md:py-28 lg:py-36 border-t border-[#E9E9E5]"
    >
      <div className="aura-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left column: Heading + verified Aura contact information */}
          <div className="lg:col-span-5">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="h-[1.5px] w-8 bg-[#D35400]" aria-hidden="true" />
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-[#777777]">
                LET&apos;S CONNECT
              </p>
            </motion.div>

            <motion.h2
              id="contact-heading"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.75,
                delay: 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-editorial text-[#202020] font-normal leading-[1.06] tracking-[-0.015em]"
              style={{ fontSize: 'clamp(2.35rem, 4.1vw, 3.85rem)' }}
            >
              Let&apos;s talk about{' '}
              <span className="italic text-[#D35400]">your outdoor project.</span>
            </motion.h2>

            <p className="mt-6 text-base text-[#202020]/80 leading-relaxed max-w-md">
              Have an idea for your outdoor space? Get in touch to start a
              conversation.
            </p>

            {/* Verified contact info from auralandscaping.com */}
            <div className="mt-10 pt-8 border-t border-[#E9E9E5] space-y-5">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#777777] mb-1.5">
                  Phone
                </p>
                <a
                  href={VERIFIED_CONTACT.phoneHref}
                  className="inline-flex items-center gap-2.5 text-lg font-medium text-[#202020] hover:text-[#D35400] transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#D35400]" strokeWidth={1.6} />
                  <span>{VERIFIED_CONTACT.phoneDisplay}</span>
                </a>
              </div>

              <div>
                <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#777777] mb-1.5">
                  Email
                </p>
                <a
                  href={VERIFIED_CONTACT.emailHref}
                  className="inline-flex items-center gap-2.5 text-lg font-medium text-[#202020] hover:text-[#D35400] transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#D35400] shrink-0" strokeWidth={1.6} />
                  <span>{VERIFIED_CONTACT.email}</span>
                </a>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-semibold tracking-[0.16em] uppercase">
                <a
                  href={VERIFIED_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#202020] hover:text-[#D35400] transition-colors"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                </a>
                <a
                  href={VERIFIED_CONTACT.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#202020] hover:text-[#D35400] transition-colors"
                >
                  <span>Facebook</span>
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                </a>
                <a
                  href={VERIFIED_CONTACT.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#202020] hover:text-[#D35400] transition-colors"
                >
                  <span>Official Site</span>
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </div>

          {/* Right column: Contact form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
