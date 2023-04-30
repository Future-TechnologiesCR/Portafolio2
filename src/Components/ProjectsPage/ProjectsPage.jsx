import React, { useEffect, useState } from "react";
import mercury from "../../img/mercury.avif";
import jupiter from "../../img/jupiter.avif";
import blaster from "../../img/blaster.png";

function ProjectsPage() {
  const [value, setValue] = useState(50);
  const [isActive, setIsActive] = useState(false);
  const [inactive, setInactive] = useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const description = [
    "Mercurio es el planeta más cercano al Sol y el más pequeño del sistema solar. Su órbita es la más excéntrica de todas, con una excentricidad de 0,21. Su nombre proviene del dios romano Mercurio, el mensajero de los dioses.",
    "Jupiter es el planeta más grande del sistema solar, con una masa casi dos veces y media la de todos los demás planetas juntos. Su nombre proviene del dios romano Júpiter, el rey de los dioses.",
    "Un quadcopter es un vehículo aéreo de cuatro rotores que se eleva y se propulsa mediante cuatro rotores. Los quadcopters son clasificados como helicópteros, ya que el motor de cada rotor los hace girar y los eleva.",
  ];

  const buttons = [
    { value: 1, image: mercury },
    { value: 50, image: jupiter },
    { value: 100, image: blaster },
  ];
  
  const images = [
    { src: mercury, description: description[0] },
    { src: jupiter, description: description[1] },
    { src: blaster, description: description[2] },
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

  const transitionTime = 800; // 1 second

  useEffect(() => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, transitionTime);
  }, [value]);

  useEffect(() => {
    setInactive(true);
    setTimeout(() => {
      setInactive(false);
    }, transitionTime);
  }, [isActive]);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
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
            <h1 className="slider__text-heading">Proyectos</h1>
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
          <input
            type="range"
            min="1"
            max="100"
            value={value}
            onChange={handleChange}
            className="buttonGroup__range-input"
          />
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
