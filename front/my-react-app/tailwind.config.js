/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      lightGreen: '#b2f3b2',
    },
  },
  plugins: [require('daisyui')],
};
