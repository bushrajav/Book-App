import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useLocalState } from "./useLocalStorage";
import SignUp from "./SignUp";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [jwt, setJwt] = useLocalState("", "jwt");
  const history = useHistory();
  const api = "/api/auth/signin";
  const sendLoginRequest = () => {
    // console.log("I am sending login request");

    const reqBody = {
      username,
      password,
    };

    fetch(api, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(reqBody),
    })
      .then((response) => Promise.all([response.json(), response.headers]))
      .then(([body, headers]) => {
        setJwt(headers.get("authorization"));
        history.pushState("/");
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://thumbs.dreamstime.com/b/green-tree-logo-design-simple-vector-tree-icon-green-tree-logo-design-white-background-124365698.jpg"
          alt=""
        ></img>
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h4>Email</h4>
          <input
            type="email"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <h4>Password</h4>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            className="login__signInButton"
            type="button"
            onClick={(e) => sendLoginRequest()}
          >
            Sign In
          </button>
          <p>Agree to Codeverse Terms and Conditions</p>
          {/* <button className="login__registerButton">Create Account</button> */}
          <Link to="/SignUp" className="login__registerButton">
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
