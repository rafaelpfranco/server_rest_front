# Cenários de Teste - Produtos

Este documento descreve os cenários de teste previstos para validação dos principais fluxos de produtos no frontend do ServeRest.

## Validar cadastro de produto com dados válidos

### Passo a passo

1. Acessar o frontend do ServeRest.
2. Realizar login com um usuário administrador válido.
3. Acessar a tela de cadastro de produtos.
4. Preencher os campos obrigatórios do produto com dados válidos.
5. Anexar uma imagem válida para o produto.
6. Confirmar o cadastro do produto.
7. Acessar a tela de listagem de produtos.
8. Localizar o produto cadastrado pelo nome.

### Resultado esperado

O sistema deve cadastrar o produto com sucesso, retornar sucesso na requisição de cadastro e exibir o produto na listagem com as informações informadas.

---

## Validar cadastro de produto com dados em branco

### Passo a passo

1. Acessar o frontend do ServeRest.
2. Realizar login com um usuário administrador válido.
3. Acessar a tela de cadastro de produtos.
4. Não preencher os campos obrigatórios do formulário.
5. Acionar a opção de cadastrar produto.

### Resultado esperado

O sistema deve impedir o cadastro do produto e exibir as mensagens de obrigatoriedade dos campos:

- Nome é obrigatório;
- Preco é obrigatório;
- Descricao é obrigatório;
- Quantidade é obrigatório.

---

## Validar exclusão de produto cadastrado

### Passo a passo

1. Acessar o frontend do ServeRest.
2. Realizar login com um usuário administrador válido.
3. Acessar a tela de listagem de produtos.
4. Localizar o produto cadastrado pelo nome.
5. Acionar a opção de exclusão na mesma linha do produto.
6. Confirmar a exclusão.
7. Localizar novamente o produto excluído na listagem.

### Resultado esperado

O sistema deve excluir o produto com sucesso e o produto não deve mais ser exibido na listagem.
