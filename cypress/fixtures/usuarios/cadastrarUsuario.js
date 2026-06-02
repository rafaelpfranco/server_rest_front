const criarIdentificador = () => `${Date.now()}-${Math.floor(Math.random() * 1000)}`

export const criarUsuarioAdministrador = () => {
  const identificador = criarIdentificador()

  return {
    nome: `Usuario Front ${identificador}`,
    email: `usuario.front.${identificador}@teste.com.br`,
    password: `SenhaFront${identificador}`,
  }
}
