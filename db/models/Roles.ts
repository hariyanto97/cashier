import { CreationOptional, DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "./dbConnect";

type RoleAttributes = {
  id: CreationOptional<number>;
  name: string;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
};

type RolesCreationAttributes = Optional<
RoleAttributes,
  "id" | "createdAt" | "updatedAt"
>;

const Roles = sequelize.define<Model<RoleAttributes, RolesCreationAttributes>>("Roles", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
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
});

export default Roles;
