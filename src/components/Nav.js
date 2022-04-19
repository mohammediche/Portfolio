import {useState} from "react";
import {
  AiFillHome,
  AiFillContacts
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { FaImages } from "react-icons/fa";
import photoDeProfil from "../media/photoDeProfil.jpg";

const Nav = () => {
  
  const [show, setShow] = useState(false);
  // const afficheNavigation = (menu) => {
  //   menu.classList.toggle("open");
  //   console.log("coucou");
  // };
  const showNavigation = ()=>{
    setShow(!show)
  }

  return (
    <div className="ComponentNavigation">
      <div className="imageAndName">
        <img className="profilImage" src={photoDeProfil} alt="profil" />
        <span className="name">Mohammed Iche</span>
      </div>

      <div className={show ? "open" : "hide"}>
        <div className="barresDeNavigationMobile" onClick={showNavigation}>
          <div className="traits trait1 "></div>
          <div className="traits trait2 "></div>
          <div className="traits trait3 "></div>
        </div>
        <ul className="categories">
          <li>
            <a className={"navLink"} href="#home"><AiFillHome />&nbsp;Accueil</a>
          </li>
          <li>
            <a className={"navLink"} href="#competences"><GiSkills />&nbsp;Compétences</a>
          </li>
          <li>
            <a className={"navLink"} href="#portfolio"><FaImages />&nbsp;Portfolio</a>
          </li>
          <li>
            <a className={"navLink"} href="#contact"><AiFillContacts /> &nbsp;Contact</a>
          </li>
        </ul>
      </div>

      <span className="spanNavigation">Projet React - 2022</span>
      {/* <img src={Logo} alt="mon logo"  style={{width : "138px"}}/> */}
    </div>
  );
};

export default Nav;
