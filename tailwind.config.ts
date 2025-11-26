import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        sand: {
          50: '#fdf9f2',
          100: '#f9f1e2',
          200: '#f2e1c2',
          300: '#e4c694',
          400: '#d9ae6b',
          500: '#c48f41',
          600: '#a27231',
          700: '#865a29',
          800: '#6b4924',
          900: '#573c21',
        },
        plum: {
          50: '#f7f3fa',
          100: '#efe3f5',
          200: '#d9bfea',
          300: '#c397df',
          400: '#a66ad0',
          500: '#8d47be',
          600: '#7134a3',
          700: '#5a2982',
          800: '#4a236a',
          900: '#3d1d56',
        },
        slate: {
          950: '#0c191a',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      boxShadow: {
        glow: '0 25px 65px rgba(14, 165, 233, 0.18)',
        'outline-soft': '0 0 0 1px rgba(14, 165, 233, 0.08)',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at top left, rgba(224, 242, 254, 0.65) 0%, rgba(255, 255, 255, 0) 60%)',
        'hero-radial-bottom':
          'radial-gradient(circle at bottom right, rgba(186, 230, 253, 0.6) 0%, rgba(255, 255, 255, 0) 55%)',
        'grid-soft':
          'linear-gradient(rgba(14, 165, 233, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.05) 1px, transparent 1px)',
        'warm-gradient':
          'linear-gradient(135deg, rgba(240, 249, 255, 0.9) 0%, rgba(249, 241, 226, 0.9) 50%, rgba(247, 243, 250, 0.9) 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
