import React from 'react'

function About() {
  return (
    <div id="about" className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest gradient-1-text'>About</p>
                <h2 className='py-4'>Who am I?</h2>
                <p className='py-2'>Hello! My name is Mohammed Al-Musawi. I am 20 year old Iraqi-American born in Washington & raised in Michigan. I am a Junior studying Computer Science at Wayne State University with a (hopeful) graduation date in May '25. </p>
                <p className='py-2'>I have a deep passion for software & game development, graphic design, 3D animation, & music (novice guitar & piano player).</p>
                <p className='py-2 text-gray-400 underline cursor-pointer'>Learn More at LinkedIn</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-800 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in-out duration-300'>
                <img className="rounded-xl" src="" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About