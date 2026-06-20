# Cadastro de Clientes API

API REST para gerenciamento de cadastro de clientes, desenvolvida com Java e Spring Boot.

## 🚀 Tecnologias

- Java 21
- Spring Boot 4.1.0
- Spring Data JPA
- PostgreSQL
- Lombok
- Maven

## 📋 Funcionalidades

- Cadastrar cliente
- Listar clientes
- Buscar cliente por ID
- Atualizar cliente
- Deletar cliente

## ⚙️ Como executar

### Pré-requisitos
- Java 21
- PostgreSQL
- Maven

### 2. Criar o banco de dados

Acesse o psql e execute:

    psql -U postgres
    CREATE DATABASE cadastro_clientes;

Confirme se o banco foi criado:

    \l

### 3. Configurar application.properties
```properties
spring.application.name=cadastro-cliente-api
spring.datasource.url=jdbc:postgresql://localhost:5432/cadastro_clientes
spring.datasource.username=postgres
spring.datasource.password=SUA_SENHA

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect

### 4. Rodar o projeto

    mvn spring-boot:run

A API estará disponível em http://localhost:8080

A API estará disponível em `http://localhost:8080`

## 5. 📁 Estrutura do projeto
cadastro-clientes/
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/adriano/cadastro_cliente_api/
│   │       │       ├── model/
│   │       │       ├── repository/
│   │       │       ├── service/
│   │       │       └── controller/
│   │       └── resources/
│   │           └── application.properties
│   └── pom.xml
├── frontend/
└── README.md

## 6. 🔗 Endpoints

### Clientes

| Método | URL | Descrição |
|--------|-----|-----------|
| GET | /clientes | Lista todos os clientes |
| GET | /clientes/{id} | Busca cliente por ID |
| POST | /clientes | Cadastra novo cliente |
| PUT | /clientes/{id} | Atualiza cliente |
| DELETE | /clientes/{id} | Remove cliente |

### Exemplos de requisição

#### POST /clientes
    {
        "nome": "João Silva",
        "email": "joao@email.com",
        "telefone": "47999999999",
        "cpf": "123.456.789-00"
    }

#### Resposta POST (201 Created)
    {
        "id": 1,
        "nome": "João Silva",
        "email": "joao@email.com",
        "telefone": "47999999999",
        "cpf": "123.456.789-00"
    }

#### PUT /clientes/{id}
    {
        "nome": "João Silva Atualizado",
        "email": "joao@email.com",
        "telefone": "47988888888",
        "cpf": "123.456.789-00"
    }

#### Resposta PUT (200 OK)
    {
        "id": 1,
        "nome": "João Silva Atualizado",
        "email": "joao@email.com",
        "telefone": "47988888888",
        "cpf": "123.456.789-00"
    }

#### DELETE /clientes/{id}
    Resposta: 204 No Content

##==========================&&=============================##


## 💻 Frontend

- React 19
- Vite
- Axios
- React Router DOM

## 🖥️ Como executar o frontend

### Pré-requisitos
- Node.js
- npm

### 1. Entrar na pasta do frontend
    cd frontend

### 2. Instalar dependências
    npm install

### 3. Rodar o projeto
    npm run dev

O frontend estará disponível em http://localhost:5173

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

Adriano Oliveira — [LinkedIn](www.linkedin.com/in/adriano-oliveira-a8336b387)
| [GitHub](https://github.com/adriano-oliveira-dev)