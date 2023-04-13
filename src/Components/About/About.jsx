import React from 'react';
import logo from '../../img/future.webp';

const About = () => {
  return (
    <section className='about-me section scroll-spy-section' id='about-me'>
      <h2 className='heading-underline'>About Us</h2>
      <div className='wrapper'>
        <div className='about-me__card'>
          <img
            src={logo}
            alt='futuretechcr'
            className='about-me__card-img'
          />
          <div className='about-me__card-text'>
            <p className='about-me__card-paragraph'>
              Hola Mundo soy una serpiente que anda por el bosque buscando una parte de su cola
            </p>
            <p className='about-me__card-paragraph'>
              We like to work <span className='bold-text'>Web Development</span>
              , We started with HTML
              <span className='bold-text'> CSS</span> also
              <span className='bold-text'> SCSS & Bootstrap</span> and
              <span className='bold-text'>JavaScript</span>. But i didn't stop
              here a few months later that I started learning
              <span className='bold-text'>Python</span> and
              <span className='bold-text'>C++</span> and
              <span className='bold-text'>JAVA</span>.
            </p>
            <p className='about-me__card-paragraph'>
              We have knowledge in
              <span className='bold-text'>Software & Web Development</span> also
              I we know
              <span className='bold-text'>
                Cisco CCNA 1v7, IT Essentials, IoT
              </span>
              and <span className='bold-text'>DataBase basics</span>
            </p>
            <p className='about-me__card-paragraph'>
              If you would like to get to know of Us,
              <span className='bold-text'>check out our resume</span> down
              below. Thanks!
            </p>
            <a href='#resume' className='btn'>
              our resume
              <div className='shadow'></div>
            </a>
          </div>
        </div>
      </div>
      <div className='block-left'></div>
      <div className='block-right'></div>
    </section>
  );
};

export default About;
