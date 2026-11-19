import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { VERIFIED_CONTACT } from '../data/siteData';
import { EditorialImage } from './EditorialImage';

export type PromoCompositionVariant =
  | 'centered'
  | 'asymmetric'
  | 'editorial-accent'
  | 'masked-reveal'
  | 'cinematic-cta';

interface InodoPromotionalPageProps {
  backgroundImage: string;
  imageAlt: string;
  variant: PromoCompositionVariant;
}

export const InodoPromotionalPage: React.FC<InodoPromotionalPageProps> = ({
  backgroundImage,
  imageAlt,
  variant,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0%', '0%'] : ['0%', '10%']
  );

  const isCentered =
    variant === 'centered' || variant === 'masked-reveal';
  const isAsymmetric = variant === 'asymmetric';
  const isEditorialAccent = variant === 'editorial-accent';
  const isCinematicCta = variant === 'cinematic-cta';

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#17221B] text-white flex flex-col justify-between pt-24 pb-10 sm:pt-28 sm:pb-12"
    >
      {/* Background image with variant-specific cinematic reveal */}
      <motion.div
        initial={
          shouldReduceMotion
            ? { opacity: 1 }
            : variant === 'masked-reveal'
            ? { clipPath: 'circle(14% at 50% 50%)', scale: 1.08, opacity: 0.7 }
            : { clipPath: 'inset(6% 0% 6% 0%)', scale: 1.06, opacity: 0.8 }
        }
        animate={
          variant === 'masked-reveal'
            ? { clipPath: 'circle(100% at 50% 50%)', scale: 1, opacity: 1 }
            : { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, opacity: 1 }
        }
        transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
        style={{ y: bgY }}
        className="absolute inset-0 -top-[4%] -bottom-[4%] will-change-transform"
      >
        <EditorialImage
          src={backgroundImage}
          alt={imageAlt}
          priority
          fallbackTitle="A Website Concept by InoDo"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Variant-calibrated dark scrim for strong text legibility */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 ${
          isAsymmetric
            ? 'bg-gradient-to-r from-[#111713]/90 via-[#111713]/68 to-[#111713]/35'
            : isCinematicCta
            ? 'bg-gradient-to-t from-[#101612]/92 via-[#101612]/68 to-[#101612]/50'
            : 'bg-gradient-to-b from-[#111713]/68 via-[#111713]/62 to-[#111713]/85'
        }`}
      />

      {/* Editorial-accent framing lines for /media */}
      {isEditorialAccent && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-6 sm:inset-10 top-24 sm:top-28 border border-white/15"
        >
          <motion.span
            initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="block h-[2px] w-32 bg-[#D35400] origin-left"
          />
        </div>
      )}

      {/* Spacer for vertical alignment */}
      <div className="shrink-0" aria-hidden="true" />

      {/* Core Promotional Content — Strictly exact copy only */}
      <div className="aura-container relative z-10 my-auto py-8">
        <div
          className={
            isCentered
              ? 'max-w-3xl mx-auto text-center'
              : isAsymmetric
              ? 'max-w-2xl mr-auto text-left lg:pl-4'
              : isEditorialAccent
              ? 'max-w-4xl mx-auto text-left sm:px-8'
              : 'max-w-3xl mx-auto text-center'
          }
        >
          {/* Small eyebrow */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={`inline-flex items-center gap-3 mb-6 ${
              isCentered || isCinematicCta ? 'justify-center' : 'justify-start'
            }`}
          >
            <span className="h-[1.5px] w-8 bg-[#D35400]" aria-hidden="true" />
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.26em] uppercase text-[#F0A06A]">
              A WEBSITE CONCEPT BY INODO
            </p>
            {(isCentered || isCinematicCta) && (
              <span className="h-[1.5px] w-8 bg-[#D35400]" aria-hidden="true" />
            )}
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial text-white font-normal leading-[1.0] tracking-[-0.02em]"
            style={{
              fontSize: isEditorialAccent
                ? 'clamp(3rem, 7vw, 6.2rem)'
                : 'clamp(2.85rem, 6vw, 5.4rem)',
            }}
          >
            Like what <span className="italic text-[#F0A06A]">you see?</span>
          </motion.h1>

          {/* Animated orange accent line */}
          <motion.div
            initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.75, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className={`mt-7 h-[2px] w-20 bg-[#D35400] ${
              isCentered || isCinematicCta ? 'mx-auto origin-center' : 'origin-left'
            }`}
          />

          {/* Supporting text */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className={`mt-7 text-base sm:text-xl text-white/88 font-light leading-relaxed max-w-xl ${
              isCentered || isCinematicCta ? 'mx-auto' : ''
            }`}
          >
            Let&apos;s build something extraordinary for your business.
          </motion.p>

          {/* Two exact CTAs */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.54, ease: [0.16, 1, 0.3, 1] }}
            className={`mt-10 flex flex-wrap items-center gap-4 ${
              isCentered || isCinematicCta ? 'justify-center' : 'justify-start'
            }`}
          >
            <a
              href={VERIFIED_CONTACT.inodoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-3 bg-[#D35400] hover:bg-[#C84B00] text-white font-semibold tracking-[0.18em] uppercase whitespace-nowrap shrink-0 transition-all duration-200 hover:scale-[1.02] ${
                isCinematicCta
                  ? 'px-9 py-5 text-xs sm:text-sm shadow-[0_14px_40px_rgba(211,84,0,0.35)]'
                  : 'px-7 py-4 text-xs'
              }`}
            >
              <span>HIRE INODO TO BUILD THIS</span>
              <ArrowUpRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.75}
              />
            </a>

            <Link
              to="/"
              className="group inline-flex items-center gap-2.5 border border-white/50 hover:border-white bg-black/25 hover:bg-white/15 backdrop-blur-xs text-white px-7 py-4 text-xs font-semibold tracking-[0.18em] uppercase whitespace-nowrap shrink-0 transition-all duration-200"
            >
              <ArrowLeft
                className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5"
                strokeWidth={1.75}
              />
              <span>BACK TO HOMEPAGE</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom small signature */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.65 }}
        className="aura-container relative z-10 pt-4 border-t border-white/15"
      >
        <p
          className={`text-xs tracking-[0.14em] uppercase text-white/70 ${
            isCentered || isCinematicCta ? 'text-center' : 'text-left'
          }`}
        >
          Website concept designed by InoDo.
        </p>
      </motion.div>
    </main>
  );
};
