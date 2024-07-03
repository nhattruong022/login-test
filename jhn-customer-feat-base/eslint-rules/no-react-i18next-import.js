module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: "disallow named imports from 'react-i18next' and auto-fix to 'next-i18next'",
      category: 'Best Practices',
      recommended: false,
    },
    fixable: 'code',
    schema: [],
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        // Check if the import is from 'react-i18next'
        if (node.source.value === 'react-i18next') {
          // Look for the 'useTranslation' named import
          const useTranslationSpecifier = node.specifiers.find(
            (specifier) => specifier.imported && specifier.imported.name === 'useTranslation',
          );

          // If 'useTranslation' is found, report and fix
          if (useTranslationSpecifier) {
            context.report({
              node,
              message: "Import 'useTranslation' from 'next-i18next' instead of 'react-i18next'.",
              fix(fixer) {
                // Replace the entire import statement if 'useTranslation' is the only import
                // Otherwise, just replace the source value
                const isSingleImport = node.specifiers.length === 1;
                const importText = context.getSourceCode().getText(node);
                const fixedImportText = isSingleImport
                  ? importText.replace('react-i18next', 'next-i18next')
                  : importText.replace(
                      /(import.*from\s+['"])react-i18next(['"])/,
                      `$1next-i18next$2`,
                    );

                return fixer.replaceText(node, fixedImportText);
              },
            });
          }
        }
      },
    };
  },
};
