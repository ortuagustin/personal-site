const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: [
      './components/**/*.html',
      './components/**/*.vue',
      './components/**/*.jsx',
      './components/**/*.js',

      './layouts/**/*.html',
      './layouts/**/*.vue',
      './layouts/**/*.jsx',
      './layouts/**/*.js',

      './pages/**/*.html',
      './pages/**/*.vue',
      './pages/**/*.jsx',
      './pages/**/*.js',
      './pages/**/*.md',
    ],

    options: {
      whitelist: [/^token/, /^pre/, /^code/],
    },
  },

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
