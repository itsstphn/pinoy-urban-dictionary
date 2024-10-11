"use client";
import thumbsUp from "../assets/thumbs-up.svg";
import thumbsDown from "../assets/thumbs-down.svg";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function WordDefinition() {
  const path = usePathname();

  console.log("🚀 ~ WordDefinition ~ path:", path);
  return (
    <div className="bg-secondary p-5 flex flex-col rounded-[15px]">
      <h1 className="font-bold text-2xl  pb-7">Beshiefy</h1>

      <p className="leading-[1.2] text-sm pb-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quam.
        Possimus laudantium, eum vero excepturi nobis ratione fuga
        exercitationem at.
      </p>

      <p className="font-bold text-sm mb-5">John Doe</p>
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
