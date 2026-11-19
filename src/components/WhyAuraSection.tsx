import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SITE_IMAGES, WHY_AURA_STATEMENTS } from '../data/siteData';
import { EditorialImage } from './EditorialImage';

export const WhyAuraSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const scrollToServices = () => {
    const el = document.getElementById('services-section');
    if (el) {
      el.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section
      id="why-aura"
      aria-labelledby="why-aura-heading"
      className="bg-[#FFFFFF] py-20 sm:py-24 md:py-28 lg:py-36"
    >
      <div className="aura-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          {/* Left: Full-height architectural landscape image */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { clipPath: 'inset(8% 0% 8% 0%)', opacity: 0.75 }
              }
              whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex-1 min-h-[380px] lg:min-h-full overflow-hidden bg-[#E9E9E5]"
            >
              <EditorialImage
                src={SITE_IMAGES.whyAuraLounge}
                alt="Tranquil contemporary backyard terrace at early dusk with natural slate patio, timber lounge pergola, and low-voltage garden lighting"
                fallbackTitle="Why Aura Landscaping"
                className="w-full h-full lg:h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/55 to-transparent"
              />
              <p className="absolute bottom-5 left-5 right-5 text-[11px] tracking-[0.16em] uppercase text-white/85">
                Designed for quiet mornings and illuminated evenings
              </p>
            </motion.div>
          </div>

          {/* Right: Editorial heading + numbered value statements */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
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
                  WHY AURA LANDSCAPING
                </p>
              </motion.div>

              <motion.h2
                id="why-aura-heading"
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
                Thoughtful spaces.{' '}
                <span className="italic text-[#354A36]">
                  Beautifully transformed.
                </span>
              </motion.h2>
            </div>

            {/* Numbered editorial value statements with hairline dividers */}
            <div className="mt-10 border-t border-[#E9E9E5]">
              {WHY_AURA_STATEMENTS.map((item, idx) => (
                <motion.div
                  key={item.index}
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
                  className="group py-6 border-b border-[#E9E9E5] grid grid-cols-12 gap-4 items-baseline transition-colors hover:border-[#D35400]/50"
                >
                  <span className="col-span-2 sm:col-span-2 text-xs font-semibold tracking-[0.2em] text-[#D35400] tabular-nums">
                    {item.index}
                  </span>
                  <div className="col-span-10 sm:col-span-10">
                    <h3 className="font-sans text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-[#202020] group-hover:text-[#D35400] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-[15px] text-[#777777] leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={scrollToServices}
                className="group inline-flex items-center gap-3 bg-[#D35400] hover:bg-[#C84B00] text-white px-7 py-4 text-xs font-semibold tracking-[0.18em] uppercase whitespace-nowrap shrink-0 transition-all duration-200 hover:scale-[1.015]"
              >
                <span>DISCOVER THE POSSIBILITIES</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={1.75}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
