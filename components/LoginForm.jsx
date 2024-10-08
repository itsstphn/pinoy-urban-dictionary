"use client";

import { login } from "@/actions/auth-actions";
import Link from "next/link";
import { useFormState } from "react-dom";

export default function LoginForm() {
  const [formState, formAction] = useFormState(login, {});
  console.log("🚀 ~ SignUp ~ formState:", formState);

  return (
    <form
      action={formAction}
      className="bg-primary p-5 flex flex-col items-center"
    >
      <h1 className="text-secondary font-bold text-xl my-10">Log In</h1>

      <input
        type="text"
        name="username"
        placeholder="username"
        className="mb-5 p-2 mt-5 text-center rounded-lg"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="mb-5 p-2 text-center  rounded-lg"
      />
      <div className="h-[40px]">
        {formState.errors && <p className="text-red-500">{formState.errors}</p>}
      </div>
      <button
        type="submit"
        className="text-primary bg-secondary px-5 py-2 w-[150px] rounded-full  mt-10 mb-3 text-sm"
      >
        Log In
      </button>
      <Link
        href="/sign-up"
        className="text-secondary text-center text-sm px-5 py-2 w-[150px] border-secondary border-2 rounded-full mb-14"
      >
        Create Account
      </Link>
    </form>
  );
}
