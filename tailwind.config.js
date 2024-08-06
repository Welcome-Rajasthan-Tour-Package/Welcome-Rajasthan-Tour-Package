/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Seaweed_Script: ['"Seaweed Script", cursive'],
      Inter: ['"Inter", sans-serif'],
      Urbanist: ['"Urbanist", sans-serif'],
    },
    extend: {
      colors: {
        "theme-color": "#ff6b00",
        "theme-light-color": "#fff0e5",
        "sec-color": "#ffc42e",
        "theme-gray": "#6a6a6a",
        "theme-black": "#111111",
      },
      screens: {
        sm: "500px",
        '600px': '600px',
        '980px': '980px',
        '1300px': '1300px',
      },
    },
  },
  plugins: [],
}

