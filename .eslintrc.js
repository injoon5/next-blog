module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'standard-jsx',
    'standard-react'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [],
  rules: {}
}
