import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Contact from '../Components/Contact/Contact';
import Resumen from '../Components/Resumen/Resumen';
import Projects from '../Components/Projects/Projects';
import About from '../Components/About/About';
import './main.scss';

const Main = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Resumen />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Main;
