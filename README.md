# ServeRest Frontend - Testes Automatizados com Cypress

Projeto de automação de testes E2E do frontend da aplicação **ServeRest**, desenvolvido com **Cypress** e **JavaScript**.

A suíte valida os principais fluxos de produtos no frontend: cadastro com dados válidos, validação de campos obrigatórios e exclusão de produto cadastrado.

## Stack

* Cypress
* JavaScript
* Dotenv
* Mochawesome Reporter
* ESLint
* Prettier
* Husky
* Commitlint
* GitHub Actions
* Cypress Cloud

## Objetivo

Validar os principais fluxos frontend de produtos do ServeRest, garantindo que as operações realizadas pela interface reflitam o comportamento esperado do sistema.

## Estrutura do Projeto

```txt
cypress/
  e2e/
    frontend/
      produtos/
        produtos.cy.js

  fixtures/
    produtos/
      cadastrarProduto.js
      produto.jpeg
    usuarios/
      cadastrarUsuario.js

  support/
    commands.js
    e2e.js
    config/
      environment.js
    pages/
      index.js
      login/
        LoginPage.js
      produtos/
        CadastrarProdutoPage.js
        ListarProdutosPage.js
      usuarios/
        CadastrarUsuarioPage.js

features/
  produtos.md
```

## Arquitetura

O projeto foi organizado em camadas simples:

* `pages`: centralizam seletores, interações e validações das telas;
* `fixtures`: concentram as massas dinâmicas dos testes;
* `specs`: descrevem os cenários de teste em alto nível;
* `commands`: concentram comandos globais, como login com reaproveitamento de sessão.

O usuário administrador utilizado nos testes é criado dinamicamente pela tela de cadastro de usuários antes da execução dos cenários, evitando dependência de massa fixa em ambiente público.

## Pré-requisitos

* Node.js 18 ou superior
* npm

## Instalação

```bash
npm install
```

## Configuração do Ambiente

Crie o arquivo `.env` com base no `.env.example`.

```env
BASE_URL=https://front.serverest.dev
```

## Execução dos Testes

Abrir Cypress em modo interativo:

```bash
npm run cy:open
```

Executar todos os testes:

```bash
npm run cy:run
```

Executar com relatório local:

```bash
npm run cy:run:report
```

## Cenários Automatizados

Os cenários automatizados estão implementados na spec:

```txt
cypress/e2e/frontend/produtos/produtos.cy.js
```

Cenários validados:

* Validar cadastro de produto com dados válidos;
* Validar cadastro de produto com dados em branco;
* Validar exclusão de produto cadastrado.

A documentação dos cenários, com passo a passo e resultado esperado, está disponível em:

```txt
features/produtos.md
```

## CI/CD

O projeto possui pipeline no GitHub Actions para execução dos testes E2E frontend.

A pipeline pode ser executada de duas formas:

* manualmente pela aba **Actions** do GitHub;
* automaticamente quando disparada pela pipeline do projeto backend.

A pipeline realiza:

* instalação das dependências;
* validação de lint;
* validação de formatação;
* execução dos testes frontend;
* publicação dos artefatos de execução;
* envio dos resultados para o Cypress Cloud.

## Relatórios

### Cypress Cloud

O relatório das execuções do backend pode ser acessado em:

```txt
https://cloud.cypress.io/projects/q7vu1q/runs
```

O relatório das execuções do frontend pode ser acessado em:

```txt
https://cloud.cypress.io/projects/66nkyu/runs
```

### Relatório local

O projeto utiliza `cypress-mochawesome-reporter`.

Os relatórios locais são gerados em:

```txt
cypress/reports/
```

Os arquivos de relatório, vídeos, screenshots e downloads não são versionados.

## Secrets da Pipeline

Secrets necessários no repositório:

```txt
BASE_URL
CYPRESS_RECORD_KEY
```

Observações:

* `BASE_URL`: URL base do frontend ServeRest;
* `CYPRESS_RECORD_KEY`: chave de gravação do Cypress Cloud.

## Qualidade de Código

Executar lint:

```bash
npm run lint
```

Corrigir problemas automaticamente quando possível:

```bash
npm run lint:fix
```

Validar formatação:

```bash
npm run format:check
```

Formatar arquivos:

```bash
npm run format
```

## Hooks de Commit

O projeto utiliza Husky.

Validações configuradas:

* `pre-commit`: executa ESLint;
* `commit-msg`: valida o padrão Conventional Commit.

Exemplo de commit válido:

```bash
git commit -m "test: adiciona testes frontend de produtos"
```

## Conventional Commits

Formato esperado:

```txt
tipo: descrição curta
```
