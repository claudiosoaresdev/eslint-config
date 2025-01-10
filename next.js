module.exports = {
  // Especifica os ambientes do código
  env: {
    browser: true, // Habilita variáveis globais para o ambiente do navegador
    es2021: true, // Define o suporte à sintaxe ES2021
    jest: true, // Habilita variáveis globais específicas do Jest (para testes)
  },

  // Extensões de configurações pré-definidas
  extends: [
    'standard', // Usa o estilo de código padrão JavaScript
    'plugin:react/recommended', // Regras recomendadas para React
    'plugin:@typescript-eslint/recommended', // Regras recomendadas para TypeScript
    'plugin:prettier/recommended', // Integra o Prettier com o ESLint
  ],

  // Especifica o parser para entender a sintaxe do código
  parser: '@typescript-eslint/parser', // Habilita suporte para TypeScript no ESLint
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Habilita a análise de JSX
    },
    ecmaVersion: 'latest', // Suporte para a sintaxe mais recente do ECMAScript
    sourceType: 'module', // Permite o uso de import/export no código
  },

  // Define os plugins adicionais usados pelo ESLint
  plugins: [
    'react', // Habilita regras para React
    '@typescript-eslint', // Regras específicas para TypeScript
    'jsx-a11y', // Regras para acessibilidade em JSX
  ],

  // Configuração de regras personalizadas
  rules: {
    // Configura o Prettier e o plugin Tailwind CSS para formatar o código automaticamente
    'prettier/prettier': [
      'error', // Mostra erro quando o código não segue as regras do Prettier
      {
        plugins: ['prettier-plugin-tailwindcss'], // Organiza as classes do Tailwind automaticamente
        printWidth: 80, // Limita o comprimento das linhas
        tabWidth: 2, // Usa dois espaços para identação
        singleQuote: true, // Usa aspas simples em vez de duplas
        trailingComma: 'all', // Adiciona vírgulas ao final de objetos/listas
        arrowParens: 'always', // Sempre coloca parênteses em funções arrow
        semi: false, // Não usa ponto-e-vírgula no final de linhas
        endOfLine: 'auto', // Ajusta automaticamente o final de linha para o ambiente
      },
    ],

    // Configurações de acessibilidade com o plugin jsx-a11y
    'jsx-a11y/alt-text': [
      'warn', // Emite aviso para elementos sem texto alternativo adequado
      {
        elements: ['img'], // Aplica a regra em imagens
        img: ['Image'], // Considera imagens do React também
      },
    ],
    'jsx-a11y/aria-props': 'warn', // Emite aviso para propriedades ARIA inválidas
    'jsx-a11y/aria-proptypes': 'warn', // Valida os tipos das propriedades ARIA
    'jsx-a11y/aria-unsupported-elements': 'warn', // Emite aviso para elementos que não suportam ARIA
    'jsx-a11y/role-has-required-aria-props': 'warn', // Garante que funções têm as propriedades ARIA necessárias
    'jsx-a11y/role-supports-aria-props': 'warn', // Verifica se funções suportam as propriedades ARIA usadas

    // Regras para React
    'react/no-unknown-property': 'error', // Erro para propriedades desconhecidas no JSX

    // Regras personalizadas para TypeScript
    '@typescript-eslint/no-unused-vars': [
      'error', // Erro para variáveis não usadas
      {
        argsIgnorePattern: '^_', // Ignora argumentos começando com "_"
        varsIgnorePattern: '^_', // Ignora variáveis começando com "_"
      },
    ],
  },

  // Configurações adicionais para React e TypeScript
  settings: {
    react: {
      version: 'detect', // Detecta automaticamente a versão do React
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'], // Usa o parser TypeScript para esses arquivos
    },
  },
}
