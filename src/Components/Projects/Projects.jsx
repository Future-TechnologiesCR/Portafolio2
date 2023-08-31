import React from "react";
import sisea from "../../img/SiseaLogo.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HashLink as NavLink } from "react-router-hash-link";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    vertical: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          vertical: false,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          vertical: false,
          arrows: false,
          slidesToScroll: 1,
          spaceBetween: 30,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const projects = [
    {
      id: 1,
      title: "SISEA Seguridad",
      img: sisea,
    },
  ];

  return (
    <section className="projects section scroll-spy-section" id="projects">
      <h2 className="heading-underline">Proyectos</h2>
      <Slider {...settings}>
        {projects.map((project) => (
          <div className="carrusel__logos" key={project.id}>
            <div className="logos">
             <a href="https://www.sisea.co.cr/" className="logo"><img src={project.img} alt={project.title}/></a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;  