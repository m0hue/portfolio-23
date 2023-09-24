import Image from "next/image";
import React from "react";
import menuImg from "../public/assets/projects/tetris-menu.png";
import gameImg from "../public/assets/projects/tetris-game.png";
import Link from "next/link";
import SkillItem from "@/components/SkillItem";
import reactImg from "../public/assets/skills/react.png";
import jsImg from "../public/assets/skills/javascript.png";
import fbImg from "../public/assets/skills/firebase.png";

function tetris() {
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
          <h2 className="py-2">Tetris</h2>
          <h3>Game</h3>
        </div>
      </div>
      <div>
        <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <div className="col-span-2">
            <p className="gradient-1-text">Tetris</p>
            <h2>Overview</h2>
            <p className="py-2">
              The Tetris game is a game I developed while learning React. This
              was the first project I created with React while following
              freeCodeCamp&apos;s lessons. The entire game interface and
              interactions are crafted using React, which allowed me to harness
              the technology effectively.
            </p>
            <p className="py-2">
              The game offers a responsive design with a user interface designed
              for ease of use, featuring intuitive controls for an enjoyable and
              accessible experience. The codebase is structured for scalability,
              making it easy to extend and maintain. The project adheres to
              clean code structure and version control. This React project is
              not just a game; it initiated my ability to create interactive web
              applications.
            </p>
            <a
              target="_blank"
              href="https://github.com/m0hue/m0hue.github.io/tree/main/tetris"
            >
              <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">
                Code
              </button>
            </a>
            <a target="_blank" href="https://mh-tetris.web.app">
              <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">
                Demo
              </button>
            </a>
          </div>
          <div className="col-span-4 md:col-span-1">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-1 gap-8">
                <SkillItem title="React" imgSrc={reactImg} />
                <SkillItem title="JavaScript" imgSrc={jsImg} />
                <SkillItem title="Firebase" imgSrc={fbImg} />
              </div>
            </div>
          </div>
          <div className="w-screen max-w-[1240px] h-screen flex flex-col items-center">
            <div className="grid pt-8 md:grid-cols-2 gap-8">
              <Image
                unoptimized
                className="h-auto w-full shadow-xl shadow-gray-800 rounded-xl group hover:scale-125 hover:cursor-zoom-in ease-in-out duration-500"
                src={menuImg}
              />
              <Image
                unoptimized
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

export default tetris;
