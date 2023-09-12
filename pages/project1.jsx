import Image from "next/image";
import React from "react";
import projectImg from "../public/assets/projects/1.png";
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from "next/link";

function project1() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={projectImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2">Project 1</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>
      <div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
            <div className="col-span-4">
                <p className="gradient-1-text">Project 1</p>
                <h2>Overview</h2>
                <p>
                    Explain what the project is aowidhseioufhnlkihawkdhakljdhakljwhrfkljahskjdhakljwhdklajwhdklajhwdkljh awjdhkalkdjwh l awjkdh klajwhd kljahkl jwhdakljwhd kjah dkjwahd ljkhl kjwhaklj hdkwlajh dlkjwahkl djhajklwh lgfhisue bwfhkjlsh
                </p>
                <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">Demo</button>
                <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">Code</button>
            </div>
            <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-800 rounded-xl p-4">
                <div className="p-2">
                    <p className="text-center font-bold pb-2">Technologies</p>
                    <div className="grid grid-cols-4 md:grid-cols-1">
                        <p className="text-gray-300 py-2 flex items-center"><RiRadioButtonFill className="pr-1" />React</p>
                        <p className="text-gray-300 py-2 flex items-center"><RiRadioButtonFill className="pr-1" />Python</p>
                        <p className="text-gray-300 py-2 flex items-center"><RiRadioButtonFill className="pr-1" />Tailwind</p>
                        <p className="text-gray-300 py-2 flex items-center"><RiRadioButtonFill className="pr-1" />Firebase</p>
                    </div>
                </div>
            </div>
            <Link href='/#projects'>
                <p className="underline cursor-pointer hover:gradient-1-text ease-in duration-300">Back</p>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default project1;
