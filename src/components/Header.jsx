import React from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../store/authContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// import logo from '...'

const Header = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const styleActiveLink = ({ isActive }) => {
    return {
      color: isActive ? "grey" : "", //TODO: Style this out
    };
  };

  return (
    <header>
      <h1>Phoenix Shogi</h1>
      <nav>
        {authCtx.token ? (
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
              <NavLink style={styleActiveLink} to="posts">
                Forum
              </NavLink>
            </li>
            <li>
              <NavLink style={styleActiveLink} to="profile">
                Profile
              </NavLink>
            </li>
            <li>
              <button
                className="logout-btn"
                onClick={() => {
                  authCtx.logout();
                  navigate("/");
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
