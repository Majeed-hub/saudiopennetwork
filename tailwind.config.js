// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path based on where your components are
  ],
  theme: {
    extend: {
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        pulse: "pulse var(--duration) ease-out infinite",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%", // Moves the border-beam animation along a path
          },
        },
        pulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 var(--pulse-color)" }, // No shadow at the start and end
          "50%": { boxShadow: "0 0 0 8px var(--pulse-color)" },     // Expands shadow midway
        },
      },
    },
  },
  plugins: [],
};
