import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/authContext";
import "./css/Auth.css";
import success from "../images/shogi-grab-pieces.gif";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [cPassword, setCPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const wins = 0;
  const losses = 0;
  const draws = 0;
  const [register, setRegister] = useState(false);

  const authCtx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitHandler called");

    const body = {
      username,
      email,
      password,
      firstname,
      lastname,
      wins,
      losses,
      draws,
    };

    let gif = document.getElementById('loader');
    let mainSec = document.getElementById('auth');

    axios
      .post(register ? "/api/register" : "/api/login", body)
      .then(({ data }) => {
        console.log("AFTER AUTH", data);
        //TODO: Finish gif loading sequence
        register? gif.classList = "hidden" : gif.classList = "";
        mainSec.style.padding = '10px';
        setTimeout(() => {
          authCtx.login(data.token, data.exp, data.userId);
        }, (register ? 0 : 4000));
      })
      .catch((theseHands) => {
        console.log("error with registering/logging in", theseHands);
        setPassword("");
        // setCPassword("");
        setUsername("");
      });
  };

  return (
    <main id="auth">
      <span id="loader" className="hidden">
        {/*TODO: FIXME:*/}
        <h1>Logging in... Grab Your Pieces</h1>
        <img src={success} alt="Loaded in successfully..." />
      </span>
      <h1>Welcome</h1>
      <h2>
        {!register
          ? "Please login to view the full site."
          : "Please register to access the full site."}
      </h2>
      <form className="form auth-form" onSubmit={submitHandler}>
        {register ? (
          <div>
            <label>First name:</label>
            <input
              className="form-input"
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <br />
            <label>Last name:</label>
            <input
              className="form-input"
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <br />
            <label>Email:</label>
            <input
              className="form-input"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Username:</label>
            <input
              className="form-input"
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label>Password:</label>
            <input
              className="form-input"
              type="text"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <input
              className="form-input"
              type="password"
              placeholder="Confirm Password"
              value={cPassword}
              required
              onChange={(e) => setCPassword(e.target.value)}
            /> */}
          </div>
        ) : (
          <div>
            <label>Username:</label>
            <input
              className="form-input"
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label>Password:</label>
            <input
              className="form-input"
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        )}
        <button className="form-btn">{register ? `Sign up` : `Login`}</button>
      </form>
      <button className="form-btn" onClick={() => setRegister(!register)}>
        Need to <span>{register ? `login` : `sign up`}</span>?
      </button>
    </main>
  );
};

export default Auth;
