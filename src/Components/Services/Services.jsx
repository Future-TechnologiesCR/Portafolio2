import React from "react";
import logo from "../../img/future.webp";
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
      title: "Desarrollo web",
      description:
        "Pagina web para publicitar información de una entidad que ofrece servicios de seguridad",
      img: logo,
    },
    {
      id: 2,
      title: "Desarrollo de Blogs",
      description: "Blog personal con información y opiniones sobre tecnología",
      img: logo,
    },
    {
      id: 3,
      title: "E-Commerce",
      description:
        "Tienda en línea para la venta de productos y servicios",
      img: logo,
    },
    {
      id: 4,
      title: "Red Social",
      description:
        "Plataforma para conectar a personas con intereses comunes",
      img: logo,
    },
    {
      id: 5,
      title: "Asesorías en Línea",
      description:
        "Servicios de asesoría en línea para la resolución de problemas",
      img: logo,
    },
    {
      id: 6,
      title: "Aplicaciones Móviles",
      description:
        "Aplicación móvil para la gestión de servicios y productos",
      img: logo,
    },
    {
      id: 7,
      title: "Sistema de Facturación",
      description:
        "Sistema para la gestión y facturación de servicios y productos",
      img: logo,
    },
    {
      id: 8,
      title: "Gestión de Proyectos",
      description:
        "Servicio de gestión de proyectos para la planificación y ejecución de proyectos",
      img: logo,
    },
  ];

  return (
      <section className="services scroll-spy-section" id="services">
      <h2 className="heading-underline" id="services">Servicios</h2>
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
                <h3 className="services__card-title heading-underline">
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
