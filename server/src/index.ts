import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { Users } from "./Entities/Users";
import { Projects } from "./Entities/Projects";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "mysql",
  database: "backend-challenge",
  username: "root",
  password: "password",
  logging: true,
  synchronize: true,
  entities: [Users, Projects],
});

const main = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!");
  } catch (error) {
    console.error("Error during Data Source initialization:", error);
    return; 
  }

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(3001, () => {
    console.log("Server running on port 3001.");
  });
};

main().catch((err) => {
  console.log(err);
});
