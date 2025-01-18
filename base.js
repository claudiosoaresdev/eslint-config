/**
 * Configuração base compartilhada para ESLint.
 * Pode ser estendida por configurações específicas para Node.js, React e Next.js.
 */
module.exports = {
  env: {
    es2021: true, // Suporte à sintaxe ES2021
  },
  parser: '@typescript-eslint/parser', // Parser para suportar TypeScript
  parserOptions: {
    ecmaVersion: 'latest', // Suporte para a versão mais recente do ECMAScript
    sourceType: 'module', // Permite usar import/export
  },
  extends: [
    'standard', // Regras padrão para JavaScript
    'plugin:@typescript-eslint/recommended', // Regras recomendadas para TypeScript
    'plugin:prettier/recommended', // Integração com Prettier
  ],
  plugins: [
    '@typescript-eslint', // Regras específicas para TypeScript
    'prettier', // Integração com Prettier
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80, // Largura máxima de linha
        tabWidth: 2, // Tamanho da indentação
        singleQuote: true, // Uso de aspas simples
        trailingComma: 'all', // Vírgulas finais em objetos e arrays
        arrowParens: 'always', // Parênteses sempre em funções arrow
        semi: false, // Sem ponto e vírgula no final das linhas
        endOfLine: 'auto', // Final de linha automático
      },
    ],
  },
};