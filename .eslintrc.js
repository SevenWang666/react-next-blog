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
  }
};