import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils.js";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header-style.scss";

export const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" title="logo"></Logo>
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        Shop
      </Link>
      <Link to="/contact" className="option">
        Contact
      </Link>

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link to="/signIn" className="option">
          Sign In
        </Link>
      )}
    </div>
  </div>
);
