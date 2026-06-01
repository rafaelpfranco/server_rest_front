import { criarProduto } from '../../../fixtures/produtos/cadastrarProduto'
import { CadastrarProdutoPage, ListarProdutosPage } from '../../../support/pages'

describe('Produtos', () => {
  const cadastrarProdutoPage = new CadastrarProdutoPage()
  const listarProdutosPage = new ListarProdutosPage()

  beforeEach(() => {
    cy.login()
  })

  it('Validar cadastro de produto com dados válidos', () => {
    const produto = criarProduto()

    cadastrarProdutoPage.visitar()
    cadastrarProdutoPage.deveEstarCarregada()
    cadastrarProdutoPage.cadastrarProduto(produto)

    listarProdutosPage.deveEstarCarregada()
    listarProdutosPage.deveListarProduto(produto)
  })

  it('Validar cadastro de produto com dados em branco', () => {
    cadastrarProdutoPage.visitar()
    cadastrarProdutoPage.deveEstarCarregada()
    cadastrarProdutoPage.tentarCadastrarProdutoSemPreencherCampos()
    cadastrarProdutoPage.deveExibirMensagensDeCamposObrigatorios()
    cadastrarProdutoPage.devePermanecerNaTelaDeCadastro()
  })

  it('Validar exclusão de produto', () => {
    listarProdutosPage.visitar()
    listarProdutosPage.deveEstarCarregada()
    listarProdutosPage.obterNomePrimeiroProdutoAutomatizado().then((nomeProduto) => {
      listarProdutosPage.interceptarExclusaoProduto()
      listarProdutosPage.excluirProdutoPorNome(nomeProduto)
      listarProdutosPage.deveExcluirProdutoComSucesso()
      listarProdutosPage.deveEstarCarregada()
      listarProdutosPage.naoDeveListarProduto(nomeProduto)
    })
  })
})
