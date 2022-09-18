import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <span>
        <ArrowBackIosIcon className="menu1" />
      </span>
      <span className="play">Palying Now</span>
      <span>
      <Link to="/viewmusic"><MenuIcon className="menu2" /></Link>
      </span>
    </div>
  );
};

export default Header;
