/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: {
    pattern: [/^bg-/, /^text-/],
    variants: ['lg', 'hover', 'focus', 'lg:hover'],
  },

  // purge: {
  //   enabled: true,
  //   content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  //   options: {
  //     safelist: [/^bg-/, /^text-/],
  //   },
  // },
}
