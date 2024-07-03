/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('./themes/base.theme')],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('tailwind-scrollbar-hide')],
}
