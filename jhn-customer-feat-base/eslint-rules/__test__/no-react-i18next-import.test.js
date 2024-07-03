// eslint-rules/tests/no-react-i18next-import.test.js

const rule = require('../no-react-i18next-import');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2015, sourceType: 'module' },
});

ruleTester.run('no-react-i18next-import', rule, {
  valid: [
    // code that should pass because it's importing from the correct package
    "import { useTranslation } from 'next-i18next';",
    // other valid cases, such as importing other named exports from 'react-i18next' that are not 'useTranslation'
    "import { Trans } from 'react-i18next';",
  ],
  invalid: [
    // code that should fail because it's importing 'useTranslation' from 'react-i18next'
    {
      code: "import { useTranslation } from 'react-i18next';",
      errors: [
        { message: "Import 'useTranslation' from 'next-i18next' instead of 'react-i18next'." },
      ],
      output: "import { useTranslation } from 'next-i18next';",
    },
    {
      code: "import { useTranslation, Trans } from 'react-i18next';",
      errors: [
        { message: "Import 'useTranslation' from 'next-i18next' instead of 'react-i18next'." },
      ],
      // The fix only changes the source and not the other named imports
      output: "import { useTranslation, Trans } from 'next-i18next';",
    },
  ],
});
