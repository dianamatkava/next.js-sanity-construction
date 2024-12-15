import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
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
        'lg': '2.25rem',     // 64px
        'xlg': '4rem',     // 80px
      },
      keyframes: {
        wave: {
          '0%': { marginLeft: '0' },
          '100%': { marginLeft: '-1600px' },
        },
      },
      animation: {
        wave: 'wave 7s cubic-bezier(.36,.45,.63,.53) infinite',
      },
    },
  },
  darkMode: "class",
 plugins: [nextui()],
} satisfies Config;
