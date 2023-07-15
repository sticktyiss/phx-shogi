import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Header.module.css";
import logo from "../images/phxshogi-logo.png";

const Header = () => {
  const styleActiveLink = ({ isActive }) => {
    return {
      color: isActive ? "#d04646" : "#463d35", //TODO: Style this out
    };
  };

  const scroll = () => window.scrollTo(0, 0);

  return (
    <header>
      <div>
        <img src={logo} alt="Logo" />
        <h1>Phoenix Shogi</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink style={styleActiveLink} to="/" onClick={scroll}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={styleActiveLink} to="news" onClick={scroll}>
              News
            </NavLink>
          </li>
          <li>
            <NavLink style={styleActiveLink} to="learn" onClick={scroll}>
              Learn
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
