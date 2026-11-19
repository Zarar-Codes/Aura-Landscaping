import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/siteData';
import { ServiceRow } from './ServiceRow';
import { EditorialImage } from './EditorialImage';

export const ServicesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const activeService = SERVICES_LIST[activeIndex] ?? SERVICES_LIST[0];

  const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section
      id="services-section"
      aria-labelledby="services-heading"
      className="bg-[#203328] text-white py-20 sm:py-24 md:py-28 lg:py-36"
    >
      <div className="aura-container">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-12 border-b border-white/15">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-[1.5px] w-8 bg-[#D35400]" aria-hidden="true" />
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-[#F0A06A]">
                WHAT WE CREATE
              </p>
            </div>
            <h2
              id="services-heading"
              className="font-editorial text-white font-normal leading-[1.04] tracking-[-0.015em]"
              style={{ fontSize: 'clamp(2.5rem, 4.6vw, 4.4rem)' }}
            >
              Explore the <span className="italic text-[#F0A06A]">possibilities.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-1">
            <p className="text-sm sm:text-[15px] text-white/75 leading-relaxed max-w-md lg:ml-auto">
              From natural stonework and custom timber decks to complete outdoor
              living environments, every detail is built around how you spend
              time outside.
            </p>
          </div>
        </div>

        {/* Editorial rows + sticky desktop preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start mt-2">
          <div className="lg:col-span-7">
            {SERVICES_LIST.map((service, idx) => (
              <ServiceRow
                key={service.id}
                service={service}
                isActive={idx === activeIndex}
                onActivate={() => setActiveIndex(idx)}
                onSelectScroll={scrollToContact}
              />
            ))}
          </div>

          {/* Desktop sticky image preview frame */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28 pt-8">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#17251D] border border-white/12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, scale: 1.04 }
                  }
                  animate={{ opacity: 1, scale: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full"
                >
                  <EditorialImage
                    src={activeService.image}
                    alt={activeService.imageAlt}
                    fallbackTitle={activeService.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#111b15]/90 via-[#111b15]/45 to-transparent"
              />

              <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#F0A06A] tabular-nums">
                    {activeService.index} · {activeService.title}
                  </span>
                  <p className="mt-1 text-xs text-white/85">
                    {activeService.subtitle}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <p className="text-xs text-white/60">
                Select any craft area to inquire about your property.
              </p>
              <button
                type="button"
                onClick={scrollToContact}
                className="group inline-flex items-center gap-3 bg-[#D35400] hover:bg-[#C84B00] text-white px-7 py-4 text-xs font-semibold tracking-[0.18em] uppercase whitespace-nowrap shrink-0 transition-all duration-200 hover:scale-[1.015]"
              >
                <span>LET&apos;S DISCUSS YOUR PROJECT</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={1.75}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 lg:hidden">
          <button
            type="button"
            onClick={scrollToContact}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#D35400] hover:bg-[#C84B00] text-white px-7 py-4 text-xs font-semibold tracking-[0.18em] uppercase whitespace-nowrap shrink-0 transition-all duration-200"
          >
            <span>LET&apos;S DISCUSS YOUR PROJECT</span>
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={1.75}
            />
          </button>
        </div>
      </div>
    </section>
  );
};
