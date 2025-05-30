/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "qiskit-white": "#FFFFFF",
        "qiskit-black": "#000000",
        "qiskit-yellow": "#FDDC69",
        "qiskit-blue-lighter": "#9EF0F0",
        "qiskit-blue-normal": "#4999D0",
        "qiskit-purple-lighter": "#6929C4",
        "partner-yellow": "rgba(255, 186, 0, 0.12)",
        "partner-blue": "rgba(43, 130, 251, 0.12)",
        "partner-green": "rgba(167, 240, 186, 0.29)",
      },
      backgroundImage: {
        'gradient-b-p': 'linear-gradient(to right, rgba(10, 42, 140), rgba(5, 20, 80), rgba(25, 0, 60))',
      },
      fontFamily: {
        "IBM-Plex": ["IBM Plex Sans", "sans-serif"],
      },
      blur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
