/**
 * Configuração específica para projetos Next.js.
 */
module.exports = {
  ...require('./base'),
  env: {
    browser: true, // Ambiente do navegador
    jest: true, // Variáveis do Jest
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Suporte para JSX
    },
  },
  plugins: [
    'jsx-a11y',
    ...require('./base').plugins,
  ],
  rules: {
    ...require('./base').rules,
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'react/no-unknown-property': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
};