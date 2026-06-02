import { LoginPage } from './pages'

Cypress.Commands.add('login', (usuario) => {
  cy.session([usuario.email, usuario.password], () => {
    const loginPage = new LoginPage()

    loginPage.visitar()
    loginPage.deveEstarCarregada()
    loginPage.realizarLogin(usuario.email, usuario.password)
  })
})
