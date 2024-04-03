/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      screens: {
      xs: { min: "320px", max: "575px" },

      sm: { min: "576px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "991px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "992px", max: "1200px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1201px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      // "2xl": { min: "1921px" },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},

    fontSize: {
        60: "3.75rem",
        56: "3.5rem",
        52: "3.25rem",
        54: "3.375rem",
        50: "3.125rem",
        48: "3rem",
        46: "2.875rem",
        44: "2.75rem",
        40: "2.5rem",
        38: "2.375rem",
        36: "2.25rem",
        34: "2.125rem",
        32: "2rem",
        30: "1.875rem",
        28: "1.75rem",
        26: "1.625rem",
        25: "1.5625rem",
        24: "1.5rem",
        22: "1.375rem",
        20: "1.25rem",
        18: "1.125rem",
        16: "1rem",
        15: "0.9375rem",
        14: "0.875rem",
        12: "0.75rem",
        10: "0.625rem",
        8: "0.5rem",
      },


  },
  plugins: [],

  
}