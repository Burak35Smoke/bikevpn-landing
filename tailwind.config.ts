import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite', // Existing slow spin
        'pulse-custom': 'pulse-custom 4s infinite ease-in-out', // New custom pulse
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        'pulse-custom': { // Keyframes for custom pulse
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.05' },
        },
        blink: {
          '0%, 100%': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'white' },
        },
      }
    },
  },
  plugins: [],
};
export default config;
