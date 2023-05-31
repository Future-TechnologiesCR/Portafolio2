import React from 'react';
import { Routes, HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Greeting from '../Components/Header/Greeting';
import Services from '../Components/Services/Services';
import Processes from '../Components/Processes/Processes';
import Projects from '../Components/Projects/Projects';
import AboutUs from '../Components/AboutUs/AboutUs';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Resumen from '../Components/Resumen/Resumen';
import ProjectsPage from '../Components/ProjectsPage/ProjectsPage';
import About from '../Components/About/About';
import './main.scss';

const Main = () => {
  return (
    <>
      <Router>
          <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Greeting />
              <Services />
              <Processes />
              <Projects />
              <About />
              {/* Elimiar Resumen pero antes salvar la seccion de contact */}
              <Resumen /> 
              <Contact />
            </main>
          } />
          <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="/services" element={<ProjectsPage />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Main;