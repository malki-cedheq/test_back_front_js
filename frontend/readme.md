# Frontend para Gerenciamento de Usuários

Este projeto contém a interface frontend para interagir com a API de gerenciamento de usuários. Ele permite criar, atualizar, obter, listar e deletar usuários através de formulários simples feitos em HTML e JavaScript.

## Como Executar o Frontend

## Instalação e Execução
1. Clone este repositório:
   ```sh
   git clone https://github.com/malki-cedheq/test_back_front_js.git
   cd test_back_front_js
   cd frontend
   ```

2. Abra o arquivo `index.html` em um navegador da sua escolha.

O frontend é uma página web simples que se comunica com a API do backend, permitindo realizar as operações de gerenciamento de usuários. Para que ele funcione corretamente, a API precisa estar rodando.

## Funcionalidades

A interface do frontend permite que o usuário interaja com a API para realizar as seguintes operações:

### 1. Criar Usuário
Preencha os campos `Name`, `Email` e `Password` e clique em "Create User". Isso envia uma solicitação `POST` para a API para criar um novo usuário.

### 2. Atualizar Usuário
Forneça um email para o usuário a ser atualizado, juntamente com os novos valores de `Name` e/ou `Password`. Clique em "Update User" para enviar uma solicitação `PUT` para a API.

### 3. Obter Usuário
Insira o `Email` de um usuário existente e clique em "Get User". O resultado será exibido abaixo no formato JSON, mostrando as informações do usuário.

### 4. Obter Todos os Usuários
Clique no botão "Get All Users" para enviar uma solicitação `GET` e obter a lista completa de usuários. A resposta será exibida abaixo.

### 5. Deletar Usuário
Forneça o `Email` de um usuário e clique em "Delete User" para enviar uma solicitação `DELETE` e remover o usuário da base de dados.

## Requisitos

- Nenhum requisito especial para rodar o frontend, apenas um navegador moderno que suporte JavaScript.
- A API deve estar rodando no servidor local (`http://localhost:3000`) ou em outro ambiente configurado.

## Como Funciona

O frontend utiliza JavaScript para enviar requisições HTTP para a API backend. As requisições são feitas usando a função `fetch`, e as respostas são exibidas na interface para o usuário.

### Estrutura de Arquivos

- **index.html**: O arquivo HTML principal que contém a estrutura da página.
- **script.js**: Contém o código JavaScript responsável por enviar as requisições para a API.

## Possíveis Melhorias

- **Estilização**: O frontend atualmente é bem simples. Pode-se adicionar CSS ou frameworks como Bootstrap para melhorar a aparência e responsividade.
- **Validação de Formulário**: Pode-se adicionar validação no lado do cliente para garantir que os dados inseridos estejam corretos antes de enviá-los para a API.
- **Feedback de Erros**: A interface pode ser aprimorada para exibir erros de forma mais amigável (por exemplo, se a API retornar um erro ou se um campo obrigatório não for preenchido).

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
