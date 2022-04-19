import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsArrowRightCircle } from "react-icons/bs";

const PortfolioContent = () => {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    axios
      .get("db.json")
      .then((res) => {
        setProjets(res.data.projets);
        // console.log(res.data.projets);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <div>
      <div className="area portfolioContent">
        {/* <h1>Mes Projets réalisés</h1> */}
        {projets.map((projet, key) => {
          return (
            <div className="MesProjets" key={key}>
              <div className="projet">
                <div className="enteteCardProjet">
                  <h2>{projet.title}</h2>
                  <p className="cardContent descriptionProfil">
                    {projet.description}
                  </p>
                  <a
                    className="cardContent voirLeProjet hvr-sweep-to-right"
                    href={`https://github.com/mohammediche/${projet.title}`
                      .split(" ")
                      .join("-")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Voir le projet sur Github <BsArrowRightCircle />
                  </a>
                  {projet.website &&
                  <a href={projet.website} className="voirLeProjet hvr-sweep-to-right" target="_blank"  rel="noreferrer">Visiter le site internet</a>
                  }
                </div>
                <img
                  className="imageProjet"
                  src={projet.image}
                  alt="mon projet"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioContent;
