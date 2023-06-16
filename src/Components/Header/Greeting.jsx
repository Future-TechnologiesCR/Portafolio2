import React from 'react'
import "./Header.scss";
import { HashLink as NavLink } from "react-router-hash-link";

function Greeting() {
  return (
    <header className="header scroll-spy-section" id="home">
        <div className="header__text">
          <p className="header__title">
            <strong>
              Hola! 👋🏻<br></br>
              Somos Future Technologies
            </strong>
          </p>
          <p className="header__paragraph">
            Somos una empresa tecnológica especializada en el Desarrollo de páginas y plataformas web y servicios de Hosting, estamos aquí para ayudarte con todos tus proyectos.
          </p>
        </div>
        <NavLink to="#about-me" className="header__link">
          <i className="fa-solid fa-arrow-down header__link-arrow"></i>
        </NavLink>
      </header>
  )
}

export default Greeting