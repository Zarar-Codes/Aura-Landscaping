import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SITE_IMAGES } from '../data/siteData';
import { EditorialImage } from './EditorialImage';

export const VisualStatement: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0%', '0%'] : ['-6%', '6%']
  );

  const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section
      ref={ref}
      aria-label="Outdoor Living Visual Statement"
      className="relative min-h-[68vh] sm:min-h-[75vh] w-full overflow-hidden bg-[#203328] flex items-center py-24 sm:py-32"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 -top-[10%] -bottom-[10%] will-change-transform"
      >
        <motion.div
          initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.07 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <EditorialImage
            src={SITE_IMAGES.twilightSanctuary}
            alt="Twilight backyard sanctuary with illuminated stone terrace, timber pavilion, outdoor kitchen, and waterfall feature"
            fallbackTitle="Make room for better moments"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#131915]/82 via-[#131915]/52 to-[#131915]/45"
      />

      <div className="aura-container relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-14 h-[2px] bg-[#D35400] origin-left mb-7"
          />

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial text-white font-normal leading-[1.02] tracking-[-0.015em]"
            style={{ fontSize: 'clamp(2.65rem, 5.2vw, 4.75rem)' }}
          >
            Make room for{' '}
            <span className="italic text-[#F0A06A]">better moments.</span>
          </motion.h2>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <button
              type="button"
              onClick={scrollToContact}
              className="group inline-flex items-center gap-3 border border-white/55 hover:border-[#D35400] bg-black/25 hover:bg-[#D35400] text-white px-7 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase whitespace-nowrap shrink-0 transition-all duration-200"
            >
              <span>START YOUR PROJECT</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={1.75}
              />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
