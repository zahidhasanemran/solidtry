/** @type {import('tailwindcss').Config}*/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6",
          600: 'rgb(23 163 73)', // Add the desired color value to the primary-600 shade
          700: '#16803e', // Add the desired color value to the primary-600 shade
        },
      },
    },
  },
  plugins: [],
}
