"use client";
import Link from "next/link";

export default function DefineWord() {
  return (
    <main className="container md:max-w-[720px] mx-auto p-3">
      <form className="bg-secondary p-5 md:p-10">
        <h1 className="text-lg font-bold mb-7">Define a word</h1>
        <input
          type="text"
          placeholder="Enter word"
          className="p-2 rounded-md border-2 border-[#333333]"
        />
        <textarea
          rows={5}
          type="text"
          placeholder="Define word"
          className="p-2 border-2 mb-7 rounded-md border-[#333] mt-3 w-full"
        />
        <div className="flex flex-col items-start my-3 gap-2.5">
          <button className="bg-accent py-3 px-8 text-white rounded-full">
            Submit
          </button>
          <Link href="/">
            <button className="py-3 px-8 text-accent border-2 border-accent rounded-full">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </main>
  );
}
