/**
 * Configuração específica para projetos Next.js.
 * Extende as configurações de React com regras adicionais para acessibilidade e estrutura.
 */
module.exports = {
  ...require('./react'), // Extende a configuração de React
  extends: [
    ...require('./react').extends, // Mantém as extensões da configuração React
  ],
  plugins: [
    ...require('./react').plugins, // Mantém os plugins da configuração React
    'react-refresh', // Suporte ao React Refresh
  ],
  rules: {
    'react-refresh/only-export-components': 'warn', // Garante melhores práticas no React Refresh
  },
};
