const theme = {
  extend: {
    colors: {
      primary: {
        100: 'rgba(var(--primary-100), <alpha-value>)',
        200: 'rgba(var(--primary-200), <alpha-value>)',
        300: 'rgba(var(--primary-300), <alpha-value>)',
        400: 'rgba(var(--primary-400), <alpha-value>)',
        500: 'rgba(var(--primary-500), <alpha-value>)',
        600: 'rgba(var(--primary-600), <alpha-value>)',
        700: 'rgba(var(--primary-700), <alpha-value>)',
        800: 'rgba(var(--primary-800), <alpha-value>)',
        900: 'rgba(var(--primary-900), <alpha-value>)',
      },
      grey: {
        100: 'rgba(var(--grey-100), <alpha-value>)',
        200: 'rgba(var(--grey-200), <alpha-value>)',
        300: 'rgba(var(--grey-300), <alpha-value>)',
        400: 'rgba(var(--grey-400), <alpha-value>)',
        500: 'rgba(var(--grey-500), <alpha-value>)',
        600: 'rgba(var(--grey-600), <alpha-value>)',
        700: 'rgba(var(--grey-700), <alpha-value>)',
        800: 'rgba(var(--grey-800), <alpha-value>)',
        900: 'rgba(var(--grey-900), <alpha-value>)',
      },
      warning: {
        100: 'rgba(var(--warning-100), <alpha-value>)',
        200: 'rgba(var(--warning-200), <alpha-value>)',
        300: 'rgba(var(--warning-300), <alpha-value>)',
        400: 'rgba(var(--warning-400), <alpha-value>)',
        500: 'rgba(var(--warning-500), <alpha-value>)',
        600: 'rgba(var(--warning-600), <alpha-value>)',
        700: 'rgba(var(--warning-700), <alpha-value>)',
        800: 'rgba(var(--warning-800), <alpha-value>)',
        900: 'rgba(var(--warning-900), <alpha-value>)',
      },
      danger: {
        100: 'rgba(var(--danger-100), <alpha-value>)',
        200: 'rgba(var(--danger-200), <alpha-value>)',
        300: 'rgba(var(--danger-300), <alpha-value>)',
        400: 'rgba(var(--danger-400), <alpha-value>)',
        500: 'rgba(var(--danger-500), <alpha-value>)',
        600: 'rgba(var(--danger-600), <alpha-value>)',
        700: 'rgba(var(--danger-700), <alpha-value>)',
        800: 'rgba(var(--danger-800), <alpha-value>)',
        900: 'rgba(var(--danger-900), <alpha-value>)',
      },
      success: {
        100: 'rgba(var(--success-100), <alpha-value>)',
        200: 'rgba(var(--success-200), <alpha-value>)',
        300: 'rgba(var(--success-300), <alpha-value>)',
        400: 'rgba(var(--success-400), <alpha-value>)',
        500: 'rgba(var(--success-500), <alpha-value>)',
        600: 'rgba(var(--success-600), <alpha-value>)',
        700: 'rgba(var(--success-700), <alpha-value>)',
        800: 'rgba(var(--success-800), <alpha-value>)',
        900: 'rgba(var(--success-900), <alpha-value>)',
      },

      'base-white': 'rgba(var(--base-white), <alpha-value>)',
      'base-black': 'rgba(var(--base-black), <alpha-value>)',

      'label-white': 'var(--label-white, #F4F2FF)',
    },
    borderRadius: {
      card: 'var(--card-radius)',
    },
  },
}

const config = {
  theme,
}

export default config
