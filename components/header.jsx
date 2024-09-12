import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/PUD.svg";
import Image from "next/image";
import { verifyAuth } from "@/lib/auth";
import Link from "next/link";
import AccountMenu from "./accountMenu";

export default async function Header() {
  const isAuth = await verifyAuth();

  return (
    <header className="bg-primary  h-[60px] md:h-[120px]">
      <div className="container mx-auto px-3 flex md:flex-col md:gap-5 justify-around md:justify-center items-center align-center h-full">
        <div className="md:hidden">
          <Link href="/">
            <Image src={logo} alt="logo"></Image>
          </Link>
        </div>

        <div className="hidden md:block">
          <Link href="/">
            <h1 className="text-white font-bold">Pinoy Urban Dictionary</h1>
          </Link>
        </div>

        <div className="flex justify-around md:max-w-[500px] items-center align-center w-full ">
          <input
            className="outline-none border-none rounded h-[30px] md:w-[70%] p-2"
            type="text"
          />

          <div className="w-5 hidden md:block">
            <FontAwesomeIcon icon={faMagnifyingGlass} color="white" size="lg" />
          </div>
          <AccountMenu></AccountMenu>
        </div>
      </div>
    </header>
  );
}
