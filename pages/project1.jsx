import Image from "next/image";
import React from "react";
import menuImg from "../public/assets/projects/shinobi-stars-menu.png";
import gameImg from "../public/assets/projects/shinobi-stars-game.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function project1() {
  return (
    <div className="w-full py-16">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          unoptimized
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={gameImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2">Shinobi Stars</h2>
          <h3>Game</h3>
        </div>
      </div>
      <div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p className="gradient-1-text">Project 1</p>
            <h2>Overview</h2>
            <p>
              Explain what the project is
              aowidhseioufhnlkihawkdhakljdhakljwhrfkljahskjdhakljwhdklajwhdklajhwdkljh
              awjdhkalkdjwh l awjkdh klajwhd kljahkl jwhdakljwhd kjah dkjwahd
              ljkhl kjwhaklj hdkwlajh dlkjwahkl djhajklwh lgfhisue bwfhkjlsh
            </p>
            <a target="_blank" href="https://mohue.itch.io/shinobi-stars">
              <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">
                Link
              </button>
            </a>
            <button className="hidden px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">
              Code
            </button>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-800 rounded-xl p-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-4 md:grid-cols-1">
                <p className="text-gray-300 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Python
                </p>
                <p className="text-gray-300 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Pygame Lib
                </p>
                <p className="text-gray-300 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Photoshop
                </p>
              </div>
            </div>
          </div>
          <div className="w-[480px] h-[240px] lg:w-[800px] lg:h-[400px]">
            <iframe
            className="w-full h-full"
              src="https://www.youtube.com/embed/d3BwrYiAwRI"
              title="Shinobi Stars - Game Demo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <Link href="/#projects">
            <p className="underline cursor-pointer hover:gradient-1-text ease-in duration-300">
              Back
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default project1;
