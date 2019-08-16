import React from 'react';
import { Link } from 'react-router-dom';

const signupForm = () => (
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
        <div className="user form-users visible nav-link">Staff Login</div>
        <div className="user form-users visible nav-link">Admin</div>
      </div>
    </nav>

    <div>
      <form className="visible" id="signup-form">
        <h3 id="form-text">Create Your Account</h3>
        <input id="firstname" type="text" name="" placeholder="First name" />
        <input id="lastname" type="text" name="" placeholder="Last name" />
        <input id="email" type="email" name="" placeholder="Email address" />

        <select className="sel" id="type">
          <option>Client</option>
          <option>Staff</option>
        </select>

        <input id="password" type="password" name="" placeholder="Create password" />
        <input id="confirmPassword" type="password" name="" placeholder="Confirm password" />
        <input type="Submit" name="" id="submit" />

        <Link to="/login" className="linky">
          <div className="other"> Already have an account? Sign in</div>
        </Link>
      </form>
    </div>

    <div className="image-overlay" />
  </div>
);

export default signupForm;
