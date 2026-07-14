/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:   '#0D0D1C', // footer / dark backgrounds
          yellow: '#F5C400', // accent cards, CTAs
          pink:   '#FF2E7E', // hero accent, product cards
          purple: '#4D4DFF', // blue-purple cards, badges
          lavender: '#EDE9FF', // soft page background tint
        },
      },
    },
  },
  plugins: [],
};
