import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { NAV_ITEMS, VERIFIED_CONTACT } from '../data/siteData';
import { AuraLogo } from './AuraLogo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  currentPath,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-navigation-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#FFFFFF] flex flex-col justify-between px-6 py-5 lg:hidden overflow-y-auto"
        >
          {/* Top bar inside overlay */}
          <div className="flex items-center justify-between border-b border-[#E9E9E5] pb-4">
            <Link to="/" onClick={onClose} aria-label="Aura Landscaping Home">
              <AuraLogo variant="dark" />
            </Link>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="w-11 h-11 flex items-center justify-center text-[#202020] hover:text-[#D35400] transition-colors"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>

          {/* Navigation links */}
          <nav aria-label="Mobile Navigation Links" className="my-auto py-8">
            <ul className="space-y-1">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = currentPath === item.path;
                return (
                  <motion.li
                    key={item.path}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.06 + idx * 0.045,
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      to={item.path}
                      onClick={onClose}
                      aria-current={isActive ? 'page' : undefined}
                      className={`group flex items-center justify-between py-3.5 border-b border-[#E9E9E5] transition-colors ${
                        isActive
                          ? 'text-[#D35400]'
                          : 'text-[#202020] hover:text-[#D35400]'
                      }`}
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="text-xs font-medium tracking-[0.18em] text-[#777777] tabular-nums">
                          0{idx + 1}
                        </span>
                        <span className="font-editorial text-2xl sm:text-3xl font-medium tracking-tight">
                          {item.label}
                        </span>
                      </span>
                      <ArrowUpRight
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isActive
                            ? 'text-[#D35400]'
                            : 'text-[#777777] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#D35400]'
                        }`}
                        strokeWidth={1.5}
                      />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* Subtle footer info */}
          <div className="pt-4 border-t border-[#E9E9E5] flex flex-col gap-2 text-xs text-[#777777]">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <a
                href={VERIFIED_CONTACT.phoneHref}
                className="text-[#202020] font-medium hover:text-[#D35400] transition-colors"
              >
                {VERIFIED_CONTACT.phoneDisplay}
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={VERIFIED_CONTACT.emailHref}
                className="text-[#202020] font-medium hover:text-[#D35400] transition-colors"
              >
                {VERIFIED_CONTACT.email}
              </a>
            </div>
            <p className="text-[11px] tracking-[0.08em] uppercase text-[#777777]">
              Website redesign concept by InoDo
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
