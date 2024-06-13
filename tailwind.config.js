/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'hover-color': '#ffc',
      }
    },
    fontFamily: {
      'heading': ["public sans", 'sans-serif'],
      'body': ["DM serif Display", 'serif'],
    }
  },
  plugins: [],
}

