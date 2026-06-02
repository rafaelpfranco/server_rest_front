export class CadastrarUsuarioPage {
  seletores = {
    nomeInput: '[data-testid="nome"]',
    emailInput: '[data-testid="email"]',
    passwordInput: '[data-testid="password"]',
    administradorCheckbox: '[data-testid="checkbox"]',
    cadastrarButton: '[data-testid="cadastrar"]',
  }

  visitar() {
    cy.visit('/cadastrarusuarios')
  }

  deveEstarCarregada() {
    cy.contains('h2', 'Cadastro').should('be.visible')
    cy.get(this.seletores.nomeInput).should('be.visible')
    cy.get(this.seletores.emailInput).should('be.visible')
    cy.get(this.seletores.passwordInput).should('be.visible')
    cy.get(this.seletores.administradorCheckbox).should('be.visible')
    cy.get(this.seletores.cadastrarButton).should('be.visible')
  }

  preencherFormulario(usuario) {
    cy.get(this.seletores.nomeInput).type(usuario.nome)
    cy.get(this.seletores.emailInput).type(usuario.email)
    cy.get(this.seletores.passwordInput).type(usuario.password)
    cy.get(this.seletores.administradorCheckbox).check()
  }

  interceptarCadastroUsuario() {
    cy.intercept('POST', '**/usuarios').as('cadastrarUsuario')
  }

  cadastrar() {
    cy.get(this.seletores.cadastrarButton).click()
  }

  deveCadastrarUsuarioComSucesso() {
    cy.wait('@cadastrarUsuario').then(({ response }) => {
      expect(response.statusCode).to.eq(201)
      expect(response.body.message).to.eq('Cadastro realizado com sucesso')
      expect(response.body._id).to.exist
    })
  }

  cadastrarUsuarioAdministrador(usuario) {
    this.preencherFormulario(usuario)
    this.interceptarCadastroUsuario()
    this.cadastrar()
    this.deveCadastrarUsuarioComSucesso()
  }
}
