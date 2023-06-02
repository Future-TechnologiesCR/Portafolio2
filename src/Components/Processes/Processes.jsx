import React from 'react';
import ProjectsPage from '../ProjectsPage/ProjectsPage';

function Processes() {
  return (
    <section className='about-me section scroll-spy-section' id='processes'>
      <h2 className='heading-underline'>Procesos</h2>
      <div className='wrapper'>
        <ProjectsPage />
      </div>
      <div className='block-left'></div>
    <div className='block-right'></div>
    </section>
  )
}

export default Processes