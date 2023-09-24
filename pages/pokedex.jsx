import Image from "next/image";
import React from "react";
import charImg from "../public/assets/projects/pokedex-char.png";
import zekImg from "../public/assets/projects/pokedex-zek.png";
import Link from "next/link";
import SkillItem from "@/components/SkillItem";
import reactImg from "../public/assets/skills/react.png";
import jsImg from "../public/assets/skills/javascript.png"
import apiImg from "../public/assets/skills/api.png"
import fbImg from "../public/assets/skills/firebase.png"


function pokedex() {
  return (
    <div className="w-full mx-auto pb-16">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          unoptimized
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={zekImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2">Pokédex</h2>
          <h3>Web App</h3>
        </div>
      </div>
      <div>
        <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <div className="col-span-2">
            <p className="gradient-1-text">Pokédex</p>
            <h2>Overview</h2>
            <p className="py-2">
              Initially, my intentions for this project were to spend time enhancing my skills with React, learn how to fetch data and utilize it with RESTful APIs, and introduce myself to cloud deployment with Firebase.
              The Pokédex web app is a React app that leverages the PokeAPI to
              fetch data about various Pokémon. 
            </p>
            <p className="py-2">
              With a quick search, the app displays a Pokémon&apos;s name and ID, as well as its character sprite, type, and weaknesses. With this app,
              you can search through a vast collection of Pokémon and their
              details, all neatly organized within a user-friendly Pokedex
              interface.
            </p>
            <a target="_blank" href="https://github.com/m0hue/pokedex">
              <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">
                Code
              </button>
            </a>
            <a target="_blank" href="https://m-pokedex.web.app">
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
                <SkillItem title="RESTful API" imgSrc={apiImg} />
                <SkillItem title="Firebase" imgSrc={fbImg} />
              </div>
            </div>
          </div>
          <div className="w-screen max-w-[1240px] h-screen flex flex-col items-center">
            <div className="grid pt-8 md:grid-cols-2 gap-8">
              <Image
                unoptimized
                className="h-auto w-full shadow-xl shadow-gray-800 rounded-xl group hover:scale-125 hover:cursor-zoom-in ease-in-out duration-500"
                src={charImg}
              />
              <Image
                unoptimized
                className="h-auto w-full shadow-xl shadow-gray-800 rounded-xl group hover:scale-125 hover:cursor-zoom-in ease-in-out duration-500"
                src={zekImg}
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

export default pokedex;
