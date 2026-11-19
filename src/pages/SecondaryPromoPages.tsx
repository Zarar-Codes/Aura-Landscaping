import React from 'react';
import { InodoPromotionalPage } from '../components/InodoPromotionalPage';
import { SITE_IMAGES } from '../data/siteData';

export const WhyChooseAuraPromoPage: React.FC = () => (
  <InodoPromotionalPage
    backgroundImage={SITE_IMAGES.whyAuraLounge}
    imageAlt="Contemporary backyard patio lounge at dusk with warm low-voltage garden lighting"
    variant="centered"
  />
);

export const GalleryPromoPage: React.FC = () => (
  <InodoPromotionalPage
    backgroundImage={SITE_IMAGES.stonePatio}
    imageAlt="Architectural stone patio and curved walkway framed by natural retaining wall"
    variant="asymmetric"
  />
);

export const MediaPromoPage: React.FC = () => (
  <InodoPromotionalPage
    backgroundImage={SITE_IMAGES.twilightSanctuary}
    imageAlt="Complete backyard outdoor living environment illuminated at twilight"
    variant="editorial-accent"
  />
);

export const ServicesPromoPage: React.FC = () => (
  <InodoPromotionalPage
    backgroundImage={SITE_IMAGES.customDeck}
    imageAlt="Custom cedar and hardwood deck with architectural timber pergola"
    variant="masked-reveal"
  />
);

export const ContactPromoPage: React.FC = () => (
  <InodoPromotionalPage
    backgroundImage={SITE_IMAGES.outdoorFireplace}
    imageAlt="Custom outdoor natural stone fireplace and curved stone seating terrace"
    variant="cinematic-cta"
  />
);
