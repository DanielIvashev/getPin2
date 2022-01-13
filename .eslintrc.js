module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      { endOfLine: 'auto', singleQuote: true, spaceBeforeFunctionParen: true },
    ],
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    indent: ['error', 2],
    'no-param-reassign': [2, { props: false }],
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
  },
};
