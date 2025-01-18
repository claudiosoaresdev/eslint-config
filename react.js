/**
 * Configuração específica para projetos React.
 * Inclui regras para acessibilidade e boas práticas de JSX.
 */
module.exports = {
  ...require('./base'), // Extende a configuração base
  env: {
    browser: true, // Variáveis globais do navegador
    jest: true, // Variáveis globais para testes com Jest
  },
  extends: [
    'plugin:react/recommended', // Regras recomendadas para React
    'plugin:react-hooks/recommended', // Regras para React Hooks
    'plugin:testing-library/react', // Regras para Testing Library
  ],
  plugins: [
    'react', // Regras específicas para React
    'jsx-a11y', // Regras para acessibilidade em JSX
    'testing-library', // Regras para Testing Library
  ],
  rules: {
    'react/self-closing-comp': 'error', // Força fechamento automático de tags sem filhos
    'react/react-in-jsx-scope': 'off', // Desabilitado para projetos com React 17+
    'react/prop-types': 'off', // Desabilitado para projetos com TypeScript
  },
  settings: {
    react: {
      version: 'detect', // Detecta automaticamente a versão do React
    },
  },
};