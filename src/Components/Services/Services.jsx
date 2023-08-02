import React from "react";
import hosting from "../../img/Hosting-p.png";
import mantenimiento from "../../img/Mantenimiento-p.png";
import movil from "../../img/Movil-p.png";
import web from "../../img/Web-p.png";
import { HashLink as NavLink } from "react-router-hash-link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// npm install slick-carousel
import "slick-carousel/slick/slick-theme.css";

function Services() {
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

  const services = [
    {
      id: 1,
      title: "Desarrollo Web",
      description:
        "Creación y mantenimiento de sitios web funcionales en internet.",
      img: web,
    },
    {
      id: 2,
      title: "Desarrollo móvil",
      description: 
        "Creación de software para teléfonos inteligentes y otros dispositivos digitales.",
      img: movil,
    },
    {
      id: 3,
      title: "Hosting",
      description:
        "Servicio de alojamiento para sitios web",
      img: hosting,
    },
    {
      id: 4,
      title: "Mantenimiento de páginas web",
      description:
        "Corrección de errores, optimizaciones y actualizaciones de páginas web",
      img: mantenimiento,
    },
  ];

  return (
    <section className="services section scroll-spy-section" id="services">
      <h2 className="heading-underline">Servicios</h2>
      <div className="wrapper">
        <Slider {...settings} className="services__cards">
          {services.map((service) => (
            <div className="services__card" key={service.id}>
              <div className="services__card-top">
                <img
                  src={service.img}
                  alt={service.title}
                  className="services__card-img"
                />
              </div>
              <div className="services__card-bottom">
                <div className="shadow"></div>
                <h3 className="services__card-title">
                  {service.title}
                </h3>
                <p className="services__card-description">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Services;
