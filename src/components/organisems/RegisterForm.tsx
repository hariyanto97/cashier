"use client";

import { loginAction, registerAction } from "@/action";
import { Button, Input } from "..";
import { redirect } from "next/navigation";

const RegisterForm = () => {
  const clientRegisterAction = async (formData: FormData) => {
    const result = await registerAction(formData);
    if (result.status === "success") redirect("/login");
  };
  return (
    <form
      action={clientRegisterAction}
      className="flex flex-col items-center w-full gap-4"
    >
      <Input
        type="text"
        placeholder="Input your Full Name"
        label="Full name"
        name="fullName"
      />
      <Input
        type="text"
        placeholder="Input your Email"
        label="Email"
        name="email"
      />
      <Input
        type="password"
        placeholder="Input your Password"
        label="Password"
        name="password"
      />
      <Input
        type="number"
        placeholder="Input your Phone"
        label="Phone number"
        name="phone"
      />
      <Button type="submit">Register</Button>
    </form>
  );
};

export default RegisterForm;
