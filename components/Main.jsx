import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

function Main() {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-300'>Hello!</p>
                <h1 className='py-4'>
                    I'm <span className='gradient-1-text'>Mohue</span>!
                </h1>
                <h2 className='pb-4 font-normal'>
                    aka Mohammed
                </h2>
                <p className='py-4 text-gray-300 m-auto'>
                    Jr. Developer | Graphic Designer
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='gradient-1-bg rounded-full shadow-lg shadow-gray-800 p-4 sm:p-6 cursor-pointer hover:scale-[1.15] ease-in-out duration-300'>
                        <FaLinkedinIn />
                    </div>
                    <div className='gradient-1-bg rounded-full shadow-lg shadow-gray-800 p-4 sm:p-6 cursor-pointer hover:scale-[1.15] ease-in-out duration-300'>
                        <FaGithub />
                    </div>
                    <div className='gradient-1-bg rounded-full shadow-lg shadow-gray-800 p-4 sm:p-6 cursor-pointer hover:scale-[1.15] ease-in-out duration-300'>
                        <AiOutlineMail />
                    </div>
                    <div className='gradient-1-bg rounded-full shadow-lg shadow-gray-800 p-4 sm:p-6 cursor-pointer hover:scale-[1.15] ease-in-out duration-300'>
                        <BsFillPersonLinesFill />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Main