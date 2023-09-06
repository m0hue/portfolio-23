import Image from 'next/image'
import React from 'react'

function SkillItem({title, imgSrc, size=48}) {
  return (
    <div className='p-6 shadow-xl shadow-gray-800 rounded-xl hover:scale-105 ease-in-out duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image
                    className='rounded-xl'
                    src={imgSrc}
                    alt='/'
                    width={size}
                    height={size}
                />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>{title}</h3>
            </div>
        </div>
    </div>
  )
}

export default SkillItem