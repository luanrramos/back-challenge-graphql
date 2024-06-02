import { DataTypes } from "sequelize";
import { sequelize } from "../database/Sequelize";
import { table } from "console";

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
    },
  },
  {
    tableName: "projects",
    timestamps: false,
    
  }
);
