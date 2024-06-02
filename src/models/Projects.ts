import { DataTypes } from "sequelize";
import { sequelize } from "../database/Sequelize";
import { table } from "console";
import { User } from "./User";

export const Project = sequelize.define(
  "Project",
  {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      field: "id",
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: "name",
    },
    price: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      field: "price",
    },
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: "user_id",
      references: {model: User, key: "id"}
    },
  },
  {
    tableName: "projects",
    timestamps: false,
    
  }
);
