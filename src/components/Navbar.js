import React from "react";
import "bulma/css/bulma.min.css";
import Form from "./Form";
import { Link } from "react-router-dom";

function Navbar() {
  const API_URL = process.env.REACT_APP_API_URL;

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/home">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
              alt="Logo"
            />
          </a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link   style={{
                  background: "none",
                  color: "black",
                  border: "none",
                  textDecoration: "underline",
                  padding: "29px",
                }} to="/home">Home</Link>

            <Link
              style={{
                background: "none",
                color: "black",
                border: "none",
                textDecoration: "underline",
              }}
            >
              <Form></Form>
              </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <a
                className="navbar-link"
              >
                More 
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
