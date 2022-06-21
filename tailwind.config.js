/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'nature-light': "url('/src/assets/vector1.png')",
      },
    },
  },
  plugins: [],
};
