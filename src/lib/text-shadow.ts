import plugin from 'tailwindcss/plugin';

export const textShadow = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    );
  },
  {
    theme: {
      textShadow: {
        DEFAULT: '0 2px 4px rgba(0,0,0,0.1)',
        'none': 'none',
        'sm': '0 1px 2px rgba(0,0,0,0.1)',
        'md': '0 4px 8px rgba(0,0,0,0.12)',
        'lg': '0 8px 16px rgba(0,0,0,0.15)',
      },
    },
  }
); 