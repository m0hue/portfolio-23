import Image from "next/image";
import Link from "next/link";
import { React } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

function Contact() {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase gradient-1-text">
          Contact
        </p>
        <h2 className="py-4">Get in touch</h2>
        <div className="grid lg:grid-cols-1 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-800 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://appsurfs.com/wp-content/uploads/2021/12/contactus-1.jpg"
                  alt="/"
                />
              </div>
              <div className="grid grid-cols-2">
                <div>
                  <h2 className="py-8">Mohammed Al-Musawi</h2>
                  <p>Jr. Developer | Graphic Designer</p>
                  <p className="py-4">Contact me, let&apos;s talk!</p>
                </div>
                <div className="text-center">
                  <p className="uppercase pt-8">Connect with me</p>
                  <p className="py-4">mohue03@gmail.com</p>
                  <div className="flex items-center justify-between py-4">
                    <a
                      href="http://linkedin.com/in/m-almusawi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="gradient-1-bg rounded-full shadow-lg shadow-gray-800 p-4 sm:p-6 cursor-pointer hover:scale-[1.15] ease-in-out duration-300">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <a
                      href="http://github.com/m0hue"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="gradient-1-bg rounded-full shadow-lg shadow-gray-800 p-4 sm:p-6 cursor-pointer hover:scale-[1.15] ease-in-out duration-300">
                        <FaGithub />
                      </div>
                    </a>
                    <Link href="">
                      <div className="rounded-full shadow-lg shadow-gray-800 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <HiOutlineChevronDoubleUp size={30} />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          {/* 
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-800 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-gray-600"
                      type="text"
                      required="true"
                      placeholder="NAME"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-gray-600"
                      type="email"
                      required="true"
                      placeholder="EMAIL"
                      name="email"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-4">
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 text-gray-600"
                    rows="8"
                    required="true"
                    placeholder="MESSAGE"
                    name="message"
                  ></textarea>
                </div>
                <button type="submit" className="w-full p-4 mt-4 gradient-1-bg">
                  Send
                </button>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
