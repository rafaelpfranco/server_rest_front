export class LoginPage {
  seletores = {
    emailInput: '[data-testid="email"]',
    senhaInput: '[data-testid="senha"]',
    entrarButton: '[data-testid="entrar"]',
  }

  visitar() {
    cy.visit('/login')
  }

  deveEstarCarregada() {
    cy.get(this.seletores.emailInput).should('be.visible')
    cy.get(this.seletores.senhaInput).should('be.visible')
    cy.get(this.seletores.entrarButton).should('be.visible')
  }

  preencherEmail(email) {
    cy.get(this.seletores.emailInput).type(email)
  }

  preencherSenha(senha) {
    cy.get(this.seletores.senhaInput).type(senha)
  }

  clicarEntrar() {
    cy.get(this.seletores.entrarButton).click()
  }

  interceptarLogin() {
    cy.intercept('POST', '**/login').as('realizarLogin')
  }

  deveRealizarLoginComSucesso() {
    cy.wait('@realizarLogin').then(({ response }) => {
      expect(response.statusCode).to.eq(200)
      expect(response.body.message).to.eq('Login realizado com sucesso')
      expect(response.body.authorization).to.exist
      expect(response.body.authorization).to.include('Bearer')
    })
  }

  realizarLogin(email, senha) {
    this.interceptarLogin()
    this.preencherEmail(email)
    this.preencherSenha(senha)
    this.clicarEntrar()
    this.deveRealizarLoginComSucesso()
  }
}
