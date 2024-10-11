"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function WordList({ words }) {
  return (
    <div className="bg-primary w-[100%] p-5 py-7 flex flex-col gap-3.5">
      {words.map((wordItem, index) => {
        return (
          <Link key={index} href={`/?word=${wordItem.id}`}>
            <div className="bg-secondary p-3 py-4 flex rounded-lg items-center cursor-pointer">
              <h2 className="font-bold text-xl  mr-2">{wordItem.word}</h2>
              <p className="text-xs text-nowrap truncate ">
                {wordItem.definition}
              </p>
              <div className="min-w-5 ml-auto mr-1">
                <FontAwesomeIcon icon={faArrowRightToBracket} />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
