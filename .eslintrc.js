module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:import/warnings',
  ],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers'],
  settings: {
    'import/resolver': {
      typescript: {
        paths: "./tsconfig.json",
        alwaysTryTypes: true
      },
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    },
  },
  rules: {
    camelcase: 'off',
    'import/no-unresolved': 'off',
    'import/namespace': 'off',
    'import/export': 'off',
    'import/default': 'off',
    'import/no-duplicates': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'prettier/prettier': ['error'],
    'no-undef': 'off',
    'no-use-before-define': 'error',
    'import/namespace': 'off',
    'import/export': 'off',
    'import/default': 'off',
    'import/no-duplicates': 'off',
    'import/no-named-as-default-member': 'off',
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '~/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@*/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import-helpers/order-imports': [
      'off',
      {
        newlinesBetween: 'always',
        groups: ['/^@shared/', 'module', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'desc', ignoreCase: true },
      },
    ],
  },
};
