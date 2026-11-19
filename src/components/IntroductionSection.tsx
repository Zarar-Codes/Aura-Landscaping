import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { SITE_IMAGES } from '../data/siteData';
import { EditorialImage } from './EditorialImage';

export const IntroductionSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageParallax = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [24, -24]
  );

  return (
    <section
      id="brand-introduction"
      ref={containerRef}
      aria-labelledby="intro-heading"
      className="bg-[#F7F7F4] py-20 sm:py-24 md:py-28 lg:py-36 overflow-hidden"
    >
      <div className="aura-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left editorial narrative */}
          <div className="lg:col-span-6 lg:pr-8">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[1.5px] w-8 bg-[#D35400]" aria-hidden="true" />
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-[#777777]">
                THE AURA EXPERIENCE
              </p>
            </motion.div>

            <motion.h2
              id="intro-heading"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-editorial text-[#202020] font-normal leading-[1.06] tracking-[-0.015em]"
              style={{ fontSize: 'clamp(2.35rem, 4.4vw, 4.15rem)' }}
            >
              Where outdoor living meets{' '}
              <span className="italic text-[#D35400]">thoughtful design.</span>
            </motion.h2>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.75,
                delay: 0.18,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-8 space-y-6 max-w-lg"
            >
              <p className="text-base sm:text-[17px] text-[#202020]/85 leading-[1.75] font-normal">
                An outdoor space should be more than an extension of your home.
                It should be somewhere to relax, connect, and enjoy the moments
                that matter.
              </p>

              <div className="pt-6 border-t border-[#E9E9E5] flex flex-wrap items-center gap-x-3 gap-y-1 text-xs tracking-[0.14em] uppercase text-[#777777]">
                <span>Architectural stonework</span>
                <span aria-hidden="true" className="text-[#D35400]">·</span>
                <span>Custom woodwork</span>
                <span aria-hidden="true" className="text-[#D35400]">·</span>
                <span>Living greenery</span>
              </div>
            </motion.div>
          </div>

          {/* Right asymmetric image composition */}
          <div className="lg:col-span-5 lg:col-start-8 relative">
            <motion.div
              style={{ y: imageParallax }}
              className="relative will-change-transform"
            >
              <motion.figure
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { clipPath: 'inset(10% 0% 10% 0%)', opacity: 0.7 }
                }
                whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="aspect-[3/4] w-full overflow-hidden bg-[#E9E9E5]">
                  <EditorialImage
                    src={SITE_IMAGES.introGarden}
                    alt="Serene luxury backyard courtyard with honed natural stone pavers, armourstone steps, warm cedar slats, and ornamental grasses"
                    fallbackTitle="The Aura Experience"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlapping architectural caption strip */}
                <figcaption className="mt-4 lg:mt-0 lg:absolute lg:-bottom-7 lg:-left-10 lg:max-w-[290px] bg-white border border-[#E9E9E5] p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-4 h-[1.5px] bg-[#D35400]" aria-hidden="true" />
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#D35400]">
                      Material Harmony
                    </span>
                  </div>
                  <p className="text-xs text-[#777777] leading-relaxed">
                    Illustrative landscape composition balancing natural stone,
                    warm cedar lines, and layered perennial greenery.
                  </p>
                </figcaption>
              </motion.figure>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
