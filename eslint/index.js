'use strict';

module.exports = {
  extends: '../node_modules/eslint-config-airbnb/index.js',
  rules: {
    'import/no-extraneous-dependencies': 0,
    'comma-dangle': 0,
    'react/no-unused-prop-types': 0, // required as react views live in seperate file
    'arrow-body-style': 0,
    'react/require-default-props': 0 // because sometimes you want optional props
  }
};
