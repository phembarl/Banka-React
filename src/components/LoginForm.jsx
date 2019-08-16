import React from 'react';
import { Link } from 'react-router-dom';

const loginForm = () => (
  <div id="welcome">
    <nav className="navbar form-nav visible">
      <Link to="/" className="linky">
        <div className="visible nav nav-link brand form-brand">Banka</div>
      </Link>

      <div className="toggle-btn visible nav-link">
        <span className="tog" />
        <span className="tog" />
        <span className="tog" />
      </div>

      <div className="nav-items nav-right">
        <a href="#" className="user form-users visible nav-link">Staff Login</a>
        <a href="#" className="user form-users visible nav-link">Admin</a>
      </div>
    </nav>

    <div>
      <form className="visible" id="login-form">
        <h3 id="form-text">Sign In</h3>
        <input type="email" id="email" name="" placeholder="Email address" />
        <input type="password" id="password" name="" placeholder="Password" />
        <input type="Submit" name="" id="submit" />

        <Link to="/signup" className="linky">
          <div className="other">Don't have an account? Sign up</div>
        </Link>
      </form>
    </div>

    <div className="image-overlay" />
  </div>
);

export default loginForm;
