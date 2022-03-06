//taper rsc pour avoir ce contenue ci-dessous:
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Competences from "./pages/Competences";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import "./style.css";
import Projet from "./pages/Projet/Projet";
import Loading from "./components/loading/Loading";

const App = () => {
  return (
    <div>
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <Loading />
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:idProjet" element={<Projet />} />
            <Route path="/contact" element={<Contact />} />
          </>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
