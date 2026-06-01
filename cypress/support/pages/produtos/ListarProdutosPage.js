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

  escaparRegExp(texto) {
    return texto.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  }

  obterLinhaProdutoPorNome(nomeProduto) {
    const nomeExato = new RegExp(`^${this.escaparRegExp(nomeProduto)}$`)

    return cy.get(this.seletores.tabelaProdutos).contains('td', nomeExato).parents('tr')
  }

  deveListarProduto(produto) {
    this.obterLinhaProdutoPorNome(produto.nome).within(() => {
      cy.get('td').eq(0).should('have.text', produto.nome)
      cy.get('td').eq(1).should('have.text', String(produto.preco))
      cy.get('td').eq(2).should('have.text', produto.descricao)
      cy.get('td').eq(3).should('have.text', String(produto.quantidade))
    })
  }
}
