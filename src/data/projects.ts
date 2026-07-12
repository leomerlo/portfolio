export interface Project {
  i18nKey: string;
  slug: string;
  title: string;
  description: string;
  metric: string;
  summary: string;
  details: string;
  tags: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    i18nKey: 'project1',
    slug: 'vision-design-system',
    title: 'Vision Design System',
    description: 'End-to-end design system for Perceptyx\'s employee experience platform, from token architecture to component library.',
    metric: 'Design System',
    summary: 'Perceptyx needed a single source of truth that could span multiple product surfaces without fracturing. Vision was the answer: a token-first, framework-agnostic system where every decision — color, spacing, motion — was named for its intent, not its value.',
    details: 'The core constraint was framework agnosticism: components had to work equally well in React, Vue, and plain HTML. Tokens lived at the semantic layer — shipped as CSS custom properties — so any consumer could adopt them regardless of stack. Storybook served as the shared contract between design and engineering, and versioned npm packages kept teams on a predictable upgrade path.',
    tags: ['React', 'Vue', 'Web Components', 'Design Tokens', 'Storybook', 'SCSS'],
  },
  {
    i18nKey: 'project2',
    slug: 'turnisports',
    title: 'TurniSports — Online Schedule & Customer CMS',
    description: 'Booking and customer management platform built for individual sports coaches.',
    metric: 'Open Source',
    summary: 'TurniSports started from a real pain point: individual coaches managing their schedules through WhatsApp groups and spreadsheets. The goal was a product that felt simple to the coach but handled the full complexity of recurring bookings, availability, and customer management.',
    details: 'Built as a full-stack application with a React frontend and a CMS that let coaches manage their availability, sessions, and client records without any technical knowledge. Real-time availability, booking confirmation flows, and a clean public-facing scheduling UI for their clients.',
    tags: ['React', 'TypeScript', 'Node.js', 'CMS', 'Full-stack'],
    url: 'https://github.com/Digital-Craft-AR/turni-sports',
  },
  {
    i18nKey: 'project3',
    slug: 'kimberly-clark',
    title: 'Kimberly-Clark — Enterprise Frontend (via Accenture)',
    description: 'Frontend development for Kimberly-Clark\'s internal platforms as part of an Accenture engagement.',
    metric: 'Enterprise',
    summary: 'Embedded within an Accenture team delivering frontend solutions for Kimberly-Clark\'s internal tools and consumer-facing platforms. The challenge was navigating enterprise constraints — legacy integrations, multi-team coordination, strict delivery timelines — while keeping the frontend quality high.',
    details: 'Led component standardization efforts across the engagement, established coding guidelines adopted by the broader team, and worked closely with UX and backend engineers to ship features that held up at scale. The experience sharpened my ability to operate in large, distributed delivery contexts.',
    tags: ['React', 'TypeScript', 'Enterprise', 'Accenture', 'Component Architecture'],
  },
];
