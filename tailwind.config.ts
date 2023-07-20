import type { Config } from "tailwindcss";

const config = {
  content: ["./src/{pages,components,layouts}/**/*.{astro,js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

export default config;
