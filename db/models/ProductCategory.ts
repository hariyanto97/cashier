import { CreationOptional, DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "./dbConnect";

type ProductCategoryAttributes = {
  id: CreationOptional<number>;
  name: string;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
};

type ProductCategorysCreationAttributes = Optional<
  ProductCategoryAttributes,
  "id" | "createdAt" | "updatedAt"
>;

const ProductCategorys = sequelize.define<
  Model<ProductCategoryAttributes, ProductCategorysCreationAttributes>
>("ProductCategorys", {
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

export default ProductCategorys;
