import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PHILOSOPHY_PRINCIPLES, SITE_IMAGES } from '../data/siteData';
import { EditorialImage } from './EditorialImage';

export const DesignPhilosophy: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="design-philosophy"
      aria-labelledby="philosophy-heading"
      className="bg-[#FFFFFF] py-20 sm:py-24 md:py-28 lg:py-36"
    >
      <div className="aura-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left: Large outdoor living photograph */}
          <div className="lg:col-span-6 flex flex-col">
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { clipPath: 'inset(6% 0% 6% 0%)', opacity: 0.8 }
              }
              whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex-1 min-h-[360px] lg:min-h-[560px] overflow-hidden bg-[#E9E9E5]"
            >
              <EditorialImage
                src={SITE_IMAGES.customDeck}
                alt="Custom hardwood deck and cedar pergola overlooking manicured greenery and perennial plantings"
                fallbackTitle="Design Philosophy"
                className="w-full h-full lg:h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right: Approach & 3 editorial principles */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 mb-5"
              >
                <span className="h-[1.5px] w-8 bg-[#D35400]" aria-hidden="true" />
                <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-[#777777]">
                  OUR APPROACH
                </p>
              </motion.div>

              <motion.h2
                id="philosophy-heading"
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
                Beauty in{' '}
                <span className="italic text-[#D35400]">every detail.</span>
              </motion.h2>

              <motion.p
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: 0.14,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-6 text-base sm:text-[17px] text-[#202020]/80 leading-[1.75] max-w-xl"
              >
                From the overall layout to the finer details, a well-designed
                outdoor space should feel balanced, inviting, and naturally
                connected to its surroundings.
              </motion.p>
            </div>

            {/* Three editorial principles */}
            <div className="mt-10 border-t border-[#E9E9E5]">
              {PHILOSOPHY_PRINCIPLES.map((principle, idx) => (
                <motion.div
                  key={principle.index}
                  initial={
                    shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.08 * idx,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="py-6 border-b border-[#E9E9E5] grid grid-cols-12 gap-4 items-baseline"
                >
                  <span className="col-span-2 text-xs font-semibold tracking-[0.2em] text-[#354A36] tabular-nums">
                    {principle.index}
                  </span>
                  <div className="col-span-10">
                    <h3 className="font-editorial text-2xl text-[#202020] font-medium">
                      {principle.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-[#777777] leading-relaxed">
                      {principle.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
