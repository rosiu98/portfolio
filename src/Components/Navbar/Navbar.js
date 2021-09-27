import React from "react";
import logo from "../../Assets/logo.svg";
import NavbarCSS from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={NavbarCSS.nav}>
      <div className={NavbarCSS.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={NavbarCSS.links}>
        <a href="/">Projects</a>
        <a href="/">Resume</a>
        <a href="/">Contact</a>
      </div>
    </nav>
  );
};
