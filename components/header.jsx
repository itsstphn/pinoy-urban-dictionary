import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/PUD.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-primary  h-[60px]">
      <div className="container mx-auto px-3 flex justify-around items-center align-center h-full">
        <div>
          <Image src={logo} alt="logo"></Image>
        </div>

        <input
          className="outline-none border-none rounded h-[30px] p-2"
          type="text"
        />

        <div className="w-5 hidden ">
          <FontAwesomeIcon icon={faMagnifyingGlass} color="white" size="xs" />
        </div>
        <div className="w-5">
          <FontAwesomeIcon icon={faUser} color="white" size="xs" />
        </div>
      </div>
    </header>
  );
}
