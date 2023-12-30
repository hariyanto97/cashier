import { CreationOptional, DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "./dbConnect";

type GoodsCategoryAttributes = {
  id: CreationOptional<number>;
  name: string;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
};

type GoodsCategorysCreationAttributes = Optional<
  GoodsCategoryAttributes,
  "id" | "createdAt" | "updatedAt"
>;

const GoodsCategorys = sequelize.define<
  Model<GoodsCategoryAttributes, GoodsCategorysCreationAttributes>
>("GoodsCategorys", {
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

export default GoodsCategorys;
