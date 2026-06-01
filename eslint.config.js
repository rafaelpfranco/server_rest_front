const cypress = require('eslint-plugin-cypress')

module.exports = [
  {
    ignores: [
      'node_modules/',
      'cypress/reports/',
      'cypress/screenshots/',
      'cypress/videos/',
      'cypress/downloads/',
      'coverage/',
      'dist/',
      'build/',
    ],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        Cypress: 'readonly',
        cy: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        beforeEach: 'readonly',
        after: 'readonly',
        afterEach: 'readonly',
      },
    },
    plugins: {
      cypress,
    },
    rules: {
      ...cypress.configs.recommended.rules,
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
]
