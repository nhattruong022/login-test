const RuleTester = require('eslint').RuleTester;
const rule = require('../no-jsx-spread-arrow-function');

const parserOptions = {
  ecmaVersion: 2020,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
  },
};

const ruleTester = new RuleTester({ parserOptions });

ruleTester.run('no-jsx-spread-arrow-function', rule, {
  valid: [
    {
      code: `<MyComponent {...{ prop1: 'value1', prop2: 'value2' }} />`,
    },
    {
      code: `<MyComponent {...someObject} />`,
    },
  ],

  invalid: [
    {
      code: `<MyComponent {...{ onClick: () => console.log('clicked') }} />`,
      errors: [{ message: 'JSX props should not use arrow functions' }],
    },
    {
      code: `<MyComponent {...{ prop1: 'value1', onClick: () => console.log('clicked') }} />`,
      errors: [{ message: 'JSX props should not use arrow functions' }],
    },
  ],
});
