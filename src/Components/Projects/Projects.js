import React from "react";
import { Cards } from "../../Components/Cards/Cards";
import ProjectsCSS from "./Projects.module.css";
import { projects } from "../../Assets/projects";

export const Projects = () => {
  return (
    <>
      <div className={ProjectsCSS.projects}>
        <div className={ProjectsCSS.title}>
          <h1>PROJECTS</h1>
          <p>
            There are my recent and the best projects that i created. Take a
            look !.
          </p>
        </div>
        <div className={ProjectsCSS.cards}>
          {projects.map((project, index) => (
            <Cards project={project} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};
