/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        text: 'text 6s ease infinite',
        gradient: 'gradient 6s ease-in infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': '0% 0%'
          },
          '50%': {
            'background-size': '400% 400%',
            'background-position': '100% 100%'
          },
        },
        gradient: {
          '0%, 100%': {
              'background-size': '400% 400%',
              'background-position': '0% 0%'
          },
          '50%': {
              'background-size': '400% 400%',
              'background-position': '100% 100%'
          },
        },
      },
      fontFamily: {
        'lostar': ['Lostar', 'sans-serif'],
        'magicretro': ['Magic Retro', 'sans-serif']
      },
    },
  },
  plugins: [],
}
