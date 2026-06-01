const criarIdentificador = () => `${Date.now()}-${Math.floor(Math.random() * 1000)}`

export const editarProduto = () => ({
  nome: `Produto Editado ${criarIdentificador()}`,
  preco: 150,
  descricao: 'Produto editado para automacao frontend',
  quantidade: 5,
})
