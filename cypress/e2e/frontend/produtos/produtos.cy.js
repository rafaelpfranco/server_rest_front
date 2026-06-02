import { criarProduto } from '../../../fixtures/produtos/cadastrarProduto'
import { criarUsuarioAdministrador } from '../../../fixtures/usuarios/cadastrarUsuario'
import {
  CadastrarProdutoPage,
  CadastrarUsuarioPage,
  ListarProdutosPage,
} from '../../../support/pages'

describe('Produtos', () => {
  const cadastrarUsuarioPage = new CadastrarUsuarioPage()
  const cadastrarProdutoPage = new CadastrarProdutoPage()
  const listarProdutosPage = new ListarProdutosPage()

  let usuarioAdministrador

  before(() => {
    usuarioAdministrador = criarUsuarioAdministrador()

    cadastrarUsuarioPage.visitar()
    cadastrarUsuarioPage.deveEstarCarregada()
    cadastrarUsuarioPage.cadastrarUsuarioAdministrador(usuarioAdministrador)
  })

  beforeEach(() => {
    cy.login(usuarioAdministrador)
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

  it('Validar exclusão de produto cadastrado', () => {
    const produto = criarProduto()
    const nomeProduto = produto.nome

    cadastrarProdutoPage.visitar()
    cadastrarProdutoPage.deveEstarCarregada()
    cadastrarProdutoPage.cadastrarProduto(produto)

    listarProdutosPage.visitar()
    listarProdutosPage.deveEstarCarregada()
    listarProdutosPage.deveListarProduto(produto)
    listarProdutosPage.interceptarExclusaoProduto()
    listarProdutosPage.excluirProdutoPorNome(nomeProduto)
    listarProdutosPage.deveExcluirProdutoComSucesso()
    listarProdutosPage.deveEstarCarregada()
    listarProdutosPage.naoDeveListarProduto(nomeProduto)
  })
})
