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
        'gray-900': '#0c0c0c',
        'blue-900': '#2C4550',
      },
      gradientColorStopPositions: {
        0: '0%',
        98: '98.22%',
      },
      backgroundImage: {
        gradient: 'linear-gradient(289.6deg, #0C0C0C 0%, #2C4550 98.22%);',
        radial:
          'radial-gradient(100% 2631.09% at 0% 0%, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.558) 100%)',
        astrounaut: 'url(/astronaut.png)',
      },
      backgroundPosition: {
        mobile: 'right -300px bottom 100%',
      },
      backgroundSize: {
        'h-screen': '100vh',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
