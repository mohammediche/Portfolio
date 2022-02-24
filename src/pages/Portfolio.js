import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import {BsArrowRightCircle} from "react-icons/bs";
import projet1 from "../media/projet1.png";
import projet2 from "../media/projet2.png";
import projet3 from "../media/projet3.png";
import projet4 from "../media/projet4.png";
import projet5 from "../media/projet5.png";
import projet6 from "../media/projet6.png";



const Portfolio = () => {

    const [projets] = useState([
        {
            "id" : 1,
            "title" : "Groupomania",
            "image" : `${projet6}`,
            "description" : "Création d'un réseau social"
        },
        {
            "id" : 2,
            "title" : "Piquante",
            "image" : `${projet5}`,
            "description" : " réalisation du backend d'un site web"
        },
        {
            "id" : 3,
            "title" : "Orinoco",
            "image" : `${projet4}`,
            "description" : " découverte du javascript"
        },
        {
            "id" : 4,
            "title" : " La chouette agence",
            "image" : `${projet3}`,
            "description" : " SEO et Accessibilité"
        },
        {
            "id" : 5,
            "title" : "Ohmyfood",
            "image" : `${projet2}`,
            "description" : "  Animation css avancées"
        },
        {
            "id" : 6,
            "title" : "Reservia",
            "image" : `${projet1}`,
            "description" : " Maquette HTML / CSS"
        }
    ]);



    return (
        <div id='portfolioPage'>
            <Nav/>
            <div className='portfolioContent'>
            {/* <h1>Mes Projets réalisés</h1> */}
             {projets.map((projet, key)=>{
                 return(

                    <div className='MesProjets' key={key}>
                        <div className='projet'>

                            <div className='enteteCardProjet'>
                               <h2>{projet.title}</h2>
                               <p className='displayNone descriptionProfil'>{projet.description}</p>
                               <Link className='displayNone voirLeProjet hvr-sweep-to-right' to={"/"}>Voir le projet <BsArrowRightCircle/></Link>
                            </div>
                          <img className='imageProjet' src={projet.image} alt="mon projet" />
                        </div>

                    </div>

                 )
    
             })} 

            </div>
        </div>
    );
};

export default Portfolio;