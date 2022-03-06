// import React, { useEffect, useState } from 'react';
import Nav from "../components/Nav";
import { BiMailSend } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { useEffect, useState } from "react/cjs/react.production.min";

const Contact = () => {
  return (
    <div id="contactPage">
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
      <Nav />
      <div className="contactContent" method="post">
        <div>
          <h1>Me contacter</h1>
          <button
            onClick={() => (window.location = "Whatsapp: 07 68 61 12 66")}
            className="contactWM"
            title="Cliquer pour m'appeler "
          >
            <BsTelephone />
            <p>+33 7 68 61 12 66</p>
          </button>
          <button
            onClick={() =>
              (window.location = "mailto: mohammediche.pro@gmail.com")
            }
            className="contactWM"
            title="Cliquer pour m'envoyer un mail "
          >
            <FiMail />
            <p>mohammediche.pro@gmail.com</p>
            &copy;<script>document.write(new Date().getFullYear());</script>
          </button>
        </div>
        <form>
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            name="nom"
            required
            pattern="^([ \u00c0-\u01ffa-zA-Z'\-])+$"
          />

          <label htmlFor="prenom">prenom</label>
          <input
            type="text"
            name="prenom"
            required
            pattern="^([ \u00c0-\u01ffa-zA-Z'\-])+$"
          />

          <label htmlFor="prenom">Email</label>
          <input
            type="email"
            name="prenom"
            required
            pattern="^[A-Z-a-z-0-9.-_]+[@]{1}[A-Z-a-z-0-9.-_]+[.]{1}[a-z]{2,10}$"
          />
          <textarea className="textareaContact" cols="50" rows="8"></textarea>

          <button type="submit" className="submit">
            <div>
              <span>Envoyer</span>
              <BiMailSend />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
