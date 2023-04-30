import React from 'react'

function Processes() {
  return (
    <section className='about-me section scroll-spy-section' id='processes'>
    <h2 className='heading-underline'>Procesos</h2>
    <div className='wrapper'>
      <div className='about-me__text'>
        <p>
          Nuestros procesos de trabajo están basados en la metodología de
          desarrollo ágil, la cual nos permite ofrecer soluciones de software
          de alta calidad en un tiempo reducido. Además, esta metodología nos
          permite adaptarnos a los cambios que puedan surgir durante el
          desarrollo del proyecto, ya que nos permite realizar cambios en el
          software de forma rápida y eficiente.
        </p>
        <p>
          <br />
          Nuestro proceso de desarrollo de software se divide en 4 etapas:
        </p>
        <ul>
          <li>
            <span className='bold-text'>Planificación:</span> En esta etapa
            definimos los objetivos del proyecto, los requisitos del software
            y el alcance del proyecto.
          </li>
          <li>
            <span className='bold-text'>Diseño:</span> En esta etapa
            diseñamos la arquitectura del software, la interfaz de usuario y
            la base de datos.
          </li>
          <li>
            <span className='bold-text'>Desarrollo:</span> En esta etapa
            desarrollamos el software utilizando las tecnologías más
            adecuadas para el proyecto.
          </li>
          <li>
            <span className='bold-text'>Pruebas:</span> En esta etapa
            realizamos pruebas de software para garantizar que el software
            cumpla con los requisitos del proyecto.
          </li>
        </ul>
      </div>
        
    </div>
    </section>
  )
}

export default Processes