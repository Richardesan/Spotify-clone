/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "spotify-black": "#121212",
        "spotify-dark": "#FFFFFF0F",
        "spotify-green": "#1ed760",
        "spotify-gray": "#7c7c7c",
      },
      backgroundImage: {
        "spotify-rainbow": "linear-gradient(90deg, #af2896, #509bf5)",
      },
      boxShadow: {
        'custom-shadow':  'inset 0px 10px 0px 0px rgba(0, 0, 0, 0.85)'      },
    },
  },
  plugins: [],
};
