import React from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import "../../UI/main.scss";
import logo from "../../img/future.webp";

function AboutUs() {
  return (
    <>
      <br />
      <br />
      <main>
        <section className="about-me section scroll-spy-section" id="about-me">
          <h2 className="heading-underline">Sobre Nosotros</h2>
          <div className="wrapper">
            <div className="about-me__card">
              <img
                src={logo}
                alt="futuretechcr"
                className="about-me__card-img"
              />
              <div className="about-me__card-text">
                <p className="about-me__card-paragraph">
                  En nuestra empresa de desarrollo web, tenemos una amplia
                  experiencia en la creación de sitios web personalizados para
                  empresas y organizaciones de diversos sectores. Nos
                  especializamos en la utilización de herramientas como HTML,
                  CSS, <span className="bold-text">SCSS</span>,{" "}
                  <span className="bold-text">Bootstrap</span> y{" "}
                  <span className="bold-text">JavaScript</span> para crear
                  sitios web atractivos, funcionales y responsivos que se
                  adapten a las necesidades específicas de nuestros clientes.
                </p>
                <p>
                  Sin embargo, nuestro conocimiento no se limita únicamente al
                  desarrollo web, ya que en los últimos meses hemos ampliado
                  nuestras habilidades en programación al aprender lenguajes
                  como <span className="bold-text">Python</span>,{" "}
                  <span className="bold-text">C++</span> y{" "}
                  <span className="bold-text">JAVA</span>.
                </p>
                <p>
                    <br />
                  Esto nos permite ofrecer soluciones de software personalizadas
                  y adaptadas a las necesidades específicas de cada proyecto.
                  Además de nuestra experiencia en el desarrollo de software y
                  sitios web, también contamos con conocimientos en otras áreas
                  de las tecnologías de la información, como{" "}
                  <span className="bold-text">Cisco CCNA 1v7</span>,{" "}
                  <span className="bold-text">IT Essentials</span>,{" "}
                  <span className="bold-text">IoT</span> y bases de datos. 
                  </p>
                  <p>
                    <br />
                    Estos
                  conocimientos nos permiten ofrecer una gama más amplia de
                  soluciones y servicios de TI a nuestros clientes, adaptándonos
                  a sus necesidades específicas y ofreciéndoles soluciones
                  integrales. Nos enorgullece haber trabajado con una amplia
                  variedad de clientes, desde pequeñas empresas hasta grandes
                  organizaciones, y siempre nos esforzamos por ofrecer un
                  servicio excepcional y una atención personalizada a cada uno
                  de nuestros clientes.
                </p>
                {/* Crear ruta a otra pagina para extender el texto */}
                <NavLink to="/aboutus" className="btn btn--primary">
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
          <div className="block-left"></div>
          <div className="block-right"></div>
        </section>
      </main>
    </>
  );
}

export default AboutUs;
