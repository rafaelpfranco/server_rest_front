export class CadastrarProdutoPage {
  seletores = {
    nomeInput: '[data-testid="nome"]',
    precoInput: '[data-testid="preco"]',
    descricaoInput: '[data-testid="descricao"]',
    quantidadeInput: '[data-testid="quantity"]',
    imagemInput: '[data-testid="imagem"]',
    cadastrarButton: '[data-testid="cadastarProdutos"]',
  }

  visitar() {
    cy.visit('/admin/cadastrarprodutos')
  }

  deveEstarCarregada() {
    cy.contains('h1', 'Cadastro de Produtos').should('be.visible')
    cy.get(this.seletores.nomeInput).should('be.visible')
    cy.get(this.seletores.precoInput).should('be.visible')
    cy.get(this.seletores.descricaoInput).should('be.visible')
    cy.get(this.seletores.quantidadeInput).should('be.visible')
    cy.get(this.seletores.imagemInput).should('be.visible')
    cy.get(this.seletores.cadastrarButton).should('be.visible')
  }

  preencherFormulario(produto) {
    cy.get(this.seletores.nomeInput).type(produto.nome)
    cy.get(this.seletores.precoInput).type(String(produto.preco))
    cy.get(this.seletores.descricaoInput).type(produto.descricao)
    cy.get(this.seletores.quantidadeInput).type(String(produto.quantidade))

    if (produto.imagem) {
      this.anexarImagem(produto.imagem)
    }
  }

  anexarImagem(imagem) {
    cy.get(this.seletores.imagemInput).selectFile(imagem)
  }

  interceptarCadastroProduto() {
    cy.intercept('POST', '**/produtos').as('cadastrarProduto')
  }

  cadastrar() {
    cy.get(this.seletores.cadastrarButton).click()
  }

  tentarCadastrarProdutoSemPreencherCampos() {
    this.cadastrar()
  }

  deveCadastrarProdutoComSucesso() {
    cy.wait('@cadastrarProduto').then(({ response }) => {
      expect(response.statusCode).to.eq(201)
      expect(response.body.message).to.eq('Cadastro realizado com sucesso')
      expect(response.body._id).to.exist
    })
  }

  deveExibirMensagensDeCamposObrigatorios() {
    const mensagensObrigatorias = [
      'Nome é obrigatório',
      'Preco é obrigatório',
      'Descricao é obrigatório',
      'Quantidade é obrigatório',
    ]

    mensagensObrigatorias.forEach((mensagem) => {
      cy.contains('.alert', mensagem).should('be.visible')
    })
  }

  devePermanecerNaTelaDeCadastro() {
    cy.location('pathname').should('include', '/admin/cadastrarprodutos')
  }
}
