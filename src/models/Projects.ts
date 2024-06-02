import { DataTypes } from "sequelize";
import { sequelize } from "../database/Sequelize";
import { table } from "console";

export const User = sequelize.define(
  "User",
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
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: "email",
      unique: true,
    },
    createdAt: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: "createdAt",
    },
    updatedAt: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: "updatedAt",
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);
