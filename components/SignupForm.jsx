"use client";

import Link from "next/link";
import { signUp } from "@/actions/auth-actions";
import { useFormState } from "react-dom";

export default function SignUpForm() {
  const [formState, formAction] = useFormState(signUp, {});
  console.log("🚀 ~ SignUp ~ formState:", formState);

  return (
    <form
      action={formAction}
      className="bg-primary p-5 flex flex-col items-center"
    >
      <h1 className="text-secondary font-bold text-xl my-10">Create Account</h1>

      <input
        type="text"
        name="username"
        placeholder="username"
        className="mb-5 p-2 mt-5 text-center rounded-lg"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        required
        className="mb-5 p-2 text-center  rounded-lg"
      />

      <div className="h-[40px]">
        {formState.errors &&
          Object?.values(formState.errors).map((error, index) => (
            <p className="text-red-500" key={index}>
              {error}
            </p>
          ))}
      </div>
      <button
        type="submit"
        className="text-primary bg-secondary px-5 text-center py-2 w-[150px] rounded-full  mt-10 mb-3 text-sm"
      >
        Create Account
      </button>
      <Link
        href="/log-in"
        className="text-secondary text-center text-sm px-5 py-2 w-[150px] border-secondary border-2 rounded-full mb-14"
      >
        Log In
      </Link>
    </form>
  );
}
