import React from "react";
import profile from "../../Assets/profile.png";
import { Navbar } from "..";
import HeaderCSS from "./Header.module.css";

export const Header = () => {
  return (
    <header className={HeaderCSS.header}>
      <Navbar />
      <div className={HeaderCSS.container}>
        <div className={HeaderCSS.main}>
          <div className={HeaderCSS.title}>
            <h2>Frontend/Javascript Developer</h2>
            <h1>
              Paweł <span>Rosiek</span>
            </h1>
          </div>
        </div>
        <div className={HeaderCSS.box}>
          <div className={HeaderCSS.container}>
            {/* <img src={profile} alt="profile" /> */}
            <div className={HeaderCSS.info}></div>
          </div>
        </div>
      </div>
    </header>
  );
};
