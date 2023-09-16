import Image from "next/image";
import React from "react";
import menuImg from "../public/assets/projects/shinobi-stars-menu.png";
import gameImg from "../public/assets/projects/shinobi-stars-game.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function shinobi() {
  return (
    <div className="w-full mx-auto pb-16">
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
        <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <div className="col-span-2">
            <p className="gradient-1-text">Shinobi Stars</p>
            <h2>Overview</h2>
            <p className="py-2">
              Shinobi Stars is a ninja-run game inspired from the Naruto series.
              This was the first project I created and it allowed me to get a
              gist of what I was diving into with programming.
            </p>
            <p className="py-2">
              The technologies used were Python and the PyGame library for
              game development, and Photoshop for sprite creation. The game
              mainly involves the use of object-oriented programming for most of
              the code. Most of the code is simple and easy to understand, however,
              I may turn the idea of this game to a much more playable game on
              iOS.
            </p>
            <p className="py-2">
              Overall, this project was one that I loved to create and
              shed some light towards the joy that is game development.
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
                  PyGame
                </p>
                <p className="text-gray-300 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Photoshop
                </p>
              </div>
            </div>
          </div>
          <div className="w-screen max-w-[1240px] h-screen flex flex-col items-center">
            <div className="sm:w-4/5 sm:h-1/2 lg:w-1/2 lg:h-1/3 w-5/6 h-full p-4 rounded-xl shadow-xl shadow-gray-800 hover:shadow-gray-700 ease-in duration-300">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/d3BwrYiAwRI"
                title="Shinobi Stars - Game Demo"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="grid pt-8 md:grid-cols-2 gap-8">
              <Image
                className="h-auto w-full shadow-xl shadow-gray-800 rounded-xl group hover:scale-125 hover:cursor-zoom-in ease-in-out duration-500"
                src={menuImg}
              />
              <Image
                className="h-auto w-full shadow-xl shadow-gray-800 rounded-xl group hover:scale-125 hover:cursor-zoom-in ease-in-out duration-500"
                src={gameImg}
              />
            </div>
            <Link href="/#projects">
              <p className="underline cursor-pointer hover:gradient-1-text hover:font-normal ease-in duration-300 p-8">
                Back
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default shinobi;
