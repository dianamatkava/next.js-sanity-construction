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
        'xsm': '12px',
        'sm': '1rem', // 18px
        'md': '1.125rem',   // 24px
        'lg': '3rem',     // 64px
        'xlg': '4rem',     // 80px
      },
    },
  },
  plugins: [],
} satisfies Config;
