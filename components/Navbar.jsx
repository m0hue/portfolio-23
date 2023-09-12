import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("gray-700");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/project1" ||
      router.asPath === "/project2" ||
      router.asPath === "/project3" ||
      router.asPath === "/project4"
    ) {
      setNavBg("transparent");
    } else {
      setNavBg("gray-700");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
    style={{backgroundColor: `${navBg}`}}
      className={
        shadow
          ? "fixed w-full h-[4rem] shadow-xl z-[100] bg-gray-700 ease-in duration-200"
          : "fixed w-full h-[4rem] z-[100] bg-gray-700 ease-in duration-200"
      }
    >
      <div className="flex md:justify-center items-center w-full h-full px-2 2xl:px-16">
        <div>
          <ul className="gradient-1-text hidden md:flex">
          <Link href="/">
              <li className="mx-8 text-sm uppercase text-[13px] hover:text-white hover:text-[16px] duration-300">
                Home
              </li>
            </Link><Link href="/#about">
              <li className="mx-8 text-sm uppercase text-[13px] hover:text-white hover:text-[16px] duration-300">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="mx-8 text-sm uppercase text-[13px] hover:text-white hover:text-[16px] duration-300">
                Skills
              </li>
            </Link>
            <a target="_blank" href="https://heavensent.site/">
              <li className="mx-8 text-sm uppercase text-[13px] hover:text-white hover:text-[16px] duration-300">
                HeavenSent
              </li>
            </a>
            <Link href="/#projects">
              <li className="mx-8 text-sm uppercase text-[13px] hover:text-white hover:text-[16px] duration-300">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="mx-8 text-sm uppercase text-[13px] hover:text-white hover:text-[16px] duration-300">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="ml-4 cursor-pointer md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/50" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[80%] sm:w-[60%] md:w-[45%] h-screen bg-gray-700 p-10 ease-in duration-500"
              : "fixed left-[-150%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full justify-between">
              <div></div>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-[1.15] ease-in duration-300"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div>
            <ul className="gradient-1-text border-b border-gray-300 my-4 flex-col">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm uppercase hover:text-white ease-in duration-200"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm uppercase hover:text-white ease-in duration-200"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm uppercase hover:text-white ease-in duration-200"
                >
                  Skills
                </li>
              </Link>
              <a target="_blank" href="https://heavensent.site/">
                <li className="py-4 text-sm uppercase hover:text-white ease-in duration-200">
                  Heaven Sent
                </li>
              </a>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm uppercase hover:text-white ease-in duration-200"
                >
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm uppercase hover:text-white ease-in duration-200"
                >
                  Contact
                </li>
              </Link>
            </ul>

            <div className="pt-10">
              <p className="tracking-widest gradient-1-text">
                Connect with me!
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-[1.15] ease-in-out duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-[1.15] ease-in-out duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-[1.15] ease-in-out duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-[1.15] ease-in-out duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
            <div className="pt-10 border-b border-gray-300 my-4">
              <p className="italic w-[85%] md-[90%] py-4">
                Each consistent effort lays another brick towards the monument
                of greatness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
