import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "very-dark-navy": "var(--very-dark-navy)",
      "light-blue": "var(--light-blue)",
      white: "#ffffff",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        bellefair: ["var(--font-bellefair)"],
        barlow_condensed: ["var(--font-barlow-condensed)"],
      },
      scale: {
        "170": "1.70",
        "250": "2.5",
      },
    },
  },
  plugins: [],
}
export default config
