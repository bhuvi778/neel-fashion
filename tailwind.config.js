/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'cookie': ['Cookie', 'cursive'],
      },
      colors: {
        primary: '#d4af37',
        dark: '#1a1a1a',
        gray: {
          text: '#999999',
          border: '#dddddd',
        }
      },
      animation: {
        'loader': 'loader 0.8s linear infinite',
      },
      keyframes: {
        loader: {
          '0%': { 
            transform: 'rotate(0deg)',
            borderColor: '#f44336',
            borderLeftColor: 'transparent',
          },
          '50%': { 
            transform: 'rotate(180deg)',
            borderColor: '#673ab7',
            borderLeftColor: 'transparent',
          },
          '100%': { 
            transform: 'rotate(360deg)',
            borderColor: '#f44336',
            borderLeftColor: 'transparent',
          },
        },
      },
    },
  },
  plugins: [],
}
