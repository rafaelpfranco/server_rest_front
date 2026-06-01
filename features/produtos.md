# Cenários de Teste - CRUD de Produtos

Este documento descreve os cenários de teste previstos para validação do CRUD de produtos no frontend do ServeRest.

## Validar cadastro de produto com dados válidos

### Passo a passo

1. Acessar o frontend do ServeRest.
2. Realizar login com um usuário administrador válido.
3. Acessar a funcionalidade de cadastro de produtos.
4. Preencher os campos obrigatórios do produto com dados válidos.
5. Confirmar o cadastro do produto.
6. Acessar a listagem de produtos.
7. Localizar o produto cadastrado.

### Resultado esperado

O sistema deve cadastrar o produto com sucesso e exibir o produto na listagem com as informações informadas no cadastro.

---

## Validar edição de produto com dados válidos

### Passo a passo

1. Acessar o frontend do ServeRest.
2. Realizar login com um usuário administrador válido.
3. Acessar a listagem de produtos.
4. Localizar um produto previamente cadastrado.
5. Acessar a opção de edição do produto.
6. Alterar os dados permitidos do produto.
7. Confirmar a edição.
8. Retornar para a listagem de produtos.
9. Localizar o produto editado.

### Resultado esperado

O sistema deve atualizar o produto com sucesso e exibir na listagem as informações alteradas.

---

## Validar exclusão de produto cadastrado

### Passo a passo

1. Acessar o frontend do ServeRest.
2. Realizar login com um usuário administrador válido.
3. Acessar a listagem de produtos.
4. Localizar um produto previamente cadastrado.
5. Acionar a opção de exclusão do produto.
6. Confirmar a exclusão, caso o sistema solicite confirmação.
7. Retornar para a listagem de produtos.
8. Localizar o produto excluído.

### Resultado esperado

O sistema deve excluir o produto com sucesso e o produto não deve mais ser exibido na listagem.
