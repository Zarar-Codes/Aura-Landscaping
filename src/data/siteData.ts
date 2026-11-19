import heroOutdoorLiving from '../assets/images/hero_outdoor_living_1794917797576.jpg';
import editorialStoneGarden from '../assets/images/editorial_stone_garden_1794917797834.jpg';
import whyAuraLounge from '../assets/images/why_aura_lounge_1794917799356.jpg';
import projectCustomDeck from '../assets/images/project_custom_deck_1794917798653.jpg';
import projectStonePatio from '../assets/images/project_stone_patio_1794917798501.jpg';
import projectOutdoorFireplace from '../assets/images/project_outdoor_fireplace_1794917800019.jpg';
import projectPuttingGreen from '../assets/images/project_putting_green_1794917800821.jpg';
import twilightBackyardSanctuary from '../assets/images/twilight_backyard_sanctuary_1794917801971.jpg';

export const SITE_IMAGES = {
  hero: heroOutdoorLiving,
  introGarden: editorialStoneGarden,
  whyAuraLounge: whyAuraLounge,
  customDeck: projectCustomDeck,
  stonePatio: projectStonePatio,
  outdoorFireplace: projectOutdoorFireplace,
  puttingGreen: projectPuttingGreen,
  twilightSanctuary: twilightBackyardSanctuary,
};

export interface NavItem {
  label: string;
  path: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', path: '/' },
  { label: 'WHY CHOOSE AURA?', path: '/why-choose-aura' },
  { label: 'GALLERY', path: '/gallery' },
  { label: 'MEDIA', path: '/media' },
  { label: 'SERVICES', path: '/services' },
  { label: 'CONTACT US', path: '/contact' },
];

export const VERIFIED_CONTACT = {
  phoneDisplay: '(905) 228-3733',
  phoneHref: 'tel:+19052283733',
  email: 'info@auralandscaping.com',
  emailHref: 'mailto:info@auralandscaping.com',
  websiteUrl: 'https://auralandscaping.com/',
  instagramUrl: 'https://www.instagram.com/aura_landscaping/',
  facebookUrl: 'https://www.facebook.com/AuraLandscaping/wall/',
  inodoUrl: 'https://inodo.net',
};

export interface ValueStatement {
  index: string;
  title: string;
  description: string;
}

