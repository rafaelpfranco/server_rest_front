# ServeRest Frontend - Testes E2E com Cypress

Projeto de automação E2E do frontend do **ServeRest**, desenvolvido com **Cypress** e **JavaScript**.

A suíte cobre cenários relacionados ao fluxo de produtos, validando comportamentos do frontend e chamadas relevantes ao backend por meio de interceptações.

## Stack

- Cypress
- JavaScript
- Dotenv
- Page Object
- Mochawesome Reporter
- ESLint
- Prettier
- Husky
- Commitlint

## Objetivo

Validar os principais fluxos frontend relacionados ao CRUD de produtos no ServeRest, garantindo que o sistema permita cadastrar, validar campos obrigatórios e excluir produtos corretamente.

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

  support/
    commands.js
    e2e.js
    config/
      environment.js
    pages/
      login/
        LoginPage.js
      produtos/
        CadastrarProdutoPage.js
        ListarProdutosPage.js
```

## Decisões Técnicas

O projeto utiliza Cypress com JavaScript e Page Objects.

As specs descrevem o fluxo dos testes em alto nível, enquanto seletores, interações com tela e validações ficam centralizados nas Pages.

O login utiliza `cy.session()` para reaproveitar a sessão entre os testes.

As requisições relevantes são validadas com `cy.intercept()`, como login, cadastro e exclusão de produtos.

## Pré-requisitos

- Node.js 18 ou superior
- npm
- Google Chrome ou Electron

## Instalação

```bash
npm install
```

## Configuração do Ambiente

Crie o arquivo `.env` com base no `.env.example`.

```env
BASE_URL=https://front.serverest.dev
USER_EMAIL=seu_email
USER_PASSWORD=sua_senha
```

## Execução dos Testes

Abrir Cypress em modo interativo:

```bash
npm run cy:open
```

Executar todos os testes em modo headless:

```bash
npm run cy:run
```

Executar com Chrome:

```bash
npm run cy:run:chrome
```

Executar com relatório:

```bash
npm run cy:run:report
```

## Plano de Teste

O plano de teste frontend foi focado nos fluxos principais de produtos, contemplando cenários de cadastro válido, validação de campos obrigatórios e exclusão de produto cadastrado.

Os cenários planejados e validados estão documentados em:

features/produtos.md

## Relatório

O projeto utiliza `cypress-mochawesome-reporter`.

Os relatórios são gerados em:

```txt
cypress/reports/
```

Os arquivos de relatório, vídeos, screenshots e downloads não são versionados.

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

- `pre-commit`: executa ESLint;
- `commit-msg`: valida o padrão Conventional Commit.

Exemplo de commit válido:

```bash
git commit -m "test: adiciona teste de cadastro de produto"
```

## Conventional Commits

Formato esperado:

```txt
tipo: descrição curta
```
