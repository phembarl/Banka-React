import React from 'react';
import { Link } from 'react-router-dom';

const landing = () => (
  <div id="indexWelcome">
    <nav className="indexNavbar">
      <div>
        <a href="Landing.jsx" className="visible nav nav-link brand">Banka</a>
      </div>

      <div className="visible nav-link tog-btn">
        <span />
        <span />
        <span />
      </div>

      <div className="nav-items nav-right">
        <a href="login.html" className="user visible nav-link">Login</a>
        <a href="signup.html" className="user visible nav-link">Sign Up</a>
      </div>
    </nav>

    <h1 className="visible desk">Welcome To Banka</h1>
    <h1 className="visible mob">
      Welcome
      <br />
      To
      <br />
      Banka
    </h1>

    <hr className="visible firsthr" />

    <p className="visible intro">
            Your successful transactions are only a few clicks away!
    </p>

    <Link to="/home" className="linky">
      <a id="btn" href="home.html" className="visible">Bank With Us</a>
    </Link>

    <div className="image-overlay" />
  </div>
);

export default landing;
