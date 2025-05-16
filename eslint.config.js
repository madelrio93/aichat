import { defineConfig } from 'eslint-define-config';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

export default defineConfig({
  languageOptions: {
    parser: parser,
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    react: eslintPluginReact,
    '@typescript-eslint': eslintPluginTypescript,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // Para React 17 y superior
    '@typescript-eslint/no-unused-vars': 'warn',
  },
});

