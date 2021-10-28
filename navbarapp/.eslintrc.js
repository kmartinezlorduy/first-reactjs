module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 13,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'object-curly-spacing': 'off',
    'comma-dangle': 'off',
    'indent': 'off',
    'require-jsdoc': 'off',
    'linebreak-style': 'off',
    'no-trailing-spaces': 'off',
    'linebreak-style': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'space-before-function-paren': 'off',
  },
};
