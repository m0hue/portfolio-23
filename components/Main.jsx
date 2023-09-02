import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

function Main() {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Subtitle 1</p>
                <h1 className='py-4 text-gray-700'>
                    Heyo, I'm <span className='text-[#5651e5]'>Mohammed</span>!
                </h1>
                <h1 className='py-4 text-gray-700'>
                    Title 2
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    Subtitle 2
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-[1.15] ease-in-out duration-300'>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-[1.15] ease-in-out duration-300'>
                        <FaGithub />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-[1.15] ease-in-out duration-300'>
                        <AiOutlineMail />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-[1.15] ease-in-out duration-300'>
                        <BsFillPersonLinesFill />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Main