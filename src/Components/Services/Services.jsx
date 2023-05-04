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
          slidesToShow: 2,
          vertical: true,
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
      title: "Sisea Page",
      description:
        "Pagina web para publicitar información de una institución que ofrece servicios de seguridad",
      img: logo,
    },
    {
      id: 2,
      title: "Blog Personal",
      description: "Blog personal con información y opiniones sobre tecnología",
      img: logo,
    },
    {
      id: 3,
      title: "Tienda Online",
      description: "Tienda en línea para la venta de productos de tecnología",
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
      title: "Plataforma de Aprendizaje",
      description:
        "Sistema para la enseñanza y aprendizaje de diferentes habilidades y temas",
      img: logo,
    },
    {
      id: 6,
      title: "Calendario Compartido",
      description:
        "Aplicación para compartir calendarios y gestionar eventos",
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
      title: "Plataforma de Reservas",
      description:
        "Sistema para la gestión de reservas y programación de citas",
      img: logo,
    },
    {
      id: 9,
      title: "Gestión de Proyectos",
      description:
        "Plataforma para la gestión y seguimiento de proyectos y tareas",
      img: logo,
    },
    {
      id: 10,
      title: "Portal de Empleo",
      description:
        "Portal en línea para la búsqueda y publicación de ofertas de empleo",
      img: logo,
    },
  ];

  return (
    <>   
     <section className="services scroll-spy-section" id="services">
      <h2 className="heading-underline">Servicios</h2>
      <div className="wrapper">
        <Slider {...settings} className="services__cards">
          {services.map((services) => (
            <div className="services__card" key={services.id}>
              <div className="services__card-top">
                <img
                  src={services.img}
                  alt="futuretechnologies"
                  className="services__card-img"
                />
              </div>
              <div className="services__card-bottom">
                <div className="shadow"></div>
                <span className="services__card-title  heading-underline">
                  {services.title}
                </span>
                <div className="shadow"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
    </>
  );
}

export default Services;
