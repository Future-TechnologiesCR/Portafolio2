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
              En nuestra empresa de desarrollo web, nos apasiona crear
              soluciones digitales{" "}
              <span className="bold-text">innovadoras</span>. Trabajamos en
              estrecha colaboración con nuestros clientes para convertir sus
              ideas en realidad.
            </p>
            <p className="about-me__card-paragraph">
              Nuestro enfoque se centra en brindar resultados{" "}
              <span className="bold-text">excepcionales</span> y experiencias de
              usuario <span className="bold-text">memorables</span>. Nos
              esforzamos por crear sitios web{" "}
              <span className="bold-text">atractivos, intuitivos</span> y
              funcionales que impulsen el crecimiento y el éxito de nuestros
              clientes.
            </p>
            <p className="about-me__card-paragraph">
              Además del desarrollo web, también ofrecemos servicios de{" "}
              <span className="bold-text">consultoría</span> y asesoramiento
              tecnológico. Nos aseguramos de estar al tanto de las últimas
              tendencias y tecnologías para proporcionar soluciones actualizadas
              y de vanguardia.
            </p>
            {/* Crear ruta a otra página para extender el texto */}
            <NavLink to="/aboutus" className="btn btn--primary">
              Leer más
            </NavLink>
          </div>
        </div>
      </div>
      <div className="block-left"></div>
      <div className="block-right"></div>
    </section>
  );
};

export default About;
