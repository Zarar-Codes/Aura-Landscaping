import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../data/siteData';
import { EditorialImage } from './EditorialImage';

interface ServiceRowProps {
  service: ServiceItem;
  isActive: boolean;
  onActivate: () => void;
  onSelectScroll: () => void;
}

export const ServiceRow: React.FC<ServiceRowProps> = ({
  service,
  isActive,
  onActivate,
  onSelectScroll,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className="border-b border-white/15 transition-colors duration-300"
    >
      <button
        type="button"
        onClick={() => {
          onActivate();
          onSelectScroll();
        }}
        className="w-full text-left py-7 sm:py-8 group focus-visible:outline-2 focus-visible:outline-[#F0A06A]"
      >
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-baseline gap-5 sm:gap-8 min-w-0">
            <span
              className={`text-xs font-semibold tracking-[0.2em] tabular-nums transition-colors duration-200 shrink-0 ${
                isActive ? 'text-[#F0A06A]' : 'text-white/50 group-hover:text-[#F0A06A]'
              }`}
            >
              {service.index}
            </span>

            <div className="min-w-0">
              <h3
                className={`font-editorial text-2xl sm:text-3xl xl:text-[2.35rem] leading-[1.1] tracking-[-0.01em] transition-all duration-300 ${
                  isActive
                    ? 'text-[#F0A06A] lg:translate-x-2'
                    : 'text-white group-hover:text-[#F0A06A] lg:group-hover:translate-x-2'
                }`}
              >
                {service.title}
              </h3>

              <p className="mt-2 text-[11px] font-medium tracking-[0.16em] uppercase text-white/55">
                {service.subtitle}
              </p>

              <p className="mt-3 text-sm sm:text-[15px] text-white/75 leading-relaxed max-w-xl">
                {service.description}
              </p>
            </div>
          </div>

          <span
            aria-hidden="true"
            className={`mt-1 w-10 h-10 shrink-0 border flex items-center justify-center transition-all duration-300 ${
              isActive
                ? 'border-[#D35400] bg-[#D35400] text-white'
                : 'border-white/25 text-white/70 group-hover:border-[#D35400] group-hover:bg-[#D35400] group-hover:text-white'
            }`}
          >
            <ArrowUpRight
              className={`w-4 h-4 transition-transform duration-200 ${
                isActive ? 'translate-x-0.5 -translate-y-0.5' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
              }`}
              strokeWidth={1.75}
            />
          </span>
        </div>

        {/* Animated bottom accent bar for active row */}
        <div
          className={`mt-5 h-[1px] bg-[#D35400] transition-all duration-300 origin-left ${
            isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60'
          }`}
        />
      </button>

      {/* Mobile & tablet direct inline photography (no hover dependency) */}
      <div className="lg:hidden pb-7">
        <div className="aspect-[4/3] w-full overflow-hidden bg-[#17251D]">
          <EditorialImage
            src={service.image}
            alt={service.imageAlt}
            fallbackTitle={service.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.article>
  );
};
