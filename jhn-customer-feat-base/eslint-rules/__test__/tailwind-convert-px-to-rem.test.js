const { RuleTester } = require('eslint');
const rule = require('../tailwind-convert-px-to-rem');

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2020, sourceType: 'module', ecmaFeatures: { jsx: true } },
});

ruleTester.run('tailwind-px-to-rem', rule, {
  valid: [
    // Cases where the rule should not report any errors
    {
      code: `<div className="text-sm leading-[1.5rem]" />`,
    },
    {
      code: `<div className="p-[2rem] m-[1rem]" />`,
    },
    // Test cases with no 'px' units
    {
      code: `<div className="text-base bg-red-500" />`,
    },
  ],

  invalid: [
    // Cases where the rule should report an error and provide a fix
    {
      code: `<div className="m-[20px]" />`,
      errors: [{ message: "Replace 'px' units with 'rem' units in className." }],
      output: `<div className="m-[1.25rem]" />`, // 20px to 1.25rem
    },
    {
      code: `<div className="shadow-[0px_4px_15px_0px_rgba(0,0,0,0.20)]" />`,
      errors: [{ message: "Replace 'px' units with 'rem' units in className." }],
      output: `<div className="shadow-[0_0.25rem_0.9375rem_0_rgba(0,0,0,0.20)]" />`,
    },
    // Complex case with multiple px values
    {
      code: `<div className="p-[10px_20px] m-[30px]" />`,
      errors: [{ message: "Replace 'px' units with 'rem' units in className." }],
      output: `<div className="p-[0.625rem_1.25rem] m-[1.875rem]" />`,
    },
    // Testing with different quote types
    {
      code: `<div className="border-[2px] text-[12px]" />`,
      errors: [{ message: "Replace 'px' units with 'rem' units in className." }],
      output: `<div className="border-[0.125rem] text-[0.75rem]" />`,
    },
    // Multiple classes with px units
    {
      code: `<div className="p-[5px] text-[10px] m-[15px]" />`,
      errors: [{ message: "Replace 'px' units with 'rem' units in className." }],
      output: `<div className="p-[0.3125rem] text-[0.625rem] m-[0.9375rem]" />`,
    },
    // Test case to ensure '0px' is correctly handled
    {
      code: `<div className="margin-[0px_10px_20px_30px]" />`,
      errors: [{ message: "Replace 'px' units with 'rem' units in className." }],
      output: `<div className="margin-[0_0.625rem_1.25rem_1.875rem]" />`, // Note: 0px to 0
    },
  ],
});
