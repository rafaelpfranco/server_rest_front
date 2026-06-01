export class ListarProdutosPage {
  seletores = {
    tabelaProdutos: 'table',
  }

  visitar() {
    cy.visit('/admin/listarprodutos')
  }

  deveEstarCarregada() {
    cy.contains('h1', 'Lista dos Produtos').should('be.visible')
    cy.get(this.seletores.tabelaProdutos).should('be.visible')
  }

  obterLinhaProdutoPorNome(nomeProduto) {
    return cy.get(this.seletores.tabelaProdutos).contains('td', nomeProduto).parents('tr')
  }

  obterPrimeiraLinhaProdutoAutomatizado() {
    return cy
      .get(this.seletores.tabelaProdutos)
      .contains('td', 'Produto Automatizado')
      .parents('tr')
      .first()
  }

  obterNomePrimeiroProdutoAutomatizado() {
    return this.obterPrimeiraLinhaProdutoAutomatizado().find('td').eq(0).invoke('text')
  }

  deveListarProduto(produto) {
    this.obterLinhaProdutoPorNome(produto.nome).within(() => {
      cy.get('td').eq(0).should('have.text', produto.nome)
      cy.get('td').eq(1).should('have.text', String(produto.preco))
      cy.get('td').eq(2).should('have.text', produto.descricao)
      cy.get('td').eq(3).should('have.text', String(produto.quantidade))
    })
  }

  interceptarExclusaoProduto() {
    cy.intercept('DELETE', '**/produtos/*').as('excluirProduto')
  }

  excluirProdutoPorNome(nomeProduto) {
    this.obterLinhaProdutoPorNome(nomeProduto).within(() => {
      cy.contains('button', 'Excluir').click()
    })
  }

  deveExcluirProdutoComSucesso() {
    cy.wait('@excluirProduto').then(({ response }) => {
      expect(response.statusCode).to.eq(200)
    })
  }

  naoDeveListarProduto(nomeProduto) {
    cy.get(this.seletores.tabelaProdutos).should('not.contain.text', nomeProduto)
  }
}
