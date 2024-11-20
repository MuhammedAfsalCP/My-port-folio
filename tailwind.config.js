/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', // Adjust this path based on your project
    './public/index.html',],
  theme: {
    extend: {animation: {
      fadeInUp: 'fadeInUp 1s ease-in-out',
      fadeInLeft: 'fadeInLeft 1s ease-in-out',
      fadeInRight: 'fadeInRight 1s ease-in-out',
      progress: 'progress 1.5s ease-in-out forwards',
    },
    keyframes: {
      fadeInUp: {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
      fadeInLeft: {
        '0%': { opacity: 0, transform: 'translateX(-20px)' },
        '100%': { opacity: 1, transform: 'translateX(0)' },
      },
      fadeInRight: {
        '0%': { opacity: 0, transform: 'translateX(20px)' },
        '100%': { opacity: 1, transform: 'translateX(0)' },
      },
      progress: {
        '0%': { width: '0%' },
        '100%': { width: 'var(--progress)' },
      },
    },},
  },
  plugins: [],
}

