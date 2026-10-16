/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'Poppins', 'sans-serif'],
          heading: ['Poppins', 'Inter', 'sans-serif'],
        },
        colors: {
          gold: {
            DEFAULT: '#d4af37',
            dark: '#c9a84c',
          },
        },
      },
    },
    plugins: [],
  }