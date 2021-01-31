/* eslint filenames/match-regex: 0 */

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'filenames', 'react-hooks'],
  rules: {
    'import/prefer-default-export': 'off',
    'filenames/match-regex': [2, '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$', true],
    'filenames/match-exported': [2, ['kebab']],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
      },
    },
  },
};
