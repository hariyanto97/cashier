"use server";

import {
  AuthErrorResponse,
  LoginValidation,
  RegisterValidation,
  UserAttributes,
} from "@/utils";
import { authValidation } from "@/validation";
import { Users } from "../../db/models";
import { compare, hash } from "bcrypt";
import { Optional, ValidationError } from "sequelize";
import { sign } from "jsonwebtoken";
import { redirect } from 'next/navigation'

const {
  JWT_SECRET,
  JWT_ACCESS_TOKEN_EXPIRED,
  JWT_SECRET_REFRESH_TOKEN,
  JWT_REFRESH_TOKEN_EXPIRED,
} = process.env;

type UserCreationAttributes = Optional<UserAttributes, "password">;

type LoginSuccessResponse = {
  status: "success";
  data: {
    token: string;
    refreshToken: string;
    user: UserCreationAttributes;
  };
  code: number;
};

type RegisterSuccessResponse = {
  status: "success";
  data: UserCreationAttributes;
  code: number;
};

export const loginAction = async (
  formData: FormData
): Promise<AuthErrorResponse | LoginSuccessResponse> => {
  const data: LoginValidation = {
    type: "login",
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const valid = authValidation(data);
  console.log("first", process.env);
  if (valid !== true)
    return {
      status: "error",
      message: valid as ValidationError[] | Promise<true | ValidationError[]>,
      code: 409,
    };
  const user = await Users.findOne({ where: { email: data.email } });
  if (!user) return { status: "error", message: "email not found", code: 409 };
  const isValidPassword = compare(data.password, user.dataValues.password);
  if (!isValidPassword) {
    return {
      status: "error",
      message: "Invalid password",
      code: 404,
    };
  }

  const jwtSecret: string = JWT_SECRET || "secret";
  const jwtExpired: string = JWT_ACCESS_TOKEN_EXPIRED || "1d";
  const jwtRefreshTOken: string = JWT_SECRET_REFRESH_TOKEN || "secret";
  const jwtRefreshTOkenExpired: string = JWT_REFRESH_TOKEN_EXPIRED || "1d";

  const token = sign({ ...user.dataValues, password: undefined }, jwtSecret, {
    expiresIn: jwtExpired,
  });

  const refreshToken = sign(
    { ...user.dataValues, password: undefined },
    jwtRefreshTOken || "secret",
    {
      expiresIn: jwtRefreshTOkenExpired || "1d",
    }
  );

  return {
    status: "success",
    data: {
      token,
      refreshToken,
      user: { ...user.dataValues, password: undefined },
    },
    code: 201,
  };
};

export const registerAction = async (
  formData: FormData
): Promise<AuthErrorResponse | RegisterSuccessResponse> => {
  const data: RegisterValidation = {
    type: "register",
    fullName: formData.get("fullName") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    phone: Number(formData.get("phone")),
  };
  const valid = authValidation(data);
  if (valid !== true)
    return {
      status: "error",
      message: valid as ValidationError[] | Promise<true | ValidationError[]>,
      code: 400,
    };
  const user = await Users.findOne({ where: { email: data.email } });
  if (user)
    return { status: "error", message: "email already exist", code: 409 };
  const password = await hash(data.password, 10);

  const cretedUser = await Users.create({
    ...data,
    password,
    avatar: "default",
  });

  return {
    status: "success",
    data: { ...cretedUser.dataValues, password: undefined },
    code: 201,
  };
};
