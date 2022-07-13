import React from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import { BrowserRouter as Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section id="nav-bar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <IconContext.Provider
            value={{
              color: "#fff",
              fontSize: "30px !important",
              className: "global-class-name",
            }}
          >
            <div>
              <FaBars />
            </div>
          </IconContext.Provider>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Create&Inspire
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
