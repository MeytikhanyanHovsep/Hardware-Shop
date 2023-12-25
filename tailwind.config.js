/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: { max: "500px" },
      sm: { max: "750px" },
      md: { max: "1000px" },
      lg: { max: "1300px" },
      xl: { min: "1600px" }
    }
  },
  plugins: [],
}
