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
          <div className={HeaderCSS.info}>
            <div className={HeaderCSS.content}>
              <div className={HeaderCSS.data}>
                <img src={profile} alt="profile" />
                <h4>@Paweł Rosiek</h4>
                <p>Trying to improve in frontend as much i possible can .!</p>
              </div>
              <div className={HeaderCSS.numer}>
                <a href="/">rosiu978@gmail.com</a>
                <a href="/">784446401</a>
              </div>
              <a href="/" className={HeaderCSS.button}>
                See more info about me!
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
