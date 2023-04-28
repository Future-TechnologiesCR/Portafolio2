import React from 'react'
import "./Header.scss";
import { HashLink as NavLink } from "react-router-hash-link";

function Greeting() {
  return (
    <header className="header scroll-spy-section" id="home">
        <div className="header__text">
          <h1 className="header__title">
            <div>Hi! 👋🏻</div>
            <div>We Are Future Technologies</div>
          </h1>
          <p className="header__paragraph">
            We are a Web Development Company and Hosting, we are here to help
            you with your projects.
          </p>
        </div>
        {/* <a href="#about-me" className="header__link">
          <i className="fa-solid fa-arrow-down header__link-arrow"></i>
        </a> */}
        <NavLink to="#about-me" className="header__link">
          <i className="fa-solid fa-arrow-down header__link-arrow"></i>
        </NavLink>
      </header>
  )
}

export default Greeting