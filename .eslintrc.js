module.exports = {
  env: {
    node: true,
    commonjs: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2015,
  },
  rules: {
    'no-unused-vars': false,
  },
};
