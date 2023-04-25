import React from 'react';

const Resumen = () => {
  return (
    <section className='resume section scroll-spy-section' id='resume'>
      <h2 className='heading-underline'>Resume</h2>

      <div className='wrapper'>
        <div className='resume-container'>
          {/* <div className='resume__title resume__section'> 
            <h2 className='resume__name'>
              Futures Technologies <hr />
              <br />
              Information
            </h2>
          </div> */}
          <div className='resume__contact resume__section'>
            <h3 className='resume__card-heading'>
              Contact
              <div className='shadow'></div>
            </h3>
            <ul className='resume__list'>
              <li className='resume__list-item'>
                pedro_borbon@futuretechcr.com
              </li>
              <li className='resume__list-item'>Our Social Networks 👇</li>
              <li className='resume__list-item resume__list-links'>
                <a
                  className='resume__link resume__icon'
                  href='https://api.whatsapp.com/send/?phone=50672495354&text&type=phone_number&app_absent=0'
                  target='_blank'
                >
                  <i className='fa-brands fa-whatsapp'></i>
                </a>

                <a
                  className='resume__link resume__icon'
                  href='mailto:pedro_borbon@futuretechcr.com '
                >
                  <i className='fa-solid fa-at'></i>
                </a>

                <a
                  className='resume__link resume__icon'
                  href='https://www.facebook.com/profile.php?id=100087230610240'
                >
                  <i className='fa-brands fa-facebook'></i>
                </a>

                <a
                  className='resume__link resume__icon'
                  href='https://www.instagram.com/future_techcr/'
                >
                  <i className='fa-brands fa-instagram'></i>
                </a>

                <a
                  className='resume__link resume__icon'
                  href='https://github.com/Future-TechnologiesCR'
                  target='_blank'
                >
                  <i className='fa-brands fa-github'></i>
                </a>
              </li>
            </ul>
          </div>
          {/* <div className='resume__skills resume__section'>
            <h3 className='resume__card-heading'>
              Skills and software
              <div className='shadow'></div>
            </h3>
            <ul className='resume__list resume__flex'>
              <li className='resume__framed-list-item'>HTML</li>
              <li className='resume__framed-list-item'>CSS</li>
              <li className='resume__framed-list-item'>JavaScript</li>
              <li className='resume__framed-list-item'>SCSS</li>
              <li className='resume__framed-list-item'>Bootstrap</li>
              <li className='resume__framed-list-item'>Python</li>
              <li className='resume__framed-list-item'>SQL</li>
              <li className='resume__framed-list-item'>MERN</li>
              <li className='resume__framed-list-item'>Git & GitHub</li>
              <li className='resume__framed-list-item'>API</li>
              <li className='resume__framed-list-item'>Flask</li>
              <li className='resume__framed-list-item'>VS Code</li>
              <li className='resume__framed-list-item'>React</li>
              <li className='resume__framed-list-item'>Node.js</li>
              <li className='resume__framed-list-item'>MongoDB</li>
              <li className='resume__framed-list-item'>Express</li>
              <li className='resume__framed-list-item'>Netlify</li>
              <li className='resume__framed-list-item'>Angular</li>
              <li className='resume__framed-list-item'>Java</li>
              <li className='resume__framed-list-item'>C++</li>
              <li className='resume__framed-list-item'>
                MS Office & Google Suite
              </li>
              <li className='resume__framed-list-item'>Photoshop</li>
              <li className='resume__framed-list-item'>Support</li>
              <li className='resume__framed-list-item'>Packet Tracer</li>
              <li className='resume__framed-list-item'>Cisco</li>
              <li className='resume__framed-list-item'>Linux</li>
              <li className='resume__framed-list-item'>Windows</li>
              <li className='resume__framed-list-item'>MacOS</li>
            </ul>
          </div> */}
          {/* <div className='resume__languages resume__section'>
            <h3 className='resume__card-heading'>
              Foreign languages
              <div className='shadow'></div>
            </h3>
            <ul className='resume__list'>
              <li className='resume__list-item'>
                <span className='bold-text'>Spanish</span> - native
              </li>
              <li className='resume__list-item'>
                <span className='bold-text'>English</span> - advanced B-2
              </li>
            </ul>
          </div> */}
          {/* <div className='resume__experience resume__section'>
            <h3 className='resume__card-heading'>
              Work experience
              <div className='shadow'></div>
            </h3>
            <ul className='resume__list'>
              <li className='resume__list-item'>
                <div>
                  <small>80 hours</small>
                  <p className='bold-text'>Sisea Security</p>
                </div>
                <div>
                  <h4>
                    <small>
                      Develop the main page of contact of SISEA Security
                    </small>
                  </h4>
                </div>
              </li>
            </ul>
          </div> */}
          {/* <div className='resume__certificates resume__section'>
            <h3 className='resume__card-heading'>
              Certificates
              <div className='shadow'></div>
            </h3>
            <ul className='resume__list resume__flex'>
              <li className='resume__framed-list-item'>
                <a href='#' target='_blank' className='resume__link'>
                  CCNA 1v7 By Cisco
                </a>
              </li>
              <li className='resume__framed-list-item'>
                <a href='#' target='_blank' className='resume__link'>
                  IT essentials By Cisco
                </a>
              </li>
              <li className='resume__framed-list-item'>
                <a href='#' target='_blank' className='resume__link'>
                  IoT By Cisco
                </a>
              </li>
              <li className='resume__framed-list-item'>
                <a href='#' target='_blank' className='resume__link'>
                  Angular By OpenBootcamp
                </a>
              </li>
              <li className='resume__framed-list-item'>
                <a
                  href='https://www.aba.ac.cr/'
                  target='_blank'
                  className='resume__link'
                >
                  Mobile support By ABA
                </a>
              </li>
              <li className='resume__framed-list-item'>
                <a href='#' target='_blank' className='resume__link'>
                  Web Development 1&2 by Carlos Slim Foundation
                </a>
              </li>
            </ul>
          </div> */}
          {/* <div className='resume__education resume__section'>
            <h3 className='resume__card-heading'>
              Education
              <div className='shadow'></div>
            </h3>
            <ul className='resume__list'>
              <li className='resume__list-item'>
                <small>2021 - now</small>
                <h4 className='resume__experience-position'>
                  Middle technician in Web Delevelopment
                </h4>
                <p>CTP de Aserrí</p>
              </li>
            </ul>
          </div> */}
          <div className='resume__interests resume__section'>
            <h3 className='resume__card-heading'>
              Interest and posible future projects
              <div className='shadow'></div>
            </h3>
            <ul className='resume__list'>
              <li className='resume__list-item'>
                Create a web page for a local business
              </li>
              <li className='resume__list-item'>
                Being hired for a big company
              </li>
              <li className='resume__list-item'>
                Be a huge company and hire a big team of developers
              </li>
              <li className='resume__list-item'>Have our own building</li>
              <li className='resume__list-item'>Work a lot</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resumen;
