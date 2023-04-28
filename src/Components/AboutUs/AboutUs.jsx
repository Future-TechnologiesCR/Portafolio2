import React from 'react'
import "../../UI/main.scss"

function AboutUs() {
  return (
    <> 
        <br/>
        <br/>
        <main>
            <section className="services">
                <div className="services__container">
                    <h2 className="services__title">Services</h2>
                    <div className="services__content">
                        <div className="services__item">
                            <i className="fa-solid fa-laptop-code"></i>
                            <h3 className="services__item-title">Web Development</h3>
                            <p className="services__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                        </div>
                        <div className="services__item">
                            <i className="fa-solid fa-server"></i>
                            <h3 className="services__item-title">Hosting</h3>
                            <p className="services__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                        </div>
                        <div className="services__item">
                            <i className="fa-solid fa-pen-nib"></i>
                            <h3 className="services__item-title">Design</h3>
                            <p className="services__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
    )
}

export default AboutUs