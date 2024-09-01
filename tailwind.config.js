/** @type {import('tailwindcss').Config} */

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
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      backgroundImage: {
        //'hero-image': "url('/public/ByteJutsu-logo-image-only.svg')",
      },
    },
  },
  plugins: [],
};
