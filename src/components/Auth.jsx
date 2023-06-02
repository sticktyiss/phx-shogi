import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/authContext";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
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

    console.log("BODY", body);
    axios
      .post(register ? '/api/register' : '/api/login', body)
      .then(({ data }) => {
        console.log("AFTER AUTH", data);
        authCtx.login(data.token, data.exp, data.userId);
      })
      .catch((theseHands) => {
        console.log("error with registering/logging in", theseHands);
        setPassword("");
        setCPassword("");
        setUsername("");
        setEmail("");
        setFirstname("");
        setLastname("");
      });
  };

  return (
    <main id="Auth">
      <h1>Welcome to Phoenix Shogi</h1>
      <form className="form auth-form" onSubmit={submitHandler}>
        {register ? (
          <div>
            <input
              className="form-input"
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="form-input"
              type="text"
              placeholder="First name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              className="form-input"
              type="text"
              placeholder="Last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <input
              className="form-input"
              type="text"
              placeholder="Username"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="form-input"
              type="password"
              placeholder="Confirm Password"
              value={cPassword}
              required
              onChange={(e) => setCPassword(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <input
              className="form-input"
              type="text"
              placeholder="Username"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        )}
        <button className="form-btn">{register ? `Sign up` : `Login`}</button>
      </form>
      <button className="form-btn" onClick={() => setRegister(!register)}>
        Need to <span>{register ? `Login` : `Sign up`}</span>?
      </button>
    </main>
  );
};

export default Auth;
