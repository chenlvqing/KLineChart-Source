module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json'
  },
  extends: 'standard-with-typescript',
  plugins: ['@typescript-eslint'],
  overrides: [
  ],
  rules: {
    "@typescript-eslint/restrict-plus-operands":0,
    "@typescript-eslint/strict-boolean-expressions":0
  }
}
