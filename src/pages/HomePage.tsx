import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { IntroductionSection } from '../components/IntroductionSection';
import { WhyAuraSection } from '../components/WhyAuraSection';
import { ServicesSection } from '../components/ServicesSection';
import { PortfolioSection } from '../components/PortfolioSection';
import { VisualStatement } from '../components/VisualStatement';
import { DesignPhilosophy } from '../components/DesignPhilosophy';
import { CTASection } from '../components/CTASection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF]">
      <main id="main-content" className="flex-1 overflow-x-clip">
        {/* SECTION 01 — CINEMATIC HERO */}
        <HeroSection />
        {/* SECTION 02 — BRAND INTRODUCTION */}
        <IntroductionSection />
        {/* SECTION 03 — WHY CHOOSE AURA? */}
        <WhyAuraSection />
        {/* SECTION 04 — SERVICES SHOWCASE */}
        <ServicesSection />
        {/* SECTION 05 — FEATURED PROJECTS / GALLERY */}
        <PortfolioSection />
        {/* SECTION 06 — CINEMATIC VISUAL BREAK */}
        <VisualStatement />
        {/* SECTION 07 — DESIGN PHILOSOPHY */}
        <DesignPhilosophy />
        {/* SECTION 08 — STRONG CONVERSION CTA */}
        <CTASection />
        {/* SECTION 09 — CONTACT SECTION */}
        <ContactSection />
      </main>
      {/* SECTION 10 — PREMIUM FOOTER */}
      <Footer />
    </div>
  );
};
