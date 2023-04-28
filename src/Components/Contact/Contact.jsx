import React from 'react';

const Contact = () => {
  return (
    <section className='contact section scroll-spy-section' id='contact' data-scroll-spy-title='Contact'>
      <h2 className='heading-underline'>Contacto</h2>
      <div className='wrapper'>
        <form
          action='https://formsubmit.co/pedro_borbon@futuretechcr.com'
          method='POST'
          className='contact__form'
        >
          <input
            type='hidden'
            name='_subject'
            value='New email from your website future_techcr!'
          />
          <input
            type='hidden'
            name='_next'
            value='https://www.futuretechcr.com'
          />
          <label htmlFor='name'>Su nombre:</label>
          <input
            type='text'
            name='name'
            id='name'
            required
            className='contact__form-input'
          />
          <label htmlFor='email'>Dirección de correo electrónico</label>
          <input
            type='email'
            name='email'
            id='email'
            required
            className='contact__form-input'
          />
          <label htmlFor='msg'>Mensaje</label>
          <textarea
            type='text'
            name='message'
            id='msg'
            rows='10'
            required
            className='contact__form-input contact__form-input--msg'
          ></textarea>
          <button type='submit' className='btn contact__form-btn'>
            Enviar
            <div className='shadow'></div>
          </button>
        </form>
      </div>
      <div className='block-left'></div>
    </section>
  );
};

export default Contact;
