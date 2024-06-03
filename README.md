# 🚀 SolarMarket Back-end Challenge

<img src="screenshots-github/Printscreen - challenge.png">

## Challenge completed

DESAFIO: [AQUI](https://github.com/luanrramos/back-challenge-graphql/blob/main/README.md)  
INSTRUÇÕES: [AQUI](https://github.com/luanrramos/back-challenge-graphql/blob/JR-luanramos/INSTRUCTIONS.md)

## Technologies

- [Node](https://nodejs.org/en)
- [TypeScript](https://www.typescriptlang.org/)
- [GraphQL](https://graphql.org/)
- [Apollo GraphQL Server](https://www.apollographql.com/docs/)
- [Sequelize ORM](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)
- [Docker](https://docs.docker.com/engine/install/)

## **Project Structure**

Here's a intuitive overview of the project structure:

```
[PROJECT]
├── src/
│   ├── index.ts            # Entry point of the application.
│   └── database/
│       └── Sequelize.ts    # Database configuration and initialization.
│
│   └── models/
│       ├── Projects.ts     # Data model for projects.
│       └── User.ts         # Data model for users.
|
│   └── migrations/
│       └── 01_setup.sql     # Project Migrations schema
│               
|
├── .gitignore              # Git ignore file.
├── package.json            # NPM package file.
├── README.md               # This file.
├── INSTRUCTIONS.md         # Instructions for setup the environment of this project.
├── schema.sql              # Schema SQL file containing queries database
├── docker-compose.yml      # YAML file is used to configure application services
└── tsconfig.json           # TypeScript configuration file.
```

- **src/index.ts**: Entry point of the application. Initializes the server and sets up the routes or GraphQL schema.
- **src/database/Sequelize.ts**: Database configuration and initialization.
- **src/models/Projects.ts**: Contains the data model for projects defined by Sequelize.
- **src/models/User.ts**: Contains the data model for users.
- **.gitignore**: Git ignore file. You can modify this file to exclude certain files and directories from Git.
- **package.json**: NPM package file. You can modify this file to add or remove dependencies for your server.
- **README.md**: This file. You can modify this file to provide more detailed instructions for your server.
- **INSTRUCTIONS.md**: Instructions for setting up the environment of this project.
- **schema.sql**: Schema SQL file containing queries for the database, you need to follow the [INSTRUCTIONS](https://github.com/luanrramos/back-challenge-graphql/blob/JR-luanramos/INSTRUCTIONS.md) to run the project saving queries database in Adminer Local instance.
- **docker-compose.yml**: YAML file to configure application services.
- **tsconfig.json**: TypeScript configuration file. You can modify this file to change the TypeScript compiler options for your codebase.


## Q.A

1. How did you decide which technologies to use as part of your solution

- Fazer este desafio foi um divisor de águas para mim. Embora minha especialidade fosse front-end, ao trabalhar nesse desafio, descobri que me dou super bem com o back-end também. Como não tinha muita experiência com tecnologias back-end, segui detalhadamente a documentação do [Apollo Server](https://www.apollographql.com/docs/apollo-server/). 

- Baseado nas orientações, utilizei Node, Apollo GraphQL e TypeScript para o desenvolvimento. Para o banco de dados, optei pelo MySQL, pois já possuo afinidade com ele, utilizando o Sequelize como ORM. Essa abordagem me permitiu aplicar conhecimentos existentes enquanto aprendia novas tecnologias.


2. Are there any improvements you could make to your submission

- Além do que foi pedido no desafio, implementei um simples sistema de autenticação onde, basicamente, cada usuário da aplicação pode possuir apenas 1 email pessoal, reduzindo uma taxa de erro por duplicação.

3. What would you do differently if you were allocated more time

- Focaria nas boas práticas de programação do back-end, incluindo Clean Architecture, Design Patterns e S.O.L.I.D.
