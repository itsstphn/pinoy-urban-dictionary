import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default function LogIn() {
  return (
    <main className="container md:max-w-[720px] mx-auto p-4 ">
      <LoginForm></LoginForm>
    </main>
  );
}
