import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/siteData';
import { PortfolioItem } from './PortfolioItem';
import { EditorialImage } from './EditorialImage';

export const PortfolioSection: React.FC = () => {
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!selectedProject) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedProject]);

  const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
    }
  };

  const [featured, supportingTall, supportingMid, mediumProject, wideProject] =
    PORTFOLIO_PROJECTS;

  return (
    <section
      id="selected-work"
      aria-labelledby="selected-work-heading"
      className="bg-[#F7F7F4] py-20 sm:py-24 md:py-28 lg:py-36"
    >
      <div className="aura-container">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-14 lg:mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-[1.5px] w-8 bg-[#D35400]" aria-hidden="true" />
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-[#777777]">
                SELECTED WORK
              </p>
            </div>
            <h2
              id="selected-work-heading"
              className="font-editorial text-[#202020] font-normal leading-[1.05] tracking-[-0.015em]"
              style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.25rem)' }}
            >
              Outdoor spaces{' '}
              <span className="italic text-[#D35400]">worth experiencing.</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm sm:text-[15px] text-[#777777] leading-relaxed max-w-md lg:ml-auto">
              Curated architectural landscaping compositions illustrating how
              stone, timber, fire, and living plantings shape inviting outdoor
              environments.
            </p>
          </div>
        </div>

        {/* Asymmetric editorial magazine gallery grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Row 1: Large Featured (7 cols) + Supporting Tall (5 cols) */}
          <PortfolioItem
            project={featured}
            index={0}
            className="lg:col-span-7"
            aspectClass="aspect-[4/3] lg:aspect-[16/11]"
            onSelect={setSelectedProject}
          />
          <PortfolioItem
            project={supportingTall}
            index={1}
            className="lg:col-span-5 lg:pt-12"
            aspectClass="aspect-[4/3] lg:aspect-[5/4]"
            onSelect={setSelectedProject}
          />

          {/* Row 2: Supporting (5 cols) + Medium (7 cols) */}
          <PortfolioItem
            project={supportingMid}
            index={2}
            className="lg:col-span-5 lg:pt-6"
            aspectClass="aspect-[4/3]"
            onSelect={setSelectedProject}
          />
          <PortfolioItem
            project={mediumProject}
            index={3}
            className="lg:col-span-7"
            aspectClass="aspect-[4/3] lg:aspect-[16/10]"
            onSelect={setSelectedProject}
          />

          {/* Row 3: Wide Landscape Span (12 cols) */}
          <PortfolioItem
            project={wideProject}
            index={4}
            className="lg:col-span-12 lg:pt-4"
            aspectClass="aspect-[16/9] lg:aspect-[21/9]"
            onSelect={setSelectedProject}
          />
        </div>

        {/* Section Footer CTA */}
        <div className="mt-14 pt-8 border-t border-[#E9E9E5] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="text-xs text-[#777777] max-w-md">
            Representative landscape architecture studies prepared for this
            design concept. Click any frame to inspect full detail.
          </p>
          <button
            type="button"
            onClick={scrollToContact}
            className="group inline-flex items-center justify-center gap-3 bg-[#D35400] hover:bg-[#C84B00] text-white px-7 py-4 text-xs font-semibold tracking-[0.18em] uppercase whitespace-nowrap shrink-0 transition-all duration-200 hover:scale-[1.015]"
          >
            <span>EXPLORE THE POSSIBILITIES</span>
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={1.75}
            />
          </button>
        </div>
      </div>

      {/* Fullscreen Minimalist Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-[#141715]/92 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, scale: 0.97, y: 12 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#FFFFFF] overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project view"
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-[#D35400] text-[#202020] hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" strokeWidth={1.6} />
              </button>

              <div className="aspect-[16/10] w-full bg-[#203328]">
                <EditorialImage
                  src={selectedProject.image}
                  alt={selectedProject.imageAlt}
                  fallbackTitle={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#D35400]">
                    {selectedProject.category}
                  </p>
                  <h3 className="mt-1 font-editorial text-2xl sm:text-3xl text-[#202020]">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#777777] max-w-2xl">
                    {selectedProject.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedProject(null);
                    setTimeout(scrollToContact, 120);
                  }}
                  className="inline-flex items-center gap-2 bg-[#D35400] hover:bg-[#C84B00] text-white px-5 py-3 text-[11px] font-semibold tracking-[0.16em] uppercase whitespace-nowrap shrink-0 transition-colors"
                >
                  <span>Inquire About This Style</span>
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
