import React from 'react';
import Nav from '../components/Nav';

const Home = () => {


    return (
        <div id='homePage'>
            <Nav />
            <div className="homeContent">
                <div className='profil'>
                   <h1>Mohammed Iche</h1>
                   <h2>Développeur web</h2>
                   <a className='downloadCV hvr-sweep-to-right' href="www.google.fr" download="work">Télécharger CV</a>
                  
                </div>   
            </div>
        </div>
    );
};

export default Home;