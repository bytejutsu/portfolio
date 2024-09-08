/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F7EA09',
        secondary: '#FF003C',
        tertiary: '#111827',
        // Preserve default colors
      },
      fontFamily: {
        sans: ['var(--font-honk-sans)'],
        sans2: ['var(--font-tomorrow-sans)'],
        mono: ['var(--font-roboto-mono)'],
      },
      backgroundImage: {
        //'hero-image': "url('/public/ByteJutsu-logo-image-only.svg')",
      },
    },
  },
  plugins: [forms],
};
