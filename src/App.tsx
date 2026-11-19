import React, { Suspense, lazy, useEffect } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';

const WhyChooseAuraPromoPage = lazy(() =>
  import('./pages/SecondaryPromoPages').then((m) => ({
    default: m.WhyChooseAuraPromoPage,
  }))
);
const GalleryPromoPage = lazy(() =>
  import('./pages/SecondaryPromoPages').then((m) => ({
    default: m.GalleryPromoPage,
  }))
);
const MediaPromoPage = lazy(() =>
  import('./pages/SecondaryPromoPages').then((m) => ({
    default: m.MediaPromoPage,
  }))
);
const ServicesPromoPage = lazy(() =>
  import('./pages/SecondaryPromoPages').then((m) => ({
    default: m.ServicesPromoPage,
  }))
);
const ContactPromoPage = lazy(() =>
  import('./pages/SecondaryPromoPages').then((m) => ({
    default: m.ContactPromoPage,
  }))
);

const ROUTE_TITLES: Record<string, string> = {
  '/': 'Aura Landscaping | Landscaping & Outdoor Living',
  '/why-choose-aura': 'Why Choose Aura? | Website Concept by InoDo',
  '/gallery': 'Gallery | Website Concept by InoDo',
  '/media': 'Media | Website Concept by InoDo',
  '/services': 'Services | Website Concept by InoDo',
  '/contact': 'Contact Us | Website Concept by InoDo',
};

const RouteMetaAndScroll: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });

    const pageTitle =
      ROUTE_TITLES[pathname] ?? 'Aura Landscaping | Landscaping & Outdoor Living';
    document.title = pageTitle;

    const canonicalUrl = `${window.location.origin}${pathname}`;
    let canonicalLink = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    let ogUrl = document.querySelector<HTMLMetaElement>(
      'meta[property="og:url"]'
    );
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', canonicalUrl);
  }, [pathname]);

  return null;
};

const RouteLoader: React.FC = () => (
  <div className="min-h-screen w-full bg-[#17221B] flex items-center justify-center">
    <div className="w-10 h-[1.5px] bg-[#D35400]" />
  </div>
);

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <Suspense fallback={<RouteLoader />}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/why-choose-aura"
              element={<WhyChooseAuraPromoPage />}
            />
            <Route path="/gallery" element={<GalleryPromoPage />} />
            <Route path="/media" element={<MediaPromoPage />} />
            <Route path="/services" element={<ServicesPromoPage />} />
            <Route path="/contact" element={<ContactPromoPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <RouteMetaAndScroll />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-[#D35400] focus:text-white focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:tracking-wider focus:uppercase"
        >
          Skip to content
        </a>
        <Navbar />
        <AnimatedRoutes />
      </BrowserRouter>
    </MotionConfig>
  );
}
