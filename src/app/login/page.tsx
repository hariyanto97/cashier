import { LoginForm } from "@/components";

export default function Page() {
  return (
    <div className="w-full flex items-center justify-center h-screen">
      <div className="flex flex-col w-full max-w-[480px] items-center gap-4">
        <h1 className="text-lg">Register</h1>
        <h3 className="text-sm">Hi, Welcome</h3>
        <LoginForm />
      </div>
    </div>
  );
}
