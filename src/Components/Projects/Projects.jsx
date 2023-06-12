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
    slidesToShow: 3,
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
      title: "Landing Page",
      description:
        "Pagina web para publicitar información de una institución que ofrece servicios de seguridad",
      img: logo,
    },
    {
      id: 2,
      title: "Blog",
      description: "Blog personal con información y opiniones sobre tecnología",
      img: logo,
    },
    {
      id: 3,
      title: "E-commerce",
      description:
        "Plataforma de comercio electrónico para la venta de productos",
      img: logo,
    },
    {
      id: 4,
      title: "Real State App",
      description:
        "Aplicación para la venta y alquiler de propiedades",
      img: logo,
    },
    {
      id: 5,
      title: "Social Media",
      description:
        "Red social para compartir información y opiniones sobre tecnología",
      img: logo,
    },
    {
      id: 6,
      title: "News App",
      description:
        "Aplicación Web para compartir noticias",
      img: logo,
    },
  ];

  return (
    <section className="projects section scroll-spy-section" id="projects">
      <h2 className="heading-underline">Proyectos</h2>
      <Slider {...settings}>
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <div className="card__img">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="card__content">
              <h3 className="card__title">{project.title}</h3>
              <p className="card__description">{project.description}</p>
              <NavLink
                to="/"
                className="btn btn--primary btn--block"
                smooth
                scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
              >
                Ver más
              </NavLink>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;  