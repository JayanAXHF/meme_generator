import React from "react";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={require("./img/troll-face.png")} alt="" className="h-7 w-8" />
        <h1>Meme Generator</h1>
      </div>
      <div className="flex text-base text-white text-left div2">
        <h3>React Course Project 3</h3>
      </div>
    </nav>
  );
};

export default Navbar;
