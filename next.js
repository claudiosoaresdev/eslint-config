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
    'react', // Adiciona o plugin React
    'jsx-a11y', // Suporte para acessibilidade em JSX
    ...require('./base').plugins,
  ],
  extends: [
    ...require('./base').extends,
    'plugin:react/recommended', // Regras recomendadas para React
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
  },
};