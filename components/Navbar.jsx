import Link from 'next/link'
import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return (
    <div className='fixed w-full h-[4rem] shadow-xl z-[100]'>
        <div className='flex md:justify-center items-center w-full h-full px-2 2xl:px-16'>
            <div>
                <ul className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent font-black hidden md:flex'>
                    <Link href='/'>
                        <li className='mx-8 text-sm uppercase hover:text-white hover:text-[16px] duration-300'>About</li>
                    </Link>
                    <Link href='/'>
                        <li className='mx-8 text-sm uppercase hover:text-white hover:text-[16px] duration-300'>Projects</li>
                    </Link>
                    <Link href='/'>
                        <li className='mx-8 text-sm uppercase hover:text-white hover:text-[16px] duration-300'>Heaven Sent</li>
                    </Link>
                    <Link href='/'>
                        <li className='mx-8 text-sm uppercase hover:text-white hover:text-[16px] duration-300'>Media</li>
                    </Link>
                    <Link href='/'>
                        <li className='mx-8 text-sm uppercase hover:text-white hover:text-[16px] duration-300'>Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='ml-4 cursor-pointer md:hidden'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
        </div> 
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/50' : ''}>
            <div className={
                nav ?
                'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }>
                <div>
                    <div className='flex w-full justify-between'>
                        <div></div>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-[1.15] ease-in duration-300'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    
                </div>
                <div>
                    <ul className='animate-text bg-gradient-to-l from-teal-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent font-black border-b border-gray-300 my-4 flex-col'>
                        <Link href='/'>
                            <li className='py-4 text-sm uppercase hover:text-white ease-in duration-200'>About</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm uppercase hover:text-white ease-in duration-200'>Projects</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm uppercase hover:text-white ease-in duration-200'>Heaven Sent</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm uppercase hover:text-white ease-in duration-200'>Media</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm uppercase hover:text-white ease-in duration-200'>Contact</li>
                        </Link>
                    </ul>
                    
                    <div className='pt-10'>
                        <p className='tracking-widest text-[#5651e5]'>Connect with me!</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-[1.15] ease-in duration-300'>
                                <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-[1.15] ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-[1.15] ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-[1.15] ease-in duration-300'>
                                <BsFillPersonLinesFill />
                            </div>
                        </div>
                    </div>
                    <div className='pt-10 border-b border-gray-300 my-4'>
                        <p className='italic w-[85%] md-[90%] py-4'>Each consistent effort lays another brick towards the monument of greatness.</p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar