import React from "react";
import "./Header.scss";
import { HashLink as NavLink } from "react-router-hash-link";
import logo from "../../img/future.webp";

const Header = () => {
  const toggleNav = () => {
    const navBtn = document.querySelector(".hamburger");
    const navMobile = document.querySelector(".nav__mobile");

    navBtn.classList.toggle("is-active");
    navMobile.classList.toggle("show-nav");
  };

  const toggleNavLinks = () => {
    const navLinks = document.querySelectorAll(".nav__link-mobile");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const navBtn = document.querySelector(".hamburger");
        const navMobile = document.querySelector(".nav__mobile");
        navBtn.classList.remove("is-active");
        navMobile.classList.remove("show-nav");
      });
    });
  };

  return (
    <>
      <nav className="nav__desktop">
        <ul className="nav__links nav__links-desktop">
          <li>
            <NavLink
              to="/#home"
              activeClassName="active"
              className="nav__link nav__link-desktop"
            >
              <i className="fa-solid fa-house"></i> Inicio
            </NavLink>
          </li>
          <li>
            {/* <a href="#about-me" className="nav__link nav__link-desktop">
              <i className="fa-solid fa-user"></i>About Us
            </a> */}
            <NavLink
              to="/#about-me"
              activeClassName="active"
              className="nav__link nav__link-desktop"
            >
              <i className="fa-solid fa-user"></i>Quienes somos
            </NavLink>
          </li>
          <li>
            {/* <a href="#projects" className="nav__link nav__link-desktop">
              <i className="fa-solid fa-laptop-code"></i> Projects & Works
            </a> */}
            <NavLink
              to="/#projects"
              activeClassName="active"
              className="nav__link nav__link-desktop"
            >
              <i className="fa-solid fa-laptop-code"></i>Proyectos
            </NavLink>
          </li>
          <li>
            {/*  go to id contact */}
            <NavLink
              to="/#resume"
              activeClassName="active"
              className="nav__link nav__link-desktop"
            >
              {/* Eliminar seccion pero antes llevar la tarjeta de contactos al componente contacto */}
              <i className="fa-solid fa-at"></i> Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/#contact"
              activeClassName="active"
              className="nav__link nav__link-desktop"
            >
              <i className="fa-solid fa-at"></i> Cont&aacute;tanos
            </NavLink>
          </li>
        </ul>
      </nav>

      <button
        className="hamburger hamburger--spring"
        type="button"
        onClick={toggleNav}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <nav className="nav__mobile">
        <ul className="nav__links" onClick={toggleNavLinks}>
          <li>
            <NavLink
              to="/#home"
              activeClassName="active"
              className="nav__link nav__link-mobile"
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/#about-me"
              activeClassName="active"
              className="nav__link nav__link-mobile"
            >
              Quienes somos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/#projects"
              activeClassName="active"
              className="nav__link nav__link-mobile"
            >
              Proyectos
            </NavLink>
          </li>
          <li>
            {/* Eliminar de la hamburguesa */}
            <NavLink
              to="/#resume"
              activeClassName="active"
              className="nav__link nav__link-mobile"
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/#contact"
              activeClassName="active"
              className="nav__link nav__link-mobile"
            >
              Cont&aacute;tanos
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;