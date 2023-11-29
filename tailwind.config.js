/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  screens: {
    'lg2': { 'max': '1623px' },
    'lg': { 'max': '1023px' },
    'tl': { 'max': '723px' },
  },
  extend: {
    backgroundImage: {
      'back': "url('./src/assets/bg.jpg')",
      'skills': "url('./src/assets/banner-bg.png')"
    }
  },
};
export const plugins = [];
