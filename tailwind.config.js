/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#5b21b6',
        secondary: '#64748b',
        dark: '#0f172a'
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

