/**
 * Configuração específica para projetos Node.js.
 * Baseada na configuração compartilhada em base.js.
 */
module.exports = {
  ...require('./base'), // Extende a configuração base
  env: {
    node: true, // Variáveis globais específicas do Node.js
  },
  plugins: [
    'security', // Verificações de segurança específicas para Node.js
  ],
};