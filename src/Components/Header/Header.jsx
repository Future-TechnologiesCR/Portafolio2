import React from 'react';
import './Header.scss';
import logo from '../../img/future.webp';

const Header = () => {
  const toggleNav = () => {
    const navBtn = document.querySelector('.hamburger');
    const navMobile = document.querySelector('.nav__mobile');

    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('show-nav');
  };

  const toggleNavLinks = () => {
    const navLinks = document.querySelectorAll('.nav__link-mobile');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const navBtn = document.querySelector('.hamburger');
        const navMobile = document.querySelector('.nav__mobile');

        navBtn.classList.remove('is-active');
        navMobile.classList.remove('show-nav');
      });
    });
  };

  return (
    <>
      <nav className='nav__desktop'>
        <ul className='nav__links nav__links-desktop'>
          <li>
            <a href='#home' className='nav__link nav__link-desktop'>
              <i className='fa-solid fa-house'></i> Home
            </a>
          </li>
          <li>
            <a href='#about-me' className='nav__link nav__link-desktop'>
              <i className='fa-solid fa-user'></i>About Us
            </a>
          </li>
          <li>
            <a href='#projects' className='nav__link nav__link-desktop'>
              <i className='fa-solid fa-laptop-code'></i> Projects & Works
            </a>
          </li>
          <li>
            <a href='#resume' className='nav__link nav__link-desktop'>
              <i className='fa-solid fa-file'></i> Resume{' '}
            </a>
          </li>
          <li>
            <a href='#contact' className='nav__link nav__link-desktop'>
              <i className='fa-solid fa-at'></i> Contact Us
            </a>
          </li>
        </ul>
      </nav>

      <button
        className='hamburger hamburger--spring'
        type='button'
        onClick={toggleNav}
      >
        <span className='hamburger-box'>
          <span className='hamburger-inner'></span>
        </span>
      </button>

      <nav className='nav__mobile'>
        <ul className='nav__links' onClick={toggleNavLinks}>
          <li>
            <a href='#home' className='nav__link nav__link-mobile'>
              Home
            </a>
          </li>
          <li>
            <a href='#about-me' className='nav__link nav__link-mobile'>
              About Us
            </a>
          </li>
          <li>
            <a href='#resume' className='nav__link nav__link-mobile'>
              Resume
            </a>
          </li>
          <li>
            <a href='#contact' className='nav__link nav__link-mobile'>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      <header className='header scroll-spy-section' id='home'>
        <div className='header__text'>
          <h1 className='header__title'>
            <div>Hi! 👋🏻</div>
            <div>We Are Future Technologies</div>
          </h1>
          <p className='header__paragraph'>
            We are a Web Development Company and Hosting, we are here to help
            you with your projects.
          </p>
        </div>
        <a href='#about-me' className='header__link'>
          <i className='fa-solid fa-arrow-down header__link-arrow'></i>
        </a>
      </header>
    </>
  );
};

export default Header;
