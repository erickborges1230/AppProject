const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = {
  eslintPluginPrettierRecommended,
  // Any other config imports go at the top
/*
  *Habilite a prettier/prettierregra.
  *Desativa as regras arrow-body-stylee prefer-arrow-callbackque são problemáticas com este plugin - veja abaixo o porquê.
  *Habilita a eslint-config-prettierconfiguração que desativará as regras ESLint que entram em conflito com o Prettier.
*/ 
};
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  bracketSameLine: true,
  trailingComma: 'es5',
};