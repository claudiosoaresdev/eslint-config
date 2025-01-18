
/**
 * Configuração base compartilhada para ESLint.
 * Pode ser extendida por configurações específicas para Node.js, React e Next.js.
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
    'plugin:security/recommended', // Regras de segurança
  ],
  plugins: [
    '@typescript-eslint', // Regras específicas para TypeScript
    'simple-import-sort', // Ordena imports automaticamente
    'unused-imports', // Remove imports não utilizados
    'security', // Verificações de segurança
  ],
  rules: {
    'prettier/prettier': [
      'error', // Erro quando o código não segue as regras do Prettier
      {
        printWidth: 80, // Largura máxima de linha
        tabWidth: 2, // Tamanho da indentação
        singleQuote: true, // Uso de aspas simples
        trailingComma: 'all', // Vírgulas finais em objetos e arrays
        arrowParens: 'always', // Parênteses sempre em funções arrow
        semi: false, // Sem ponto e vírgula no final das linhas
        quoteProps: 'consistent', // Aspas consistentes em propriedades
        bracketSameLine: true, // JSX: fechamento na mesma linha
      },
    ],
    'simple-import-sort/imports': 'error', // Ordena imports automaticamente
    'simple-import-sort/exports': 'error', // Ordena exports automaticamente
    'unused-imports/no-unused-imports': 'warn', // Remove imports não utilizados
    'security/detect-object-injection': 'off', // Desabilita falsos positivos para objetos dinâmicos
  },
};
