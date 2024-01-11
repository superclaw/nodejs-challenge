module.exports = {
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: ['prettier', 'eslint:recommended', 'plugin:node/recommended'],
  env: {
    node: true,
    'jest/globals': true,
    es6: true,
  },
  plugins: ['prettier', 'jest'],
  rules: {
    'no-process-exit': 0,
    'prettier/prettier': ['error'],
  },
  settings: {},
};
