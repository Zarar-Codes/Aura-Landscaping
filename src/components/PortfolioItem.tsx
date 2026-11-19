import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PortfolioProject } from '../data/siteData';
import { EditorialImage } from './EditorialImage';

interface PortfolioItemProps {
  project: PortfolioProject;
  index: number;
  className?: string;
  aspectClass?: string;
  onSelect: (project: PortfolioProject) => void;
}

export const PortfolioItem: React.FC<PortfolioItemProps> = ({
  project,
  index,
  className = '',
  aspectClass = 'aspect-[4/3]',
  onSelect,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.75,
        delay: (index % 3) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group flex flex-col ${className}`}
    >
      <button
        type="button"
        onClick={() => onSelect(project)}
        aria-label={`Inspect ${project.title} (${project.category})`}
        className="w-full text-left focus-visible:outline-2 focus-visible:outline-[#D35400]"
      >
        {/* Image frame with mask reveal & subtle hover zoom */}
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : { clipPath: 'inset(6% 0% 6% 0%)' }
          }
          whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className={`relative w-full overflow-hidden bg-[#E9E9E5] ${aspectClass}`}
        >
          <EditorialImage
            src={project.image}
            alt={project.imageAlt}
            fallbackTitle={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
          />
        </motion.div>

        {/* Clean editorial caption block */}
        <div className="pt-4 pb-2 border-b border-[#E9E9E5] group-hover:border-[#D35400]/60 transition-colors duration-300">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#D35400]">
                {project.category}
              </p>
              <h3 className="mt-1.5 font-editorial text-2xl sm:text-[1.75rem] text-[#202020] leading-[1.15] group-hover:text-[#D35400] transition-colors duration-200">
                {project.title}
              </h3>
            </div>
            <span
              aria-hidden="true"
              className="mt-1 w-9 h-9 border border-[#E9E9E5] group-hover:border-[#D35400] group-hover:bg-[#D35400] group-hover:text-white text-[#202020] flex items-center justify-center shrink-0 transition-all duration-200"
            >
              <ArrowUpRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.6}
              />
            </span>
          </div>

          <p className="mt-2.5 pb-2 text-sm text-[#777777] leading-relaxed max-w-xl">
            {project.description}
          </p>
        </div>
      </button>
    </motion.article>
  );
};
