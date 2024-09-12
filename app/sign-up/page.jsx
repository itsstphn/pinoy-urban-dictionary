import Link from "next/link";

export default function LogIn() {
  return (
    <main className="container md:max-w-[720px] mx-auto p-4 ">
      <form className="bg-primary p-5 flex flex-col items-center">
        <h1 className="text-secondary font-bold text-xl my-10">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="username"
          className="mb-5 p-2 mt-5 text-center rounded-lg"
        />
        <input
          type="text"
          placeholder="password"
          className="mb-5 p-2 text-center  rounded-lg"
        />

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
    </main>
  );
}
