import { useState, useEffect } from "react";
import GamesList from "./GamesList";
import BrowseBanner from "./BrowseBanner";
import NavBar from "../layout/Nav.js";
function Browse() {
  return (
    <div className="page">
      <NavBar />
      <BrowseBanner />
      <h2>Game Collection</h2>
      <div className="games-container">
        <GamesList />
      </div>
    </div>
  );
}
export default Browse;
