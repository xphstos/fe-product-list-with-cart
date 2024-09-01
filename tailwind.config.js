import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: 'hsl(0 0% 100% / 1)',
      black: 'hsl(0 0% 0% / 1)',
      red: 'hsl(14 86% 42% / 1)',
      green: 'hsl(159 69% 38% / 1)',
      rose: {
        50: 'hsl(20 50% 98% / 1)',
        100: 'hsl(13 31% 94% / 1)',
        200: 'hsl(14 25% 72% / 1)',
        300: 'hsl(7 20% 60% / 1)',
        400: 'hsl(12 20% 44% / 1)',
        500: 'hsl(14 85% 32% / 1)',
        900: 'hsl(14 65% 9% / 1)'
      }
    },
    fontFamily: {
      sans: ['Red Hat Text', 'sans-serif']
    },
    extend: {}
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    plugin(({ addVariant }) =>
      addVariant('aria-current', [
        '&:where([aria-current="page"])',
        '&:where([aria-current="step"])',
        '&:where([aria-current="location"])',
        '&:where([aria-current="date"])',
        '&:where([aria-current="time"])',
        '&:where([aria-current="true"])'
      ])
    ),
    plugin(({ addVariant }) => {
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('hocus-visible', ['&:hover', '&:focus-visible']);
    }),
    plugin(({ matchVariant }) => {
      matchVariant('nth-range', (value) => {
        const range = value.split('/');
        return `&>:where(:nth-child(n+${range[0]}):nth-child(-n+${range[1]}))`;
      });
    }),
    plugin(({ matchVariant }) => {
      matchVariant(
        'nth',
        (value) => {
          return `& :where(:nth-child(${value}))`;
        },
        {
          values: {
            odd: 'odd',
            even: 'even'
          }
        }
      );
    })
  ]
};
