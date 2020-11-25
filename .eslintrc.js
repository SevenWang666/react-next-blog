module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules:{
    'no-undef':0,
    '@typescript-eslint/explicit-module-boundary-types':0,
    '@typescript-eslint/no-explicit-any':0,
    'react/react-in-jsx-scope':0,
    "@typescript-eslint/indent": ["error", 2],
    "semi": "off",
    "@typescript-eslint/semi": ["error"],
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": ["error"],
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": ["error"],
    '@typescript-eslint/dot-notation': 'off',
    // TODO performance consideration
    '@typescript-eslint/no-implied-eval': 'off',
    // TODO performance consideration
    '@typescript-eslint/no-throw-literal': 'off',
    'no-alert': 'error',
    // Allow warn and error for dev environments
    'no-console': [1, { allow: ['warn'] }],
  }
};