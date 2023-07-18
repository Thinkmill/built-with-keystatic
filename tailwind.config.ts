import type { Config } from "tailwindcss";

export default {
  content: ["./src/{pages,components,layouts}/**/*.{astro,js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
