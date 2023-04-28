import React from 'react';

const Resumen = () => {
  return (
    <section className='resume section scroll-spy-section' id='resume'>
      <h2 className='heading-underline'>Resumen</h2>

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
              <li className='resume__list-item'>Nuestras redes sociales 👇</li>
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
              Intereses Y Proyecciones Futuras
              <div className='shadow'></div>
            </h3>
            <ul className='resume__list'>
              <li className='resume__list-item'>
                Hacer páginas web para empresas
              </li>
              <li className='resume__list-item'>
                Ser una empresa reconocida en el país
              </li>
              <li className='resume__list-item'>
                Formar alianzas con grandes empresas 
              </li>
              <li className='resume__list-item'>Tener un gran equipo de desarrolladorees </li>
              <li className='resume__list-item'>Work a lot</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resumen;
