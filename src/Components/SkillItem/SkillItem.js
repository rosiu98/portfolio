import React from "react";
import SkillItemCSS from "./SkillItem.module.css";

const SkillItem = ({ item }) => {
  return (
    <div className={SkillItemCSS.box}>
      <div className={SkillItemCSS.image}>
        <img src={item.image} alt={item.title} />
      </div>
      <div className={SkillItemCSS.content}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default SkillItem;
