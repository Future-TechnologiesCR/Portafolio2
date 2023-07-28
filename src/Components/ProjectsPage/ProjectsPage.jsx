import React, { useEffect, useState } from "react";
import uno from "../../img/Uno.webp";
import dos from "../../img/Dos.webp";
import tres from "../../img/Tres.webp";
import cuatro from "../../img/Cuatro.webp";
import cinco from "../../img/Cinco.webp";
import seis from "../../img/Seis.webp";

function ProjectsPage() {
  const [value, setValue] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [inactive, setInactive] = useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const description = [
    "Se presenta la empresa y se habla de los proceso que la empresa lleva a cabo para tomar un proyecto, se evacuan las preguntas del cliente con respecto a la empresa y por último se hablan de los compromisos por parte de la empresa y los compromisos por parte del cliente.",
    "Toma de requerimientos del cliente: Se abordan los requerimientos del cliente, una vez obtenidos todos los requerimientos por parte del cliente se le pueden sugerir cosas pero sólo sugerir.",
    "Contrato con la empresa: Una vez confirmados todos los requerimientos se redacta un contrato personalizado con el cliente con todos los detalles del trabajo que va a realizar la empresa y las responsabilidades por parte de la empresa y el cliente.",
    "Inicio de proyecto: Una vez firmado el contrato se da inicio al proyecto basándonos en los requerimientos obtenidos anteriormente.",
    "Entregables: Se van a organizar reuniones semanales con el cliente para dar muestras del progreso del trabajo.",
    "Entrega del proyecto: Se entrega el resultado final del proyecto y se ofrecen los servicios de hosting de la empresa y el servicios de mantenimiento y por último se le envía una encuesta de satisfacción de la empresa (Una encuesta con preguntas con relación a la experiencia como cliente de la empresa con el fin de conocer a nuestros clientes y mejorar su experiencia con la empresa).",
  ];

  const buttons = [
    { value: 1, image: uno },
    { value: 50, image: dos },
    { value: 100, image: tres },
    { value: 150, image: cuatro },
    { value: 200, image: cinco },
    { value: 250, image: seis },
  ];

  const names = ["uno", "dos", "tres", "cuatro", "cinco", "seis"];
  
  const images = [
    { src: uno, description: description[0] },
    { src: dos, description: description[1] },
    { src: tres, description: description[2] },
    { src: cuatro, description: description[3] },
    { src: cinco, description: description[4] },
    { src: seis, description: description[5] },
  ];
  const buttonNames = 
  // get the button names from the names array
  buttons.map((button) => names[buttons.indexOf(button)]);

  const getImage = () => {
    const thresholds = [50, 100, 150, 200, 250];
    
    for (let i = 0; i < thresholds.length; i++) {
      if (value < thresholds[i]) {
        return images[i];
      }
    }
  
    return images[thresholds.length];
  };
  

  const transitionTime = 1000;
  const transitionTimeInactive = 1000;

  useEffect(() => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, transitionTime);
  }, [value]);

  useEffect(() => {
    // dont use timeout for this
    setInactive(true);
    setTimeout(() => {
      setInactive(false);
    }, transitionTimeInactive);
  }, [value]);

  return (
    <>
      <div className="">
        <div className="slider">
          <div className="slider__image">
            <img
              src={getImage().src}
              alt="slider"
              className={`slider__image-img ${
                isActive ? "slider__image-img--active" : ""
              }`}

            
            />
          </div>
          <div className="slider__text">
            <h1 className="slider__text-heading">Procesos</h1>
            <p className={`slider__text-paragraph ${
                inactive ? "slider__text-paragraph--inactive" : ""
              }`}
            >
              {getImage().description}
            </p>
          </div>
        </div>
        <div className="buttonGroup">
          <div className="buttonGroup__sliderRange">
            {buttons.map((button) => (
              <button
                key={button.value}
                className="buttonGroup__button"
                onClick={() => setValue(button.value)}
                >
                <img src={button.image} alt="slider"
                  className={`buttonGroup__button-img ${
                    inactive ? "buttonGroup__button-img--inactive" : ""
                  }`}
                />
                {/* button names */}
                {/* <p className="buttonGroup__button-name">
                  {buttonNames[buttons.indexOf(button)]}
                </p> */}
              </button>
              ))}
          </div>
          {/* <input
            type="range"
            min="1"
            max="100"
            value={value}
            onChange={handleChange}
            className="buttonGroup__range-input"
          /> */}
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
