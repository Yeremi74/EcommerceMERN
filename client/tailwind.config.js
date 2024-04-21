/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        green_custom: {
          100: '#52c441',
          200: '#9AE6B4',
        },
        gray_custom: {
          100: '#E0E0E0',
          200: '#858585',
          300: '#5A5A5A',
          400: '#3D3D3D',
        },
        custom_transparent: 'rgba(0, 0, 0, 0.41)',
      },
      height: {
        custom: '1px',
        custom_navBar: '510px',
      },
      fontSize: {
        peque: '10px',
      },
    },
  },
  plugins: [],
};
