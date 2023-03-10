import React from "react";
import "./Player.css";
import Sidebar from "../Sidebar/Sidebar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import spotify from "spotify-web-api-js";

function Player() {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>

      <Footer />
    </div>
  );
}

export default Player;
