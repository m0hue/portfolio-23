import React from 'react'
import SkillItem from './SkillItem'

import pythonImg from '../public/assets/skills/python.png'
import javaImg from '../public/assets/skills/java.png'
import reactImg from '../public/assets/skills/react.png'
import jsImg from '../public/assets/skills/javascript.png'
import cImg from '../public/assets/skills/c++.png'
import tailwindImg from '../public/assets/skills/tailwind.png'
import htmlImg from '../public/assets/skills/html.png'
import cssImg from '../public/assets/skills/css.png'

import psImg from '../public/assets/skills/photoshop.png'
import isImg from '../public/assets/skills/illustrator.png'
import blenderImg from '../public/assets/skills/blender.png'
import c4dImg from '../public/assets/skills/c4d.png'
import aeImg from '../public/assets/skills/ae.png'
import ppImg from '../public/assets/skills/pp.png'

function Skills() {
  return (
    <div className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase gradient-1-text'>Skills</p>
            <h2 className='py-4'>What can I do?</h2>
            <h3 className='pb-8 font-normal'>
                Programming
            </h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <SkillItem title='Python' imgSrc={pythonImg} />
                <SkillItem title='Java' imgSrc={javaImg} />
                <SkillItem title='React' imgSrc={reactImg} />
                <SkillItem title='JavaScript' imgSrc={jsImg}/>
                <SkillItem title='C++' imgSrc={cImg}/>
                <SkillItem title='Tailwind' imgSrc={tailwindImg}/>
                <SkillItem title='HTML' imgSrc={htmlImg}/>
                <SkillItem title='CSS' imgSrc={cssImg}/>
            <h3 className='pb-8 font-normal'>
                Graphic Design
            </h3>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <SkillItem title='Photoshop' imgSrc={psImg}/>
                <SkillItem title='Illustrator' imgSrc={isImg}/>
                <SkillItem title='Blender' imgSrc={blenderImg}/>
                <SkillItem title='Cinema 4D' imgSrc={c4dImg}/>
                <SkillItem title='After Effects' imgSrc={aeImg}/>
                <SkillItem title='Premiere Pro' imgSrc={ppImg}/>
            </div>
        </div>
    </div>
  )
}

export default Skills