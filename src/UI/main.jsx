import React from "react";
import { Routes, HashRouter as Router, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import Greeting from "../Components/Header/Greeting";
import Services from "../Components/Services/Services";
import Processes from "../Components/Processes/Processes";
import Projects from "../Components/Projects/Projects";
import ProyectsPage from "../Components/ProyectsPage/ProyectsPage";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import Resumen from "../Components/Resumen/Resumen";
import About from "../Components/About Us/About Us";
import "./main.scss";

const Main = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Greeting />
                <Services />
                <Processes />
                <Projects />
                <About />
                <Resumen />
                <Contact />
              </main>
            }
          />
          <Route path="/projectspage" element={<ProyectsPage />} />
          {/* <Route path="/services" element={<ProjectsPage />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Main;
