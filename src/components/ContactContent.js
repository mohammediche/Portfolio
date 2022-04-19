import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const ContactContent = () => {
  return (
    <div>
      <div className="contactContent" method="post">
        <div>
          <h1>Me contacter</h1>
        
          <div>
          <button onClick={() => (window.location = "Whatsapp: 07 68 61 12 66")}
            className="contactWM"
            title="Cliquer pour m'appeler "
          >
            <BsTelephone />
          </button>
          
          <button onClick={() => (window.location = "mailto: mohammediche.pro@gmail.com")}
            className="contactWM"
            title="Cliquer pour m'envoyer un mail "
          >
            <FiMail />
          </button>
    
             <a href="https://www.linkedin.com/in/mohammed-iche/" 
             target={"_blank"} 
             rel="noreferrer"
             className="socialMedia"
             title="Visiter mon Linkedin ">
              <AiFillLinkedin />
             </a>
             <a href="https://github.com/mohammediche" 
             target={"_blank"} 
             rel="noreferrer"
             className="socialMedia"
             title=" Visiter mon Github ">
               <AiFillGithub />
             </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactContent;



// &copy;<script>document.write(new Date().getFullYear());</script>