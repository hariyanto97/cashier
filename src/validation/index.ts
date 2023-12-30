import { AuthValidation, RegisterValidation } from "@/utils";
import Validator from "fastest-validator";

const v = new Validator();

const registerShema = {
  fullName: { type: "string" },
  email: { type: "email" },
  password: { type: "string", min: 6, max: 100 },
  phone: { type: "number" },
};

const loginShema = {
  email: { type: "email" },
  password: { type: "string", min: 6, max: 100 },
};

export const authValidation = (params: AuthValidation) => {
  const data = params.type === "login" ? loginShema : registerShema;
  const check = v.compile(data);
  return check(params);
};
