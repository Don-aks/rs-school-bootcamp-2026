import globals from 'globals';
import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: {
      import: importPlugin,
    },

    rules: {
      /* ---------------- AIRBNB-LIKE BASE ---------------- */

      // vars
      'no-unused-vars': 'warn',
      'no-use-before-define': 'off',

      // style
      'no-console': 'warn',
      'no-debugger': 'warn',

      // functions
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-arrow-callback': 'error',

      // classes
      'class-methods-use-this': 'off',

      // import
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
        },
      ],

      /* ---------------- OUR RULES ------------ */

      'no-new': 'off',
      'no-param-reassign': 'off',
      'no-unused-expressions': 'off',
      'no-promise-executor-return': 'off',
      'lines-between-class-members': 'off',
    },

    settings: {
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.ts', '.vue', '.json'],
        },
      },
    },
  },
];
