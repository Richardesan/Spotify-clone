/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "spotify-black": "#121212",
        "spotify-green": "#1ed760",
        "spotify-gray": "#7c7c7c"
      }
    },
  },
  plugins: [],
}