/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cursed-black': '#131313',
        palladium: '#B0B0B0',
        nero: '#242424',
        ultramarine: '#2104D8',
        'warm-blue': '#3747D7',
      },
      backgroundImage: {
        'text-gradient':
          'linear-gradient(270deg, #A5D9FF 7.6%, #7399FB 94.15%);',
      },
    },
  },
  plugins: [],
}
