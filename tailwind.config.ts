import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#E11D48', // This is a nice cinematic red
      },
      fontFamily: {
        'serif-display': ['"Ranchers"', 'cursive'], 
      },
    },
  },
  plugins: [],
};
export default config;