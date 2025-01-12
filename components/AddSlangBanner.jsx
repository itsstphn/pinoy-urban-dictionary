import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function AddSlangBanner() {
  return (
    <div className="bg-primary py-4 flex px-3 justify-around items-center ">
      <div>
        <h2 className="tracking-tight text-white">Know a slang not listed?</h2>
      </div>
      <Link href="/define-word">
        <div className="bg-accent w-fit flex gap-1.5 justify-center items-center py-3 px-4 rounded-[35px]">
          <div className="w-4">
            <FontAwesomeIcon icon={faPlus} color="white" />
          </div>
          <p className="text-white text-xs font-bold">Define Word</p>
        </div>
      </Link>
    </div>
  );
}
