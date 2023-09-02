import Image from 'next/image'
import React from 'react'
import propertyImg from '../public/assets/projects/1.png'
import Link from 'next/link'
import ProjectItem from './ProjectItem'

function Projects() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Project 1"
            subtitle='React JS'
            backgroundImg={propertyImg}
            projectUrl="/"
          />
           <ProjectItem
            title="Project 2"
            subtitle='React JS'
            backgroundImg={propertyImg}
            projectUrl="/"
          />
           <ProjectItem
            title="Project 3"
            subtitle='React JS'
            backgroundImg={propertyImg}
            projectUrl="/"
          />
           <ProjectItem
            title="Project 4"
            subtitle='React JS'
            backgroundImg={propertyImg}
            projectUrl="/"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects