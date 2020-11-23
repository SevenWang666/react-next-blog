module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: [
    '@typescript-eslint',
  ],
  extends: ['airbnb'],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // parserOptions: {
  //   'ecmaVersion': 2018,
  //   'sourceType': 'module'
  // },
  // extends: [
  //   'eslint:recommended',
  //   'plugin:@typescript-eslint/recommended'
  // ],
  rules: {
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': [0],
    'react/prop-types': [0],
    'react/jsx-no-bind': [0],
    'import/extensions': [0],
    'import/no-unresolved': [0],
    'import/no-extraneous-dependencies': [0],
    'no-else-return': [0],
  },
};
