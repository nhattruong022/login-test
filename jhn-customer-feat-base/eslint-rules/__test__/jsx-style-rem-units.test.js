const { RuleTester } = require('eslint');
const rule = require('../jsx-style-rem-units');

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2020, sourceType: 'module', ecmaFeatures: { jsx: true } },
});

ruleTester.run('jsx-style-rem-units', rule, {
  valid: [
    // Test cases where the rule should not report any error
    {
      code: `<div style={{ minWidth: '1rem', minHeight: '2rem' }} />`,
    },
    {
      code: `<div style={{ fontSize: '2rem' }} />`, // Valid case; the rule should ignore this
    },
  ],

  invalid: [
    // Test cases where the rule should report an error and provide a fix
    {
      code: `<div style={{ minWidth: '20px', minHeight: '30px' }} />`,
      errors: [
        { message: `Use 'rem' units instead of 'px'.` },
        { message: `Use 'rem' units instead of 'px'.` },
      ],
      output: `<div style={{ minWidth: '1.25rem', minHeight: '1.875rem' }} />`, // Assuming 16px = 1rem
    },
    {
      code: `<div style={{ padding: "10px 15px" }} />`,
      errors: [{ message: `Use 'rem' units instead of 'px'.` }],
      output: `<div style={{ padding: "0.625rem 0.9375rem" }} />`,
    },
    // Testing multiple properties
    {
      code: `<div style={{ borderWidth: '2px', fontSize: '12px' }} />`,
      errors: [
        { message: `Use 'rem' units instead of 'px'.` },
        { message: `Use 'rem' units instead of 'px'.` },
      ],
      output: `<div style={{ borderWidth: '0.125rem', fontSize: '0.75rem' }} />`,
    },
    // Testing mixed units in one property
    {
      code: `<div style={{ margin: '5px 20%' }} />`,
      errors: [{ message: `Use 'rem' units instead of 'px'.` }],
      output: `<div style={{ margin: '0.3125rem 20%' }} />`, // Only 'px' unit is changed
    },
    // Testing complex styles
    {
      code: `<div style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)' }} />`,
      errors: [{ message: `Use 'rem' units instead of 'px'.` }],
      output: `<div style={{ boxShadow: '0 0.25rem 0.625rem rgba(0, 0, 0, 0.3)' }} />`, // Converts all px values
    },
  ],
});
