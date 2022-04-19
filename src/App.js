//taper rsc pour avoir ce contenue ci-dessous:
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./style.css";
import "./mediaQuery.css";
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
     
          </>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
