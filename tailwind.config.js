const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },

      typography: theme => ({
        default: {
          css: {
            'color': theme('colors.gray.700'),
            'h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            'h3': {
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.400'),
            },
            'code': {
              color: theme('colors.gray.900'),
            },
            'a': {
              color: theme('colors.gray.900'),
            },
            'pre': {
              color: theme('colors.gray.200'),
              backgroundColor: theme('colors.gray.800'),
            },
            'blockquote': {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
      }),
    },
  },

  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/ui')],
}
