import React from 'react';
import Nav from '../components/Nav'; 
import ProgressBarre from '../components/ProgressBarre';
import {GiKimono, GiSoccerBall, GiConsoleController} from "react-icons/gi";
import {IoLogoJavascript, IoLogoCss3, IoIosRadioButtonOn} from "react-icons/io";
import {AiFillHtml5} from "react-icons/ai"; 
import {MdOutlineTravelExplore} from "react-icons/md"; 
import {IoMdRadioButtonOff} from "react-icons/io"; 


const Competences = () => {
    return (
        <div id='competencesPage'>
            <Nav/>
             <div className='competencesContent'>
                <section className='section fristSection'>
                    <div>
                        <h2>Expérience</h2>
                        <h3>Dialogue Marketing - Alternance</h3>
                        <span>2021/2022</span>
                        <p>Réalisation des différents projets de ma formation de Développeur Web, en 
                            paralléle l'accomplissement et l'apprentissage des différentes taches durant mon année en alternance 
                        </p>
                    </div>
                    <div>
                        <h2>Formation</h2>
                        <h3>Développeur Web - OpenClassrooms</h3>
                        <span>2021/2022</span>
                        <p>certificat niveau 5 (bac+2)</p>
                    </div>

                </section>
                <section className='section secondSection'> 
                    <h2>Langages</h2>
                    <h3>Front-end :</h3>
                    <span className='logoHtml'><AiFillHtml5/>HTML</span>
                    <ProgressBarre done="90"/>
                    <span className='logoCss'> <IoLogoCss3/>CSS</span>
                    <ProgressBarre done="90"/>
                    <span className='logoJs'> <IoLogoJavascript/>JAVASCRIPT - REACT</span>
                    <ProgressBarre done="50"/>

                     <h3>Back-end :</h3>
                       <span> NODE JS - EXPRESS</span>
                       <ProgressBarre done="65"/>
                </section>
                <section className='section thirdSection'>
                    <h2>Intérêts</h2>
                    <div className='interets'>
                       <span><GiKimono/> Judo</span>
                       <span><GiSoccerBall/> Football</span>
                       <span><GiConsoleController/>Jeux vidéos</span>
                       <span><MdOutlineTravelExplore/>Voyage</span>
                    </div>

                </section>
                <section className='section fourthSection'>
                    <h2>Autres compétences</h2>
                    <div className='autresCompetences'>
                       
                     <span>Git</span>
                     <div>
                      <IoIosRadioButtonOn/>
                      <IoIosRadioButtonOn/>
                      <IoIosRadioButtonOn/>
                      <IoMdRadioButtonOff/>
                      <IoMdRadioButtonOff/>
                      </div>
                      <span>Wordpress</span>
                      <div>
                      <IoIosRadioButtonOn/>
                      <IoMdRadioButtonOff/>
                      <IoMdRadioButtonOff/>
                      <IoMdRadioButtonOff/>
                      <IoMdRadioButtonOff/>
                      </div>

                      <span>Mysql</span> 
                      <div>
                      <IoIosRadioButtonOn/>
                      <IoIosRadioButtonOn/>
                      <IoIosRadioButtonOn/>
                      <IoMdRadioButtonOff/>
                      <IoMdRadioButtonOff/>
                      </div>

                      <span>MongoDB</span>
                      <div>
                      <IoIosRadioButtonOn/>
                      <IoIosRadioButtonOn/>
                      <IoMdRadioButtonOff/>
                      <IoMdRadioButtonOff/>
                      <IoMdRadioButtonOff/>
                      </div>

                      <span>Sequelize</span>
                      <div>
                      <IoIosRadioButtonOn/>
                      <IoIosRadioButtonOn/>
                      <IoIosRadioButtonOn/>
                      <IoMdRadioButtonOff/>
                      <IoMdRadioButtonOff/>
                      </div>

                      <span>SEO / accessibilité</span>
                      <div>
                      <IoIosRadioButtonOn/>
                      <IoIosRadioButtonOn/>
                      <IoIosRadioButtonOn/>
                      <IoIosRadioButtonOn/>
                      <IoMdRadioButtonOff/>
                      </div>
                      
                    </div>
                </section>
             </div>

        </div>
    );
};

export default Competences;