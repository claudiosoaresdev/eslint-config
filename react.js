/**
 * Configuração específica para projetos React.
 */
module.exports = {
  ...require('./base'),
  env: {
    browser: true, // Variáveis globais do navegador
    jest: true, // Variáveis globais para testes com Jest
  },
  extends: [
    'plugin:react/recommended', // Regras recomendadas para React
    'plugin:react-hooks/recommended', // Regras para React Hooks
    ...require('./base').extends,
  ],
  plugins: [
    'react',
    'jsx-a11y',
    ...require('./base').plugins,
  ],
  rules: {
    ...require('./base').rules,
    'react/self-closing-comp': 'error', // Força fechamento automático de tags sem filhos
    'react/react-in-jsx-scope': 'off', // Desabilitado para projetos com React 17+
    'react/prop-types': 'off', // Desabilitado para projetos com TypeScript
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
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['node_modules'],
};
