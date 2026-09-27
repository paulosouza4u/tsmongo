
DOCKER

command:
docker run -d --name betmongo -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=username_root -e MONGO_INITDB_ROOT_PASSWORD=senha_root -v "D:\laragon\data\mongo_data:/data/db" mongo:latest
--------------------------------------

npm start - roda a aplicação compilada
npm run dev - roda em modo desenvolvimento observando mudanças
--------------------------------------

- PARA TESTES - User

POST http://localhost:3000/users/register

registrar usuário

{
  "name": "Maria Silva",
  "email": "maria@email.com",
  "password": "123456"
}

POST http://localhost:3000/users/login

{
  "email": "maria@email.com",
  "password": "123456"
}

POST http://localhost:3000/users/me

Authorization: Bearer SEU_TOKEN

---

- PARA TESTES - Diretores

Todas as rotas exigem o header Authorization: Bearer SEU_TOKEN.

POST http://localhost:3000/directors

cadastrar diretor

{
  "name": "Christopher Nolan",
  "biography": "Diretor britânico conhecido por filmes de ficção científica.",
  "nationality": "Britânica"
}

PUT http://localhost:3000/directors/{id}

atualizar diretor

{
"name": "Christopher Nolan",
"biography": "Biografia atualizada",
"nationality": "Britânica"
}

GET http://localhost:3000/directors

listar diretores

GET http://localhost:3000/directors/{id}

buscar diretor por ID

GET http://localhost:3000/directors/{id}/movies

agregação do diretor com seus filmes

DELETE /directors/{id}

remover diretor

---

- PARA TESTES - Filmes

Todas as rotas exigem o header Authorization: Bearer SEU_TOKEN.

GET http://localhost:3000/movies

listar filmes

GET http://localhost:3000/movies/{id}

buscar filme por ID

POST http://localhost:3000/movies

cadastrar filme - O campo director deve conter o ID de um diretor existente.

{
  "title": "A Origem",
  "synopsis": "Um especialista em invadir sonhos recebe uma missão.",
  "releaseYear": 2010,
  "genre": "Ficção científica",
  "director": "665000000000000000000001"
}

PUT http://localhost:3000/movies/{id}

atualizar filme

{
  "title": "A Origem - Edição Especial",
  "releaseYear": 2010,
  "genre": "Ficção científica",
  "director": "665000000000000000000001"
}

DELETE http://localhost:3000/movies/{id}

deletar filme

--------------------------------------
