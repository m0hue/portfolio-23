import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import hsImg from "../public/assets/heavensent.png";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-300">
            Hello!
          </p>
          <h1 className="py-4">
            I&apos;m <span className="gradient-1-text">Mohue</span>!
          </h1>
          <h2 className="pb-4 font-normal">Mohammed Al-Musawi</h2>
          <p className="py-4 text-gray-300 m-auto">
            Jr. Developer | Graphic Designer
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              className="gradient-1-bg rounded-full shadow-lg shadow-gray-800 p-4 sm:p-6 cursor-pointer hover:scale-[1.15] ease-in-out duration-300"
              href="https://linkedin.com/in/m-almusawi/"
              target="_blank"
            >
              <FaLinkedinIn className="cursor-pointer" />
            </a>
            <a
              className="gradient-1-bg rounded-full shadow-lg shadow-gray-800 p-4 sm:p-6 cursor-pointer hover:scale-[1.15] ease-in-out duration-300"
              href="https://github.com/m0hue"
              target="_blank"
            >
              <FaGithub className="cursor-pointer" />
            </a>
            <a
              className="gradient-1-bg rounded-full shadow-lg shadow-gray-800 p-4 sm:p-6 cursor-pointer hover:scale-[1.15] ease-in-out duration-300"
              href="https://heavensent.site/"
              target="_blank"
            >
              <Image
                className="cursor-pointer"
                src={hsImg}
                width={18}
                unoptimized
              />
            </a>
            <Link
              className="gradient-1-bg rounded-full shadow-lg shadow-gray-800 p-4 sm:p-6 cursor-pointer hover:scale-[1.15] ease-in-out duration-300"
              href="/#contact"
            >
              <BsFillPersonLinesFill className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
