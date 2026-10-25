/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
const { defineConfig, globalIgnores } = require('eslint/config');

const globals = require('globals');
const prettier = require('eslint-plugin-prettier');
const filenames = require('eslint-plugin-filenames');
const reactHooks = require('eslint-plugin-react-hooks');
const tseslint = require('typescript-eslint');

const { fixupConfigRules, fixupPluginRules } = require('@eslint/compat');

const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  globalIgnores([
    '**/node_modules/',
    '.git/',
    '.next/',
    '.netlify/',
    'next-env.d.ts',
  ]),

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },

      ecmaVersion: 12,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    extends: [
      ...fixupConfigRules(compat.extends('airbnb')),
      ...compat.extends('prettier'),
    ],

    plugins: {
      prettier,
      filenames,
      'react-hooks': fixupPluginRules(reactHooks),
    },

    rules: {
      'arrow-body-style': 0,
      'no-console': 0,
      'import/prefer-default-export': 'off',
      // 'filenames/match-exported': [2, 'kebab'],
      // 'filenames/match-regex': [2, '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$', true],
      'jsx-a11y/anchor-is-valid': 0,
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-array-index-key': 'off',
      'react/require-default-props': 'off',

      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          required: {
            some: ['nesting', 'id'],
          },
        },
      ],

      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.jsx', '.tsx'],
        },
      ],

      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
    },

    settings: {
      'import/resolver': {
        node: {
          paths: ['./'],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
      },
    },
  },

  {
    files: ['**/*.ts', '**/*.tsx'],

    extends: [tseslint.configs.recommended],

    languageOptions: {
      parser: tseslint.parser,
    },

    rules: {
      // Types replace prop-types
      'react/prop-types': 'off',
      // Handled by TypeScript / typescript-eslint
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'no-shadow': 'off',
      'import/no-unresolved': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-use-before-define': 'error',
    },
  },
]);
