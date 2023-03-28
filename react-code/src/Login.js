import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
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
          <input type="text"></input>
          <h4>Password</h4>
          <input type="text"></input>
          <button className="login__signInButton">Sign In</button>
          <p>Agree to Codeverse Terms and Conditions</p>
          <button className="login__registerButton">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
