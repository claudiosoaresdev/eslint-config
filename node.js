/**
 * Configuração específica para projetos Node.js.
 */
module.exports = {
  ...require('./base'),
  env: {
    node: true, // Ambiente Node.js
  },
};