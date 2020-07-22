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
            code: {
              color: theme('colors.gray.900'),
            },
          },
        },
      }),
    },
  },

  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/ui')],
}
