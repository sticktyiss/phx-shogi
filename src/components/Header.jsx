import React from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../store/authContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import './css/Header.module.css'
import logo from '../images/phxshogi-logo.png'

// import logo from '...'

const Header = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const styleActiveLink = ({ isActive }) => {
    return {
      color: isActive ? "#d04646" : "#463d35", //TODO: Style this out
    };
  };

  const scroll = () => window.scrollTo(0,0)

  return (
    <header>
      <img src={logo} alt="Logo" />
      <h1>Phoenix Shogi</h1>
      <nav>
        {authCtx.token ? (
          <ul>
            <li>
              <NavLink style={styleActiveLink} to="/" onClick={scroll}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink style={styleActiveLink} to="learn" onClick={scroll}>
                Learn
              </NavLink>
            </li>
            <li>
              <NavLink style={styleActiveLink} to="posts" onClick={scroll}>
                Forum
              </NavLink>
            </li>
            <li>
              <NavLink style={styleActiveLink} to="profile" onClick={scroll}>
                Profile
              </NavLink>
            </li>
            <li>
              <button
                className="logout-btn"
                onClick={() => {
                  authCtx.logout();
                  navigate("/");
                  scroll();
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <NavLink style={styleActiveLink} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink style={styleActiveLink} to="learn">
                Learn
              </NavLink>
            </li>
            <li>
              <NavLink style={styleActiveLink} to="auth">
                Login
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
