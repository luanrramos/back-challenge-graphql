## **Prerequisites**
Before you get started, make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)  
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager
- [Docker](https://docs.docker.com/engine/install/)


# Running the project. 

First, you must have to have a mongo image running. I use to use docker to help me with it. So, I recommend you to also use docker.
The first thing you should do is exec the following command:

    docker run --name mongo -p 27017:27017  mongo
  
Then, check whether the mongo image is running with the command:

    docker ps 
  
  
After do that. You must have to install the dependencies with the command:

    npm install
    // or yarn 
  
Then, just start the API with the command:

    npm run dev   
    // or yarn dev
  
  Feito! Após rodar o projeto precisamos configurar os esquemas SQL no Adminer

# Adicionar esquema SQL no Adminer

Com o projeto rodando você agora deve configurar 