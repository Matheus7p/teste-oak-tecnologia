# Projeto de Criar e Listar Produtos

Este é um projeto de teste para a empresa Oak Tecnologias. A aplicação permite criar e listar produtos de forma simples e intuitiva.

![image](https://github.com/user-attachments/assets/3faf8625-4f6f-476d-a60b-4f99ef347c8e)


## Tecnologias Utilizadas

### Frontend
- **React**: Biblioteca para construção de interfaces de usuário.
- **React Query**: Biblioteca para gerenciar o estado e o cache de dados assíncronos.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva.

### Backend
- **Fastify**: Framework web para Node.js, otimizado para desempenho.
- **Prisma**: ORM para Node.js e TypeScript, que facilita a interação com o banco de dados.


## Estrutura do Repositório

O repositório contém duas pastas principais:

- `frontend`: Contém a aplicação frontend, onde os usuários podem interagir com a interface.
- `backend`: Contém a API backend que gerencia as operações relacionadas aos produtos.

## Instruções de Instalação

Para rodar o projeto, siga as instruções abaixo:

1. Clone este repositório para sua máquina local:
   ```bash
   git clone https://github.com/Matheus7p/teste-oak-tecnologia.git
   cd test-oak-tecnologia

2. Acesse a pasta do frontend e instale as dependências:
   ```bash
   cd frontend
   npm install

3. Acesse a pasta do backend e instale as dependências:
   ```bash
   cd backend
   npm install

4. Na raiz da pasta do backend, crie um arquivo chamado .env e adicione a seguinte variável de ambiente:
   ```bash
   DATABASE_URL="mongodb+srv://teste:teste123@products.tzejf.mongodb.net/products?retryWrites=true&w=majority&appName=products"

5. Inicie o servidor backend:
    ```bash
    npm run dev

6. Em outra aba do terminal, inicie o servidor frontend:
   ```bash
   cd frontend
   npm run dev

Agora você deve conseguir acessar a aplicação em seu navegador.
