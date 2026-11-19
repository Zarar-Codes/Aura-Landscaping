import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS, VERIFIED_CONTACT } from '../data/siteData';
import { AuraLogo } from './AuraLogo';

export const Footer: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <footer className="bg-[#202020] text-white pt-20 pb-12 sm:pt-24 sm:pb-14">
      <div className="aura-container">
        {/* Closing editorial phrase + Back to top */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-14">
          <h2
            className="font-editorial text-white font-normal leading-[1.02] tracking-[-0.015em]"
            style={{ fontSize: 'clamp(2.5rem, 4.8vw, 4.5rem)' }}
          >
            Beautiful spaces.
            <br />
            <span className="italic text-[#F0A06A]">Better living.</span>
          </h2>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="group self-start md:self-auto inline-flex items-center gap-3 border border-white/25 hover:border-[#D35400] hover:bg-[#D35400] px-5 py-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-white transition-all duration-200 whitespace-nowrap shrink-0"
          >
            <span>Back to Top</span>
            <ArrowUp
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5"
              strokeWidth={1.75}
            />
          </button>
        </div>

        {/* Animated divider */}
        <motion.div
          initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="h-[1px] w-full bg-white/15 origin-left"
        />

        {/* Main footer columns */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Link to="/" aria-label="Aura Landscaping Home">
              <AuraLogo variant="light" />
            </Link>
            <p className="mt-5 text-sm text-white/70 leading-relaxed max-w-sm">
              Thoughtful landscape design, stonework, custom decks, and outdoor
              living spaces crafted to bring character and comfort to your
              property.
            </p>
          </div>

          {/* Navigation column */}
          <div className="md:col-span-3">
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#F0A06A] mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5 text-xs tracking-[0.14em] uppercase">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/80 hover:text-[#F0A06A] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Contact & Social column */}
          <div className="md:col-span-4">
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#F0A06A] mb-4">
              Connect
            </p>
            <div className="space-y-2.5 text-sm">
              <p>
                <a
                  href={VERIFIED_CONTACT.phoneHref}
                  className="text-white/90 hover:text-[#F0A06A] transition-colors tabular-nums"
                >
                  {VERIFIED_CONTACT.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={VERIFIED_CONTACT.emailHref}
                  className="text-white/90 hover:text-[#F0A06A] transition-colors break-all"
                >
                  {VERIFIED_CONTACT.email}
                </a>
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-5 text-xs font-medium tracking-[0.14em] uppercase">
              <a
                href={VERIFIED_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white/75 hover:text-[#F0A06A] transition-colors"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.6} />
              </a>
              <a
                href={VERIFIED_CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white/75 hover:text-[#F0A06A] transition-colors"
              >
                <span>Facebook</span>
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.6} />
              </a>
              <a
                href={VERIFIED_CONTACT.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white/75 hover:text-[#F0A06A] transition-colors"
              >
                <span>Official Website</span>
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.6} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom legal & InoDo concept line */}
        <div className="pt-8 border-t border-white/12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-white/55">
          <p>
            &copy; {new Date().getFullYear()} Aura Landscaping. Redesign concept
            for presentation purposes.
          </p>
          <p>
            Website concept designed by{' '}
            <a
              href={VERIFIED_CONTACT.inodoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F0A06A] hover:text-white underline underline-offset-4 transition-colors"
            >
              InoDo
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};
