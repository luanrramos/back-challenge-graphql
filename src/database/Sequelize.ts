import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  host: "localhost",
  database: "db",
  port: 4040,
  username: "dev",
  password: "dev",
  dialect: "mysql",
});
