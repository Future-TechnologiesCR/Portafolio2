import React from 'react';

const Resumen = () => {
  return (
    <section className='resume section scroll-spy-section' id='resume'>
      <h2 className='heading-underline'>Resume</h2>

      <div className='wrapper'>
        <div className='resume-container'>
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
