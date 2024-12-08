import type { Config } from "tailwindcss";

export default {
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
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-open-sans)', 'sans-serif'],
      },
      fontSize: {
        'sm': '1.125rem', // 18px
        'md': '1.25rem',   // 24px
        'lg': '4rem',     // 64px
        'xlg': '5rem',     // 80px
      },
    },
  },
  plugins: [],
} satisfies Config;
