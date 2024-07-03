const { RuleTester } = require('eslint');
const rule = require('../jsx-usecallback-wrap');

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2020, sourceType: 'module', ecmaFeatures: { jsx: true } },
});

const message =
  'Arrow functions in JSX should be wrapped with useCallback to avoid unnecessary re-renders.';

ruleTester.run('jsx-usecallback-wrap', rule, {
  valid: [
    // Arrow function wrapped with useCallback
    {
      code: `<MyComponent onClick={useCallback(() => doSomething(), [deps])} />`,
    },
    // Non-arrow function
    {
      code: `<MyComponent onClick={handleClick} />`,
    },
    // Arrow function not in a prop
    {
      code: `const myFunc = () => doSomething();`,
    },
  ],

  invalid: [
    // Arrow function not wrapped with useCallback in a JSX prop
    {
      code: `<MyComponent onClick={() => doSomething()} />`,
      errors: [{ message }],
    },
    // Arrow function not wrapped with useCallback in a complex JSX prop
    {
      code: `<MyComponent onChange={(e) => handleChange(e.target.value)} />`,
      errors: [{ message }],
    },
    // Multiple arrow functions not wrapped with useCallback in JSX props
    {
      code: `<MyComponent onClick={() => doSomething()} onChange={(e) => handleChange(e)} />`,
      errors: [{ message }, { message }],
    },
  ],
});
