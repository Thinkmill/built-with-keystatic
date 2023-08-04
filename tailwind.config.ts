import type { Config } from "tailwindcss";
import typographyPlugin from "@tailwindcss/typography";

const config = {
  content: ["./src/{pages,components,layouts}/**/*.{astro,js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [typographyPlugin],
} satisfies Config;

export default config;
