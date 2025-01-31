import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0f0f",
        card: "#1a1a1a",
        primary: "#84cc16", // Lime-600
        "primary-hover": "#65a30d", // Lime-700
        "muted-foreground": "#a3a3a3",
        muted: "#3f3f3f",
      },
    },
  },
  plugins: [],
} satisfies Config;
