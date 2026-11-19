import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { SITE_IMAGES } from '../data/siteData';
import { EditorialImage } from './EditorialImage';

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0%', '0%'] : ['0%', '14%']
  );

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
    }
  };

  const titleWordsLine1 = ['Transform', 'Your'];
  const titleWordsLine2 = ['Outdoor', 'Space.'];

  return (
    <section
      ref={sectionRef}
      aria-label="Aura Landscaping Hero"
      className="relative min-h-[92vh] lg:min-h-screen w-full overflow-hidden bg-[#203328] flex flex-col justify-end pt-24 pb-12 sm:pb-16 lg:pb-20"
    >
      {/* Background photograph with animated mask reveal & subtle desktop parallax */}
      <motion.div
        initial={
          shouldReduceMotion
            ? { opacity: 1 }
            : { clipPath: 'inset(4% 0% 4% 0%)', scale: 1.07, opacity: 0.85 }
        }
        animate={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1, opacity: 1 }}
        transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
        style={{ y: parallaxY }}
        className="absolute inset-0 -top-[6%] -bottom-[10%] will-change-transform"
      >
        <EditorialImage
          src={SITE_IMAGES.hero}
          alt="Luxury residential backyard outdoor living space with limestone patio, warm cedar timber pergola, fire feature, and lush evergreen landscaping at golden hour"
          priority
          fallbackTitle="Aura Landscaping"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Measured contrast scrim for 4.5:1+ white text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#131915]/88 via-[#131915]/48 to-[#131915]/28"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#131915]/68 via-[#131915]/25 to-transparent"
      />

      {/* Main editorial hero content */}
      <div className="aura-container relative z-10 mt-auto">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="h-[1.5px] w-8 bg-[#D35400]" aria-hidden="true" />
            <p className="text-[11px] sm:text-xs font-medium tracking-[0.26em] uppercase text-white/90">
              LANDSCAPE DESIGN · OUTDOOR LIVING
            </p>
          </motion.div>

          {/* Primary H1 with word-by-word reveal */}
          <h1
            className="font-editorial text-white font-normal tracking-[-0.02em] leading-[0.98]"
            style={{ fontSize: 'clamp(2.85rem, 6.4vw, 5.75rem)' }}
          >
            <span className="block overflow-hidden">
              {titleWordsLine1.map((word, idx) => (
                <motion.span
                  key={word}
                  initial={
                    shouldReduceMotion ? { opacity: 1 } : { y: '105%', opacity: 0 }
                  }
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.22 + idx * 0.09,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block mr-[0.26em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>

            <span className="block overflow-hidden mt-1">
              {titleWordsLine2.map((word, idx) => (
                <motion.span
                  key={word}
                  initial={
                    shouldReduceMotion ? { opacity: 1 } : { y: '105%', opacity: 0 }
                  }
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.42 + idx * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block mr-[0.24em] italic font-medium text-[#F0A06A]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Supporting copy */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base sm:text-lg text-white/88 font-light leading-relaxed max-w-xl"
          >
            Discover beautiful outdoor spaces designed to bring more character,
            comfort, and life to your surroundings.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              type="button"
              onClick={() => scrollToSection('selected-work')}
              className="group inline-flex items-center gap-3 bg-[#D35400] hover:bg-[#C84B00] text-white px-7 py-4 text-xs font-semibold tracking-[0.18em] uppercase whitespace-nowrap shrink-0 transition-all duration-200 hover:scale-[1.015] active:scale-[0.99]"
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={1.75}
              />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('contact-section')}
              className="inline-flex items-center justify-center border border-white/55 hover:border-white bg-black/25 hover:bg-white/15 backdrop-blur-xs text-white px-7 py-4 text-xs font-semibold tracking-[0.18em] uppercase whitespace-nowrap shrink-0 transition-all duration-200"
            >
              CONTACT AURA
            </button>
          </motion.div>
        </div>

        {/* Bottom meta bar: scroll indicator + editorial label */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 sm:mt-14 pt-6 border-t border-white/18 flex items-center justify-between gap-4"
        >
          <button
            type="button"
            onClick={() => scrollToSection('brand-introduction')}
            aria-label="Scroll to Brand Introduction"
            className="group inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] uppercase text-white/80 hover:text-white transition-colors"
          >
            <motion.span
              animate={shouldReduceMotion ? {} : { y: [0, 4, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="inline-flex items-center justify-center w-7 h-7 border border-white/35 group-hover:border-[#D35400] transition-colors"
            >
              <ArrowDown className="w-3.5 h-3.5 text-[#F0A06A]" strokeWidth={1.6} />
            </motion.span>
            <span>Scroll to explore</span>
          </button>

          <p className="text-[11px] font-medium tracking-[0.24em] uppercase text-white/75 text-right">
            OUTDOOR LIVING, REIMAGINED
          </p>
        </motion.div>
      </div>
    </section>
  );
};
