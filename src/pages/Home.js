import React from "react";
import HomeContent from "../components/HomeContent";
import CompetencesContent from "../components/CompetencesContent";
import PortfolioContent from "../components/PortfolioContent";
import ContactContent from "../components/ContactContent";

import Nav from "../components/Nav";

const Home = () => {
  return (
    <div id="homePage">
      <Nav />
      <main className="allContent">
        <div id="home">
          <HomeContent />
        </div>
        <div id="competences">
          <CompetencesContent />
        </div>
        <div id="portfolio">
          <PortfolioContent />
        </div>
        <div id="contact">
          <ContactContent />
        </div>
      </main>
    </div>
  );
};

export default Home;
