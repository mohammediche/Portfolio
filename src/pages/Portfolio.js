import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import axios from 'axios';
import {BsArrowRightCircle} from "react-icons/bs";



const Portfolio = () => {

    const [projets, setProjets] = useState([])
 


    useEffect(()=>{
       axios.get("http://localhost:8000/projets")
       .then((res)=>{
        setProjets(res.data)
       })
       .catch(error => console.log(error));
    },[])





    return (
        <div id='portfolioPage'>
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
                               <Link className='displayNone voirLeProjet hvr-sweep-to-right' to={`/portfolio/${projet.id}`}>Voir le projet <BsArrowRightCircle/></Link>
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




//onClick={()=>{Navigate(`portfolio/${projet.id}}`)}}