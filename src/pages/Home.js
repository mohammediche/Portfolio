import React from "react";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div id="homePage">
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
      <Nav />
      <div className="homeContent">
        <div className="profil">
          <h1>Mohammed Iche</h1>
          <h2>Développeur web</h2>
          <a
            className="downloadCV hvr-sweep-to-right"
            href="../media/cv_Iche_Mohammed_Developpeur-web.pdf"
            download="cv_Mohammed_Developpeur_Web"
          >
            Télécharger CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
