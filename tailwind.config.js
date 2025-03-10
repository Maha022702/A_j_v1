/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this line is present
  ],
  theme: {
    extend: {
      keyframes: {
        flyIn: {
          '0%': { transform: 'translateX(-50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        flyIn: 'flyIn 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};


