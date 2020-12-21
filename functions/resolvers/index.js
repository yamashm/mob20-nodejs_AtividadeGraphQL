const { mergeResolvers } = require('@graphql-tools/merge');
const Produto = require('./Produto');
const NovoProduto = require('./NovoProduto');
const AtualizarProduto = require('./AtualizarProduto');
const ExcluirProduto = require('./ExcluirProduto');

const resolvers = [
    Produto,
    NovoProduto,
    AtualizarProduto,
    ExcluirProduto
  ];

module.exports = mergeResolvers(resolvers);