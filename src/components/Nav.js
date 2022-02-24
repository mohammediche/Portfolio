import React from 'react';
import {AiFillHome,AiFillContacts, AiFillLinkedin, AiFillGithub, AiFillFacebook, AiFillInstagram} from "react-icons/ai";
import {GiSkills} from "react-icons/gi";
import {FaImages} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import photoDeProfil from "../media/photoDeProfil.jpg";


const Nav = () => {
    return (
        
        <div className='ComponentNavigation'>

           <div className='imageAndName'> 
               <img className='profilImage' src={photoDeProfil} alt="profil" /> {/* https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin.jpg */}
               <span className='name'>Mohammed Iche</span>
           </div>

            <ul className='categories'>
                <li><AiFillHome/><NavLink className={"navLink"} to={"/"}>Acceuil</NavLink></li>
                <li><GiSkills/><NavLink className={"navLink"} to={"/competences/"}>Compétences</NavLink></li>
                <li><FaImages/><NavLink className={"navLink"} to={"/portfolio/"}>Portfolio</NavLink></li>
                <li><AiFillContacts/><NavLink className={"navLink"} to={"/contact/"}>Contact</NavLink></li>
            </ul>

            <div className='socialMedia'>
                <span><AiFillLinkedin/></span>
                <span><AiFillGithub/></span>
                <span><AiFillFacebook/></span>
                <span><AiFillInstagram/></span>
            </div>

                <span style={{fontSize: "12px", justifyContent: "center"}}>Projet React - 2022</span>
                {/* <img src={Logo} alt="mon logo"  style={{width : "138px"}}/> */}          
        </div>
    );
};

export default Nav;