import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='Header'>
      <nav ClassName='nav__desktop'>
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

      <button ClassName='hamburger hamburger--spring' type='button'>
        <span ClassName='hamburger-box'>
          <span ClassName='hamburger-inner'></span>
        </span>
      </button>

      <nav ClassName='nav__mobile'>
        <ul ClassName='nav__links'>
          <li>
            <a href='#home' ClassName='nav__link nav__link-mobile'>
              Home
            </a>
          </li>
          <li>
            <a href='#about-me' ClassName='nav__link nav__link-mobile'>
              About Us
            </a>
          </li>
          <li>
            <a href='#resume' ClassName='nav__link nav__link-mobile'>
              Resume
            </a>
          </li>
          <li>
            <a href='#contact' ClassName='nav__link nav__link-mobile'>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
