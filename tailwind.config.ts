/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
        animation: {
            "tracking-in-expand": "tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both"
        },
        keyframes: {
            "tracking-in-expand": {
                "0%": {
                    "letter-spacing": "-.5em",
                    opacity: "0"
                },
                "40%": {
                    opacity: ".6"
                },
                to: {
                    opacity: "1"
                }
            }
        }
    }
  }
};