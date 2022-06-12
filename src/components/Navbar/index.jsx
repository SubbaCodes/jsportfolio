import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./styles.scss";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [icon, setIcon] = useState(false);

  const toggleIcon = () => {
    setIcon(!icon);
  };

  return (
    <div className="nav container">
      <div className="logo">
        <Link to={"/"}>
          <img src={Logo} alt="" />
        </Link>
      </div>
      <ul className={`nav-menu ${icon ? "active" : ""}`}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/portfolio"}>Portfolio</Link>
        </li>
        <li>
          <Link to={"/skills"}>Skills</Link>
        </li>
        <li>
          <Link to={"/resume"}>Resume</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div className="nav-icon" onClick={toggleIcon}>
        {icon ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </div>
  );
};

export default Navbar;
