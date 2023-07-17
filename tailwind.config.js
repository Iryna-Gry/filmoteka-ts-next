/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      // => @media (min-width: 375px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1200px',
      // => @media (min-width: 1200px) { ... }
    },
    colors: {
      'black-text-color': '#000000',
      'white-text-color': '#ffffff',
      'light-text-color': '#8c8c8c',
      'dark-text-color': '#545454',
      'accent-text-color': '#ff6b08',
      mainBGL: '#e5e5e5',
      lightBG: '#f7f7f7',
      accentBG: '#ff6b01',
      'modal-overlay': 'rgba(0, 0, 0, 0.25)',
      'modal-movie-bgc': '#ffffff',
    },
    extend: {
      backgroundImage: {
        'header-img-sm': "url('/public/images/background-mobile.jpg')",
        'header-img-md': "url('/public/images/background-tablet.jpg')",
        'header-img-lg': "url('/public/images/background-pc.jpg')",
      },
    },
  },
  plugins: [],
};
