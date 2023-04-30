import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Services() {
  return (
    <section className="about-me section scroll-spy-section" id="services">
      <h2 className="heading-underline">Servicios</h2>
      <div className="wrapper">
        <Link to="/services" className="btn btn--primary">
          Ver Servicios
        </Link>
      </div>
    </section>
  );
}

export default Services;
