import React from "react";
import FooterCSS from "./Footer.module.css";
import footerImg from "../../Assets/footer-img.svg";
import linkedIn from "../../Assets/linked.svg";
import facebook from "../../Assets/fb.svg";
import github from "../../Assets/github.svg";
import scroll from "../../Assets/scroll.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={FooterCSS.footer}>
      <div className={FooterCSS.image}>
        <img src={footerImg} alt="foterImg" />
      </div>
      <div className={FooterCSS.container}>
        <div className={FooterCSS.links}>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Projects</Link>
          <Link to="/">Resume</Link>
        </div>
        <div className={FooterCSS.media}>
          <div className={FooterCSS.media__links}>
            <a href="https://github.com/rosiu98">
              <img src={linkedIn} alt="linked-in" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100002329641962">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://github.com/rosiu98">
              <img src={github} alt="github" />
            </a>
          </div>

          <div className={FooterCSS.button}>
            <Link to="/">Contact Me</Link>
          </div>
        </div>
        <div className={FooterCSS.scroll}>
          <a href="/">
            <img src={scroll} alt="scroll" />
          </a>
        </div>
      </div>
    </div>
  );
};
