import React from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import logo from "../../img/future.webp";

const About = () => {
  return (
    <section className="about-me section scroll-spy-section" id="about-me">
      <h2 className="heading-underline">Sobre Nosotros</h2>
      <div className="wrapper">
        <div className="about-me__card">
          <img src={logo} alt="futuretechcr" className="about-me__card-img" />
          <div className="about-me__card-text">
            <p className="about-me__card-paragraph">
            Somos Future Technologies CR, una empresa de desarrollo 
            web que ofrece soluciones innovadoras y personalizadas para 
            satisfacer las necesidades de nuestros clientes. 
            </p>
            <h1 className="about-me-heading">Misión</h1>
            <p className="about-me__card-paragraph">
            Brindar resultados excepcionales y experiencias de usuario memorables.
            </p>
            <h1 className="about-me-heading">Visión</h1>
            <p className="about-me__card-paragraph">
            Ser una empresa líder en el mercado nacional e internacional, ofreciendo servicios de calidad y confianza.
            </p>
            <h1 className="about-me-heading">Valores</h1>
            <div className="about-me__card-div">
                <ul className="about-me__card-ul1">
                  <li className="about-me__card-li">Seriedad</li>
                  <li className="about-me__card-li">Responsabilidad</li>
                  <li className="about-me__card-li">Compromiso</li>
                </ul>
                <ul className="about-me__card-ul2">
                  <li className="about-me__card-li">Excelencia</li>
                  <li className="about-me__card-li">Transparencia</li>
                  <li className="about-me__card-li">Honestidad</li>
                </ul>
            </div>  
            {/* <NavLink to="/aboutus" className="btn btn--primary">
              Leer más
            </NavLink> */}
          </div>
        </div>
      </div>
      <div className="block-left"></div>
      <div className="block-right"></div>
    </section>
  );
};

export default About;
