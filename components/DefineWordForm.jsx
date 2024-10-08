"use client";
import { defineWord } from "@/actions/word-actions";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useFormState } from "react-dom";

export default function DefineWordForm() {
  const [formState, formAction] = useFormState(defineWord, {});

  console.log("🚀 ~ DefineWordForm ~ formState:", formState);

  if (formState.success) {
    redirect("/");
  }

  return (
    <form action={formAction} className="bg-secondary p-5 md:p-10">
      <h1 className="text-lg font-bold mb-7">Define a word</h1>
      <input
        type="text"
        name="word"
        placeholder="Enter word"
        className="p-2 rounded-md border-2 border-[#333333]"
      />
      <textarea
        rows={5}
        name="definition"
        type="text"
        placeholder="Define word"
        className="p-2 border-2 mb-3 rounded-md border-[#333] mt-3 w-full"
      />
      <div className="h-[40px]">
        {formState.errors &&
          Object.keys(formState.errors).map((error) => (
            <p key={error} className="text-red-500">
              {formState.errors[error]}
            </p>
          ))}
      </div>
      <div className="flex flex-col items-start my-3 gap-2.5">
        <button
          type="submit"
          className="bg-accent py-3 px-8 text-white rounded-full"
        >
          Submit
        </button>
        <Link href="/">
          <button className="py-3 px-8 text-accent border-2 border-accent rounded-full">
            Cancel
          </button>
        </Link>
      </div>
    </form>
  );
}
