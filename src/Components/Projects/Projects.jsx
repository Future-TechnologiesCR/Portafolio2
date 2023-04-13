import React from 'react';
import logo from '../../img/future.webp';

const Projects = () => {
  return (
    <section className='projects section scroll-spy-section' id='projects'>
      <h2 className='heading-underline'>Projects</h2>
      <div className='wrapper'>
        <div className='projects__cards'>
          <div className='projects__card'>
            <div className='projects__card-top'>
              <img
                src={logo}
                alt='futuretechnologies'
                className='projects__card-img'
              />
            </div>
            <div className='projects__card-bottom'>
              <div className='shadow'></div>
              <h3 className='projects__card-title heading-underline'>
                Sisea Page
              </h3>
              <p className='projects__card-text'>
                A website made with{' '}
                <span className='bold-text'>REACT and Bootstrap</span>.
              </p>
              <a
                target='_blank'
                className='projects__card-link btn'
                href='https://www.sisea.co.cr/'
              >
                CLICK
              </a>
              <div className='shadow'></div>
            </div>
          </div>
          <div className='projects__card'>
            <div className='projects__card-top'>
              <img
                src={logo}
                alt='futuretechnologies'
                className='projects__card-img'
              />
            </div>
            <div className='projects__card-bottom'>
              <div className='shadow'></div>
              <h3 className='projects__card-title heading-underline'></h3>
              <p className='projects__card-text'></p>
              <a target='_blank' className='projects__card-link btn'>
                In Progress
              </a>
              <div className='shadow'></div>
            </div>
          </div>
          <div className='projects__card'>
            <div className='projects__card-top'>
              <img
                src={logo}
                alt='Futuretechcr'
                className='projects__card-img'
              />
            </div>
            <div className='projects__card-bottom'>
              <h3 className='projects__card-title heading-underline'></h3>
              <p className='projects__card-text'>
                <span className='bold-text'></span>
              </p>
              <a target='_blank' className='projects__card-link btn'>
                In Progress
              </a>
              <div className='shadow'></div>
            </div>
          </div>
        </div>
      </div>
      {/* Crear nueva pagina para mostrar todos los proyectos */}
      <a href='#' className='btn'>
        Show more
        <div className='shadow'></div>
      </a>
    </section>
  );
};

export default Projects;
