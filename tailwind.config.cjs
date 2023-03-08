/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min':'330px','max':'1000px'},
      // => @media (min-width: 330px and max-width: 1000px) { ... }
  
      'md': '768px',
      // => @media (min-width: 768px) { ... }
  
      'lg': {'min': '1002px', 'max': '1500px'},
      // => @media (min-width: 1000px) { ... }
  
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
  
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
 
}



