import React from "react";
import SkillItem from "../SkillItem/SkillItem";
import { skills } from "../../Assets/skills";
import SkillsCSS from "./Skills.module.css";

export const Skills = () => {
  return (
    <div className={SkillsCSS.skills}>
      <div className={SkillsCSS.container}>
        <div className={SkillsCSS.title}>
          <h1>SKILLSET</h1>
          <p>
            List of abilities and tools that im comfort with and have used
            before in my projects.
          </p>
        </div>

        <div className={SkillsCSS.list}>
          {skills.map((item) => (
            <SkillItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
