```markdown
# User Management API

## Descrição
Esta é uma API REST simples para gerenciamento de usuários, desenvolvida com Express.js. Permite criar, atualizar, listar e excluir usuários de uma lista em memória.

## Tecnologias Utilizadas
- Node.js
- Express.js
- Crypto (para hashing de senhas)

## Instalação e Execução
1. Clone este repositório:
   ```sh
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_DIRETORIO>
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Inicie o servidor:
   ```sh
   node index.js
   ```
   O servidor será iniciado em `http://localhost:3000`

## Endpoints Disponíveis

### Criar um usuário
- **Rota:** `POST /create_user`
- **Body (JSON):**
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "senha123"
  }
  ```
- **Resposta de Sucesso:**
  ```json
  {
    "message": "User created successfully"
  }
  ```
- **Possíveis Erros:**
  - `409 Conflict`: Usuário já existe.

---

### Atualizar um usuário
- **Rota:** `PUT /update_user?email=<email>`
- **Query Params:** `email` (obrigatório)
- **Body (JSON) (opcional):**
  ```json
  {
    "name": "Novo Nome",
    "password": "novaSenha123"
  }
  ```
- **Resposta de Sucesso:**
  ```json
  {
    "message": "User updated successfully"
  }
  ```
- **Possíveis Erros:**
  - `400 Bad Request`: Parâmetro email é necessário.
  - `404 Not Found`: Usuário não encontrado.

---

### Obter todos os usuários
- **Rota:** `GET /get_users`
- **Resposta de Sucesso:**
  ```json
  [
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "created_at": 1700000000000,
      "modified_at": null
    }
  ]
  ```

---

### Obter um usuário por email
- **Rota:** `GET /get_user?email=<email>`
- **Query Params:** `email` (obrigatório)
- **Resposta de Sucesso:**
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "created_at": 1700000000000,
    "modified_at": null
  }
  ```
- **Possíveis Erros:**
  - `400 Bad Request`: Parâmetro email é necessário.
  - `404 Not Found`: Usuário não encontrado.

---

### Deletar um usuário
- **Rota:** `DELETE /delete_user?email=<email>`
- **Query Params:** `email` (obrigatório)
- **Resposta de Sucesso:**
  ```json
  {
    "message": "User deleted successfully"
  }
  ```
- **Possíveis Erros:**
  - `400 Bad Request`: Parâmetro email é necessário.
  - `404 Not Found`: Usuário não encontrado.


## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
```