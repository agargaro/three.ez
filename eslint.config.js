import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

export default [
  js.configs.recommended,
  ...tseslint.configs.strict,
  stylistic.configs.customize({
    jsx: false,
    semi: true,
    commaDangle: 'never',
    arrowParens: true,
    braceStyle: '1tbs',
    blockSpacing: true,
    indent: 2,
    quoteProps: 'as-needed',
    quotes: 'single'
  }),
  {
    ignores: ['dist', 'docs', 'packages']
  },
  {
    rules: {
      camelcase: 'warn',
      'no-unused-vars': 'off',
      'no-undef': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-wrapper-object-types': 'off',
      '@typescript-eslint/no-dynamic-delete': 'off'
      // "@typescript-eslint/explicit-function-return-type": "error",
    }
  }
];