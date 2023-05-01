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
          centerMode: true,
          scrollable: true,
        },
      },
    ],
  };
  return (
    <>   
     <section className="services scroll-spy-section" id="services">
      <h2 className="heading-underline">Servicios</h2>
      <div className="wrapper">
        <Slider {...settings} className="services__cards">
          <div className="services__card">
            <div className="services__card-top">
              <img
                src={logo}
                alt="futuretechnologies"
                className="services__card-img"
              />
            </div>
            <div className="services__card-bottom">
              <div className="shadow"></div>
              <h3 className="services__card-title heading-underline">
                Sisea Page
              </h3>
              <div className="shadow"></div>
            </div>
          </div>
          <div className="services__card">
            <div className="services__card-top">
              <img
                src={logo}
                alt="futuretechnologies"
                className="services__card-img"
              />
            </div>
            <div className="services__card-bottom">
              <div className="shadow"></div>
              <h3 className="services__card-title heading-underline">
                Sisea Page
              </h3>
              <div className="shadow"></div>
            </div>
          </div>
          <div className="services__card">
            <div className="services__card-top">
              <img
                src={logo}
                alt="futuretechnologies"
                className="services__card-img"
              />
            </div>
            <div className="services__card-bottom">
              <div className="shadow"></div>
              <h3 className="services__card-title heading-underline">
                Sisea Page
              </h3>
              <div className="shadow"></div>
            </div>
          </div>
          <div className="services__card">
            <div className="services__card-top">
              <img
                src={logo}
                alt="futuretechnologies"
                className="services__card-img"
              />
            </div>
            <div className="services__card-bottom">
              <div className="shadow"></div>
              <h3 className="services__card-title heading-underline">
                Sisea Page
              </h3>
              <div className="shadow"></div>
            </div>
          </div>
          <div className="services__card">
            <div className="services__card-top">
              <img
                src={logo}
                alt="futuretechnologies"
                className="services__card-img"
              />
            </div>
            <div className="services__card-bottom">
              <div className="shadow"></div>
              <h3 className="services__card-title heading-underline">
                Sisea Page
              </h3>
              <div className="shadow"></div>
            </div>
          </div>
          <div className="services__card">
            <div className="services__card-top">
              <img
                src={logo}
                alt="futuretechnologies"
                className="services__card-img"
              />
            </div>
            <div className="services__card-bottom">
              <div className="shadow"></div>
              <h3 className="services__card-title heading-underline">
                Sisea Page
              </h3>
              <div className="shadow"></div>
            </div>
          </div>
      </Slider>
      </div>
      <div className="block-left"></div>
      <div className="block-right"></div>
    </section>
    </>
  );
}

export default Services;
