const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './lib/**/*.js',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['GivonicVariable'],
      },
      colors: {
        white: '#ffffff',
        cream: '#F5F5F5',
        mocca300: '#131313',
        mocca200: '#191919',
        mocca100: '#222222',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.mocca200'),
            bg: theme('colors.white'),
            a: {
              color: theme('colors.teal.500'),
              '&:hover': {
                color: `${theme('colors.teal.500')} !important`,
              },
              code: { color: theme('colors.white') },
            },
            h1: {
              fontWeight: '616',
              color: theme('colors.mocca300'),
            },
            h2: {
              fontWeight: '400',
              color: theme('colors.mocca300'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.mocca300'),
            },
            'h4,h5,h6': {
              color: theme('colors.mocca300'),
            },
            pre: {
              backgroundColor: theme('colors.mocca300'),
            },
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.mocca100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.cream'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.mocca300'),
              borderLeftColor: theme('colors.mocca100'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.white'),
            bg: theme('colors.mocca100'),
            a: {
              color: theme('colors.teal.500'),
              '&:hover': {
                color: `${theme('colors.teal.500')} !important`,
              },
              code: { color: theme('colors.teal.500') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.white'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.white'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.white'),
            },
            'h4,h5,h6': {
              color: theme('colors.white'),
            },
            pre: {
              backgroundColor: theme('colors.mocca300'),
            },
            code: {
              backgroundColor: theme('colors.mocca300'),
            },
            details: {
              backgroundColor: theme('colors.mocca300'),
            },
            hr: { borderColor: theme('colors.mocca200') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.cream'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.cream'),
            },
            strong: { color: theme('colors.cream') },
            thead: {
              th: {
                color: theme('colors.cream'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.mocca200'),
              },
            },
            blockquote: {
              color: theme('colors.cream'),
              borderLeftColor: theme('colors.mocca200'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
