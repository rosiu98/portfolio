import React from "react";
import { Link } from "react-router-dom";
import AboutCSS from "./About.module.css";
import about from "../../Assets/about-main.png";

export const About = () => {
  return (
    <div className={AboutCSS.about}>
      <div className={AboutCSS.container}>
        <div className={AboutCSS.content}>
          <h1>About</h1>
          <p>
            Integer lobortis felis ac leo interdum, id vulputate neque posuere.
            Duis suscipit, ipsum vestibulum tincidunt varius, enim elit sodales
            nunc, ac egestas elit neque vel mauris.
            <br />
            <br />
            Ut sed elementum erat, at fringilla elit. Mauris cursus, odio vitae
            venenatis placerat, turpis orci ornare dui, vel auctor purus risus
            quis diam. Quisque in sem lacus.
          </p>
          <Link to="/about">See More</Link>
        </div>
        <div className={AboutCSS.image}>
          <img src={about} alt="my_picture" />
        </div>
      </div>
    </div>
  );
};
