import { verifyAuth } from "@/lib/auth";
import Link from "next/link";
import DefineWordForm from "./../../components/DefineWordForm";

export default async function DefineWord() {
  const isAuth = await verifyAuth();

  if (!isAuth.user) {
    return (
      <div className="grid place-items-center h-32 w-full">
        Unauthorized! Login or create account first.
        <button></button>
      </div>
    );
  }

  return (
    <main className="container md:max-w-[720px] mx-auto p-3">
      <DefineWordForm></DefineWordForm>
    </main>
  );
}
