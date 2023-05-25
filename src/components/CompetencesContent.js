import React from "react";
import ProgressBarre from "./ProgressBarre";
import { GiKimono, GiSoccerBall, GiConsoleController } from "react-icons/gi";
import { IoLogoJavascript, IoLogoCss3, IoIosRadioButtonOn } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoMdRadioButtonOff } from "react-icons/io";

const CompetencesContent = () => {
  return (
    <div>
      <div className="area competencesContent">
        <section className="section fristSection">
          <div>
            <h2>Expérience</h2>
            <h3>Développeur web</h3>
            {/******** expériences Alternance **********/}
            <div>
              <div>
                <span>Alternance - Moby-deck </span>
                <span>2022/2023</span>
              </div>
              <ul className="exeperiencesAlternance">
                <li>
                  Développement du site internet de l'entreprise :
                  <ol>
                    <li>Utilisation de : React, TypeScript, .NET, Git, Docker</li>
                    <li>Mise en ligne du site sur AWS</li>
                  </ol>
                </li>
              </ul>
            </div>
            <h3>Développeur web</h3>
            {/******** expériences Alternance **********/}
            <div>
              <div>
                <span>Alternance - Dialogue Marketing </span>
                <span>2021/2022</span>
              </div>
              <ul className="exeperiencesAlternance">
                <li>l'accomplissement des différentes tâches d'un site web WordPress.</li>
                <li>Compréhension du besoin client.</li>
                <li>Prise de responsabilité des différentes décisions.</li>
              </ul>
            </div>

            {/******** expériences Formation **********/}
            <div style={{ marginTop: "18px" }}>
              <div>
                <span>Projets professionnels </span>
                <span>2021/2022</span>
              </div>
              <ul className="exeperiencesAlternance">
                <li>Réalisations des maquettes animé en HTML5 / CSS3.</li>
                <li>Optimisation d'un site web (SEO et accessibilité).</li>
                <li>Construction d'une base de donnée NoSQL sécurisé d'une application web</li>
                <li>Création d'un réseau social ( Back-end et Front-end )</li>
              </ul>
            </div>
          </div>
          {/******** Formation **********/}
          <div>
            <h2>Formation</h2>
            <h3>Développeur Web React - OpenClassrooms</h3>
            <span>2022/2024</span>
            <h3>Développeur Web - OpenClassrooms</h3>
            <span>2021/2022</span>
            <p>certificat niveau 5 (bac+2)</p>

            <h3>Baccalauréat technologique STI2D</h3>
            <span>2018/2019</span>
            <p>sciences et technologies de l'industrie et du développement durable</p>
          </div>
        </section>
        <hr className="onlyMobile" />
        {/******** Hard skills ********/}
        <section className="section secondSection">
          <h2>Hard Skills</h2>
          <h3>Front-end :</h3>
          <span className="logoHtml">
            <AiFillHtml5 />
            HTML
          </span>
          <ProgressBarre done="95" />
          <span className="logoCss">
            {" "}
            <IoLogoCss3 />
            CSS
          </span>
          <ProgressBarre done="95" />
          <span className="logoJs">
            {" "}
            <IoLogoJavascript />
            JAVASCRIPT - REACT - TYPESCRIPT
          </span>
          <ProgressBarre done="80" />

          <h3>Back-end :</h3>
          <span> NODE JS - EXPRESS</span>
          <ProgressBarre done="50" />
          <span> .NET</span>
          <ProgressBarre done="20" />
        </section>
        <hr className="onlyMobile" />
        {/******** Centre d'intéret ********/}
        <section className="section thirdSection">
          <h2>Centre d'intérêt</h2>
          <div className="interets">
            <span>
              <GiKimono /> Judo
            </span>
            <span>
              <GiSoccerBall /> Football
            </span>
            <span>
              <MdOutlineTravelExplore />
              Voyage
            </span>
            <span>
              <GiConsoleController />
              Jeux vidéos
            </span>
          </div>
        </section>
        <hr className="onlyMobile" />
        {/******** Autres compétences ********/}
        <section className="section fourthSection">
          <h2>Autres compétences</h2>
          <div className="autresCompetences">
            <span>Redux/Mobx</span>
            <div>
              <IoIosRadioButtonOn />
              <IoIosRadioButtonOn />
              <IoIosRadioButtonOn />
              <IoIosRadioButtonOn />
              <IoMdRadioButtonOff />
            </div>
            <span>Git</span>
            <div>
              <IoIosRadioButtonOn />
              <IoIosRadioButtonOn />
              <IoIosRadioButtonOn />
              <IoMdRadioButtonOff />
              <IoMdRadioButtonOff />
            </div>
            <span>Wordpress</span>
            <div>
              <IoIosRadioButtonOn />
              <IoIosRadioButtonOn />
              <IoMdRadioButtonOff />
              <IoMdRadioButtonOff />
              <IoMdRadioButtonOff />
            </div>

            <span>Mysql / PostgreSQL</span>
            <div>
              <IoIosRadioButtonOn />
              <IoIosRadioButtonOn />
              <IoIosRadioButtonOn />
              <IoMdRadioButtonOff />
              <IoMdRadioButtonOff />
            </div>

            <span>MongoDB</span>
            <div>
              <IoIosRadioButtonOn />
              <IoIosRadioButtonOn />
              <IoIosRadioButtonOn />
              <IoMdRadioButtonOff />
              <IoMdRadioButtonOff />
            </div>

            <span>Sequelize</span>
            <div>
              <IoIosRadioButtonOn />
              <IoIosRadioButtonOn />
              <IoIosRadioButtonOn />
              <IoMdRadioButtonOff />
              <IoMdRadioButtonOff />
            </div>
            <span>Docker</span>
            <div>
              <IoIosRadioButtonOn />
              <IoMdRadioButtonOff />
              <IoMdRadioButtonOff />
              <IoMdRadioButtonOff />
              <IoMdRadioButtonOff />
            </div>
            <span>AWS</span>
            <div>
              <IoIosRadioButtonOn />
              <IoIosRadioButtonOn />
              <IoMdRadioButtonOff />
              <IoMdRadioButtonOff />
              <IoMdRadioButtonOff />
            </div>

            <span>SEO / accessibilité</span>
            <div>
              <IoIosRadioButtonOn />
              <IoIosRadioButtonOn />
              <IoIosRadioButtonOn />
              <IoIosRadioButtonOn />
              <IoMdRadioButtonOff />
            </div>
          </div>
        </section>
        {/******** Soft skills ********/}
        <section className="section fiveSection">
          <h2>Soft Skills</h2>
          <div>
            <span style={{ padding: "5px" }}>Autonome</span>
            <span style={{ padding: "5px" }}>Rigoureux</span>
            <span style={{ padding: "5px" }}>Collaboratif</span>
            <span style={{ padding: "5px" }}>Curieux</span>
            <span style={{ padding: "5px" }}>Adaptatif</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CompetencesContent;
