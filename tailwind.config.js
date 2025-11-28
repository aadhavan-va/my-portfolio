// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx,css}",    // include css files under app
    "./components/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx,css}",
    // or simply add "./app/globals.css" explicitly
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ["var(--font-karla)", "sans-serif"],
      },
    },
  },
  plugins: [],
};