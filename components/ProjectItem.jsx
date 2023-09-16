import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectItem({ title, subtitle, backgroundImg, projectUrl }) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-800 rounded-xl group hover:scale-105 hover:gradient-1-bg ease-in-out duration-500">
      <Image
        className="rounded-xl flex-shrink-0 min-w-[100%] min-h-[100%] group-hover:opacity-10 ease-in-out duration-500"
        unoptimized
        src={backgroundImg}
        alt="/"
      />
      <div className="flex flex-col items-center opacity-0 group-hover:opacity-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ease-in-out duration-500">
        <h3 className="text-2xl tracking-wider text-center">{title}</h3>
        <p className="pb-4 pt-2 text-center">{subtitle}</p>
        <Link href={projectUrl}>
          <p className="w-[150px] text-center py-3 rounded-lg bg-white text-gray-800 shadow-xl font-bold text-lg cursor-pointer hover:scale-110 ease-in duration-300">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ProjectItem;
