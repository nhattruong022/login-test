// 📦 Load custom rules plugin
const rulesDirPlugin = require('eslint-plugin-rulesdir')
rulesDirPlugin.RULES_DIR = 'eslint-rules'

const config = {
  // 🧑‍💻 Parser setup for TypeScript
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  // 🔌 Adding plugins for TypeScript, custom rules, import handling, and React
  plugins: [
    '@typescript-eslint', // TypeScript-specific rules 🧩
    'rulesdir', // Custom rules for specific project needs 🤖
    'import', // Rules for managing import statements 📤
    'react', // React-specific linting rules 🌟
    'tailwindcss', // Tailwind-specific linting rules 🎨
  ],
  // 📚 Extending base configurations
  extends: [
    'next/core-web-vitals', // 💨 Optimize for Next.js core web vitals
    'plugin:@typescript-eslint/recommended', // 🛠️ Recommended settings for TypeScript
    'plugin:react/recommended', // 🎨 Best practices for React
  ],
  rules: {
    'rulesdir/tailwind-convert-px-to-rem': 'warn',
    'rulesdir/jsx-style-rem-units': 'warn',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports', // 👍 Prefer type-only imports
        fixStyle: 'inline-type-imports', // 📌 Inline type imports
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }, // 🚫 Ignore vars/args starting with _
    ],
    // 🚫 Turning off some TypeScript-specific rules for flexibility
    '@typescript-eslint/no-implicit-any-index': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/no-unsafe-assignment': ['off'],
    '@typescript-eslint/no-unsafe-member-access': 'off',
    'react-hooks/exhaustive-deps': 'error', // 🧲 Ensure proper dependencies in React hooks
    // 🚚 Sorting imports in a neat and orderly fashion
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc', // 🔠 Alphabetical order
          caseInsensitive: true,
        },
      },
    ],
    'import/first': 'error', // 🥇 Import statements should be at the top
    'import/newline-after-import': 'error', // 📄 Newline after import section for readability
    'import/no-duplicates': 'error', // 🚫 Prevent duplicate imports
    // 🎈 Disabled rules that are no longer needed in Next.js...
    'react/react-in-jsx-scope': 'off', // React is globally available in Next.js
    'react/prop-types': 'off', // TypeScript interfaces cover prop types
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': 'off', // 📣 Allow console statements - at least for now.
    eqeqeq: ['error', 'always'],
    curly: 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/no-array-index-key': 'warn',
    'jsx-a11y/accessible-emoji': 'warn',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'space-infix-ops': 'error',
    'no-duplicate-imports': 'error',
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/no-contradicting-classname': 'error',
  },
}

// 🚀 Exporting the configuration for ESLint to use
module.exports = config
