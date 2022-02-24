//taper rsc pour avoir ce contenue ci-dessous:
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import "./style.css";
import Home from "./pages/Home";
import Competences from "./pages/Competences"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import "./style.css";


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

      <BrowserRouter>
         <Routes>
           <>
           <Route path='/' element={<Home/>}/>
           <Route path='/competences' element={<Competences/>}/>
           <Route path='/portfolio' element={<Portfolio/>}/>
           <Route path='/contact' element={<Contact/>}/>
           </>
         </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;