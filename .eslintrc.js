module.exports = {
  root: true,
  extends: [
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  'no-use-before-define': ['error', { variables: false }]
};
