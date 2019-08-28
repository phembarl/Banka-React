import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const home = () => (
  <div id="home">
    <nav className="homeNavbar">
      <Link to="/" className="linky">
        <a href="index.html" className="visible nav-2 nav-link brand linky">Banka</a>
      </Link>

      <div className="visible nav-link tog-btn">
        <span />
        <span />
        <span />
      </div>

      <div className="nav-items nav-right">
        <Link to="/login" className="linky">
          <div className="user2 visible nav-link">Login</div>
        </Link>

        <Link to="/signup" className="linky">
          <div className="user2 visible nav-link">Sign Up</div>
        </Link>
      </div>
    </nav>

    <div id="hello" className="visible">
      <h2>Hello there!</h2>
      <h3>Ready to begin your journey with Banka? Of course you are!</h3>
    </div>

    <div id="aboutDiv">
      <div id="about" className="visible">
        <h2 className="sub-topic">About Banka</h2>
        <hr className="abouthr" />

        <div className="lorem">
          <p>
            Banka is a light-weight core banking application
            that powers banking operations like account
            creation, customer deposit and withdrawals.
          </p>

          <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Soluta consequuntur assumenda, adcumque architecto
              laudantium eum neque voluptatibus corporis.
              Hic possimus reprehenderit similique error voluptatibus sit aspernatur!
            <Link to="/signup" className="linky home-link">
              <div className="other">{` ${'Get started'}`}</div>
            </Link>
          </p>
        </div>
      </div>
    </div>

    <div className="image-overlay" />
  </div>
);

export default home;
