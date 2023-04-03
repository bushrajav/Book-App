import React from "react";
// import "./Signup.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useLocalState } from "./useLocalStorage";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [jwt, setJwt] = useLocalState("", "jwt");
  const history = useHistory();
  const api = "/api/auth/signup";
  const sendSignupRequest = () => {
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
    <div className="signup">
      <Link to="/">
        <img
          className="signup__logo"
          src="https://thumbs.dreamstime.com/b/green-tree-logo-design-simple-vector-tree-icon-green-tree-logo-design-white-background-124365698.jpg"
          alt=""
        ></img>
      </Link>

      <div className="signup__container">
        <h1>Create Account</h1>
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
            className="signup__createButton"
            type="button"
            onClick={(e) => sendSignupRequest()}
          >
            Create Account
          </button>
          <p>Agree to Codeverse Terms and Conditions</p>
          <button className="signup__loginButton">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
