const { RuleTester } = require('eslint');
const rule = require('../no-conditional-classnames');

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2020, sourceType: 'module', ecmaFeatures: { jsx: true } },
});

ruleTester.run('no-conditional-classnames', rule, {
  valid: [
    // Correct usages of classNames
    {
      code: `<div className={classNames('flex', 'justify-center')} />`,
    },
    {
      code: `classNames('text-base', 'bg-red-500')`,
    },
    {
      code: `classNames('text-sm', { 'hidden': !isVisible })`,
    },
  ],
  invalid: [
    // Incorrect usages of classNames
    {
      code: `classNames('flex flex-1 justify-start gap-4', isActive ? 'font-semibold text-primary-500' : 'text-invert-800 group-hover:text-invert-50')`,
      errors: [{ message: 'Avoid using conditional logic inside classNames function.' }],
    },
    {
      code: `<div className={classNames('p-4', item.isActive && 'bg-green-200')} />`,
      errors: [{ message: 'Avoid using conditional logic inside classNames function.' }],
    },
  ],
});
