const RuleTester = require('eslint').RuleTester;
const rule = require('../string-px-to-rem-converter');

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2021 }, // Adjust the ecmaVersion as needed
});

ruleTester.run('px-to-rem', rule, {
  valid: [
    { code: 'const style = "margin: 2rem;";' },
    { code: 'const style = "font-size: 1.5rem;";' },
    { code: 'const style = "padding: 0;";' },
    { code: 'const style = "width: 100px;";' }, // px outside of brackets should not trigger the rule
    { code: 'const style = "border: solid 2px black;";' }, // px outside of brackets should not trigger the rule
  ],

  invalid: [
    {
      code: 'const style = "multiple-[2px 4px 6px]";',
      errors: [
        {
          message: "Found 'px' unit within brackets, consider using 'rem' unit instead.",
        },
      ],
      output: 'const style = "multiple-[0.125rem 0.25rem 0.375rem]";',
    },
  ],
});

module.exports = ruleTester;
