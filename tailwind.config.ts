import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#556b2f",
        accent: "#e1ad01",
        bases: "#faf3e0",
        text: "#5c4033",
        textLight: "#a37762",
        primaryLight: "#a9bf5e",
      },
    },
  },
  plugins: [],
};
export default config;
