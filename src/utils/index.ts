import { CreationOptional, ValidationError } from "sequelize";

export type RegisterValidation = {
  type: "register";
  fullName: string;
  email: string;
  password: string;
  phone: number;
};
export type LoginValidation = {
  type: "login";
  email: string;
  password: string;
};

export type UserAttributes = {
  id: CreationOptional<number>;
  fullName: string;
  email: string;
  password: string;
  avatar: string;
  roles: CreationOptional<number>;
  phone: number;
  balance: CreationOptional<number>;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
};

export type DBMode = "development" | "test" | "production";

export type AuthValidation = RegisterValidation | LoginValidation;

export type AuthErrorResponse = {
  status: "error";
  message: string | ValidationError[] | Promise<true | ValidationError[]>;
  code : number
};
