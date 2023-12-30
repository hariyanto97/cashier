"use client";

import { loginAction } from "@/action";
import { Button, Input } from "..";
import { redirect } from "next/navigation";

const loginForm = () => {
  const clientLoginAction = async (formData: FormData) => {
    const result = await loginAction(formData);
    if (result.status === "success") redirect("/");
  };
  return (
    <form
      action={clientLoginAction}
      className="flex flex-col items-center w-full gap-4"
    >
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
      <Button type="submit">Login</Button>
    </form>
  );
};

export default loginForm;
