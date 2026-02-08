import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import mochaPlugin from 'eslint-plugin-mocha';
import globals from 'globals';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['dist/**', 'node_modules/**', 'dependencygraph.svg'],
  },
  {
    files: ['lib/**/*.ts'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2022,
      },
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      mocha: mochaPlugin,
    },
    rules: {
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'comma-dangle': ['error', 'only-multiline'],
      curly: 'error',
      'dot-notation': 'off',
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
        },
      ],
      'func-names': 'error',
      'guard-for-in': 'off',
      'key-spacing': ['error', { mode: 'minimum' }],
      'max-statements-per-line': ['error', { max: 2 }],
      'mocha/no-exclusive-tests': 'error',
      'no-caller': 'error',
      'new-cap': 'off',
      'no-cond-assign': ['error', 'except-parens'],
      'no-debugger': 'error',
      'no-eval': 'error',
      'no-plusplus': 'off',
      'no-return-await': 'error',
      'no-undef': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }],
      'one-var': 'off',
      'prefer-spread': 'error',
      quotes: 'off',
      'require-yield': 'off',
      strict: 'off',
      'no-console': 'error',
    },
  },
  {
    files: ['tests/**/*.ts'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2022,
        ...globals.mocha,
      },
    },
    plugins: {
      mocha: mochaPlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'mocha/no-exclusive-tests': 'error',
    },
  }
);
