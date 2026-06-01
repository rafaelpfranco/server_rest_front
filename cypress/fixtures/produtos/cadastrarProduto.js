const criarIdentificador = () => `${Date.now()}-${Math.floor(Math.random() * 1000)}`

export const criarProduto = () => ({
  nome: `Produto Automatizado ${criarIdentificador()}`,
  preco: 100,
  descricao: 'Produto criado para automacao frontend',
  quantidade: 10,
})
