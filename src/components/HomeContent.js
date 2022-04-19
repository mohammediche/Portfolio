import React from "react";

const HomeContent = () => {
  return (
    <div>
      <div className="area homeContent">
        <div className="profil">
          <h1>Mohammed Iche</h1>
          <h2>Développeur web</h2>
          <a
            className="downloadCV hvr-sweep-to-right"
            href="../media/cv_Iche_Mohammed_Developpeur-web.pdf"
            download="cv.Mohammed.Iche.pdf"
          >
            Télécharger CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
