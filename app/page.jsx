import Image from "next/image";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import thumbsUp from "../assets/thumbs-up.svg";
import thumbsDown from "../assets/thumbs-down.svg";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="container p-3 flex flex-col gap-5">
        <div className="bg-primary py-4 flex px-3 justify-around items-center ">
          <div>
            <h2 className="tracking-tight text-white">
              Know a slang not listed?
            </h2>
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

        <div className="bg-secondary p-5 flex flex-col rounded-[15px]">
          <h1 className="font-bold text-2xl  pb-7">Beshiefy</h1>

          <p className="leading-[1.2] text-sm pb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
            quam. Possimus laudantium, eum vero excepturi nobis ratione fuga
            exercitationem at.
          </p>

          <p className="font-bold text-sm mb-5">John Doe</p>
          <div className="pt-3 flex justify-between">
            <div className="flex gap-3 ">
              <div className="bg-white w-[50px] h-[50px] flex flex-col justify-center items-center">
                <div className="mb-1">
                  <Image src={thumbsUp} alt="thumbs-up" />
                </div>

                <p className="leading-none text-accent text-sm">11</p>
              </div>
              <div className="bg-white w-[50px] h-[50px] flex flex-col justify-center items-center">
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

        <div className="bg-primary w-[100%] p-5 py-7 flex flex-col gap-3.5">
          <div className="bg-secondary p-3 py-4 flex rounded-lg items-center">
            <h2 className="font-bold text-xl min-w-[50px] max-w-[70px] mr-2">
              Kiffy
            </h2>
            <p className="text-xs text-nowrap truncate ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              quo doloremque amet culpa necessitatibus at autem aperiam
              veritatis illo esse?
            </p>
            <div className="min-w-5 ml-auto mr-1">
              <FontAwesomeIcon icon={faArrowRightToBracket} />
            </div>
          </div>
          <div className="bg-secondary p-3 py-4 flex rounded-lg items-center">
            <h2 className="font-bold text-xl min-w-[50px] max-w-[70px] mr-2">
              Kiffy
            </h2>
            <p className="text-xs text-nowrap truncate ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              quo doloremque amet culpa necessitatibus at autem aperiam
              veritatis illo esse?
            </p>
            <div className="min-w-5 ml-auto mr-1">
              <FontAwesomeIcon icon={faArrowRightToBracket} />
            </div>
          </div>
          <div className="bg-secondary p-3 py-4 flex rounded-lg items-center">
            <h2 className="font-bold text-xl min-w-[50px] max-w-[70px] mr-2">
              Kiffy
            </h2>
            <p className="text-xs text-nowrap truncate ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              quo doloremque amet culpa necessitatibus at autem aperiam
              veritatis illo esse?
            </p>
            <div className="min-w-5 ml-auto mr-1">
              <FontAwesomeIcon icon={faArrowRightToBracket} />
            </div>
          </div>
          <div className="bg-secondary p-3 py-4 flex rounded-lg items-center">
            <h2 className="font-bold text-xl min-w-[50px] max-w-[70px] mr-2">
              Kiffy
            </h2>
            <p className="text-xs text-nowrap truncate ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              quo doloremque amet culpa necessitatibus at autem aperiam
              veritatis illo esse?
            </p>
            <div className="min-w-5 ml-auto mr-1">
              <FontAwesomeIcon icon={faArrowRightToBracket} />
            </div>
          </div>
          <div className="bg-secondary p-3 py-4 flex rounded-lg items-center">
            <h2 className="font-bold text-xl min-w-[50px] max-w-[70px] mr-2">
              Kiffy
            </h2>
            <p className="text-xs text-nowrap truncate ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              quo doloremque amet culpa necessitatibus at autem aperiam
              veritatis illo esse?
            </p>
            <div className="min-w-5 ml-auto mr-1">
              <FontAwesomeIcon icon={faArrowRightToBracket} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
