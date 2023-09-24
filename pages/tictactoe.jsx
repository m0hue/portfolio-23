import Image from "next/image";
import React from "react";
import menuImg from "../public/assets/projects/ttt-menu.png";
import gameImg from "../public/assets/projects/ttt-game.png";
import Link from "next/link";
import SkillItem from "@/components/SkillItem";
import pythonImg from "../public/assets/skills/python.png";
import pygameImg from "../public/assets/skills/pygame.png";

function tictactoe() {
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
          <h2 className="py-2">TicTacToe vs A.I.</h2>
          <h3>Game</h3>
        </div>
      </div>
      <div>
        <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <div className="col-span-2">
            <p className="gradient-1-text">TicTacToe vs A.I.</p>
            <h2>Overview</h2>
            <p className="py-2">
              This project allows a user to play tic-tac-toe against an A.I. that always makes the best possible move. This project was created as part of Harvard&apos;s CS50-AI (Intro to Artificial Intelligence) class. Majority of the front-end was given by the course, but the entire back-end was developed by myself. 
            </p>
            <p className="py-2">
              The technologies used were Python and the PyGame library. The A.I. employs the minimax algorithm to ensure optimal gameplay, making it a challenging opponent to beat. This simple project was one that initiated my learning into A.I., which is why I love it so much.
            </p>
            <a
              target="_blank"
              href="https://github.com/me50/m0hue/tree/ai50/projects/2023/x/tictactoe"
            >
              <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">
                Code
              </button>
            </a>
          </div>
          <div className="col-span-4 md:col-span-1">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-1 gap-8">
                <SkillItem title="Python" imgSrc={pythonImg} />
                <SkillItem title="PyGame" imgSrc={pygameImg} />
              </div>
            </div>
          </div>
          <div className="w-screen max-w-[1240px] h-screen flex flex-col items-center">
            <div className="sm:w-4/5 sm:h-1/2 lg:w-1/2 lg:h-1/3 w-2/3 h-full p-4 rounded-xl shadow-xl shadow-gray-800 hover:shadow-gray-700 ease-in duration-300">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/_g6VUa9vMQQ"
                title="TicTacToe A.I. Demo"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
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

export default tictactoe;
