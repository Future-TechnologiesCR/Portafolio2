import React, { useEffect, useState } from "react";
import blaster from "../../img/blaster.png";

function ProjectsPage() {
  const [value, setValue] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [inactive, setInactive] = useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const description = [
    "Se presenta la empresa y se habla de los proceso que la empresa lleva a cabo para tomar un proyecto, se evacuan las preguntas del cliente con respecto a la empresa y por último se hablan de los compromisos por parte de la empresa y los compromisos por parte del cliente.",
    "Toma de requerimientos del cliente: Se abordan los requerimientos del cliente, una vez obtenidos todos los requerimientos por parte del cliente se le pueden sugerir cosas pero sólosugerir.",
    "Contrato con la empresa: Una vez confirmados todos los requerimientos se redacta un contrato personalizado con el cliente con todos los detalles del trabajo que va a realizar la empresa y las responsabilidades por parte de la empresa y el cliente.",
    "Inicio de proyecto: Una vez firmado el contrato se da inicio al proyecto basándonos en los requerimientos obtenidos anteriormente.",
    "Entregables: Se van a organizar reuniones semanales con el cliente para dar muestras del progreso del trabajo.",
    "Entrega del proyecto: Se entrega el resultado final del proyecto y se ofrecen los servicios de hosting de la empresa y el servicios de mantenimiento y por último se le envía una encuesta de satisfacción de la empresa (Una encuesta con preguntas con relación a la experiencia como cliente de la empresa con el fin de conocer a nuestros clientes y mejorar su experiencia con la empresa).",
  ];

  const buttons = [
    { value: 1, image: blaster },
    { value: 50, image: blaster },
    { value: 100, image: blaster },
    { value: 150, image: blaster },
    { value: 200, image: blaster },
    { value: 250, image: blaster },
  ];
  
  const images = [
    { src: blaster, description: description[0] },
    { src: blaster, description: description[1] },
    { src: blaster, description: description[2] },
    { src: blaster, description: description[3] },
    { src: blaster, description: description[4] },
    { src: blaster, description: description[5] },
  ];
  const buttonNames = 
  // get the button names from the images src value
  images.map((image) => image.src.split("/")[3].split(".")[0]);

  const getImage = () => {
    if (value < 34) {
      return images[0];
    } else if (value < 67) {
      return images[1];
    } else {
      return images[2];
    }
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
                <p className="buttonGroup__button-name">
                  {buttonNames[buttons.indexOf(button)]}
                </p>
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
