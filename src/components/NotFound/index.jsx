import React from 'react';
import { Link } from 'react-router-dom';

const notFound = () => (
  <div id="indexWelcome">
    <nav className="indexNavbar">
      <Link to="/" className="linky">
        <div href="Landing.jsx" className="visible nav-2 nav-link brand">Banka</div>
      </Link>
    </nav>

    <h1 className="visible desk">Page Not Found</h1>
    <h1 className="visible mob">
      Page
      <br />
      Not
      <br />
      Bound
    </h1>

    <hr className="visible firsthr" />

    <Link to="/dashboard" className="linky">
      <div id="btn" className="visible">Go Home</div>
    </Link>

    <div className="image-overlay" />
  </div>
);

export default notFound;
