module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Ensure arrow functions in JSX are wrapped with useCallback',
      category: 'Performance Optimization',
      recommended: false,
    },
    fixable: null, // This rule is not auto-fixable
    schema: [], // No options
  },
  create(context) {
    return {
      JSXExpressionContainer(node) {
        if (node.expression.type === 'ArrowFunctionExpression' && !isWrappedWithUseCallback(node)) {
          context.report({
            node,
            message:
              'Arrow functions in JSX should be wrapped with useCallback to avoid unnecessary re-renders.',
          });
        }
      },
    };

    function isWrappedWithUseCallback(node) {
      // Logic to check if the arrow function is wrapped with useCallback
      // This could be complex depending on the different ways useCallback can be used
      // For simplicity, we'll check for the most direct pattern
      const parent = node.parent;
      if (parent && parent.type === 'CallExpression' && parent.callee.name === 'useCallback') {
        return true;
      }
      return false;
    }
  },
};
