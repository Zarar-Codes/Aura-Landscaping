import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SITE_IMAGES } from '../data/siteData';
import { EditorialImage } from './EditorialImage';

export const CTASection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const scrollToContact = (focusInput = false) => {
    const section = document.getElementById('contact-section');
    if (section) {
      section.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
      if (focusInput) {
        setTimeout(() => {
          const input = document.getElementById('contact-full-name');
          input?.focus({ preventScroll: true });
        }, 450);
      }
    }
  };

  return (
    <section
      aria-labelledby="conversion-cta-heading"
      className="relative bg-[#203328] text-white py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Subtle architectural landscape texture overlay */}
      <div aria-hidden="true" className="absolute inset-0 opacity-22">
        <EditorialImage
          src={SITE_IMAGES.hero}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#203328]/95 via-[#203328]/88 to-[#16231B]/95"
      />

      <div className="aura-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="h-[1px] w-6 bg-[#D35400]" aria-hidden="true" />
            <span className="text-[11px] font-semibold tracking-[0.26em] uppercase text-[#F0A06A]">
              START THE CONVERSATION
            </span>
            <span className="h-[1px] w-6 bg-[#D35400]" aria-hidden="true" />
          </motion.div>

          <motion.h2
            id="conversion-cta-heading"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial text-white font-normal leading-[1.04] tracking-[-0.015em]"
            style={{ fontSize: 'clamp(2.65rem, 5vw, 4.75rem)' }}
          >
            Your outdoor space{' '}
            <span className="italic text-[#F0A06A]">has more to offer.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base sm:text-lg text-white/80 font-light max-w-xl mx-auto leading-relaxed"
          >
            Let&apos;s explore the possibilities for your next outdoor project.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              type="button"
              onClick={() => scrollToContact(true)}
              className="group inline-flex items-center gap-3 bg-[#D35400] hover:bg-[#C84B00] text-white px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase whitespace-nowrap shrink-0 transition-all duration-200 hover:scale-[1.02]"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5"
                strokeWidth={1.75}
              />
            </button>

            <button
              type="button"
              onClick={() => scrollToContact(false)}
              className="inline-flex items-center justify-center border border-white/40 hover:border-white hover:bg-white/10 text-white px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase whitespace-nowrap shrink-0 transition-all duration-200"
            >
              CONTACT AURA
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
