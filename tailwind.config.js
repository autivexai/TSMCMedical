/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: 'hsl(var(--color-brand-50) / <alpha-value>)',
          100: 'hsl(var(--color-brand-100) / <alpha-value>)',
          200: 'hsl(var(--color-brand-200) / <alpha-value>)',
          300: 'hsl(var(--color-brand-300) / <alpha-value>)',
          400: 'hsl(var(--color-brand-400) / <alpha-value>)',
          500: 'hsl(var(--color-brand-500) / <alpha-value>)',
          600: 'hsl(var(--color-brand-600) / <alpha-value>)',
          700: 'hsl(var(--color-brand-700) / <alpha-value>)',
          800: 'hsl(var(--color-brand-800) / <alpha-value>)',
          900: 'hsl(var(--color-brand-900) / <alpha-value>)',
          950: 'hsl(var(--color-brand-950) / <alpha-value>)',
        },
        accent: {
          50: 'hsl(var(--color-accent-50) / <alpha-value>)',
          100: 'hsl(var(--color-accent-100) / <alpha-value>)',
          200: 'hsl(var(--color-accent-200) / <alpha-value>)',
          300: 'hsl(var(--color-accent-300) / <alpha-value>)',
          400: 'hsl(var(--color-accent-400) / <alpha-value>)',
          500: 'hsl(var(--color-accent-500) / <alpha-value>)',
          600: 'hsl(var(--color-accent-600) / <alpha-value>)',
          700: 'hsl(var(--color-accent-700) / <alpha-value>)',
          800: 'hsl(var(--color-accent-800) / <alpha-value>)',
          900: 'hsl(var(--color-accent-900) / <alpha-value>)',
          950: 'hsl(var(--color-accent-950) / <alpha-value>)',
        },
      },
      fontSize: {
        'xxs': '0.625rem',
        'tiny': '0.75rem',
        'base-mobile': '0.875rem',
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      minHeight: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      maxHeight: {
        '0': '0',
        '1/4': '25vh',
        '1/2': '50vh',
        '3/4': '75vh',
      },
      zIndex: {
        '60': '60',
        '70': '70',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  }
};