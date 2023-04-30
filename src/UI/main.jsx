import React from 'react';
import { Routes, HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Contact from '../Components/Contact/Contact';
import Resumen from '../Components/Resumen/Resumen';
import Projects from '../Components/Projects/Projects';
import About from '../Components/About/About';
import AboutUs from '../Components/AboutUs/AboutUs';
import ProjectsPage from '../Components/ProjectsPage/ProjectsPage';
import Greeting from '../Components/Header/Greeting';
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
              <About />
              <Projects />
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