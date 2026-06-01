import { LoginPage } from './pages'

Cypress.Commands.add('login', () => {
  const email = Cypress.env('userEmail')
  const senha = Cypress.env('userPassword')

  cy.session([email, senha], () => {
    const loginPage = new LoginPage()

    loginPage.visitar()
    loginPage.deveEstarCarregada()
    loginPage.realizarLogin(email, senha)
  })
})
