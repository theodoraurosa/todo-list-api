 Todo List API - Backend
 
 A API permite criar, listar, atualizar, e deletar tarefas.

Este é o backend de uma API de lista de tarefas (Todo List) desenvolvida com **Node.js**, **Express**, **TypeScript**, **Prisma** e **Zod**. 


## Tecnologias Utilizadas
    Linguagem: TypeScript 
Tecnologias: 
**Node.js**: Ambiente de execução para JavaScript no lado do servidor.
**Express.js**: Framework  para construção de APIs RESTful.
**TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript.
**Prisma**: ORM para interagir com bancos de dados SQL.
**Zod**: Biblioteca para validação de dados.
**Arquitetura**: Clean Architecture (ou Arquitetura Hexagonal) .
** Princípios**: SOLID, Programação Orientada a Objetos (OOP), Injeção de Dependência, Validação de Dados. 


**Padrões e Princípios de Arquitetura:**
Arquitetura de Software:
    ** Clean Architecture / Hexagonal Architecture (Arquitetura Limpa ou Arquitetura Hexagonal):**
        ◦ A estrutura do código segue padrões como camadas de domínio e casos de uso. O código é organizado para manter a lógica de negócios separada da infraestrutura e da camada de apresentação (como rotas de API). 
        ◦ Principais Características: 
            ▪ Repositórios: Definem a lógica de acesso aos dados. 
            ▪ Casos de Uso (UseCases): Contêm a lógica de negócios da aplicação (como criar, listar, atualizar, deletar tarefas). 
            ▪ Controladores: Responsáveis por manipular as requisições HTTP, interagir com os casos de uso e retornar a resposta para o cliente. 

    ** SOLID:**
        ◦ Os princípios SOLID (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) são usados para garantir que o código seja fácil de entender, testar e manter. 
        ◦ Exemplo: O controlador UpdateTaskController segue o princípio da Responsabilidade Única (Single Responsibility), pois é responsável apenas por lidar com a atualização de tarefas e delegar a lógica de negócios para o UseCase. 



## Requisitos

- **Node.js** (versão 20.12.2)
- **npm** (gerenciador de pacotes do Node.js)
- **Banco de dados** (SQLite)
   **Prisma** para gerenciar e interagir com o banco de dados.

## Instalação

1. Clone o repositório:
    git clone https://github.com/theodoraurosa/todo-list-api.git
    cd todo-list-api
    
2. Instale as dependências do projeto:
    npm install


3. Configure o banco de dados:
   - Crie um banco de dados no seu gerenciador de banco de dados (SQLite).

   **Exemplo de arquivo `.env`:**
   DATABASE_URL="file:./dev.db"

4. Execute as migrações do Prisma para configurar o banco de dados:
    npx prisma migrate dev
   

5. Gere os arquivos do Prisma (se necessário):
    npx prisma generate
 

## Rodando o Projeto

1. Para rodar o servidor em modo de desenvolvimento, use o comando:
    npm run dev
    

2. O servidor será iniciado e estará rodando em **http://localhost:3000** 
http://localhost:3000/api/v1/tasks
## Endpoints da API

Aqui estão os endpoints principais da API:
Método: POST
URL: http://localhost:3000/api/v1/tasks

### 1. **Criar Tarefa**
   - **Método**: `POST`
    **URL**: http://localhost:3000/api/v1/tasks
   - **Corpo da requisição**:
     ```json
     {
       "title": "Nova Tarefa",
       "category": "Trabalho"
     }
     ```
   - **Resposta**:
     ```json
     {
       "id": "1",
       "title": "Nova Tarefa",
       "category": "Trabalho",
       "completed": false,
       "createdAt": "2025-03-10T00:00:00.000Z",
       "updatedAt": "2025-03-10T00:00:00.000Z"
     }
     ```

### 2. **Listar Tarefas**
    **Método**: `GET `
   **url:** http://localhost:3000/api/v1/tasks?page=1&limit=29
   **Query Parameters (opcionais)**:
      `filter`: Filtro para o título ou categoria da tarefa.
      `page`: Número da página (paginação).
      `limit`: Número de itens por página.
   - **Resposta**:
     ```json
     [
       {
         "id": "1",
         "title": "Nova Tarefa",
         "category": "Trabalho",
         "completed": false,
         "createdAt": "2025-03-10T00:00:00.000Z",
         "updatedAt": "2025-03-10T00:00:00.000Z"
       }
     ]
     ```

### 3. **Obter Tarefa por ID**
   - **Método**: `GET /tasks/:id`
    **url:** http://localhost:3000/api/v1/tasks
   - **Parâmetros**:
     - `id`: ID da tarefa.
   - **Resposta**:
     ```json
     {
       "id": "1",
       "title": "Nova Tarefa",
       "category": "Trabalho",
       "completed": false,
       "createdAt": "2025-03-10T00:00:00.000Z",
       "updatedAt": "2025-03-10T00:00:00.000Z"
     }
     ```

### 4. **Atualizar Tarefa**
   - **Método**: `PUT /tasks/:id`
    **url:** http://localhost:3000/api/v1/tasks
   - **Corpo da requisição**:
     ```json
     {
       "title": "Tarefa Atualizada",
       "category": "Pessoal"
     }
     ```
   - **Resposta**:
     ```json
     {
       "id": "1",
       "title": "Tarefa Atualizada",
       "category": "Pessoal",
       "completed": false,
       "createdAt": "2025-03-10T00:00:00.000Z",
       "updatedAt": "2025-03-10T00:00:00.000Z"
     }
     ```

### 5. **Deletar Tarefa**
   - **Método**: `DELETE /tasks/:id`
    **url:** http://localhost:3000/api/v1/tasks
   - **Resposta**:
     - **Status 204**: Quando a tarefa é deletada com sucesso.

## Testando com Postman

 **Postman** para testar os endpoints da API.
  Aqui estão alguns passos básicos para configurar o Postman:

 **Importe a coleção** (se disponível) ou crie novas requisições.
 **Crie uma nova requisição** no Postman com os métodos HTTP apropriados (`POST`, `GET`, `PUT`, `DELETE`).
 **Insira os dados no corpo da requisição** ou use parâmetros de URL conforme necessário.
 **Envie a requisição** e veja a resposta.

## Scripts

- **`npm run dev`**: Inicia o servidor em modo de desenvolvimento.
- **`npx prisma migrate dev`**: Aplica as migrações no banco de dados.
- **`npx prisma generate`**: Gera o client do Prisma.