export const WHY_AURA_STATEMENTS: ValueStatement[] = [
  {
    index: '01',
    title: 'THOUGHTFUL DESIGN',
    description:
      'Outdoor spaces that balance visual appeal with everyday functionality.',
  },
  {
    index: '02',
    title: 'ATTENTION TO DETAIL',
    description:
      'Carefully considered materials, textures, and finishing touches.',
  },
  {
    index: '03',
    title: 'OUTDOOR LIVING',
    description:
      'Spaces designed to make spending time outdoors more enjoyable.',
  },
  {
    index: '04',
    title: 'PERSONAL CHARACTER',
    description:
      'Outdoor environments that feel welcoming and thoughtfully composed.',
  },
];

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'custom-decks',
    index: '01',
    title: 'CUSTOM DECKS',
    subtitle: 'Decks, Fences, Pergolas & Timber Frame Structures',
    description:
      'Architectural cedar and hardwood decks, shaded pergolas, cabanas, and custom woodwork tailored to extend indoor comfort outdoors.',
    image: projectCustomDeck,
    imageAlt:
      'Custom cedar and hardwood deck with architectural timber pergola and steps overlooking perennial garden beds',
  },
  {
    id: 'outdoor-patios',
    index: '02',
    title: 'OUTDOOR PATIOS',
    subtitle: 'Natural & Precast Stonework, Walkways & Retaining Walls',
    description:
      'Precision-laid stone patios, curved walkways, armourstone accents, driveways, and garden walls built with enduring natural textures.',
    image: projectStonePatio,
    imageAlt:
      'Bespoke natural stone patio and curved walkway framed by an architectural retaining wall and illuminated hydrangeas',
  },
  {
    id: 'backyard-transformations',
    index: '03',
    title: 'BACKYARD TRANSFORMATIONS',
    subtitle: 'Landscape Design, Plantings, Sodding & Landscape Lighting',
    description:
      'Cohesive whole-yard environments uniting hardscaping, softscaping, large caliper trees, irrigation, and subtle architectural lighting.',
    image: twilightBackyardSanctuary,
    imageAlt:
      'Complete backyard transformation at twilight featuring tiered stone terraces, timber cabana pavilion, waterfall, and warm lighting',
  },
  {
    id: 'outdoor-fireplaces',
    index: '04',
    title: 'OUTDOOR FIREPLACES',
    subtitle: 'Fireplaces, Fire Features, Outdoor Kitchens & Water Features',
    description:
      'Sculptural natural stone hearths, seating walls, outdoor culinary stations, and pondless water features designed as evening gathering anchors.',
    image: projectOutdoorFireplace,
    imageAlt:
      'Architectural outdoor natural stone fireplace with glowing wood hearth and curved stone seating wall at dusk',
  },
  {
    id: 'putting-greens',
    index: '05',
    title: 'PUTTING GREENS & RECREATIONAL SPACES',
    subtitle: 'Artificial Grass, Putting Greens & Sport Surfaces',
    description:
      'Custom-contoured residential putting greens, synthetic turf lawns, and backyard recreation areas edged with natural stone.',
    image: projectPuttingGreen,
    imageAlt:
      'Custom residential backyard putting green with manicured synthetic turf bordered by natural armourstone boulders',
  },
];

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  layout: 'featured' | 'tall' | 'supporting' | 'medium' | 'wide';
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'timber-pergola-deck',
    title: 'Architectural Timber & Pergola Deck',
    category: 'Custom Decks',
    description:
      'Illustrative composition showcasing multi-level hardwood decking, overhead timber framing, and stepped transitions to landscaped lawn beds.',
    image: projectCustomDeck,
    imageAlt:
      'Illustrative architectural backyard deck with custom cedar pergola and integrated wide timber steps',
    layout: 'featured',
  },
  {
    id: 'curved-stone-terrace',
    title: 'Curved Natural Stone Patio & Retaining Wall',
    category: 'Outdoor Patios',
    description:
      'Illustrative hardscape study pairing honed stone pavers, soldier-course borders, and warm limestone coping.',
    image: projectStonePatio,
    imageAlt:
      'Illustrative curved natural stone walkway and dining patio beside a stone retaining wall',
    layout: 'tall',
  },
  {
    id: 'twilight-hearth-lounge',
    title: 'Evening Hearth & Stone Seating Terrace',
    category: 'Outdoor Fireplaces',
    description:
      'Illustrative outdoor fireplace composition anchored by stacked stonework, integrated step lighting, and curved seating.',
    image: projectOutdoorFireplace,
    imageAlt:
      'Illustrative stacked stone outdoor fireplace with glowing fire and curved stone seating bench at twilight',
    layout: 'supporting',
  },
  {
    id: 'sculpted-putting-green',
    title: 'Sculpted Putting Green & Armourstone Edge',
    category: 'Putting Greens & Recreation',
    description:
      'Illustrative recreational backyard concept blending undulating synthetic turf with natural boulders and ornamental maples.',
    image: projectPuttingGreen,
    imageAlt:
      'Illustrative backyard putting green framed by armourstone boulders and river rock landscaping',
    layout: 'medium',
  },
  {
    id: 'evening-cabana-sanctuary',
    title: 'Twilight Cabana Pavilion & Waterfall Sanctuary',
    category: 'Backyard Transformations',
    description:
      'Illustrative full-property outdoor living environment combining timber pavilion architecture, outdoor kitchen, waterfall, and low-voltage lighting.',
    image: twilightBackyardSanctuary,
    imageAlt:
      'Illustrative twilight backyard transformation with timber cabana pavilion, outdoor kitchen, and stone waterfall',
    layout: 'wide',
  },
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    index: '01',
    title: 'Form and function.',
    detail:
      'Spatial circulation, sightlines from inside the home, and purposeful zones for dining, gathering, and quiet retreat.',
  },
  {
    index: '02',
    title: 'Natural materials.',
    detail:
      'Honest stone, warm timber, and layered botanical textures chosen to weather gracefully across every season.',
  },
  {
    index: '03',
    title: 'Thoughtful outdoor living.',
    detail:
      'Subtle lighting, tactile edges, and balanced proportions that make every step outdoors feel effortless.',
  },
];
