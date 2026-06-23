# Cadastro de Clientes

Sistema fullstack de cadastro de clientes desenvolvido com Java, Spring Boot e React.

## 🚀 Tecnologias

### Backend
- Java 21
- Spring Boot 4.1.0
- Spring Data JPA
- Spring Validation
- PostgreSQL
- Lombok
- Maven

### Frontend
- React 19
- Vite
- Axios
- React Router DOM
- CSS puro

### Ferramentas
- Postman (testes de API)
- IntelliJ IDEA (backend)
- VS Code (frontend)
- Git e GitHub

## 📋 Funcionalidades

- Listar clientes
- Cadastrar cliente
- Editar cliente
- Deletar cliente
- Validação de dados
- Tratamento de erros

## ⚙️ Como executar

### Pré-requisitos
- Java 21
- PostgreSQL
- Node.js
- npm

### Backend

#### 1. Clonar o repositório
    git clone https://github.com/adriano-oliveira-dev/cadastro-clientes.git

#### 2. Criar o banco de dados
    psql -U postgres
    CREATE DATABASE cadastro_clientes;

#### 3. Configurar o backend/src/main/resources/application.properties
    spring.datasource.url=jdbc:postgresql://localhost:5432/cadastro_clientes
    spring.datasource.username=postgres
    spring.datasource.password=SUA_SENHA

    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect

    server.error.include-stacktrace=never

#### 4. Rodar o backend
    cd backend
    mvn spring-boot:run

A API estará disponível em http://localhost:8080

### Frontend

#### 1. Instalar dependências
    cd frontend
    npm install

#### 2. Rodar o frontend
    npm run dev

O frontend estará disponível em http://localhost:5173

## 🔗 Endpoints

### Clientes

| Método | URL | Descrição |
|--------|-----|-----------|
| GET | /clientes | Lista todos os clientes |
| GET | /clientes/{id} | Busca cliente por ID |
| POST | /clientes | Cadastra novo cliente |
| PUT | /clientes/{id} | Atualiza cliente |
| DELETE | /clientes/{id} | Remove cliente |

### Exemplo de corpo da requisição (POST/PUT)

    {
        "nome": "João Silva",
        "email": "joao@email.com",
        "telefone": "47999999999",
        "cpf": "123.456.789-00"
    }

### Resposta POST (201 Created)

    {
        "id": 1,
        "nome": "João Silva",
        "email": "joao@email.com",
        "telefone": "47999999999",
        "cpf": "123.456.789-00"
    }

### Resposta PUT (200 OK)

    {
        "id": 1,
        "nome": "João Silva Atualizado",
        "email": "joao@email.com",
        "telefone": "47988888888",
        "cpf": "123.456.789-00"
    }

### DELETE /clientes/{id}
    Resposta: 204 No Content

## 📁 Estrutura do projeto

    cadastro-clientes/
    ├── backend/
    │   ├── src/
    │   │   └── main/
    │   │       ├── java/
    │   │       │   └── com/adriano/cadastro_cliente_api/
    │   │       │       ├── controller/
    │   │       │       ├── exception/
    │   │       │       ├── model/
    │   │       │       ├── repository/
    │   │       │       └── service/
    │   │       └── resources/
    │   │           └── application.properties
    │   └── pom.xml
    └── frontend/
        ├── src/
        │   ├── components/
        │   ├── pages/
        │   └── services/
        └── package.json

## Autor

Adriano Oliveira — LinkedIn: (www.linkedin.com/in/adriano-oliveira-a8336b387) | GitHub: (https://github.com/adriano-oliveira-dev)