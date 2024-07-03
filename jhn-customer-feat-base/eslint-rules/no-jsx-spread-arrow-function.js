module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'disallow arrow functions in JSX spread operators',
      category: 'Best Practices',
      recommended: false,
    },
    fixable: null, // This rule is not auto-fixable
    schema: [], // No options for this rule
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        node.attributes.forEach((attr) => {
          // Check for JSX spread attributes and ensure `attr.argument` is defined
          if (
            attr.type === 'JSXSpreadAttribute' &&
            attr.argument &&
            attr.argument.type === 'ObjectExpression'
          ) {
            // Check each property in the object expression
            attr.argument.properties.forEach((prop) => {
              // Ensure `prop.value` is defined and check if it's an arrow function expression
              if (prop.value && prop.value.type === 'ArrowFunctionExpression') {
                context.report({
                  node: prop.value,
                  message: 'JSX props should not use arrow functions',
                });
              }
            });
          }
        });
      },
    };
  },
};
