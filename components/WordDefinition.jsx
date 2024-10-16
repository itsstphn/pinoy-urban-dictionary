"use client";
import thumbsUp from "../assets/thumbs-up.svg";
import thumbsDown from "../assets/thumbs-down.svg";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function WordDefinition() {
  const searchParams = useSearchParams();

  const word = searchParams.get("word");

  const [wordDisplay, setWordDisplay] = useState(null);
  const [definitionDisplay, setDefinitionDisplay] = useState(null);
  const [userDisplay, setUserDisplay] = useState(null);
  console.log("🚀 ~ WordDefinition ~ wordDisplay:", wordDisplay);

  useEffect(() => {
    async function fetchWord() {
      if (word) {
        try {
          const response = await fetch(`/api/words/${word}`);
          const data = await response.json();
          console.log("🚀 ~ fetchWord ~ data:", data);

          setWordDisplay(data?.word.word);
          setDefinitionDisplay(data?.word.definition);
          setUserDisplay(data?.word.username);
        } catch (error) {
          console.error(error);
        }
      } else {
        try {
          const response = await fetch(`/api/words`);
          const data = await response.json();
          console.log("🚀 ~ fetchWord ~ data:", data);
          setWordDisplay(data?.word.word);
          setDefinitionDisplay(data?.word.definition);
          setUserDisplay(data?.word.username);
        } catch (error) {
          console.error(error);
        }
      }
    }
    fetchWord();
  }, [word]);

  console.log("🚀 ~ WordDefinition ~ path:", word);

  return (
    <div className="bg-secondary p-5 flex flex-col rounded-[15px]">
      <h1 className="font-bold text-2xl  pb-7">{wordDisplay}</h1>

      <p className="leading-[1.2] text-sm pb-3">{definitionDisplay}</p>

      <p className="font-bold text-sm mb-5">{userDisplay}</p>
      <div className="pt-3 flex justify-between">
        <div className="flex gap-3 ">
          <div className=" cursor-pointer bg-white w-[50px] h-[50px] flex flex-col justify-center items-center">
            <div className="mb-1">
              <Image src={thumbsUp} alt="thumbs-up" />
            </div>

            <p className="leading-none text-accent text-sm">11</p>
          </div>
          <div className="cursor-pointer bg-white w-[50px] h-[50px] flex flex-col justify-center items-center">
            <div className="mb-0.5">
              <Image src={thumbsDown} alt="thumbs-down" />
            </div>
            <p className="leading-none text-accent text-sm">11</p>
          </div>
        </div>
        <div className="self-end">
          <p className="text-xs">Added: Added July 5, 2024</p>
        </div>
      </div>
    </div>
  );
}
