import React from "react";
import shinobiImg from "../public/assets/projects/shinobi-stars-game.png";
import tetrisImg from '../public/assets/projects/tetris-game.png'
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase gradient-1-text">
          Projects
        </p>
        <h2 className="py-4">What have I built?</h2>
        <div className="grid pt-8 md:grid-cols-2 gap-8">
          <ProjectItem
            title="Shinobi Stars Game"
            subtitle="Python"
            backgroundImg={shinobiImg}
            projectUrl="/shinobi"
          />
          <ProjectItem
            title="Tetris Game"
            subtitle="React | JavaScript"
            backgroundImg={tetrisImg}
            projectUrl="/tetris"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
