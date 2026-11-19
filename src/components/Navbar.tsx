import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '../data/siteData';
import { AuraLogo } from './AuraLogo';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 28);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E9E9E5] shadow-[0_8px_30px_rgba(32,32,32,0.06)]'
            : 'bg-white/82 backdrop-blur-md border-b border-black/10'
        }`}
      >
        <div className="aura-container h-16 lg:h-[76px] flex items-center justify-between gap-8">
          {/* Left: Original Aura Landscaping logo */}
          <Link
            to="/"
            aria-label="Aura Landscaping Home"
            className="focus-visible:outline-2 focus-visible:outline-[#D35400] rounded-sm py-1 shrink-0"
          >
            <AuraLogo variant="dark" />
          </Link>

          {/* Right: Horizontal navigation links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-2 xl:gap-3"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-current={isActive ? 'page' : undefined}
                  className={`group relative px-3.5 py-2 text-[12px] font-medium tracking-[0.14em] uppercase whitespace-nowrap shrink-0 transition-colors duration-200 ${
                    isActive
                      ? 'text-[#D35400]'
                      : 'text-[#202020] hover:text-[#D35400]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-bg"
                      transition={{
                        type: 'spring',
                        stiffness: 420,
                        damping: 36,
                      }}
                      className="absolute inset-0 bg-[#D35400]/[0.07] rounded-xs -z-10"
                    />
                  )}
                  <span className="relative inline-block transition-transform duration-200 group-hover:-translate-y-[1px]">
                    {item.label}
                  </span>
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active-underline"
                      transition={{
                        type: 'spring',
                        stiffness: 420,
                        damping: 36,
                      }}
                      className="absolute left-3.5 right-3.5 bottom-1 h-[1.5px] bg-[#D35400]"
                    />
                  ) : (
                    <span className="absolute left-3.5 right-3.5 bottom-1 h-[1.5px] bg-[#D35400] scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile animated hamburger-to-close trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-overlay"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden relative w-11 h-11 flex items-center justify-center text-[#202020] hover:text-[#D35400] transition-colors shrink-0"
          >
            <span className="sr-only">
              {mobileOpen ? 'Close menu' : 'Open menu'}
            </span>
            <div className="w-6 h-4 relative flex flex-col justify-between">
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: 45, y: 7 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="block w-full h-[1.5px] bg-current origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-4/5 ml-auto h-[1.5px] bg-current"
              />
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: -45, y: -7 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="block w-full h-[1.5px] bg-current origin-center"
              />
            </div>
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        currentPath={location.pathname}
      />
    </>
  );
};
