import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "./dbConnect";
import { UserAttributes } from "@/utils";

type UserCreationAttributes = Optional<
  UserAttributes,
  "id" | "createdAt" | "updatedAt" | "balance" | "roles"
>;

const Users = sequelize.define<Model<UserAttributes, UserCreationAttributes>>(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roles: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 8,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created_at",
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updated_at",
      allowNull: false,
    },
  }
);

export default Users;
