import React from "react";
import logo from "../../img/future.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HashLink as NavLink } from "react-router-hash-link";



const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Mostrar un proyecto por pantalla en dispositivos móviles
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Breakpoint para dispositivos de escritorio
        settings: {
          slidesToShow: 5, // Mostrar hasta 5 proyectos por pantalla en dispositivos de escritorio
        },
      },
    ],
  };

  return (
    <section className="projects section scroll-spy-section" id="projects">
      <h2 className="heading-underline">Proyectos</h2>
      <div className="wrapper">
        <div className="projects__cards">
          <div className="projects__card">
            <div className="projects__card-top">
              <img
                src={logo}
                alt="futuretechnologies"
                className="projects__card-img"
              />
            </div>
            <div className="projects__card-bottom">
              <div className="shadow"></div>
              <h3 className="projects__card-title heading-underline">
                Sisea Page
              </h3>
              <a
                target="_blank"
                className="projects__card-link btn"
                href="https://www.sisea.co.cr/"
              >
                CLICK
              </a>
              <div className="shadow"></div>
            </div>
          </div>
        </div>
      </div>
      <NavLink to="/projects" className="btn btn--primary">
        Ver m&aacute;s
      </NavLink>
    </section>
  );
};

export default Projects;