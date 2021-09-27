import React from "react";
import CardsCSS from "./Cards.module.css";
import circle from "../../Assets/circle.svg";

export const Cards = ({ project }) => {
  return (
    <div className={CardsCSS.item}>
      <div className={CardsCSS.image}>
        <img src={project.image} alt={project.title} />
      </div>
      <div className={CardsCSS.content}>
        <div className={CardsCSS.tags}>
          <ul>
            {project.tags.map((tag) => (
              <li>
                <p>{tag.name}</p>
                <img src={tag.image} alt={tag.name} />
              </li>
            ))}
          </ul>
        </div>
        <div className={CardsCSS.title}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
        <div className={CardsCSS.list}>
          <ul>
            {project.list.map((list) => (
              <li>
                <img src={circle} alt="circle" />
                <p>{list.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={CardsCSS.buttons}>
          <a href={project.github}>Code</a>
          <a href={project.website}>Visit Website</a>
        </div>
      </div>
    </div>
  );
};
